import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutScreen: React.FC = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D2B48C', // Marrom claro (Tan)
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 30,
  },
  textContainer: {
    flex: 1,
    marginRight: 20,
    alignItems: 'flex-start',
    maxWidth: '50%',
    paddingLeft: 40,
    marginTop: 30,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginRight: 200, // Adiciona espaçamento à direita
  },
  image: {
    width: 400,
    height: 400,
  },
  description: {
    textAlign: 'left',
    lineHeight: 40,
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 200,
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