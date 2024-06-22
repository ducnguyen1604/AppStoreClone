import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import {ArrowDownTrayIcon, Bars3CenterLeftIcon, BellIcon} from 'react-native-heroicons/solid';
import { storeColors } from '../theme';
import GradientButton from '../components/gradientButton';
import GameCards from '../components/gameCards';

const categories = ['Action', 'Family', 'Puzzle', 'Adventure', 'Racing', 'Education', 'Others'];
const trending = [
  {
      
      id: 1,
      title: 'Goose Goose Duck',
      image: require('../assets/images/ggduck.jpg'),
      downloads: '10M',
      stars: 4.8
  },
  {
      id: 2,
      title: 'Free Fire',
      image: require('../assets/images/freeFire.png'),
      downloads: '20M',
      stars: 4.5
  },
  {
      id: 3,
      title: 'Frag',
      image: require('../assets/images/frag.png'),
      downloads: '80k',
      stars: 4.6
  },
  {
      id: 4,
      title: "Zooba Wildlife",
      image: require('../assets/images/zoobaGame.png'),
      downloads: '40k',
      stars: 3.5
  },
  {
      id: 5,
      title: "Subway Surfers",
      image: require('../assets/images/subway.png'),
      downloads: '100M',
      stars: 4.6
  },
];

const games = [
  {
      id: 1,
      title: 'Arena of Valor',
      image: require('../assets/images/images.jpeg'),
      downloads: '50M',
      stars: 4.6
},
  {
      id: 2,
      title: 'Shadow Fight',
      image: require('../assets/images/shadowFight.png'),
      downloads: '20M',
      stars: 4.5
},
  {
      id: 3,
      title: 'Frag',
      image: require('../assets/images/frag.png'),
      downloads: '80k',
      stars: 4.6
  },
  {
      id: 4,
      title: "Zooba Wildlife",
      image: require('../assets/images/zoobaGame.png'),
      downloads: '40k',
      stars: 3.5
  },
  {
      id: 4,
      title: "Clash of Clans",
      image: require('../assets/images/clashofclans.png'),
      downloads: '20k',
      stars: 4.2
  },
];


export default function StoreScreen() {
  const[activeCategory, setActiveCategory] = useState('Action');
  return (
    <LinearGradient colors={['rgba(58, 131, 244,0.5)', 'rgba(9, 181, 211,0.5)']} className="w-full flex-1">
    <SafeAreaView>
      {/*Menu and bell tab*/}
      <View className="container">
        <View className="flex-row justify-between items-center px-4">
          <Bars3CenterLeftIcon color={storeColors.text} size="24" />
          <BellIcon color={storeColors.text} size="24" />
        </View>
      </View>

      {/*Title*/}
        <View className="mt-3">
          <Text style={{color: storeColors.text}} className="ml-4 text-3xl font-bold">Browse Store</Text>
          
      {/*ScrollBar*/}
        <View className="pl-4">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              categories.map(cat => {
                if (cat == activeCategory){
                  return (
                  <GradientButton containerClass="mr-2 mt-4" textSize="font-bold font-lg" value={cat} />
                )

                } else {
                  return (
                    <TouchableOpacity value={cat} onPress={() => setActiveCategory(cat)} className="bg-blue-200 p-3 px-4 mt-4 mr-2 rounded-full">
                      <Text style={{color: storeColors.text}}>{cat}</Text>
                    </TouchableOpacity>
                  )
                }
              })}
           
          </ScrollView>
        </View>

        {/*Trending Games*/}
        <View className="mt-3">
            <Text style={{color: storeColors.text}} className="ml-4 mt-2 text-xl font-bold">Trending Games</Text>
        </View>

        {/*Games Carousel*/}
        <View className="pl-4 mt-4">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {trending.map((items, index) => {
              return (
                <GameCards key={index} game={items} />
              )
            })}
          </ScrollView>
        </View>

        {/*Top Download*/}
        <View className="mt-3">
          <View className="flex-row justify-between items-center mb-2">
            <Text style={{color: storeColors.text}} className="ml-4 mt-2 text-xl font-bold">Top Download Games</Text>
        
            <TouchableOpacity className="mr-4 mt-2">
                  <Text className="text-blue-500 font-bold">See More</Text>
            </TouchableOpacity>
          </View>
        

        <View>
          <ScrollView style={{color: storeColors.text}} showsHorizontalScrollIndicator={false}>  
          {
                games.map((game, index) => {
                  return (
                    <TouchableOpacity className="mx-2 p-2 mb-2 flex-row" key={index}>
                      
                      <Image className="ml-1 rounded-lg" source={game.image} style={{width: 100, height: 100}} />
                      <View className="flex-1 flex justify-center pl-1 space-y-2">
                      <Text className="ml-2 text-lg font-bold">{game.title}</Text>
                        
                        <View className="flex-row space-x-3">
                          <View className="flex-row space-x-1"> 
                            <Image className="ml-2 h-5 w-4 opacity-80" source={require('../assets/images/download1.png')} /> 
                            <Text className="ml-2 text-md">{game.downloads} Downloads</Text>
                          </View>
                        </View>

                        <View className="flex-row space-x-3">
                          <View className="flex-row space-x-1">
                            <Image className="ml-2 h-4 w-4 opacity-80" source={require('../assets/images/fullStar.png')} />
                            <Text className="text-xs text-gray-700">{game.stars}</Text>
                          </View>
                        </View>
                           
                      </View>
                      <View className="flex justify-center items-center text-xs">
                        <GradientButton buttonClass="py-3 px-3" value="Download" textSize="text-xs" />
                      </View>
                        
                    </TouchableOpacity>
                  )
                })
              }
      
          </ScrollView>
        </View>
        </View>





      </View>
    </SafeAreaView>
      
    </LinearGradient>
    
  );
}


