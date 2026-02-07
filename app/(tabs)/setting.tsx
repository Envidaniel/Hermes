import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";



export default function SettingsScreen() {
    const [offlineMode, setofflineMode] = useState(true);
    const [autoSpeak, setAutoSpeak] = useState(true);




    return (
        <View style={styles.container}>
            <Text style={styles.title}>Paramètres</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Général</Text>

                <View style={styles.setting}>
                    <View style={styles.settingInfo}>
                        <MaterialIcons name="wifi" size={20} color="#FF6B6B" />
                        <View style={styles.settingText}>
                            <Text style={styles.settingLabel}>Mode hors-ligne</Text>
                            <Text style={styles.settingDesc}>Télécharger les langues</Text>
                        </View>
                    </View>
                    <Switch
                        value={offlineMode}
                        onValueChange={setofflineMode}
                        trackColor={{ false: '#333', true: '#FF6B6B' }}
                    />
                </View>

                <View style={styles.setting}>
                    <View style={styles.settingInfo}>
                        <FontAwesome name="volume-up" size={20} color="#FF6B6B" />
                        <View style={styles.settingText}>
                            <Text style={styles.settingLabel}>Lecture auto</Text>
                            <Text style={styles.settingDesc}>Lire La tranduction automatiquement</Text>
                        </View>
                    </View>
                    <Switch
                        value={autoSpeak}
                        onValueChange={setAutoSpeak}
                        trackColor={{ false: '#333', true: '#FF6B6B' }}
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>À propos</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Speed  v1.0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Signaler un problème</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a2e',
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        color: '#FF6B6B',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 15,
        textTransform: 'uppercase',
    },
    setting: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#16213e',
        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
    },
    settingInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    settingText: {
        marginLeft: 15,
    },
    settingLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    settingDesc: {
        color: '#888',
        fontSize: 12,
        marginTop: 2,
    },
    button: {
        backgroundColor: '#16213e',
        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});