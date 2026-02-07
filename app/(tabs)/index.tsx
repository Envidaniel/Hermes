import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface Language {
    code: string;
    name: string;
    flag: string;
    welcome: string;
}

const LANGUAGES: Language[] = [
    { code: 'en', name: 'English', flag: '🇬🇧', welcome: 'Welcome to Congo!' },
    { code: 'es', name: 'Español', flag: '🇪🇸', welcome: '¡Bienvenido al Congo!' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪', welcome: 'Willkommen im Kongo!' },
    { code: 'pt', name: 'Português', flag: '🇵🇹', welcome: 'Bem-vindo ao Congo!' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹', welcome: 'Benvenuto in Congo!' },
    { code: 'zh', name: '中文', flag: '🇨🇳', welcome: '欢迎来到刚果！' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', welcome: 'مرحبا بكم في الكونغو!' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', welcome: 'कांगो में आपका स्वागत है!' },
    { code: 'ja', name: '日本語', flag: '🇯🇵', welcome: 'コンゴへようこそ！' },
]


export default function HomeScreen() {
    const selectLanguage = (langCode: string) => {

        // navigation avec parametres

        router.push({
            pathname: '/camera',
            params: { lang: langCode }
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>🌍 TransCongo</Text>
                <Text style={styles.subtitle}>Congo Edition</Text>
                <Text style={styles.description}>
                    Pointez votre caméra sur un panneau pour le traduire instantanément
                </Text>
            </View>

            <Text style={styles.sectionTitle}>Choisissez votre langue :</Text>

            <FlatList
                data={LANGUAGES}
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.langCard}
                        onPress={() => selectLanguage(item.code)}
                    >
                        <Text style={styles.flag}>{item.flag}</Text>
                        <View style={styles.langInfo}>
                            <Text style={styles.langName}>{item.name}</Text>
                            <Text style={styles.welcome}>{item.welcome}</Text>
                        </View>
                        <FontAwesome name="chevron-right" size={20} color="#FF6B6B" />
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
            />

            <View style={styles.offlineBadge}>
                <MaterialIcons name="wifi" size={16} color="#4CAF50" />
                <Text style={styles.offlineText}>Mode hors-ligne disponible</Text>
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
    header: {
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 20,
    },
    logo: {
        fontSize: 42,
        marginBottom: 5,
        color: 'white'
    },
    subtitle: {
        color: '#FF6B6B',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        color: '#aaa',
        textAlign: 'center',
        fontSize: 14,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    langCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#16213e',
        padding: 15,
        marginBottom: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#0f3460',
    },
    flag: {
        fontSize: 32,
        marginRight: 15,
    },
    langInfo: {
        flex: 1,
    },
    langName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    welcome: {
        color: '#888',
        fontSize: 12,
        marginTop: 2,
    },
    offlineBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        padding: 10,
    },
    offlineText: {
        color: '#4CAF50',
        marginLeft: 8,
        fontSize: 12,
    },
})