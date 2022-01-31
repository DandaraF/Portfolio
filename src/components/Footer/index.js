import * as S from "./styles";
import { contact } from "../../mocks/data";
import { linkUrl } from "../../utils/link";

const Footer = () => {
  return (
    <S.Container>
      <S.Content>
        <S.ContainerIcon>
          {contact.map((data) => (
            <S.ContactIcon
              key={data.index}
              alt={data.text}
              src={data.img}
              onClick={() => linkUrl(data.page)}
            />
          ))}
        </S.ContainerIcon>
        <S.Text>
          Desenvolvido por <S.Strong>Dandara Silva</S.Strong>
        </S.Text>
        <S.Text>
          &copy;<S.Strong> 2022.</S.Strong> Todos os direitos reservados.
        </S.Text>
      </S.Content>
    </S.Container>
  );
};

export default Footer;
