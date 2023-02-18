import React from 'react';
import { View, Text, Button, Touchable, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export const ContadorScreen = () => {

  const [contador, setContador] = useState(0);

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center'
    }}>
        <Text style={{
          textAlign: 'center',
          fontSize: 40,
          top: -25
        }}>
            Contador { contador }
        </Text>

        <TouchableOpacity
        onPress={ () => setContador(contador + 1) }
        >
          <View style={{
            backgroundColor: 'red',
            borderRadius:100
          }}>
            <Text>
              +1
            </Text>
          </View>
        </TouchableOpacity>

    </View>
  )
}
