import { InstaContext } from "../../App";
import { useContext } from "react";
import { NavItem } from "../navItem/nav-item";
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

export const Navbar = () => {
  const { meuState, meuDispatch } = useContext(InstaContext);

  const onClickLoginButtonHandler = () => {
    meuDispatch({ type: "change_current_page", payload: "login" });
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
      <NavItem onClick={onClickLoginButtonHandler} text={"Sair"} />
    </Style.NavbarWrapper>
  );
};
