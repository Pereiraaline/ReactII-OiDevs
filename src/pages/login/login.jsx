import { useState } from "react";
import { Button } from "../../ui/button";
import { Text, TextLink } from "../../ui/text";
import {Title} from '../../ui/title/index';
import * as Styles from "./styles";

export const Login = (props) => {
  const [user, setUser] = useState("");

  const handleChangeUser = (event) => {
    setUser(event.currentTarget.value);
  };

  return (
    <Styles.Wrapper>
      <Styles.ImageTitle>
        <Title />
      </Styles.ImageTitle>
      <Styles.TitleWrapper>
        <Text>Login</Text>
      </Styles.TitleWrapper>
      <Styles.Form>
        <Styles.InputWrapper>
          <input
            type="text"
            placeholder="Digite o usuário"
            onChange={handleChangeUser}
          />
        </Styles.InputWrapper>
        <Styles.InputWrapper>
          <input type="password" placeholder="Digite a senha" />
        </Styles.InputWrapper>
      </Styles.Form>
      <Button onClick={props.changePage}>Ir para a home</Button>
      <Styles.LinkWrapper>
        <TextLink onClick={props.changeSignUp}>Cadastre-se Aqui</TextLink>
      </Styles.LinkWrapper>
    </Styles.Wrapper>
  );
};
 