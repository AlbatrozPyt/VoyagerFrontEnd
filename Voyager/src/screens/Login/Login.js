import styled from "styled-components";
import { Container, FormBox, InputBox, MainContent, MainContentScroll } from "../../components/container/style";
import { LogoComponent } from "../../components/Logo/Logo";
import { Title } from "../../components/Title/Title";
import { Input, Sombra } from "../../components/Input/style";

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
                    </FormBox>
                </MainContent>
            </MainContentScroll>
        </Container>
    );
};
