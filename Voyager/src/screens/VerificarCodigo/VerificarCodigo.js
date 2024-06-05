import { Button, ButtonTitle } from "../../components/Button/style";
import { Input, InputCode, Sombra } from "../../components/Input/style"
import { LinkMedium } from "../../components/Link/style";
import { LogoComponent } from "../../components/Logo/Logo"
import { Title, TitleB } from "../../components/Title/Title"
import { ButtonBox, CenteredContent, Container, FormBox, InputBox, MainContent, MainContentScroll } from "../../components/container/style"
import { useState } from 'react';

export const VerificarCodigo = ({ }) => {
    const [codes, setCodes] = useState(["", "", "", ""]);

    const handleInputChange = (value, index) => {
        // Verifica se o valor inserido é um dígito numérico
        if (/^[0-9]?$/.test(value)) {
            const newCodes = [...codes];
            newCodes[index] = value;
            setCodes(newCodes);
        }
    };

    return (
        <Container>
            <MainContentScroll>
                <MainContent>
                    <CenteredContent>
                        <LogoComponent />
                        <FormBox>
                            <Title>INSERIR CÓDIGO</Title>
                            <TitleB>Digite o código de 4 dígitos enviado para seu email</TitleB>


                            <InputBox style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                {codes.map((code, index) => (
                                    <InputCode
                                        key={index}
                                        placeholder="0"
                                        value={code}
                                        maxLength={1}  // Restringe a entrada a apenas 1 caractere
                                        keyboardType="numeric" // Garante que apenas números sejam inseridos
                                        onChangeText={(value) => handleInputChange(value, index)} // Manipulador de evento para controlar a entrada
                                    />
                                ))}
                            </InputBox>

                            {/* Caixa de botão */}
                            <ButtonBox>
                                {/* Sombra para o estilo da caixa de botão */}
                                <Sombra x style={{ left: 5 }} />
                                {/* Botão para navegar para a tela de login */}
                                <Button>
                                    {/* Título do botão */}
                                    <ButtonTitle>
                                        Entrar
                                    </ButtonTitle>
                                </Button>
                            </ButtonBox>

                            {/* Cancelar levando para Login  */}
                            <LinkMedium
                                style={{ marginTop: 20, left: -120, color: '#8531C6' }} >
                                Reenviar Código
                            </LinkMedium>

                        </FormBox>

                    </CenteredContent>
                </MainContent>
            </MainContentScroll>
        </Container>
    );
}; 
