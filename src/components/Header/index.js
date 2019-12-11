import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { ImageLogo, Container, SetionRight } from './styles';
import Logo from '../../../assets/logo.png';

const Header: () => React$Node = props => {
  const { name } = props;

  return (
    <View>
      <SafeAreaView>
        <Container>
          <ImageLogo source={Logo} />
          <SetionRight>
            <Text>{name}</Text>
          </SetionRight>
        </Container>
      </SafeAreaView>
    </View>
  );
};

export default Header;
