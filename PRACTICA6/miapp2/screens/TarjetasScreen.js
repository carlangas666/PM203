/*Zona1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import {Perfil} from '../components/Perfil';
/*Zona2: Main - Hogar de los componentes */
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>

      <Perfil estiloExt={styles.tarjetaRoja}
      nombre="Carlos Alexis" 
      carrera="Ingeniería en Sistemas Computacionales" 
      materia="Programación Móvil" 
      cuatri="9no" />
      <Perfil estiloExt={styles.tarjetaVerde}
      nombre="Hernández Ortega" 
      carrera="Ingeniería en Sistemas Computacionales" 
      materia="Programación Móvil" 
      cuatri="9no" />
      <Perfil estiloExt={styles.tarjetaRoja}
      nombre="Tarjeta 3 " 
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
    alignItems: 'space-evenly',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tarjetaRoja: {backgroundColor: '#ff6b6b'},
  tarjetaVerde: {backgroundColor: '#4ecd56'},

});
