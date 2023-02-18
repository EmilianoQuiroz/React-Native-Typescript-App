import React from 'react';
import { View, Text, Button } from 'react-native';
import { useState } from 'react';

export const ContadorScreen = () => {

  const [contador, setContador] = useState(10);

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

        <Button 
          title="Click"
          onPress={ () => setContador(contador + 1) }
        />

    </View>
  )
}
