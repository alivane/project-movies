import React from 'react';
import {Bottom} from './styles.js';

const Vertital: () => React$Node = props => {
  const {color} = props;

  return <Bottom color={color} />;
};

export default Vertital;
