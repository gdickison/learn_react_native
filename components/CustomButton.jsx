import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({buttonText, bgColor, textColor, handlePress, isLoading}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`border-2 border-[${bgColor}] rounded-lg w-full py-3 px-8 m-4 bg-[${bgColor}] ${isLoading ? 'opacity-50' : ''}`}
      disabled={isLoading}
    >
      <Text className={`text-${textColor} text-xl text-center`}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton