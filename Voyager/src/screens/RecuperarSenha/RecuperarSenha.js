import { useNavigation } from "@react-navigation/native";
import { Button, ButtonTitle } from "../../components/Button/style";
import { Input, Sombra } from "../../components/Input/style";
import { LinkMedium } from "../../components/Link/style";
import { LogoComponent } from "../../components/Logo/Logo";
import { SubTitle, Title, TitleB } from "../../components/Title/Title";
import { ButtonBox, CenteredContent, Container, FormBox, InputBox, MainContentScroll } from "../../components/container/style";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

import api from "../../service/Service";

export const RecuperarSenha = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [loading, setLoading] = useState(false);

    const enviarEmail = async () => {
        setLoading(true);
        try {
            if (!email) { // Verifica se o campo de email está preenchido
                Alert.alert("Alerta", "Preencha o campo de e-mail!");
                setLoading(false);
                return;
            }
            // Faz a requisição
            const response = await api.post(`/RecuperarSenha/EnviarEmail?email=${email}`);
            if (response.data) {
                // Após o envio do email navegar para a próxima tela
                navigation.navigate("VerificarCodigo", { emailRecuperacao: email });

            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    };
    // Função para verificar erros no campo de email
    const handleErrors = () => {
        setLoginError(!email.includes("@") && email);
    };
    // Hook para atualizar o erro de login sempre que o email mudar
    useEffect(() => {
        setLoginError(!email.includes("@") && email);
    }, [email]);

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
                            <Input
                                style={{ width: '100%' }}
                                placeholder="Informe seu email:"
                                placeholderTextColor="#D527B7"
                                onChangeText={(txt) => {
                                    setEmail(txt);
                                    handleErrors();
                                }}
                            />
                        </InputBox>

                        {/* Caixa de botão */}
                        <ButtonBox>
                            {/* Sombra para o estilo da caixa de botão */}
                            <Sombra style={{ top: 95, width: '100%' }} />
                            <Button
                                onPress={!loginError && email ? enviarEmail : null}
                                style={{ marginTop: 90, width: '100%' }}
                            >
                                {/* Título do botão */}
                                <ButtonTitle>
                                    {loading ? "Carregando..." : "Entrar"}
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