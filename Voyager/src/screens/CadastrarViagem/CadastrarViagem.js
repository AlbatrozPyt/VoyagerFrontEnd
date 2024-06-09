import { ScrollView, View } from "react-native";
import { Container } from "../../components/container/style";
import { ButtonViagem, TextButtonViagem } from "../ViagemAtual/style";
import { ButtonViagemDate, InputViagem } from "../../components/Comps";
import { useState } from "react";
import moment from "moment";
import { SelectTipoViagem } from "../../components/SelectTipoAtividade";
import { ShadowDefault } from "../../components/Shadow";

import { MinhasViagens } from "../../components/Logo/Logo";

export const CadastrarViagem = ({ navigation }) => {
  const [datePartida, setDatePartida] = useState(new Date());
  const [dateRetorno, setDateRetorno] = useState(new Date());
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <ScrollView>
      <Container>
        <MinhasViagens />

        <View style={{ gap: 20, padding: 10 }}>
          <InputViagem placeholder={`País`} />
          <InputViagem placeholder={`Cidade`} />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <ButtonViagemDate
              setState={setShow1}
              labelButton={"Data de partida"}
              value={moment(datePartida).format("DD/MM/YYYY")}
            />

            <ButtonViagemDate
              setState={setShow2}
              labelButton={"Data de retorno"}
              value={moment(dateRetorno).format("DD/MM/YYYY")}
            />
          </View>
        </View>

        <SelectTipoViagem />

        <ShadowDefault
          render={
            <ButtonViagem
              onPress={() => navigation.navigate("CriarRotina")}
              style={{ backgroundColor: "#8531C6" }}
            >
              <TextButtonViagem style={{ color: "#fff" }}>
                Continuar
              </TextButtonViagem>
            </ButtonViagem>
          }
        />
      </Container>
    </ScrollView>
  );
};
