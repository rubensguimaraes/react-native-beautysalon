import styled from 'styled-components/native';
import {Platform} from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.IOS === 'ios',
  behavior: 'padding',
})`
  flex: 1; /* O Container ocupará todo o espaço disponível */
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch; /* O Form ocupará toda a largura possível */
  margin-top: 50px; /* Distância do Form para a logo */
`;

/* Este styled(Input) pegará o Input que criamos em components, e permitirá
   adicionarmos estilizações adicionais */
export const FormInput = styled(Input)`
  margin-bottom: 10px; /* Distância do FormInput para os elementos de baixo */
`;

/* Analogamente ao styled(Input), o styled(Button) pegará o Button que também
   criamos em components, e nos permitirá adicionar estilizações adicionais */
export const SubmitButton = styled(Button)`
  margin-top: 5px; /* Distância do SubmitButton dos elementos de cima */
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;
export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  align-self: center;
`;
