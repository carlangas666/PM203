import  {StatusBar} from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, TextInput, Switch, Pressable, Alert, ScrollView, StyleSheet, Button, Platform } from 'react-native';


if (Platform.OS === 'web') {
    Alert.alert = (titular, mensaje) => {
        window.alert(titular + (mensaje ? '\n' + mensaje : ''));
    }
}

export default function RegistrarEventoScreen() {

    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');


    const [taller, setTaller] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [deporte, setDeporte] = useState(false);

    const registro = () => {
        if (!nombre || !carrera || !semestre) {
            Alert.alert('Faltan datos', 'Completa todos los campos');
            return;
        }
        if (!/^[0-9]+$/.test(semestre)) {
            Alert.alert('Semestre invalido', 'El semestre debe contener solo numeros');
            setSemestre('');
            return;
        }
        Alert.alert(
            "Registro enviado",
            `Nombre: ${nombre}
            Carrera: ${carrera}
            Semestre: ${semestre}
            
            Taller: ${taller ? 'Sí' : 'No'}
            Constancia: ${constancia ? 'Sí' : 'No'}
            Deportes: ${deporte ? 'Sí' : 'No'}
            `
        );
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formulario}>
                <Text style={styles.titulo}>Registrar Evento</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nombre completo"
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Carrera"
                    value={carrera}
                    onChangeText={setCarrera}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Semestre"
                    value={semestre}
                    onChangeText={setSemestre}
                    
                    
                />
                <Text style={styles.subtitulo}>Opciones</Text>

                <View style={styles.switchContainer}>
                    <Text>¿Asistira al taller?</Text>
                    <Switch
                    value={taller}
                    onValueChange={setTaller}
                    />
                </View>

                <View style={styles.switchContainer}>
                    <Text>¿Requiere constancia?</Text>
                    <Switch
                    value={constancia}
                    onValueChange={setConstancia}
                    />
                </View>

                <View style={styles.switchContainer}>
                    <Text>¿Participara en deportes?</Text>
                    <Switch
                    value={deporte}
                    onValueChange={setDeporte}
                    />
                </View>

                <Button
                    title="Enviar registro"
                    onPress={registro}
                    color={"#007bff"}
                />
                <StatusBar style='auto'>
                    
                </StatusBar>





            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    formulario: {
        width: "100%",
        maxWidth: 400,
    },
    titulo: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 25,
    },
    subtitulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        backgroundColor: "#fff",
    },
    switchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
});

    