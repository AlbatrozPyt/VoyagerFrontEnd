import styled from "styled-components";
import { ButtonBox, Container, FormBox, InputBox, MainContent, MainContentScroll } from "../../components/container/style";
import { LogoComponent } from "../../components/Logo/Logo";
import { Title, TitleB } from "../../components/Title/Title";
import { Input, Sombra } from "../../components/Input/style";
import { LinkMedium } from "../../components/Link/style";
import { Button, ButtonTitle } from "../../components/Button/style";
import { Shadow } from "react-native-shadow-2";


export const Login = ({ navigation }) => {
    return (
        <Container>
            <MainContentScroll>
                <MainContent>
                    <LogoComponent />

                    <FormBox>
                        <Title>
                            EMBARQUE NA VOYAGER
                        </Title>

                        <InputBox>
                            <Sombra />
                            <Input placeholder="Email:" placeholderTextColor="#D527B7" />
                        </InputBox>

                        <InputBox>
                            <Sombra />
                            <Input placeholder="Senha:" placeholderTextColor="#D527B7" secureTextEntry />
                        </InputBox>

                        <LinkMedium>
                            Esqueceu sua Senha?
                        </LinkMedium>

                        <ButtonBox>
                            <Sombra />
                            <Button>
                                <ButtonTitle>
                                    Entrar
                                </ButtonTitle>
                            </Button>
                        </ButtonBox>
                        <TitleB>
                            Não tem conta? <LinkMedium>Crie uma Agora !</LinkMedium>
                        </TitleB>

                    </FormBox>

                </MainContent>
            </MainContentScroll>
        </Container>
    );
};
