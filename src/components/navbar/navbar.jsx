import { NavItem } from '../navItem/nav-item';
import { Title } from "../../ui/title/index";
import * as Style from "./styles";

const items = [
  "Página Inicial",
  "Pesquisa",
  "Explorar",
  "Reels",
  "Mensagens",
  "Notificações",
  "Criar",
  "Perfil",
];

export const Navbar = (props) => {
   const onClickLoginButtonHandler = () => {
     props.onClickLoginButton("login");
   };
  return (
    <Style.NavbarWrapper>
      <Style.Box>
        <Style.Box>
          <Title />
        </Style.Box>
        <Style.Box>
          {items.map((item) => (
            <NavItem key={item} text={item} />
          ))}
        </Style.Box>
      </Style.Box>
      <NavItem text={"Mais"} />
      <NavItem onClick={props.onClick} text={"Sair"} />
    </Style.NavbarWrapper>
  );
};
