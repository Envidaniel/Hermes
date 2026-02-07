# Hermes

Hermes - Instant Sign Translation for Tourists

React Native (Expo) mobile app with on-device OCR and multilingual translation.
Designed for travelers in Congo, it captures signs (French, Lingala, Kikongo) and provides instant translation in 10+ languages.

🚀 100% offline capable | 🤖 ML Kit Vision | 🎨 Expo Router | 🗣️ Integrated TTS

#react-native #expo #ocr #translation #congo #tourism #offline-first #ml-kit
# 🌍 Hermes
&lt;div align="center"&gt;

![Expo](https://img.shields.io/badge/Expo-50.0.0-blue?logo=expo)
![React Native](https://img.shields.io/badge/React%20Native-0.73-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

**Instant translation of signs for tourists in Congo**

[📱 View demo](#) • [🚀 Installation](#installation) • [📖 Documentation](#documentation)

&lt;img src="https://via.placeholder.com/300x600/1a1a2e/FF6B6B?text=App+Screenshot" width="250" /&gt;
&lt;img src="https://via.placeholder.com/300x600/1a1a2e/4CAF50?text=Camera+View" width="250" /&gt;

&lt;/div&gt;

---

## ✨ Features

### 🎯 Core
- **📷 Intelligent OCR** ​​- Text recognition on signs via ML Kit (on-device)
- **🌐 Translation 10+ languages** - English, Spanish, German, Portuguese, Italian, Chinese, Arabic, Hindi, Japanese, Korean
- **🔊 Text-to-speech** - Audio playback of translations (TTS)
- **📴 Offline mode** - Works without internet thanks to embedded models

### 🎨 UX/UI
- **Smooth navigation** - Expo Router with native animations
- **Dark interface** - Optimized for outdoor lighting (safari, street)
- **Haptic feedback** - Vibrations during capture
- **Local history** - Saves recent translations

### 🇨🇩 Congo specific
- **Multi-language detection** - French, Lingala, Kikongo, Swahili
- **Survival Dictionary** - 500+ Pre-loaded Common Signs
- **Optimized for Low Networks** - Image Compression, Offline Fallback

---

## 🏗️ Architecture

---

## 🚀 Installation

### Prerequisites
- Node.js 18+
- Expo CLI
- Android Studio (Android) or Xcode (iOS)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/signlingo-congo.git
cd signlingo-congo

# 2. Install dependencies
npm install

# 3. Start the development server
npx expo start

# 4. Scan the QR code with Expo Go (Android/iOS)
# or press 'a' for Android emulator / 'i' for iOS