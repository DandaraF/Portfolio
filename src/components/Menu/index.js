import * as S from "./styles";

const Menu = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo>DANDS</S.Logo>
        <S.Menu>
          <S.ItemMenu>Home</S.ItemMenu>
          <S.ItemMenu>Sobre</S.ItemMenu>
          <S.ItemMenu>Portfólio</S.ItemMenu>
          <S.ItemMenu>Contato</S.ItemMenu>
        </S.Menu>
      </S.Content>
    </S.Container>
  );
};

export default Menu;
