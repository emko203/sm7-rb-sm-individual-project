import {Fontisto, MaterialIcons} from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components';
import Text from '../components/Text';

const TouchScreen = () => {
  return (
    <Container>
      <Text center heavy title color="#964ff0" margin="32px 0 0 0">
        mybank
      </Text>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #lelele;
`;

export default TouchScreen;
