import { ScrollView, View } from "react-native";
import { Container } from "../../components/container/style";
import { ButtonViagem, TextButtonViagem } from "../ViagemAtual/style";
import { ButtonViagemDate, InputViagem } from "../../components/Comps";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { SelectTipoViagem } from "../../components/SelectTipoAtividade";
import { ShadowDefault } from "../../components/Shadow";

import { MinhasViagens } from "../../components/Logo/Logo";
import { ModalCalendar } from "../../components/Modal";
import { TitleDefault } from "../../components/Text/style";

import { UserContext } from "../../contexts/MyContext"

export const CadastrarViagem = ({ navigation }) => {

  const { user } = useContext(UserContext)

  const [datePartida, setDatePartida] = useState(new Date());
  const [dateRetorno, setDateRetorno] = useState(new Date());
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [date1, setDate1] = useState(null)
  const [date2, setDate2] = useState(null)

  const [tipoViagem, setTipoViagem] = useState('9fbdf547-246f-44ea-8c23-7135978bab62');

  const [paisOrigem, setPaisOrigem] = useState(null)
  const [cidadeOrigem, setCidadeOrigem] = useState(null)

  const [paisDestino, setPaisDestino] = useState(null)
  const [cidadeDestino, setCidadeDestino] = useState(null)

  return (
    <ScrollView>
      <Container>
        <MinhasViagens />

        <View style={{ gap: 20, padding: 10 }}>

          <TitleDefault
            style={{ fontFamily: 'MoonGet' }}
          >
            Origem
          </TitleDefault>

          <InputViagem
            placeholder={`País`}
            onChangeText={(txt) => setPaisOrigem(txt)}
          />
          <InputViagem
            placeholder={`Cidade`}
            onChangeText={(txt) => setCidadeOrigem(txt)}
          />
        </View>

        <View style={{ gap: 20, padding: 10 }}>

          <TitleDefault
            style={{ fontFamily: 'MoonGet' }}
          >
            Destino
          </TitleDefault>

          <InputViagem
            placeholder={`País`}
            onChangeText={(txt) => setPaisDestino(txt)}
          />
          <InputViagem
            placeholder={`Cidade`}
            onChangeText={(txt) => setCidadeDestino(txt)}
          />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <ButtonViagemDate
              setState={setShow1}
              labelButton={"Data de partida"}
              value={
                date1 !== null
                  ? moment(date1).format("DD/MM/YYYY")
                  : moment(new Date).format("DD/MM/YYYY")
              }
            />

            <ButtonViagemDate
              setState={setShow2}
              labelButton={"Data de retorno"}
              value={
                date2 !== null
                  ? moment(date2).format("DD/MM/YYYY")
                  : moment(new Date).format("DD/MM/YYYY")
              }
            />
          </View>
        </View>

        <SelectTipoViagem tipoViagem={tipoViagem} setTipoViagem={setTipoViagem} />

        <View style={{ marginBottom: 20 }}>
          <ShadowDefault
            render={
              <ButtonViagem
                onPress={() => navigation.navigate("CriarRotina", {
                  dataInicial: date1,
                  dataFinal: date2,
                  paisOrigem: paisOrigem,
                  cidadeOrigem: cidadeOrigem,
                  paisDestino: paisDestino,
                  cidadeDestino: cidadeDestino,
                  idTipoViagem: tipoViagem,
                  idUsuario: user.jti
                })}
                style={{ backgroundColor: "#8531C6" }}
              >
                <TextButtonViagem style={{ color: "#fff" }}>
                  Continuar
                </TextButtonViagem>
              </ButtonViagem>
            }
          />
        </View>

        <ModalCalendar
          visible={show1}
          setVisible={setShow1}
          date={date1}
          setDate={setDate1}
        />

        <ModalCalendar
          visible={show2}
          setVisible={setShow2}
          date={date2}
          setDate={setDate2}
        />
      </Container>
    </ScrollView>
  );
};
