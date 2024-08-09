import { View, Text, Pressable } from 'react-native'
import React from 'react'

type ButtonProps = {
    lab?:string;
    bg?: string;
    onPress?: () => void;
    textColor?: string;
}
const CustomButton = ({lab, bg, onPress, textColor}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} className={`rounded-[15px] bg-[${bg}] py-4 items-center`}>
        <Text className={`text-[${textColor}] text-lg`}>{lab}</Text>
  </Pressable>
  )
}

export default CustomButton