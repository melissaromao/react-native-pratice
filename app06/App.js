import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MapaFatecCotia from './MapaFatecCotia'; // Tela do mapa da Fatec
Cotia
import MapaComMarcadores from './MapaComMarcadores'; // Tela do mapa com múltiplos marcadores
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Mapa Fatec Cotia" component={MapaFatecCotia} />
        <Drawer.Screen name="Mapa com Marcadores"
          component={MapaComMarcadores} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}