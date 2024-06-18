import { FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { Container } from "../../components/container/style";
import { LogoViagens } from "../Viagens/style";
import { IconBack } from "../ViewPost/style";
import {
  ContainerPostIts,
  PostItImage,
  PostIts,
  TextData,
  TextDestino,
  TitleViagensFuturas,
} from "./style";
import { Shadow } from "react-native-shadow-2";
import { Back } from "../../components/Button";
import { MinhasViagens } from "../../components/Logo/Logo";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import api from "../../service/Service";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/MyContext";
import moment from "moment";

export const ViagensFuturas = ({ navigation }) => {
  const [viagensPendentes, setViagensPendentes] = useState(null)
  const { user } = useContext(UserContext)

  const BuscarViagensFuturas = async () => {
    await api.get(`/Viagens/ListarViagensFuturas/${user.jti}`)
      .then(response => {
        setViagensPendentes(response.data);
        // console.log(viagensConcluidas.dataFinal);
      })
      .catch(erro => {
        alert(erro)
      })
  }

  useEffect(() => {
    BuscarViagensFuturas()
  }, [user])

  return (
    <Container>
      <Back navigation={navigation} screen={'Viagens'} />

      <MinhasViagens />

      <TitleViagensFuturas>
        Viagens Futuras{" "}
        <MaterialCommunityIcons
          name="airplane-marker"
          size={30}
          color="black"
        />
      </TitleViagensFuturas>

      <ScrollView style={{ width: "100%" }}>
        {viagensPendentes != null && viagensPendentes.length > 0  ?
          <ContainerPostIts>
            {viagensPendentes.map((viagem) =>
              <PostIts
                key={viagem.id}
                onPress={() =>
                  navigation.navigate("ViagemAtual", { idViagem: viagem.id })
                }
              >
                <PostItImage
                  source={{
                    uri: "https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/post-it.png?raw=true"
                  }}
                />

                <TextDestino>{viagem.endereco.cidadeDestino}</TextDestino>
                <TextData>{moment(viagem.dataInicial).format("DD/MM")} - {moment(viagem.dataFinal).format("DD/MM")}</TextData>
              </PostIts>

            )}
          </ContainerPostIts>
          : <TitleViagensFuturas style={{ width: `90%`, alignSelf: `center`, textAlign: `center` }}>
            Ainda não há viagens programadas
          </TitleViagensFuturas>}
      </ScrollView>
    </Container>
  );
};
