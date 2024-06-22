{/*
import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientButton({txt}) {
    return (
        <LinearGradient colors={['rgba(10, 200, 225,0.8)', 'rgba(60, 150, 250,0.8)']} end={{x:0.1, y:0.2}} start={{x:2, y:2}} className={`rounded-full ${txt.containerClass}`}>
            <TouchableOpacity className={`p-3 px-4 ${txt.buttonClass}`}>
                <Text className="text-white font-bold">{[txt]}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}
    */}

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function GradientButton(txt) {
  return (
    <LinearGradient colors={['rgba(10, 200, 225,0.8)', 'rgba(60, 150, 250,0.8)']} end={{x:0.1, y:0.2}} start={{x:2, y:2}} className={`rounded-full ${txt.containerClass}`}>
        <TouchableOpacity className={`p-3 px-4 ${txt.buttonClass}`}>
            <Text className={`text-white ${txt.textSize}`}>{txt.value}</Text>
        </TouchableOpacity>

    </LinearGradient>
  )
}