import { useContext, useRef, useState } from "react";
import { Button } from "../../ui/button";
import { Text, TextLink } from "../../ui/text";
import { Title } from "../../ui/title/index";
import { InstaContext } from "../../App";
import * as Styles from "./styles";

export const Login = () => {
  const state = useContext(InstaContext);

 const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("");

  const changeToHome = () => {
    if (userName && password) {
      state.meuDispatch({ type: "change_current_page", payload: "home" });
      state.meuDispatch({ type: "add_user", payload: { username: userName } });
    } else{
      alert("Usuário não cadastrado!");
      state.meuDispatch({Type: "change_current_page", payload: "signup"})
    }
  };

  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  }; 
  const handleChangeUser = (event) => {
    setUserName(event.currentTarget.value);
  };

const changeToSignUp = () =>{
  state.meuDispatch({type: "change_current_page", payload: "signup"})
}
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
          <input
            type="password"
            placeholder="Digite a senha"
            onChange={handleChangePassword}
          />
        </Styles.InputWrapper>
      </Styles.Form>
      <Button onClick={changeToHome}>Ir para a home</Button>
      <Styles.LinkWrapper>
        <TextLink onClick={changeToSignUp}>Cadastre-se Aqui</TextLink>
      </Styles.LinkWrapper>
    </Styles.Wrapper>
  );
};
