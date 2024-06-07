import { useNavigation } from "@react-navigation/native"
import { Button, ButtonTitle } from "../../components/Button/style"
import { Input, Sombra } from "../../components/Input/style"
import { LogoComponent } from "../../components/Logo/Logo"
import { Title } from "../../components/Title/Title"
import { ButtonBox, CenteredContent, Container, FormBox, InputBox, MainContent, MainContentScroll } from "../../components/container/style"
import { LinkMedium } from "../../components/Link/style"

export const Cadastro = ({navigation}) => {

    return (
        <Container>
            {/* Componente de rolagem principal */}
            <MainContentScroll>
                <MainContent>
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
                                <Input placeholder="Nome:" placeholderTextColor="#D527B7" />
                            </InputBox>

                            {/* Caixa de entrada para o email */}
                            <InputBox style={{ marginBottom: -25 }}>
                                {/* Sombra para o estilo da caixa de entrada */}
                                <Sombra x style={{ left: 5 }} />
                                {/* Entrada para o email */}
                                <Input placeholder="Email:" placeholderTextColor="#D527B7" />
                            </InputBox>

                            {/* Caixa de entrada para a data de nascimento */}
                            <InputBox style={{ marginBottom: -25 }}>
                                {/* Sombra para o estilo da caixa de entrada */}
                                <Sombra x style={{ left: 5 }} />
                                {/* Entrada para a data de nascimento */}
                                <Input placeholder="Data de Nascimento:" placeholderTextColor="#D527B7" />
                            </InputBox>

                            {/* Caixa de entrada para a senha */}
                            <InputBox style={{ marginBottom: -25 }}>
                                {/* Sombra para o estilo da caixa de entrada */}
                                <Sombra x style={{ left: 5 }} />
                                {/* Entrada para a senha */}
                                <Input placeholder="Senha:" placeholderTextColor="#D527B7" secureTextEntry />
                            </InputBox>

                            {/* Caixa de entrada para confirmar a senha */}
                            <InputBox>
                                {/* Sombra para o estilo da caixa de entrada */}
                                <Sombra x style={{ left: 5 }} />
                                {/* Entrada para confirmar a senha */}
                                <Input placeholder="Confirmar Senha:" placeholderTextColor="#D527B7" secureTextEntry />
                            </InputBox>

                            {/* Caixa de botão */}
                            <ButtonBox>
                                {/* Sombra para o estilo da caixa de botão */}
                                <Sombra x style={{ left: 5 }} />
                                {/* Botão para navegar para a tela de login */}
                                <Button onPress={() => navigation.navigate("Login")}>
                                    {/* Título do botão */}
                                    <ButtonTitle>
                                        Entrar
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
                </MainContent>
            </MainContentScroll>
        </Container>
    );
}; 
