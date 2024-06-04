import { Button, ButtonTitle } from "../../components/Button/style";
import { Input, Sombra } from "../../components/Input/style";
import { LinkMedium } from "../../components/Link/style";
import { LogoComponent } from "../../components/Logo/Logo";
import { Title, TitleB } from "../../components/Title/Title";
import { ButtonBox, CenteredContent, Container, FormBox, InputBox, MainContentScroll } from "../../components/container/style";

export const RecuperarSenha = ({ }) => {

    return (
        <Container>
            <MainContentScroll>
                <CenteredContent>
                    <LogoComponent />
                    <FormBox>
                        <Title>RECUPERAR SENHA</Title>
                        <TitleB>Informe um email para receber um código de verificação.</TitleB>
                        {/* Caixa de entrada para o nome */}
                        <InputBox>
                            {/* Sombra para o estilo da caixa de entrada */}
                            <Sombra />
                            {/* Entrada para o nome */}
                            <Input style={{ width: 320 }} placeholder="Informe seu email:" placeholderTextColor="#D527B7" />
                        </InputBox>

                        {/* Caixa de botão */}
                        <ButtonBox>
                            {/* Sombra para o estilo da caixa de botão */}
                            <Sombra style={{ top: 100, right: 90 }} />
                            {/* Botão para navegar para a tela de login */}
                            <Button style={{ marginTop: 60, width: 320 }}>
                                {/* Título do botão */}
                                <ButtonTitle>
                                    Entrar
                                </ButtonTitle>
                            </Button>
                        </ButtonBox>


                        <LinkMedium >
                            Cancelar
                        </LinkMedium>

                    </FormBox>
                </CenteredContent>
            </MainContentScroll>
        </Container>

    );

};