import styled from 'styled-components';
import {
  View,
  Text,
  Image
} from 'react-native';

export const ImageLogo = styled.Image`
  width: 80;
  height: 26;
  resize-mode: contain;
`;

export const Container = styled.View`
  padding: 10px;
  flex-direction: row;
`;

export const SetionRight = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
