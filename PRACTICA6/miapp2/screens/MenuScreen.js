/*Zona1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAereaScreen from './SafeAereaScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import ModalScreen from './ModalScreen';
/*Zona2: Main - Hogar de los componentes */
export default function MenuScreen() {
     const [screen,setScreen] = useState('menu');

     switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>;   
        case 'safearea':
            return <SafeAereaScreen/>;
        case 'pressable':
            return <PressableScreen/>;
        case 'textInput':
            return <TextInputScreen/>;
        case 'flatList':
            return <FlatListScreen/>;
        case 'imageBackground':
            return <ImageBackgroundScreen/>;
        case 'activityIndicator':
            return <ActivityIndicatorScreen/>;
        case 'modal':
            return <ModalScreen/>;
      
        case 'menu':
        default:

        return (
            <View style={styles.container}>
                <Text>Menú de practicas</Text>
                    <Button onPress={() => setScreen('tarjetas')} title="Ir a Tarjetas" />
                    <Button onPress={() => setScreen('safearea')} title="Ir a SafeArea" />
                    <Button onPress={() => setScreen('pressable')} title="Pressable & Switch" />
                    <Button onPress={() => setScreen('textInput')} title="TextInput & Alert" />
                    <Button onPress={() => setScreen('flatList')} title="FlatList & Section List" />
                    <Button onPress={() => setScreen('imageBackground')} title="ImageBackground & SplashScreen" /> 
                    <Button onPress={() => setScreen('activityIndicator')} title="ActivityIndicator, KeyboardAvoidingView" /> 
                    <Button onPress={() => setScreen('modal')} title="Modal & Bottom sheet" />           
                    <Button onPress={() => setScreen('menu')} title="Volver al menú" />
                    <StatusBar style="auto"/>


             </View>
        );
    }
}

/*Zona3: Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  

});
