import React from 'react';
import {Text, View} from 'react-native';

import Header from '../../components/Header';
import Suggestion from '../suggestion';

const Home: () => React$Node = () => {
  return (
    <View>
      <Header />
      <Suggestion title="Recomendado para ti" />
    </View>
  );
};

export default Home;
