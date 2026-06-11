/*Zona1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludos';
import {Saludo2} from './components/Saludo2';
import {Perfil} from './components/Perfil';
/*Zona2: Main - Hogar de los componentes */
export default function App() {
  return (
    <View style={styles.container}>

      <Perfil 
      nombre="Carlos Alexis Hernández Ortega" 
      carrera="Ingeniería en Sistemas Computacionales" 
      materia="Programación Móvil" 
      cuatri="9no" />

      <StatusBar style="auto" />
    </View>
  );
}

/*Zona3: Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
