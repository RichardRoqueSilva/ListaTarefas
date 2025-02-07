import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AboutScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={[styles.description, styles.firstParagraph]}>
              Organize sua vida com facilidade! Este aplicativo de lista de tarefas é a ferramenta perfeita para adicionar, remover e acompanhar suas atividades diárias.
            </Text>
            <Text style={[styles.description, styles.secondParagraph]}>
              Mantenha-se <Text style={styles.highlightedText}>produtivo</Text> e <Text style={styles.highlightedText}>eficiente</Text>, simplificando sua rotina e focando no que realmente importa.
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Permite que o conteúdo cresça e role
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D2B48C', // Marrom claro (Tan)
  },
  contentContainer: {
    flexDirection: 'column', // Alterado para 'column'
    alignItems: 'center',
    justifyContent: 'flex-start', // Alterado para 'flex-start'
    marginTop: 40,
    paddingHorizontal: 30,
  },
  textContainer: {
    width: '100%', // Ocupa a largura total
    marginBottom: 20, // Adiciona espaço abaixo do texto
    alignItems: 'center',  // Centraliza o texto
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
  },
  description: {
    textAlign: 'center',   //Centraliza o texto
    lineHeight: 40,
    marginBottom: 10,
    marginTop: 1,
  },
  firstParagraph: {
    fontSize: 22,
  },
  secondParagraph: {
    fontSize: 32,
  },
  highlightedText: {
    fontWeight: 'bold', // Negrito
    color: '#8B4513', // Marrom escuro (Chocolate)
  },
});

export default AboutScreen;