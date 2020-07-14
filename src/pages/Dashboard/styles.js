import styled from 'styled-components/native';

/* O SafeAreaView diferentemente da View fará com que o título
   Agendamentos fique umm pouco abaixo da statusbar */
export const Container = styled.SafeAreaView`
  flex: 1; /* Não será necessária estilização, pois o background está legal */
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

/* showsVerticalScrollIndicator: Não exibirá o indicador de scroll
   contentContainerStyle: Estilo relacionado apenas ao conteúdo da lista
 */
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})``;
