import React, { useState, useRef } from 'react';
import {
    Button,
    ButtonTitle
} from "../../components/Button/style";
import {
    InputCode,
    Sombra,
    SombraCode
} from "../../components/Input/style";
import {
    LinkMedium
} from "../../components/Link/style";
import {
    LogoComponent
} from "../../components/Logo/Logo";
import {
    SubTitle,
    Title,
    TitleB
} from "../../components/Title/Title";
import {
    ButtonBox,
    CenteredContent,
    Container,
    FormBox,
    InputBox,
    InputBoxCode,
    MainContent,
    MainContentScroll
} from "../../components/container/style";
import {
    InputCodeContainer
} from "../../components/container/style";
import { useNavigation } from '@react-navigation/native';

export const VerificarCodigo = ({ }) => {
    const [codes, setCodes] = useState(["", "", "", ""]); // Estado para armazenar os códigos de entrada
    const inputRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]); // Referência para as entradas de código

    const navigation = useNavigation();

    const handleInputChange = (value, index) => {
        if (/^[0-9]?$/.test(value)) { // Verifica se o valor é um número de 0 a 9
            const newCodes = [...codes]; // Cria uma cópia do array de códigos
            newCodes[index] = value; // Atualiza o código na posição especificada
            setCodes(newCodes); // Atualiza o estado com os novos códigos

            if (value !== "" && index < inputRefs.current.length - 1) { // Verifica se o valor não está vazio e se não é o último campo de entrada
                inputRefs.current[index + 1].current.focus(); // Move o foco para o próximo campo de entrada
            }
        }
    };

    const handleKeyPress = (event, index) => { // Função para lidar com a pressão de tecla
        if (event.nativeEvent.key === 'Backspace' && codes[index] === "") { // Verifica se a tecla pressionada é Backspace e o campo atual está vazio
            if (index > 0) { // Verifica se não é o primeiro campo de entrada
                inputRefs.current[index - 1].current.focus(); // Move o foco para o campo de entrada anterior
            }
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
                            <SubTitle>Digite o código de 4 dígitos enviado para seu email</SubTitle>

                            <InputBoxCode style={{ flexDirection: 'row', justifyContent: 'space-around', position: 'relative' }}>
                                {codes.map((code, index) => (
                                    <InputCodeContainer key={index}>
                                        <SombraCode />
                                        <InputCode
                                            ref={inputRefs.current[index]}
                                            placeholder="0"
                                            value={code}
                                            maxLength={1}
                                            keyboardType="numeric"
                                            onChangeText={(value) => handleInputChange(value, index)}
                                            onKeyPress={(event) => handleKeyPress(event, index)}
                                        />
                                    </InputCodeContainer>
                                ))}
                            </InputBoxCode>

                            <ButtonBox>
                                <Sombra style={{ left: 5, width: '25%' }} />
                                <Button  onPress={() => navigation.navigate("RedefinirSenha")}>
                                    <ButtonTitle>
                                        Entrar
                                    </ButtonTitle>
                                </Button>
                            </ButtonBox>

                            <LinkMedium
                                style={{ marginTop: 5, left: -120, color: '#8531C6' }}
                            >
                                Reenviar Código
                            </LinkMedium>

                        </FormBox>
                    </CenteredContent>
                </MainContent>
            </MainContentScroll>
        </Container>
    );
};
