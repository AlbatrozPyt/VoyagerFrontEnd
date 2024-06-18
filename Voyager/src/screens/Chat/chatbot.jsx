import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { Container } from "../../components/container/style";
import {
  BotaoVoltarStyle,
  ChatSectionBox,
  ContainerChat,
  ContainerScreenChat,
  HeaderChat,
  InputPromptStyle,
  LogoGemini,
  LogoVoyager,
  PontoHeader,
  PromptChatStyle,
  PromptChatStyleShadow,
  PromptChatText,
} from "./style";
import { ShadowDefault } from "../../components/Shadow";
import { useContext, useEffect, useState } from "react";
import { Shadow } from "react-native-shadow-2";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { UserContext } from "../../contexts/MyContext";

//Componente de volvar para a tela anterior
const BotaoVoltar = ({ onPress }) => {
  return (
    <BotaoVoltarStyle onPress={onPress}>
      <Image
        style={{ height: "100%", width: "100%" }}
        source={{
          uri: "https://voyagerblobstorage.blob.core.windows.net/voyagercontainerblob/Reply-Arrow.png",
        }}
      />
    </BotaoVoltarStyle>
  );
};

//Componente de input do prompt do usuário
const InputPrompt = ({ value, setValue, onSubmit, editavel }) => {
  return (
    <Shadow
      startColor="#000"
      endColor="#000"
      distance={0}
      offset={[5, 5]}
      containerStyle={{ marginBottom: 10, position: "absolute", bottom: 10 }}
    >
      <InputPromptStyle
        placeholder={"Digite Aqui."}
        placeholderTextColor={`#BA31C6`}
        value={value}
        onChangeText={(text) => setValue(text)}
        onEndEditing={() => onSubmit(value)}
        editable={editavel}
      />
    </Shadow>
  );
};

const PromptChat = ({ type, mensagem }) => {
  return (
    <>
      <PromptChatStyleShadow type={type}>
        <PromptChatStyle type={type}>
          <PromptChatText type={type}>{mensagem}</PromptChatText>
        </PromptChatStyle>
      </PromptChatStyleShadow>
      <View style={{ marginBottom: 25 }}></View>
    </>
  );
};

