import React, { useState, useEffect } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Pressable,
    FlatList,
    } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../types/task';
import { fetchTasks } from '../services/apiService';
import Toast from 'react-native-toast-message';

const TodoScreen: React.FC = () => {
    const [taskText, setTaskText] = useState('');
    const [tasks, setTasks] = useState<Task[]>([]);
    const [initialTasksLoaded, setInitialTasksLoaded] = useState(false);
    const [addBtnColor, setAddBtnColor] = useState("#008000");
    const [deleteBtnColor, setDeleteBtnColor] = useState("#A0522D");
    const [addBtnHovered, setAddBtnHovered] = useState(false);
    const [deleteBtnHovered, setDeleteBtnHovered] = useState(false);


    useEffect(() => {
        loadTasks();
        loadInitialTasks();
        }, []);

    const loadInitialTasks = async () => {
            if(initialTasksLoaded) return
            try {
            const apiTasks = await fetchTasks();
            setTasks((prevTasks) => {
                const uniqueTasks = apiTasks.filter((apiTask) => !prevTasks.some((task)=> task.id === apiTask.id))
                setInitialTasksLoaded(true)
            return [...prevTasks,...uniqueTasks]
            });
        } catch (error) {
        Toast.show({
            type: 'error',
            text1: 'Erro',
            text2: 'Falha ao carregar tarefas iniciais da API',
        });
            }
        };


    const loadTasks = async () => {
        try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
        } catch (error) {
        Toast.show({
            type: 'error',
            text1: 'Erro',
            text2: 'Falha ao carregar tarefas',
        });
        }
    };

    const saveTasks = async (tasks: Task[]) => {
            try {
            await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
            } catch (error) {
                Toast.show({
                    type: 'error',
                    text1: 'Erro',
                    text2: 'Falha ao salvar tarefas',
                });
            }
        };

        const addTask = () => {
        if (taskText.trim() === '') {
            Toast.show({
                type: 'info',
                text1: 'Aviso',
                text2: 'Favor insira uma tarefa!',
              });
            return;
        }

        const taskAlreadyExists = tasks.some(
            (task) => task.text.toLowerCase() === taskText.toLowerCase()
        );

        if (taskAlreadyExists) {
            Toast.show({
                type: 'info',
                text1: 'Aviso',
                text2: 'Não é possível adicionar duas tarefas com o mesmo nome!',
            });
            return;
        }

        const newTask = { id: String(Date.now()), text: taskText, completed: false };
        setTasks((prevTasks) => [...prevTasks, newTask]);
        saveTasks([...tasks,newTask]);
        setTaskText('');
    };


    const toggleTask = (id: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
            )
        );

        saveTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
    };

    const removeTask = (id: string) => {
        setTasks((prevTasks) => {
        const updatedTasks = prevTasks.filter((task) => task.id !== id);
            saveTasks(updatedTasks)
            return updatedTasks
        });
    };

    const renderItem = ({ item }: { item: Task }) => (
        <View style={styles.taskItem}>
        <Pressable onPress={() => toggleTask(item.id)} style={styles.taskCheckbox}>
            <View style={[styles.checkbox, item.completed ? styles.checkboxChecked : null]}/>
        </Pressable>
        <Text style={[styles.taskText, item.completed ? styles.taskTextCompleted : null]}>{item.text}</Text>
        <Pressable
        style={({ hovered }) => [styles.deleteButton, { backgroundColor: hovered ? '#7a3a20' : deleteBtnColor }]}
         onHoverIn={() => setDeleteBtnHovered(true)}
         onHoverOut={() => setDeleteBtnHovered(false)}
        onPress={() => removeTask(item.id)}
        >
            <Text style={styles.deleteButtonText}>Remover</Text>
        </Pressable>
        </View>
    );

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Lista de Tarefas</Text>
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="Adicionar tarefa"
            value={taskText}
            onChangeText={(text) => setTaskText(text)}
            />
            <Pressable
            style={({ hovered }) => [styles.addButton, { backgroundColor: hovered ? '#006400' : addBtnColor }, styles.addButtonAligned]}
            onHoverIn={() => setAddBtnHovered(true)}
            onHoverOut={() => setAddBtnHovered(false)}
            onPress={addTask}
            >
                <Text style={styles.addButtonText}>Adicionar</Text>
            </Pressable>
        </View>
        <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
        <Toast />
        </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        alignItems: 'center',
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#A0522D'

    },
    input: {
        flex: 1, 
        borderWidth: 1,
        borderColor: '#A0522D',
        padding: 10,
        marginRight: 10,
    },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        gap: 10,
    },
    taskCheckbox:{
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkbox: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: 'gray',
    },
    checkboxChecked: {
        backgroundColor: 'green',
    },
    taskText: {
        flex: 1,
        fontSize: 16,
    },
    taskTextCompleted: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    deleteButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

        addButton: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    addButtonAligned:{
      alignSelf: 'stretch'
    }

    });

    export default TodoScreen;