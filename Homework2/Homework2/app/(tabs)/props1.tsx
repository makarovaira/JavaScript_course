import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export function HomeScreen1() {
  return (
    <ScrollView style={styles.container}>
      {/* Заголовок */}
      <View style={styles.header}>
        <Text style={styles.title}>Практика с компонентами React Native</Text>
      </View>

      {/* Секция 1 */}
      <View style={styles.section}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=1' }}
          style={styles.image}
        />
        <Text style={styles.text}>
          Это пример использования компонентов View, Text и Image. Секция 1.
        </Text>
      </View>

      {/* Секция 2 */}
      <View style={styles.section}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=2' }}
          style={styles.image}
        />
        <Text style={styles.text}>
          Это пример использования компонентов View, Text и Image. Секция 2.
        </Text>
      </View>

      {/* Секция 3 */}
      <View style={styles.section}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=3' }}
          style={styles.image}
        />
        <Text style={styles.text}>
          Это пример использования компонентов View, Text и Image. Секция 3.
        </Text>
      </View>

      {/* Секция 4 */}
      <View style={styles.section}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150/FFFF00/000000?text=4' }}
          style={styles.image}
        />
        <Text style={styles.text}>
          Это пример использования компонентов View, Text и Image. Секция 4.
        </Text>
      </View>

      {/* Секция 5 */}
      <View style={styles.section}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=5' }}
          style={styles.image}
        />
        <Text style={styles.text}>
          Это пример использования компонентов View, Text и Image. Секция 5.
        </Text>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    header: {
      backgroundColor: '#6200ee',
      padding: 10,
      borderRadius: 5,
    },
    title: {
      color: 'white',
      fontSize: 24,
      textAlign: 'center',
    },
    section: {
      marginVertical: 10,
      backgroundColor: '#f0f0f0',
      padding: 15,
      borderRadius: 10,
    },
    text: {
      fontSize: 16,
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 10,
      marginBottom: 10,
    },
  });

