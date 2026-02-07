import { FontAwesome } from '@expo/vector-icons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Stack, useLocalSearchParams } from 'expo-router';
import * as Speech from 'expo-speech';
import { useRef, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Services (même code qu'avant)
const MLKitService = {
    recognizeText: async (uri: string): Promise<string> => {
        // Simulé pour l'exemple - remplacer par vrai OCR
        return new Promise((resolve) => {
            setTimeout(() => resolve("ARRÊT INTERDIT"), 1500);
        });
    }
};

const TranslationService = {
    translate: async (text: string, target: string): Promise<string> => {
        // Simulé - remplacer par vrai API
        const dict: Record<string, Record<string, string>> = {
            'en': { 'ARRÊT INTERDIT': 'NO STOPPING' },
            'es': { 'ARRÊT INTERDIT': 'PROHIBIDO PARAR' },
            'de': { 'ARRÊT INTERDIT': 'HALTEN VERBOTEN' },
        };
        return dict[target]?.[text] || `[${text}]`;
    }
};

export default function CameraScreen() {
    const { lang } = useLocalSearchParams(); // ← Récupère param URL
    const targetLang = (lang as string) || 'en';

    const [permission, requestPermission] = useCameraPermissions();
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState<{
        original: string;
        translated: string;
    } | null>(null);

    const cameraRef = useRef<CameraView>(null);

    if (!permission) {
        return <View style={styles.container}><ActivityIndicator /></View>;
    }

    if (!permission.granted) {
        return (
            <View style={styles.permissionContainer}>
                <FontAwesome name="camera" size={64} color="#FF6B6B" />
                <Text style={styles.permissionText}>Accès caméra nécessaire</Text>
                <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
                    <Text style={styles.permissionButtonText}>Autoriser</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const takePicture = async () => {
        if (!cameraRef.current) return;

        try {
            setIsProcessing(true);
            setResult(null);

            const photo = await cameraRef.current.takePictureAsync({ quality: 0.8 });

            // OCR
            const text = await MLKitService.recognizeText(photo.uri);

            // Traduction
            const translated = await TranslationService.translate(text, targetLang);

            setResult({ original: text, translated });

            // TTS
            Speech.speak(translated, { language: targetLang });

        } catch (error) {
            Alert.alert("Erreur", "Impossible de traduire");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: `Traduire (${targetLang.toUpperCase()})`,
                    headerRight: () => (
                        <TouchableOpacity onPress={() => { }}>
                            <FontAwesome name="flash" size={24} color="#fff" style={{ marginRight: 15 }} />
                        </TouchableOpacity>
                    )
                }}
            />

            <CameraView
                style={styles.camera}
                ref={cameraRef}
                mode="picture"
                autofocus="on"
            >
                {/* Overlay de scan */}
                <View style={styles.scanOverlay}>
                    <View style={styles.scanFrame} />
                    <Text style={styles.scanText}>
                        Visez un panneau congolais
                    </Text>
                </View>

                {/* Bouton capture */}
                <View style={styles.controls}>
                    <TouchableOpacity
                        style={styles.captureButton}
                        onPress={takePicture}
                        disabled={isProcessing}
                    >
                        {isProcessing ? (
                            <ActivityIndicator color="#fff" size="large" />
                        ) : (
                            <View style={styles.captureInner} />
                        )}
                    </TouchableOpacity>
                </View>

                {/* Résultat */}
                {result && (
                    <View style={styles.resultCard}>
                        <View style={styles.resultHeader}>
                            <Text style={styles.resultLabel}>DÉTECTÉ (FR)</Text>
                            <TouchableOpacity onPress={() => Speech.speak(result.original, { language: 'fr' })}>
                                <FontAwesome name="volume-up" size={20} color="#FF6B6B" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.originalText}>{result.original}</Text>

                        <View style={styles.divider} />

                        <View style={styles.resultHeader}>
                            <Text style={styles.resultLabel}>TRADUCTION ({targetLang.toUpperCase()})</Text>
                            <TouchableOpacity onPress={() => Speech.speak(result.translated, { language: targetLang })}>
                                <FontAwesome name="volume-up" size={20} color="#4CAF50" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.translatedText}>{result.translated}</Text>
                    </View>
                )}
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    camera: { flex: 1 },
    permissionContainer: {
        flex: 1,
        backgroundColor: '#1a1a2e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    permissionText: {
        color: '#fff',
        fontSize: 18,
        marginTop: 20,
        marginBottom: 20,
    },
    permissionButton: {
        backgroundColor: '#FF6B6B',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 25,
    },
    permissionButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    scanOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scanFrame: {
        width: 280,
        height: 180,
        borderWidth: 2,
        borderColor: '#FF6B6B',
        borderRadius: 20,
        backgroundColor: 'transparent',
        borderStyle: 'dashed',
    },
    scanText: {
        color: '#fff',
        marginTop: 20,
        fontSize: 16,
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    controls: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    captureButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: '#fff',
    },
    captureInner: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#FF6B6B',
    },
    resultCard: {
        position: 'absolute',
        bottom: 150,
        left: 20,
        right: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
    },
    resultHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    resultLabel: {
        fontSize: 12,
        color: '#888',
        fontWeight: 'bold',
    },
    originalText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 15,
    },
    translatedText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1a1a2e',
    },
});