import { useState } from "react";
import { Button } from "../../ui/button";
import { Text } from "../../ui/text";
import { Title } from "../../ui/title/index";
import * as Styles from "./styles";

export const SignUp = (props) => {
const [user, setUser] = useState("");

const handleChangeUser = (event) => {
  console.log(user)
  setUser(event.currentTarget.value);
};

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
            <label for="email">Email</label>
            <input type="email" placeholder="Digite seu e-mail"></input>
          </Styles.InputWrapper>
          <Styles.InputWrapper>
            <label for="fullName">Nome Completo</label>
            <input
              type="text"
              placeholder="Digite seu nome completo"
              onChange={handleChangeUser}
            ></input>
          </Styles.InputWrapper>
          <Styles.InputWrapper>
            <label for="age">Idade</label>
            <input type="number" placeholder="Digite sua idade"></input>
          </Styles.InputWrapper>
          <Styles.InputWrapper>
            <label for="password">Senha</label>
            <input type="password" placeholder="Senha"></input>
          </Styles.InputWrapper>
          <Styles.InputWrapper>
            <label for="password">Confirme sua senha</label>
            <input type="password" placeholder="Confirme sua Senha"></input>
          </Styles.InputWrapper>
        </Styles.Form>
        <Button onClick={props.changePage}>Salvar</Button>
      </Styles.WrapperForm>
    </Styles.Wrapper>
  </>
);

};
