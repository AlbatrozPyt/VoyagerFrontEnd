import { ButtonBox, Container, CreateAccountBox, FormBox, InputBox, MainContent, MainContentScroll } from "../../components/container/style";
import { LogoComponent } from "../../components/Logo/Logo";
import { Title, TitleB } from "../../components/Title/Title";
import { Input, Sombra } from "../../components/Input/style";
import { LinkMedium } from "../../components/Link/style";
import { Button, ButtonTitle } from "../../components/Button/style";
import { Shadow } from "react-native-shadow-2";
import { useNavigation } from "@react-navigation/native";

// Componente de tela de login
export const Login = () => {

    const navigation = useNavigation();

    return (
        // Container principal da tela, que ocupa toda a área segura da tela
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
                        <Title>
                            EMBARQUE NA VOYAGER
                        </Title>

                        {/* Caixa de entrada para o email */}
                        <InputBox>
                            <Sombra />
                            <Input placeholder="Email:" placeholderTextColor="#D527B7" />
                        </InputBox>

                        {/* Caixa de entrada para a senha */}
                        <InputBox>
                            <Sombra />
                            <Input placeholder="Senha:" placeholderTextColor="#D527B7" secureTextEntry />
                        </InputBox>

                        {/* Link para recuperação de senha */}
                        <LinkMedium onPress={() => navigation.navigate("RecuperarSenha")}>
                            Esqueceu sua Senha?
                        </LinkMedium>

                        {/* Caixa de botão para o botão de login */}
                        <ButtonBox>
                            <Sombra />
                            <Button>
                                <ButtonTitle>
                                    Entrar
                                </ButtonTitle>
                            </Button>
                        </ButtonBox>

                        {/* Caixa para criar uma nova conta */}
                        <CreateAccountBox>
                            <TitleB>
                                Não tem conta?
                                <LinkMedium onPress={() => navigation.navigate("Cadastro")}>
                                    Crie uma Agora !</LinkMedium>
                            </TitleB>
                        </CreateAccountBox>

                    </FormBox>
                </MainContent>
            </MainContentScroll>
        </Container>
    );
};
