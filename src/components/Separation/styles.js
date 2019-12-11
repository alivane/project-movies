import styled from 'styled-components';
import {View, Text} from 'react-native';

export const Bottom = styled.View`
  border-top-width: 1;
  border-top-color: ${props => (props.color) ? props.color : '#eaeaea'};
`;