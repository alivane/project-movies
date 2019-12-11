import React from 'react';
import {Container, TextView} from './styles.js';

const Empty: () => React$Node = props => {
  const {text} = props;

  return (
    <Container>
      <TextView>{text}</TextView>
    </Container>
  );
};

export default Empty;