//Elemento que de fato será a tela do ChatBot
export const ChatBot = ({ navigation, route }) => {
  const {user} = useContext(UserContext)

  //States
  const [prompt, setPrompt] = useState("");
  const [historicoChat, setHistoricoChat] = useState([]);
  const [gerandoResposta, setGerandoResposta] = useState(false);
  const [editavel, setEditavel] = useState(true);

  const mensagemInicial = `
  Olá! Eu sou seu assistente de viagem pessoal! Para te ajudar a planejar sua viagem à ${route.params.cidadeDestino}
  
  Comigo, você pode:
  => Decidir uma lista de tarefas personalizada para sua viagem;
  =>Pedir uma sugestão de cronograma de viagem;
  =>Encontrar os melhores restaurantes da região;
  =>Descobrir os locais mais incríveis para se hospedar;
  =>Obter informações sobre o clima e outras dicas úteis;
  
  E muito mais! 
  
  Conte comigo para tornar sua viagem inesquecível! ✈️
    `;

  //Configurando o modelo do Gemini ------------------------------------------------------------------------------

  //defeinindo a minha chave API do Google AI Studio
  const apiKey = "AIzaSyCAMtSLTyOYk4DaIv--qxX8eZ7dZ2XpGzk";

  //instancia o objeto ganAi que vai configurar o modelo pela apiKey e pelas configurações de parâmetros
  const genAi = new GoogleGenerativeAI(apiKey);

  //define configurações das respostas do modelo
  const generationConfig = { temperature: 0.5, candidateCount: 1 };
  const systemInstruction = `
  "persona": "Eu sou um assistente de viagem que ajuda a planejar a sua próxima viagem para ${route.params.cidadeDestino}, ${route.params.paisDestino}. Uma viagem que se iniciará na data ${route.params.dataInicial} e se finalizará na data ${route.params.dataFinal} partindo de ${route.params.cidadeOrigem}, ${route.params.paisOrigem}. Posso te ajudar a criar uma lista de tarefas, encontrar restaurantes, hotéis e atrações, e fornecer informações sobre o clima e outros detalhes relevantes da região que você escolher.",
    "instructions": "Responda a todas as perguntas do usuário sobre planejamento de viagens, incluindo: \n\n"
    + "**1. Criação de lista de tarefas:** Se o usuário quiser criar uma lista de tarefas, auxilie-o a listar os itens que ele gostaria de fazer durante a viagem. Exemplo: 'Quais atividades você gostaria de fazer durante sua viagem?'\n"
    + "**2. Sugestões de restaurantes:** Se o usuário solicitar sugestões de restaurantes, ofereça opções com base na região e preferências do usuário. Exemplo: 'Você tem alguma preferência culinária? Gostaria de um restaurante casual ou sofisticado?'\n"
    + "**3. Sugestões de hotéis:** Se o usuário quiser dicas de hospedagem, ofereça opções com base no orçamento e preferências do usuário. Exemplo: 'Qual o seu orçamento para a estadia? Você prefere um hotel com piscina ou próximo a pontos turísticos?'\n"
    + "**4. Informações gerais sobre a região:** Se o usuário perguntar sobre o clima, atrações ou outras informações relevantes, responda de forma clara e concisa. Exemplo: 'O clima na região é geralmente quente e seco. Há diversos pontos turísticos históricos e museus para visitar.'\n\n"
    + "**Evite:**\n"
    + "**a)** Conversar sobre assuntos que não se relacionem a viagens.\n"
    + "**b)** Expressar opiniões pessoais ou fazer comentários sobre política, religião, ou outros temas controversos.\n"
    + "**c)** Responder com informações imprecisas ou falsas. Se não souber a resposta, peça ao usuário para reformular a pergunta ou indique recursos que possam ajudar.\n"
    + "**d)** Usar linguagem coloquial ou informal. Mantenha um tom profissional e amigável."
    + "**e)** Usar emojis em suas respostas."
    + "**f)** Retornar respostas que não estejam em formatos de textos ou parágrafos."
  `;
  const safetySettings = [
    {
      category: "HARM_CATEGORY_HATE_SPEECH",
      threshold: "BLOCK_NONE",
    },
    {
      category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      threshold: "BLOCK_NONE",
    },
    {
      category: "HARM_CATEGORY_HARASSMENT",
      threshold: "BLOCK_NONE",
    },
    {
      category: "HARM_CATEGORY_DANGEROUS_CONTENT",
      threshold: "BLOCK_NONE",
    },
  ];

  //instanciando o modelo
  const modelo = genAi.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig,
    safetySettings,
    systemInstruction,
  });

  //instancia um chat a partir do modelo
  const chat = modelo.startChat({ history: [] });

  //---------------------------------------------------------------------------------------------------------------

  //função para sair do chat
  const CloseChatBot = () => {
    setHistoricoChat([]);
    navigation.navigate("CriarRotina", {
      dataInicial: route.params.dataInicial,
      dataFinal: route.params.dataFinal,
      paisOrigem: route.params.paisOrigem,
      cidadeOrigem: route.params.cidadeOrigem,
      paisDestino: route.params.paisDestino,
      cidadeDestino: route.params.cidadeDestino,
      idTipoViagem: route.params.idTipoViagem,
      idUsuario: user.jti,
    });
  };

  //Função que irá enviar o prompt ao gemini e obter a resposta
  const PromptSubmit = (prompt) => {
    if (prompt === "") {
      return null;
    }

    historicoChat.push({ id: Date.now(), texto: prompt.trim() });

    setTimeout(async () => {
      setEditavel(false);
      setGerandoResposta(true);
      await chat
        .sendMessage(prompt)
        .then((response) => {
          setHistoricoChat([
            ...historicoChat,
            { id: Date.now(), texto: response.response.text().trim() },
          ]);
        })
        .catch((erro) => {
          setHistoricoChat([...historicoChat, { id: Date.now(), texto: erro }]);
        });
      setGerandoResposta(false);
      setEditavel(true);
    }, 1000);

    setPrompt("");
  };

  return (
    <>
    {/* Header com as logos */}
    <HeaderChat>
            {/* Botão voltar */}
            <BotaoVoltar onPress={() => CloseChatBot()} />
            <LogoVoyager
              source={{
                uri: "https://voyagerblobstorage.blob.core.windows.net/voyagercontainerblob/logoVoyager.png",
              }}
            />
            <PontoHeader>.</PontoHeader>
            <LogoGemini
              source={{
                uri: "https://voyagerblobstorage.blob.core.windows.net/voyagercontainerblob/logoGemini.png",
              }}
            />
          </HeaderChat>
    {/* //Componente para adaptar a tela à altura do teclado */}
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }} // Ajuste para o conteúdo preencher a tela
      extraScrollHeight={100} // Adiciona um espaço extra para evitar que o teclado corte o conteúdo
    >
      <ContainerScreenChat>
        <StatusBar
          barStyle={"dark-content"}
          translucent={true}
          backgroundColor={"#8531C6"}
        />

        <ContainerChat>

          {/* Seção de envio e resposta do chat */}
          <ChatSectionBox>
            <PromptChat mensagem={mensagemInicial} type={"gemini"} />
            {historicoChat.map((mensagem, index) => {
              return (
                <PromptChat
                  key={mensagem.id}
                  mensagem={mensagem.texto}
                  type={index % 2 == 0 ? "usuario" : "gemini"}
                />
              );
            })}
            {gerandoResposta ? (
              <Image
                style={{ width: 100, height: 50 }}
                source={{
                  uri: "https://voyagerblobstorage.blob.core.windows.net/voyagercontainerblob/load_gif.webp",
                }}
              />
            ) : null}
          </ChatSectionBox>

          {/* Input de prompt do usuário */}
          <InputPrompt
            value={prompt}
            setValue={setPrompt}
            onSubmit={PromptSubmit}
            editavel={editavel}
          />
        </ContainerChat>
      </ContainerScreenChat>
    </KeyboardAwareScrollView>
    </>
  );
};
