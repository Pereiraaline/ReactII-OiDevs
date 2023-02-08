import { NavItem } from "./nav-item";
import { Title } from "./title";
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
  return (
    <Style.NavbarWrapper>
      <Style.Box>
        <Style.Box>
          <Title />
        </Style.Box>
        <Style.Box>
          {items.map((item) => (
            <NavItem key={item} text={item}/>
          ))}
        </Style.Box>
      </Style.Box>
      <NavItem text={"Mais"} />
    </Style.NavbarWrapper>
  );
};
