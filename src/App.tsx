import { Image, ImageBackground, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { JSX, PropsWithChildren, useState } from 'react'

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
    return(
      <View>
        <Image style={styles.diceImage} source={imageUrl}/>
      </View>
    )
}

export default function App():JSX.Element {
  // const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const [diceImage1, setDiceImage1] = useState<ImageSourcePropType>(DiceOne);
  const [diceImage2, setDiceImage2] = useState<ImageSourcePropType>(DiceOne);

  // const rollDiceOnTop = () => {
  //   let randomNumber = Math.floor(Math.random()*6) + 1;

  //   switch (randomNumber) {
  //     case 1:
  //       setDiceImage(DiceOne)
  //       break;
  //     case 2:
  //       setDiceImage(DiceTwo)
  //       break;
  //     case 3:
  //       setDiceImage(DiceThree)
  //       break;
  //     case 4:
  //       setDiceImage(DiceFour)
  //       break;
  //     case 5:
  //       setDiceImage(DiceFive)
  //       break;
  //     case 6:
  //       setDiceImage(DiceSix)
  //       break;
    
  //     default:
  //       setDiceImage(DiceOne)
  //       break;
  //   }

  //   ReactNativeHapticFeedback.trigger("impactLight", options);
  // }

  const rollDiceOnTop = () => {
    
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
    
    const getDiceImage = (num:Number) => {
      switch (num) {
        case 1: return DiceOne;
        case 2: return DiceTwo;
        case 3: return DiceThree;
        case 4: return DiceFour;
        case 5: return DiceFive;
        case 6: return DiceSix;
        default: return DiceOne;
      }
    }
  
    setDiceImage1(getDiceImage(randomNumber1));
    setDiceImage2(getDiceImage(randomNumber2));
  
    ReactNativeHapticFeedback.trigger("impactLight", options);
  };
  

  return (
    <ImageBackground
    source={{uri:'https://www.vhv.rs/dpng/f/271-2718371_png-geometric-pattern.png'}}
    style={styles.background}
    resizeMode="repeat"
    >
      <View style={styles.container}>
      <Dice imageUrl={diceImage1}/>
      <Dice imageUrl={diceImage2}/>
      <Pressable onPress={rollDiceOnTop}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'//'#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
    transform: [{ rotate: '45deg' }], // Rotates the image 45 degrees
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
    backgroundColor:'#ffffff',
    marginTop:30
  },
})