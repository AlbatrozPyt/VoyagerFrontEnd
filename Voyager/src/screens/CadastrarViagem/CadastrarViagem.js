import {
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { Container } from "../../components/container/style";
import { LogoViagens } from "../Viagens/style";
import { ButtonViagem, TextButtonViagem } from "../ViagemAtual/style";
import { ButtonViagemDate, InputViagem } from "../../components/Comps";
import DatePicker from "react-native-date-picker";
import { useEffect, useRef, useState } from "react";
import DateTimePickerAndroid from "@react-native-community/datetimepicker";
import moment from "moment";
import { SelectTipoViagem } from "../../components/SelectTipoAtividade";
import { Shadow } from "react-native-shadow-2";

export const CadastrarViagem = ({ navigation }) => {
  const [datePartida, setDatePartida] = useState(new Date());
  const [dateRetorno, setDateRetorno] = useState(new Date());
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const onChangeDate1 = ({ type }, selectedDate) => {
    const currentDate = selectedDate;
    setShow1(false);
    setDatePartida(currentDate);
  };

  const onChangeDate2 = ({ type }, selectedDate) => {
    const currentDate = selectedDate;
    setDateRetorno(currentDate);
    setShow2(false);
  };

  return (
    <ScrollView>
      <Container>
        <LogoViagens
          style={{ marginTop: 80 }}
          source={require(`../../assets/images/LogoMinhasViagens.png`)}
        />

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

            {show1 && (
              <DateTimePickerAndroid
                value={new Date()}
                display="calendar"
                mode="datetime"
                onChange={onChangeDate1}
              />
            )}

            {show2 && (
              <DateTimePickerAndroid
                value={new Date()}
                display="calendar"
                mode="datetime"
                onChange={onChangeDate2}
              />
            )}
          </View>
        </View>

        <SelectTipoViagem />

        <Shadow
          startColor="#000"
          endColor="#000"
          distance={0}
          offset={[2.5, 2.5]}
          containerStyle={{ marginBottom: 10 }}
        >
          <ButtonViagem
            onPress={() => navigation.navigate("CriarRotina")}
            style={{ backgroundColor: "#8531C6" }}
          >
            <TextButtonViagem style={{ color: "#fff" }}>
              Continuar
            </TextButtonViagem>
          </ButtonViagem>
        </Shadow>
      </Container>
    </ScrollView>
  );
};
