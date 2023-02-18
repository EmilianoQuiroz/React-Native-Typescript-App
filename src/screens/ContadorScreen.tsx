import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export const ContadorScreen = () => {

  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Contador { contador }
        </Text>

        <TouchableOpacity
        onPress={ () => setContador(contador + 1) }
        >
          <View style={styles.botonIncrementar}>
            <Text>
              +1
            </Text>
          </View>
        </TouchableOpacity>

    </View>
  )
}

//El StyleSheet por lo general siempre se coloca al final
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -25 
  },
  botonIncrementar:{
    backgroundColor: 'red',
    borderRadius:100
  }
})