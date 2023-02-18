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

        {/* Boton de suma */}
        <TouchableOpacity
        style= {styles.fabLocationBR}
        onPress={ () => setContador(contador + 1) }
        >
          <View style={styles.fab}>
            <Text style={styles.fabText}>
              +1
            </Text>
          </View>
        </TouchableOpacity>

        {/* Boton de resta */}
        <TouchableOpacity
        style= {styles.fabLocationBL}
        onPress={ () => setContador(contador - 1) }
        >
          <View style={styles.fab}>
            <Text style={styles.fabText}>
              -1
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
  /* Locacion del boton flotante al borde inferior derecho */
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right:25
  },
  /* Locacion de Boton Flotante de resta al borde inferior izquierdo */
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left:25,
  },
  /* Flutting Action Bottom: Boton flotante */
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius:100,
    justifyContent: 'center'
  },
  /* Estilos del texto del boton flotante */
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})