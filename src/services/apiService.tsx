import { Task } from '../types/task';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTasks = async (): Promise<Task[]> => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const initialTasks: Task[] = data.slice(0, 5).map((task: any) => ({
            id: String(task.id),
            text: task.title,
            completed: task.completed,
        }));
    
      return initialTasks
    } catch (error) {
    console.error("Error fetching tasks:", error);
        throw error;
    }
}