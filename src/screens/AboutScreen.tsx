import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Linking, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AboutScreen: React.FC = () => {
  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const [githubHovered, setGithubHovered] = useState(false);

  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/richard-roque-silva/');
  };

  const openGitHub = () => {
    Linking.openURL('https://github.com/RichardRoqueSilva');
  };

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
          <View style={styles.buttonContainer}>
          <Pressable
          style={({ hovered }) => [
            styles.button,
            { backgroundColor: hovered ? '#5a3220' : '#8B4513' }
          ]}
          onHoverIn={() => setLinkedinHovered(true)}
          onHoverOut={() => setLinkedinHovered(false)}
          onPress={openLinkedIn}
          >
          <Icon name="linkedin" size={20} color="white" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>LinkedIn</Text>
          </Pressable>
          <Pressable
            style={({ hovered }) => [
              styles.button,
              { backgroundColor: hovered ? '#5a3220' : '#8B4513' }
            ]}
            onHoverIn={() => setGithubHovered(true)}
            onHoverOut={() => setGithubHovered(false)}
            onPress={openGitHub}
          >
            <Icon name="github" size={20} color="white" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>GitHub</Text>
          </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D2B48C',
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
    paddingHorizontal: 30,
  },
  textContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 400 * 0.8,
    height: 400 * 0.8,
  },
  description: {
    textAlign: 'center',
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
    fontWeight: 'bold',
    color: '#8B4513',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  buttonIcon: {},
});

export default AboutScreen;
