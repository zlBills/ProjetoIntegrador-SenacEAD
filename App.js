import React, {Component} from 'react';

/* Importamos os recursos necessarios para nossa navegação */
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

/* Importamos nossas páginas criadas para inserir dentro da navegação */
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Historia from './src/pages/Historia';
import Mundo from './src/pages/Mundo';

import {notificationManager} from './src/services/NotificationManager';

const notificador = notificationManager;
/* Criamos nosso navegador com a variavel Tab */
const Tab = createBottomTabNavigator();

/* Aqui nós informamos qual tela recebera o icone */
/* Em 'name' informamos o nome do ícone Ionicons */
const icons = {
  Home: {
    name: 'ios-home',
  },
  Sobre: {
    name: 'ios-people',
  },
  Historia: {
    name: 'ios-book-outline',
  },
  Mundo: {
    name: 'ios-globe-outline',
  },
};

class App extends Component {
  componentDidMount() {
    notificador.configure();
    notificador.criarCanal();
    notificador.agendarNotificacao();
  }

  render() {
    return (
      /* Abre container da navegação */
      <NavigationContainer>
        {/* Insere a navegação Tab dentro container */}
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              const {name} = icons[route.name];
              return <Icon name={name} color={color} size={size} />;
            },
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Historia" component={Historia} />
          <Tab.Screen name="Sobre" component={Sobre} />
          <Tab.Screen name="Mundo" component={Mundo} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
