import { useContext, useState } from "react";
import { InstaContext } from "../../App";
import { Button } from "../../ui/button";
import { Text } from "../../ui/text";
import { Title } from "../../ui/title/index";
import * as Styles from "./styles";

export const SignUp = () => {
  const state = useContext(InstaContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUser = (event) => {
    console.log(user)
    setUser(event.currentTarget.value);
  };

  const handleChangePass = (event) => {
    console.log(password)
    setPassword(event.currentTarget.value);
  };

  const changeToHome = () =>{
     state.meuDispatch({ type: "change_current_page", payload: "home" });
  }
  return (
    <>
      <Styles.Wrapper>
        <Styles.WrapperForm>
          <Styles.ImageTitle>
            <Title />
          </Styles.ImageTitle>
          <Styles.TitleWrapper>
            <Text>Cadastre-se</Text>
          </Styles.TitleWrapper>
          <Styles.Form>
            <Styles.InputWrapper>
              <label>Email</label>
              <input type="email" placeholder="Digite seu e-mail"></input>
            </Styles.InputWrapper>
            <Styles.InputWrapper>
              <label>Nome Completo</label>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                onChange={handleChangeUser}
              ></input>
            </Styles.InputWrapper>
            <Styles.InputWrapper>
              <label>Idade</label>
              <input type="number" placeholder="Digite sua idade"></input>
            </Styles.InputWrapper>
            <Styles.InputWrapper>
              <label>Senha</label>
              <input
                type="password"
                placeholder="Senha"
                onChange={handleChangePass}
              ></input>
            </Styles.InputWrapper>
            <Styles.InputWrapper>
              <label>Confirme sua senha</label>
              <input type="password" placeholder="Confirme sua Senha"></input>
            </Styles.InputWrapper>
          </Styles.Form>
          <Button onClick={changeToHome}>Salvar</Button>
        </Styles.WrapperForm>
      </Styles.Wrapper>
    </>
  );
};
