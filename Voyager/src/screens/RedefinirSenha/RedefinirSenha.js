import { useNavigation } from "@react-navigation/native"
import { Button, ButtonTitle } from "../../components/Button/style"
import { Input, Sombra } from "../../components/Input/style"
import { LinkMedium } from "../../components/Link/style"
import { LogoComponent } from "../../components/Logo/Logo"
import { SubTitle, Title, TitleB } from "../../components/Title/Title"
import { ButtonBox, CenteredContent, Container, FormBox, InputBox, MainContentScroll } from "../../components/container/style"

export const RedefinirSenha = ({ }) => {

    const navigation = useNavigation();

    return (

        <Container>
            <MainContentScroll>
                <CenteredContent>
                    <LogoComponent />
                    <FormBox>

                        <Title>REDEFINIR SENHA</Title>
                        <SubTitle> Informe e confirme sua nova senha</SubTitle>

                        {/* Caixa de entrada para senha */}
                        <InputBox>
                            <Sombra />
                            <Input placeholder="Nova senha:" placeholderTextColor="#D527B7" />
                        </InputBox>

                        <InputBox>
                            <Sombra />
                            <Input placeholder="Confirmar senha:" placeholderTextColor="#D527B7" />
                        </InputBox>

                        {/* Caixa de botão para o botão */}
                        <ButtonBox>
                            <Sombra />
                            <Button onPress={() => navigation.navigate("Login")}>
                                <ButtonTitle>
                                    Entrar
                                </ButtonTitle>
                            </Button>
                        </ButtonBox>

                        <LinkMedium onPress={() => navigation.navigate("Login")}
                            style={{ alignSelf: 'center', color: '#8531C6', marginTop: 10 }}>
                            Cancelar
                        </LinkMedium>


                    </FormBox>
                </CenteredContent>
            </MainContentScroll>
        </Container>

    )

}