import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";




export default function NotFoundScreen() {
    return (
        <View style={styles.container}>
            <FontAwesome name="map-signs" size={80} color='#FF6B6B' />
            <Text style={styles.title}>Page non trouvée</Text>
            <Text style={styles.subtitle}>Même nous avons besoin d'une traduction !</Text>

            <TouchableOpacity style={styles.button} onPress={() => router.replace('/')}>
                <Text style={styles.buttonText}>Retour à l'accueil</Text>
            </TouchableOpacity>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a2e',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
    },
    subtitle: {
        color: '#888',
        marginTop: 10,
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#FF6B6B',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});