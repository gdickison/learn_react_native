import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { Redirect, router } from 'expo-router';

import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView className="bg-gray-100 h-full" >
      <ScrollView contentContainerStyle={{ height: '100%'}} >
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.klogo}
            className="w-[175px] h-[84px]"
            resizeMode='contain'
          />
          <Image
            source={images.schoolOfAthens}
            className="max-w-[400px] w-full h-[300px]"
            resizeMode='contain'
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-primary font-bold text-center">
              Live Online Classical Education
            </Text>
            <Image
              source={images.path}
              className="w-[150px] h-[15px] absolute bottom-7 -right-3"
              resizeMode='contain'
            />
          </View>
          <Text className="mt-3">
            Empowering families by liberating teachers
          </Text>
          <CustomButton
            buttonText="Continue With Email"
            bgColor="#5e0be0"
            textColor={"gray-50"}
            handlePress={() => router.push('/sign-in')}
          />
        </View>
      </ScrollView>
      <StatusBar/>
    </SafeAreaView>
  );
}
