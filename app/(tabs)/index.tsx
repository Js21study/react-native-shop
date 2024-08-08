import { StyleSheet, StatusBar, ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#161622', // Tailwind's 'bg-primary'
    flex: 1,
  },
  scrollViewContent: {
    height: '100%',
  },
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16, // Tailwind's 'px-4'
  },
  logo: {
    width: 130,
    height: 84,
  },
  cards: {
    maxWidth: 380,
    width: '100%',
    height: 298,
  },
  textContainer: {
    position: 'relative',
    marginTop: 20, // Tailwind's 'mt-5'
  },
  titleText: {
    fontSize: 24, // Tailwind's 'text-3xl'
    color: '#FFFFFF', // Tailwind's 'text-white'
    fontWeight: 'bold', // Tailwind's 'font-bold'
    textAlign: 'center',
  },
  highlightedText: {
    color: '#E5E7EB', // Tailwind's 'text-secondary-200'
  },
  path: {
    width: 136,
    height: 15,
    position: 'absolute',
    bottom: -2,
    right: -8,
  },
  descriptionText: {
    fontSize: 14, // Tailwind's 'text-sm'
    color: '#F3F4F6', // Tailwind's 'text-gray-100'
    fontFamily: 'Poppins-Regular', // Tailwind's 'font-pregular'
    marginTop: 28, // Tailwind's 'mt-7'
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 28, // Tailwind's 'mt-7'
  },
});

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View>
          <Text>Hello World!</Text>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" />
    </SafeAreaView>
  );
}
