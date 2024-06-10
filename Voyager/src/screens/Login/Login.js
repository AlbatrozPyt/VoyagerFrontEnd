import {
  ButtonBox,
  Container,
  CreateAccountBox,
  FormBox,
  InputBox,
  MainContent,
  MainContentScroll,
} from "../../components/container/style";
import { LogoComponent } from "../../components/Logo/Logo";
import { SubTitle, Title, TitleB } from "../../components/Title/Title";
import { Input, Sombra } from "../../components/Input/style";
import { LinkMedium } from "../../components/Link/style";
import { Button, ButtonTitle } from "../../components/Button/style";
import { createContext, useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import api from "../../service/Service";
import { UserContext } from "../../contexts/MyContext";
import { DecodeToken } from "../../utils/Auth";

// Componente de tela de login
export const Login = ({ navigation }) => {
  const [email, setEmail] = useState('matheusenrikeramalho@gmail.com');
  const [senha, setSenha] = useState('matheus');
  const { user, setUser } = useContext(UserContext);


  async function Login() {
    await api.post("/Login", {
        email: email,
        senha: senha,
      })
      .then((e) => {
        setUser(DecodeToken(e.data.token))
        navigation.navigate("main");
      })
      .catch((e) => {
        console.log('Erro ao fazer o login');
      });
  }

  return (
    //   {/* // Container principal da tela, que ocupa toda a área segura da tela */}
    <Container>
      {/* Container com rolagem para o conteúdo principal */}
      <MainContentScroll>
        {/* Conteúdo principal da tela */}
        <MainContent>
          {/* Componente de logo */}
          <LogoComponent />

          {/* Caixa de formulário para agrupar os elementos de entrada */}
          <FormBox>
            {/* Título principal da página */}
            <Title>EMBARQUE NA VOYAGER</Title>

            {/* Caixa de entrada para o email */}
            <InputBox>
              <Sombra />
              <Input
                placeholder="Email:"
                placeholderTextColor="#D527B7"
                onChangeText={(txt) => setEmail(txt)}
              />
            </InputBox>

            {/* Caixa de entrada para a senha */}
            <InputBox>
              <Sombra />
              <Input
                placeholder="Senha:"
                placeholderTextColor="#D527B7"
                secureTextEntry
                onChangeText={(txt) => setSenha(txt)}
              />
            </InputBox>

            {/* Link para recuperação de senha */}
            <LinkMedium onPress={() => navigation.navigate("RecuperarSenha")}>
              Esqueceu sua Senha?
            </LinkMedium>

            {/* Caixa de botão para o botão de login */}
            <ButtonBox>
              <Sombra />
              <Button onPress={() => Login()}>
                <ButtonTitle>Entrar</ButtonTitle>
              </Button>
            </ButtonBox>

            {/* Caixa para criar uma nova conta */}
            <CreateAccountBox>
              <SubTitle>
                Não tem conta?{"  "}
                <LinkMedium onPress={() => navigation.navigate("Cadastro")}>
                  Crie uma Agora !
                </LinkMedium>
              </SubTitle>
            </CreateAccountBox>
          </FormBox>
        </MainContent>
      </MainContentScroll>
    </Container>
  );
};
