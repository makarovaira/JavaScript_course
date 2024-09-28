import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

// Определяем интерфейс для пропсов
interface SectionProps {
  title: string;
  text: string;
  imageUrl: string;
  backgroundColor: string;
}

// Кастомный компонент секции с типизацией пропсов
const CustomStyledSection: React.FC<SectionProps> = ({ title, text, imageUrl, backgroundColor }) => {
  return (
    <View style={[styles.section, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export function HomeScreen3() {
  // Массив данных для секций с разными цветами фона
  const styledSections: SectionProps[] = [
    {
      title: 'Красный блок',
      text: 'Этот блок имеет красный фон.',
      imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Red',
      backgroundColor: '#ff4d4d',
    },
    {
      title: 'Зеленый блок',
      text: 'Этот блок имеет зеленый фон.',
      imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Green',
      backgroundColor: '#4dff4d',
    },
    {
      title: 'Синий блок',
      text: 'Этот блок имеет синий фон.',
      imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Blue',
      backgroundColor: '#4d4dff',
    },
    {
      title: 'Оранжевый блок',
      text: 'Этот блок имеет оранжевый фон.',
      imageUrl: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Orange',
      backgroundColor: '#ffa500',
    },
    {
      title: 'Фиолетовый блок',
      text: 'Этот блок имеет фиолетовый фон.',
      imageUrl: 'https://via.placeholder.com/150/800080/FFFFFF?text=Purple',
      backgroundColor: '#800080',
    },
    {
      title: 'Бирюзовый блок',
      text: 'Этот блок имеет бирюзовый фон.',
      imageUrl: 'https://via.placeholder.com/150/40E0D0/FFFFFF?text=Turquoise',
      backgroundColor: '#40e0d0',
    },
    {
      title: 'Желтый блок',
      text: 'Этот блок имеет желтый фон.',
      imageUrl: 'https://via.placeholder.com/150/FFFF00/000000?text=Yellow',
      backgroundColor: '#ffff4d',
    },
    {
      title: 'Розовый блок',
      text: 'Этот блок имеет розовый фон.',
      imageUrl: 'https://via.placeholder.com/150/FFC0CB/FFFFFF?text=Pink',
      backgroundColor: '#ffb6c1',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Заголовок */}
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Секции с Разными Фонами</Text>
      </View>

      {/* Генерация секций из массива */}
      {styledSections.map((section, index) => (
        <CustomStyledSection
          key={index}
          title={section.title}
          text={section.text}
          imageUrl={section.imageUrl}
          backgroundColor={section.backgroundColor}
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
    backgroundColor: '#333333',
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
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
});
