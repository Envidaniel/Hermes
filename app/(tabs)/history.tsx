import { FontAwesome } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, View } from 'react-native';


interface History {
    id: string;
    original: string;
    translated: string;
    lang: string;
    date: string;
}

// Mock data - remplacer par AsyncStorage ou SQLite
const HISTORY: History[] = [
    { id: '1', original: 'HÔPITAL', translated: 'HOSPITAL', lang: 'en', date: '2024-01-15' },
    { id: '2', original: 'PHARMACIE', translated: 'FARMACIA', lang: 'es', date: '2024-01-15' },
    { id: '3', original: 'GARE CENTRALE', translated: 'CENTRAL STATION', lang: 'en', date: '2024-01-14' },
];

export default function HistoryScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Historique</Text>

            <FlatList
                data={HISTORY}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.historyItem}>
                        <View style={styles.langBadge}>
                            <Text style={styles.langText}>{item.lang.toUpperCase()}</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.original}>{item.original}</Text>
                            <Text style={styles.translated}>{item.translated}</Text>
                        </View>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                )}
                ListEmptyComponent={
                    <View style={styles.empty}>
                        <FontAwesome name="history" size={64} color="#333" />
                        <Text style={styles.emptyText}>Aucune traduction encore</Text>
                    </View>
                }
            />
        </View>
    );
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
        marginBottom: 20,
    },
    historyItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#16213e',
        padding: 15,
        marginBottom: 10,
        borderRadius: 12,
    },
    langBadge: {
        backgroundColor: '#FF6B6B',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
        marginRight: 15,
    },
    langText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    content: {
        flex: 1,
    },
    original: {
        color: '#888',
        fontSize: 14,
    },
    translated: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 2,
    },
    date: {
        color: '#666',
        fontSize: 12,
    },
    empty: {
        alignItems: 'center',
        marginTop: 100,
    },
    emptyText: {
        color: '#666',
        marginTop: 20,
        fontSize: 16,
    },
});