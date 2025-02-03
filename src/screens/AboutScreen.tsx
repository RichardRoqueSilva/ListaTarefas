import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descrição</Text>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Este é um aplicativo simples de lista de tarefas, onde você pode adicionar, remover e dar check nas tarefas diárias realizadas. Excelente para se organizar diariamente em seus afazeres, sendo mais produtivo e eficiente.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/agenda.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  textContainer: {
    maxWidth: '50%', // Define a largura máxima do container de texto
    alignItems: 'center',
    top: 50,
    bottom: 50
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    top: 20
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 22,
    bottom: 50,
   
  },
});

export default AboutScreen;