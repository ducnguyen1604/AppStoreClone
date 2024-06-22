import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { storeColors } from '../theme';

{/*
export default function GameCards({game}) {
    return (
        <View className="mr-4 relative">
            <Image source={game.image} className="w-80 h-60 rounded-3xl" />
            <View className="space-y-1">
                <Text className="text-xl font-bold text-gray-300">{game.title}</Text>
                <View className="flex-row items-center space-x-2">
                    <Text className="text-sm text-gray-300 font-semibold">{game.downloads} Downloads</Text>
                </View>
            </View>
       </View>
      
    )
}
*/}
export default function GameCard({game}) {
  return (
    <View className="mr-4 relative">
      <Image source={game.image} className="w-80 h-60 rounded-3xl"/>
      <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.6)']} className="absolute p-4 h-full w-full flex justify-between rounded-3xl">
        <View className="flex-row justify-end"></View>
        <View className="space-y-1">
            <Text className="text-xl font-bold text-gray-300">
                {game.title}
            </Text>
            <View className="flex-row items-center space-x-2">
                <Text className="text-sm text-gray-300 font-semibold">{game.downloads} Downloads</Text>
            </View>
        </View>
      </LinearGradient>
    </View>
  )
}