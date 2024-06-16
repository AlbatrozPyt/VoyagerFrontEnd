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
import { ModalInformativo } from "../../components/Modal";
import { MostrarModal } from "../../utils/MostrarModal";

export const RecuperarSenha = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [showModalError, setShowModalError] = useState(false)
    const [mensagemErro, setMensagemErro] = useState("")

    const enviarEmail = async () => {
        if (email === "") { // Verifica se o campo de email está preenchido
            MostrarModal("Campo de email vazio. Digite um email cadastrado em nossa plataforma para que seja enviado o código de recuperação.", setShowModalError, setMensagemErro)
            setLoading(false);
            return;
        }

        setLoading(true);
       await api.post(`/RecuperarSenha/EnviarEmail?email=${email}`).then(() => {
            // Após o envio do email navegar para a próxima tela
            navigation.navigate("VerificarCodigo", { emailRecuperacao: email });
       }).catch(erro => {
        if(erro.response.status === 404){
            MostrarModal("O email digitado não está cadastrado em nossa plataforma. Verifique se o digitou corretamente e tente novamente.", setShowModalError, setMensagemErro)
        }else{
            MostrarModal("Falha ao enviar o email. Verifique Sua conexão com a internet e tente novamente após alguns minutos.", setShowModalError, setMensagemErro)
        }
        console.log(erro)
       });
        setLoading(false);
    };

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
                                }}
                            />
                        </InputBox>

                        {/* Caixa de botão */}
                        <ButtonBox>
                            {/* Sombra para o estilo da caixa de botão */}
                            <Sombra style={{ top: 95, width: '100%' }} />
                            <Button
                                onPress={loading ? null : () => enviarEmail()}
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

            <ModalInformativo
                showModal={showModalError}
                setShowModal={setShowModalError}
                mensagem={mensagemErro}
            />
        </Container>

    );

};