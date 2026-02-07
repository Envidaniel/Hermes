import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          backgroundColor: '#1a1a2e',
          borderTopColor: '#0f3460',
        },
        headerStyle: { backgroundColor: '#1a1a2e' },
        headerTintColor: '#fff',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="camera"
        options={{
          title: 'Traduire',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="camera" size={24} color={color} />
          ),
          // Tab du milieu plus gros
          tabBarItemStyle: {
            marginTop: -10,
            backgroundColor: '#FF6B6B',
            borderRadius: 30,
            height: 60,
            width: 60,
          },
          tabBarActiveTintColor: '#fff',
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: 'Historique',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="history" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="setting"
        options={{
          title: 'Paramètres',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}