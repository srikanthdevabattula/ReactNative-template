import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-3xl font-semibold'>Srikanth </Text>
      <Link href='/Profile'>Go to Profile </Link>
      <StatusBar style="auto" />
    </View>
  );
}

