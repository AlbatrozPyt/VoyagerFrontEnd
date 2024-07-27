import { useNavigation } from "@react-navigation/native"
import { Button, ButtonTitle } from "../../components/Button/style"
import { Input, Sombra } from "../../components/Input/style"
import { LogoComponent } from "../../components/Logo/Logo"
import { Title } from "../../components/Title/Title"
import { ButtonBox, CenteredContent, Container, FormBox, InputBox, MainContent, MainContentScroll } from "../../components/container/style"
import { LinkMedium } from "../../components/Link/style"
import { MainContentCadastrar } from "./style"
import { useState } from "react"
import api from "../../service/Service"
import { MostrarModal } from "../../utils/MostrarModal"
import { ModalInformativo } from "../../components/Modal"

export const Cadastro = ({ navigation }) => {

    const [dadosCadastro, setDadosCadastro] = useState({
        nome: "",
        email: "",
        senha: ""
    })
    const [mensagemModal, setMensagemModal] = useState("")
    const [showModalMensagem, setShowModalMensagem] = useState(false)
    const [loading, setLoading] = useState(false)

    const [confirmarSenha, setConfirmarSenha] = useState("")

    const ValidarCamposFormulario = (objForm) => {
        //verifica se alguma propriedade do objeto está vazia - retorna true se sim ou false se não
        return Object.keys(objForm).some(chave => objForm[chave] === "")
    }

    const CadastrarUsuario = async () => {
        if(ValidarCamposFormulario(dadosCadastro) || confirmarSenha === ""){
            MostrarModal("Campos vazios. Um ou mais campos de senha foram digitados incorretamente, preencha todos os campos para continuar", setShowModalMensagem, setMensagemModal)
            return
        }

        if(dadosCadastro.senha.trim() !== confirmarSenha.trim()){
            MostrarModal("As senhas não coincidem. Por favor, verifique os campos digitados e tente novamente.", setShowModalMensagem, setMensagemModal)
            return
        }

        setLoading(true)
        await api.post(`/Usuarios`, {
            nome: dadosCadastro.nome,
            email: dadosCadastro.email,
            senha: dadosCadastro.senha
        }).then(() => {
            navigation.replace("Login", {cadastrado: true, email: dadosCadastro.email, senha: dadosCadastro.senha})
        }).catch(erro => {
            MostrarModal("Erro ao cadastrar usuário. Verifique os campos digitados e tente novamente após alguns minutos", setShowModalMensagem, setMensagemModal)
        })
        setLoading(false)
    }

    return (
        <Container>
            {/* Componente de rolagem principal */}
            <MainContentScroll>
                <MainContentCadastrar>
                    {/* Conteúdo centralizado */}
                    <CenteredContent>
                        {/* Componente do logotipo */}
                        <LogoComponent />

                        {/* Caixa de formulário */}
                        <FormBox>
                            {/* Título do formulário */}
                            <Title> CRIE UMA CONTA CONOSCO</Title>

                            {/* Caixa de entrada para o nome */}
                            <InputBox style={{ marginBottom: -25 }}>
                                {/* Sombra para o estilo da caixa de entrada */}
                                <Sombra x style={{ left: 5 }} />
                                {/* Entrada para o nome */}
                                <Input placeholder="Nome:" placeholderTextColor="#D527B7" value={dadosCadastro.nome} onChangeText={(text) => setDadosCadastro({...dadosCadastro, nome: text})}/>
                            </InputBox>

                            {/* Caixa de entrada para o email */}
                            <InputBox style={{ marginBottom: -25 }}>
                                {/* Sombra para o estilo da caixa de entrada */}
                                <Sombra x style={{ left: 5 }} />
                                {/* Entrada para o email */}
                                <Input placeholder="Email:" placeholderTextColor="#D527B7" value={dadosCadastro.email} onChangeText={(text) => setDadosCadastro({...dadosCadastro, email: text})}/>
                            </InputBox>

                            {/* Caixa de entrada para a senha */}
                            <InputBox style={{ marginBottom: -25 }}>
                                {/* Sombra para o estilo da caixa de entrada */}
                                <Sombra x style={{ left: 5 }} />
                                {/* Entrada para a senha */}
                                <Input placeholder="Senha:" placeholderTextColor="#D527B7" secureTextEntry value={dadosCadastro.senha} onChangeText={(text) => setDadosCadastro({...dadosCadastro, senha: text})}/>
                            </InputBox>

                            {/* Caixa de entrada para confirmar a senha */}
                            <InputBox>
                                {/* Sombra para o estilo da caixa de entrada */}
                                <Sombra x style={{ left: 5 }} />
                                {/* Entrada para confirmar a senha */}
                                <Input placeholder="Confirmar Senha:" placeholderTextColor="#D527B7" secureTextEntry value={confirmarSenha} onChangeText={(text) => setConfirmarSenha(text)}/>
                            </InputBox>

                            {/* Caixa de botão */}
                            <ButtonBox>
                                {/* Sombra para o estilo da caixa de botão */}
                                <Sombra x style={{ left: 5 }} />
                                {/* Botão para navegar para a tela de login */}
                                <Button onPress={loading ? null : () => CadastrarUsuario()}>
                                    {/* Título do botão */}
                                    <ButtonTitle>
                                        {loading ? "Cadastrando..." : "Cadastrar"}
                                    </ButtonTitle>
                                </Button>
                            </ButtonBox>

                            <LinkMedium
                                style={{ alignSelf: 'center', color: '#8531C6', marginTop: 10 }}
                                onPress={() => navigation.navigate("Login")}>
                                Cancelar
                            </LinkMedium>

                        </FormBox>
                    </CenteredContent>
                </MainContentCadastrar>
            </MainContentScroll>

            <ModalInformativo
                mensagem={mensagemModal}
                setShowModal={setShowModalMensagem}
                showModal={showModalMensagem}
            />
        </Container>
    );
}; 
