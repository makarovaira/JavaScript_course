import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

// Определяем интерфейс для пропсов
interface SectionProps {
  title: string;
  text: string;
  imageUrl: string;
}

// Кастомный компонент секции с типизацией пропсов
const CustomSection: React.FC<SectionProps> = ({ title, text, imageUrl }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export function HomeScreen2() {
  // Массив данных для секций
  const sections: SectionProps[] = [
    {
      title: 'Блок 1',
      text: 'Это текст для блока 1.',
      imageUrl: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=Block+1',
    },
    {
      title: 'Блок 2',
      text: 'Это текст для блока 2.',
      imageUrl: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Block+2',
    },
    {
      title: 'Блок 3',
      text: 'Это текст для блока 3.',
      imageUrl: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Block+3',
    },
    {
      title: 'Блок 4',
      text: 'Это текст для блока 4.',
      imageUrl: 'https://via.placeholder.com/150/FF33A1/FFFFFF?text=Block+4',
    },
    {
      title: 'Блок 5',
      text: 'Это текст для блока 5.',
      imageUrl: 'https://via.placeholder.com/150/A133FF/FFFFFF?text=Block+5',
    },
    {
      title: 'Блок 6',
      text: 'Это текст для блока 6.',
      imageUrl: 'https://via.placeholder.com/150/33FFA1/FFFFFF?text=Block+6',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Заголовок */}
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Кастомные Секции</Text>
      </View>

      {/* Генерация секций из массива */}
      {sections.map((section, index) => (
        <CustomSection
          key={index}
          title={section.title}
          text={section.text}
          imageUrl={section.imageUrl}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#1e90ff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  mainTitle: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 15,
    backgroundColor: '#f9c2ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});

