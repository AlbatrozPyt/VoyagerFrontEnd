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
import { FormBoxLogin } from "./style";

import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { MostrarModal } from "../../utils/MostrarModal";
import { ModalInformativo } from "../../components/Modal";

// Componente de tela de login
export const Login = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { user, setUser } = useContext(UserContext);

  const [mensagemModal, setMensagemModal] = useState("")
  const [showModalMensagem, setShowModalMensagem] = useState(false)

  const [loading, setLoading] = useState(false)

  async function Login() {

    if (email == '' || senha == '') {
      MostrarModal("Campos vazios. Um ou mais campos de senha foram digitados incorretamente, preencha todos os campos para continuar", setShowModalMensagem, setMensagemModal)
      return;
    }

    setLoading(true)
    await api.post("/Login", {
      email: email,
      senha: senha,
    })
      .then((e) => {
        setUser(DecodeToken(e.data.token))
        navigation.replace("main", { screen: "Home" });
      })
      .catch((e) => {
        MostrarModal("Email ou senha inválidos", setShowModalMensagem, setMensagemModal)
        console.log(e)
      });
    setLoading(false)
  }

  useEffect(() => {
    if (route.params) {
      if (route.params.cadastrado) {
        MostrarModal("Parabéns! Você acaba de se cadastrar na Voyager, verifique seu email para visualizar a nossa mensagem de boas vindas personalizada e boa viagem!!!", setShowModalMensagem, setMensagemModal)
        setEmail(route.params.email)
        setSenha(route.params.senha)
      }
    }
  }, [route])

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
          <FormBoxLogin>
            {/* Título principal da página */}
            <Title>EMBARQUE NA VOYAGER</Title>

            {/* Caixa de entrada para o email */}
            <InputBox>
              <Sombra />
              <Input
                placeholder="Email:"
                placeholderTextColor="#D527B7"
                onChangeText={(txt) => setEmail(txt)}
                value={email}
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
                value={senha}
              />
              {/* {errorMessage && <ErrorMessage error={errorMessage} />} */}

            </InputBox>

            {/* Link para recuperação de senha */}
            <LinkMedium onPress={() => navigation.navigate("RecuperarSenha")}>
              Esqueceu sua Senha?
            </LinkMedium>

            {/* Caixa de botão para o botão de login */}
            <ButtonBox>
              <Sombra />
              <Button onPress={loading ? null : () => Login()}
              >
                <ButtonTitle>{loading ? "Entrando..." : "Entrar"}</ButtonTitle>
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
          </FormBoxLogin>
        </MainContent>
      </MainContentScroll>

      <ModalInformativo
        setShowModal={setShowModalMensagem}
        showModal={showModalMensagem}
        mensagem={mensagemModal}
      />
    </Container>
  );
};

