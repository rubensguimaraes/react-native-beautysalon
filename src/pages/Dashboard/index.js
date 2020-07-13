import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

export default function Dashboard() {
  return <Background />;
}

Dashboard.navigationOptions = {
  // Definição do título de ícone da aba
  tabBarLabel: 'Agendamentos',
  // Foi criada uma função abaixo, pois a color vira do react-navigation
  // O parâmetro tintColor recebido será transferido para o ícone e a cord
  // será preenchida de forma automática
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
