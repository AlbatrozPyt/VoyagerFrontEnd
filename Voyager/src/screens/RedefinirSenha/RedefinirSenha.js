import { useNavigation } from "@react-navigation/native"
import { Button, ButtonTitle } from "../../components/Button/style"
import { Input, Sombra } from "../../components/Input/style"
import { LinkMedium } from "../../components/Link/style"
import { LogoComponent } from "../../components/Logo/Logo"
import { SubTitle, Title, TitleB } from "../../components/Title/Title"
import { ButtonBox, CenteredContent, Container, FormBox, InputBox, MainContentScroll } from "../../components/container/style"
import { useState } from "react"

import api from "../../service/Service";

export const RedefinirSenha = ({ navigation, route }) => {

    const email = route.params?.emailRecuperacao; // Usa o parâmetro passado na navegação

    const [novaSenha, setNovaSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [loading, setLoading] = useState(false);

    const [dialog, setDialog] = useState({});
    const [showDialog, setShowDialog] = useState(false);

    const alterarSenha = async () => {
        setLoading(true);
        try {
            // Verifica se as senhas coincidem
            if (novaSenha === confirmarSenha) {
                // Faz a requisição para alterar a senha
                const apiUrl = `/Usuarios/RedefinirSenha/${email}?novaSenha=${novaSenha}`;
                console.log("Enviando requisição PUT para redefinir senha...", apiUrl);
                const response = await api.put(apiUrl);
                console.log("Resposta da API:", response);
                // Verifica se a requisição foi bem-sucedida
                if (response.status === 200) {
                    console.log("Senha redefinida com sucesso. Redirecionando para a tela de login...");
                    navigation.replace("Login");
                } else {
                    console.log("Erro ao redefinir a senha:", response);
                    setDialog({
                        status: "erro",
                        contentMessage: "Ocorreu um erro ao redefinir a senha. Por favor, tente novamente.",
                    });
                    setShowDialog(true);
                }
            } else {
                console.log("As senhas não coincidem.");
                setDialog({
                    status: "erro",
                    contentMessage: "As senhas não coincidem. Por favor, verifique e tente novamente.",
                });
                setShowDialog(true);
            }
        } catch (error) {
            console.error("Erro ao redefinir a senha:", error);
            setDialog({
                status: "erro",
                contentMessage: "Ocorreu um erro ao redefinir a senha. Por favor, tente novamente.",
            });
            setShowDialog(true);
        }
        setLoading(false);
    };


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
                            <Input
                                placeholder="Nova senha:"
                                placeholderTextColor="#D527B7"
                                value={novaSenha}
                                onChangeText={setNovaSenha}
                            />
                        </InputBox>

                        <InputBox>
                            <Sombra />
                            <Input
                                placeholder="Confirmar senha:"
                                placeholderTextColor="#D527B7"
                                value={confirmarSenha}
                                onChangeText={setConfirmarSenha}
                            />
                        </InputBox>

                        {/* Caixa de botão para o botão */}
                        <ButtonBox>
                            <Sombra />
                            <Button onPress={alterarSenha} disabled={loading}>
                                <ButtonTitle>
                                    {loading ? "Carregando..." : "Confirmar"}
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