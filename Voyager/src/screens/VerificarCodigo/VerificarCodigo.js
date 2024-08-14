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
import { Text } from 'react-native';

import api from "../../service/Service";
import { MostrarModal } from '../../utils/MostrarModal';
import { ModalInformativo } from '../../components/Modal';
import { LinkVoltar } from '../InfoLocal/style';

export const VerificarCodigo = ({ navigation, route }) => {
    const [codes, setCodes] = useState(["", "", "", ""]);
    const inputRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);
    const [loading, setLoading] = useState(false);
    const [resending, setResending] = useState(false);
    const [mensagemModal, setMensagemModal] = useState("")
    const [showModalMensagem, setShowModalMensagem] = useState(false)

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

    // Função para validar o código
    const validarCodigo = async () => {
        setLoading(true); // Define o estado de carregamento como verdadeiro
        try {
            const codigo = codes.join(''); // Junta os 4 dígitos em uma única string
            console.log("Enviando código:", codigo);
            console.log("Email de recuperação:", route.params.emailRecuperacao);

            if (!route.params.emailRecuperacao) { // Verifica se o email de recuperação está presente
                throw new Error("O email de recuperação não está presente.");
            }

            // Faz uma solicitação POST para validar o código
            const response = await api.post(`/RecuperarSenha/ValidarCodigoRecuperacao?email=${route.params.emailRecuperacao}&codigo=${codigo}`);

            console.log("Resposta da API:", response.data);

            if (response.data) {
                // Navega para a tela de redefinição de senha se a resposta for positiva
                navigation.replace("RedefinirSenha", {
                    emailRecuperacao: route.params.emailRecuperacao,
                });
            } else {
                MostrarModal("Erro. O código digitado é inválido! Verifique seu email e tente novamente", setShowModalMensagem, setMensagemModal ); // Exibe um alerta se o código for inválido
            }
        } catch (error) {
            MostrarModal("Erro. O código digitado é inválido! Verifique seu email e tente novamente", setShowModalMensagem, setMensagemModal ); // Exibe um alerta em caso de erro
        }
        setLoading(false); // Define o estado de carregamento como falso
    };

    // Função para reenviar o código
    const reenviarCodigo = async () => {
        setResending(true); // Define o estado de reenvio como verdadeiro
        try {
            console.log("Reenviando código para:", route.params.emailRecuperacao);

            // Faz uma solicitação POST para reenviar o código
            const response = await api.post(`/RecuperarSenha/EnviarEmail?email=${route.params.emailRecuperacao}`);
            console.log("Resposta da API para reenviar código:", response.data);

            if (response.data) {
                MostrarModal("Sucesso. código reenviado com sucesso!", setShowModalMensagem, setMensagemModal) // Exibe um alerta em caso de sucesso
            } else {
                MostrarModal("Erro, falha ao reenviar o código. Por favor, tente novamente.", setShowModalMensagem, setMensagemModal); // Exibe um alerta em caso de falha
            }
        } catch (error) {
            console.error("Erro ao reenviar o código:", error.response ? error.response.data : error.message);
            MostrarModal("Erro ao reenviar o código!", setShowModalMensagem, setMensagemModal); // Exibe um alerta em caso de erro
        }
        setResending(false); // Define o estado de reenvio como falso
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
                                <Sombra style={{ left: 5, width: '50%' }} />
                                <Button style={{ width: 175 }} onPress={loading ? null : () => validarCodigo()}>
                                    <ButtonTitle>
                                        <Text>{loading ? "Carregando..." : "Continuar"}</Text>
                                    </ButtonTitle>
                                </Button>
                            </ButtonBox>

                            <LinkVoltar
                                onPress={reenviarCodigo}
                                style={{ marginTop: 5, color: '#8531C6' }}
                            >
                                <Text>{resending ? "Reenviando..." : "Reenviar Código"}</Text>
                            </LinkVoltar>

                            <LinkVoltar
                                onPress={() => navigation.goBack()}
                                style={{ marginTop: -10, color: '#8531C6' }}
                            >
                                <Text>cancelar</Text>
                            </LinkVoltar>

                        </FormBox>
                    </CenteredContent>
                </MainContent>
            </MainContentScroll>

            <ModalInformativo
                mensagem={mensagemModal}
                setShowModal={setShowModalMensagem}
                showModal={showModalMensagem}
            />
        </Container>
    );
};
