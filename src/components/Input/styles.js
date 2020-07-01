import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px; /* O fundo do Input */
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  flex-direction: row; /* Não é necessário o display-flex é automático no RN */
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.8)',
})`
  flex: 1; /* A linha de texto ocupará todo o espaço possível */
  font-size: 15px;
  margin-left: 10px; /* Margem para o Input ficar um pouco distante do ícone */
  color: #fff;
`;
