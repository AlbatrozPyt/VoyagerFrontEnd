import { useNavigation } from "@react-navigation/native";
import { Button, ButtonTitle } from "../../components/Button/style";
import { Input, Sombra } from "../../components/Input/style";
import { LinkMedium } from "../../components/Link/style";
import { LogoComponent } from "../../components/Logo/Logo";
import { SubTitle, Title, TitleB } from "../../components/Title/Title";
import { ButtonBox, CenteredContent, Container, FormBox, InputBox, MainContentScroll } from "../../components/container/style";

export const RecuperarSenha = ({ }) => {

    const navigation = useNavigation();

    return (
        <Container>
            <MainContentScroll>
                <CenteredContent>
                    <LogoComponent />
                    <FormBox>
                        <Title>RECUPERAR SENHA</Title>
                        <SubTitle>Informe um email para receber um código de verificação.</SubTitle>
                        {/* Caixa de entrada para o email */}
                        <InputBox>
                            {/* Sombra para o estilo da caixa de entrada */}
                            <Sombra style={{ width: '100%' }} />
                            {/* Entrada para o email */}
                            <Input style={{ width: '100%' }} placeholder="Informe seu email:" placeholderTextColor="#D527B7" />
                        </InputBox>

                        {/* Caixa de botão */}
                        <ButtonBox>
                            {/* Sombra para o estilo da caixa de botão */}
                            <Sombra style={{ top: 95, width: '100%' }} />                       
                            <Button onPress={() => navigation.navigate("VerificarCodigo")} style={{ marginTop: 90, width: '100%' }}>
                                {/* Título do botão */}
                                <ButtonTitle>
                                    Entrar
                                </ButtonTitle>
                            </Button>
                        </ButtonBox>

                              {/* Cancelar levando para Login  */}
                        <LinkMedium onPress={() => navigation.navigate("Login")}
                            style={{ marginTop: 20, left: -140, color: '#8531C6' }} >
                            Cancelar
                        </LinkMedium>

                    </FormBox>
                </CenteredContent>
            </MainContentScroll>
        </Container>

    );

};