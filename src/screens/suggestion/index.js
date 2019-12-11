import React from 'react';
import {View, Text} from 'react-native';
import List from './components/FlatList';
import {Title, Container} from './styles';

const Layout: () => React$Node = props => {
  const {title} = props;

  return (
    <Container>
      <Title> {title} </Title>
      <List />
    </Container>
  );
};

export default Layout;
