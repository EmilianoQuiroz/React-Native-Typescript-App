/* Fluting Action Button */
/* Componente para los botones flotantes */

import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface Props {
    title: string;
}

export const Fab = ( {title}: Props ) => {


  return (

        <TouchableOpacity
        style= {styles.fabLocationBR}
        onPress={ () => console.log('Click') }
        >
          <View style={styles.fab}>
            <Text style={styles.fabText}>
              {title}
            </Text>
          </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
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
