import { useState } from "react";
import { ButtonGuia, ContainerGuia, TextGuia } from "./style";
import { Shadow } from "react-native-shadow-2";
import { Image } from "react-native";

export const Guia = ({ setGuia }) => {
  const [buttonClicked, setButtonClicked] = useState(true);

  return (
    <ContainerGuia>
      <Shadow startColor="#000" endColor="#000" distance={0} offset={[5, 5]}>
        <ButtonGuia
          style={buttonClicked && { backgroundColor: `#8531C6` }}
          onPress={() => {
            setButtonClicked(true);
            setGuia("feed");
          }}
        >
          <TextGuia style={buttonClicked && { color: `#fff` }}>Feed</TextGuia>
        </ButtonGuia>
      </Shadow>

      <Shadow startColor="#000" endColor="#000" distance={0} offset={[5, 5]}>
        <ButtonGuia
          style={!buttonClicked && { backgroundColor: `#8531C6` }}
          onPress={() => {
            setButtonClicked(false);
            setGuia("explorar");
          }}
        >
          <TextGuia style={!buttonClicked && { color: `#fff` }}>
            Explorar
          </TextGuia>
        </ButtonGuia>
      </Shadow>
    </ContainerGuia>
  );
};

export const GuiaPerfil = ({ setGuia }) => {
  const [buttonClicked, setButtonClicked] = useState(true);
  return (
    <ContainerGuia>
      <Shadow startColor="#000" endColor="#000" distance={0} offset={[5, 5]}>
        <ButtonGuia
          style={buttonClicked && { backgroundColor: `#8531C6` }}
          onPress={() => {
            setButtonClicked(true);
            setGuia("posts");
          }}
        >
          {buttonClicked ? (
            <Image source={require("../../assets/images/image-white.png")} />
          ) : (
            <Image source={require("../../assets/images/image-black.png")} />
          )}
        </ButtonGuia>
      </Shadow>

      <Shadow startColor="#000" endColor="#000" distance={0} offset={[5, 5]}>
        <ButtonGuia
          style={!buttonClicked && { backgroundColor: `#8531C6` }}
          onPress={() => {
            setButtonClicked(false);
            setGuia("curtidos");
          }}
        >
          {buttonClicked ? (
            <Image source={require("../../assets/images/heart-black.png")} />
          ) : (
            <Image source={require("../../assets/images/heart-white.png")} />
          )}
        </ButtonGuia>
      </Shadow>
    </ContainerGuia>
  );
};
