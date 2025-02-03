import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
 import ExternalLink from './ExternalLink';
 import { Colors } from 'react-native/Libraries/NewAppScreen';

 type Props = {
 color: string;
 route?: string;
 };

 const EditScreenInfo = (props: Props) => {
 const { color, route } = props;
 return (
 <View style={styles.container}>
     <View style={[styles.codeHighlightContainer, { backgroundColor: color }]}>
         <Text style={styles.codeHighlightText}>
             {route ? 'editScreenInfo' : 'EditScreenInfo' }()
         </Text>
     </View>
    <Text style={styles.getStartedText}>
     To share code between files in a React Native app, just use import statements.
     {`\n`} <Text style={{ fontWeight: 'bold' }}>{route}</Text>
 </Text>
     <View>
         <Text style={styles.getStartedText}>
             Click the link to go to the Expo Router docs:
         </Text>
          <ExternalLink href="https://expo.github.io/router/docs">
             Read the Expo Router docs
         </ExternalLink>
     </View>
 </View>
 );
 };
 

 const styles = StyleSheet.create({
 container: {
     alignItems: 'center',
     marginHorizontal: 50,
 },
 getStartedText: {
     fontSize: 17,
     lineHeight: 24,
      textAlign: 'center',
 },
 codeHighlightContainer: {
     backgroundColor: 'rgba(0,0,0,0.05)',
     borderRadius: 3,
     paddingHorizontal: 4,
 },
  codeHighlightText: {
     color: '#fff',
 },
 });

 export default EditScreenInfo;