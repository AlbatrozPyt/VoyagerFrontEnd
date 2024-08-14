import { useState } from "react";
import { ButtonGuia, ContainerGuia, ContainerGuiaItem, TextGuia, TitleGuiaItem } from "./style";
import { Shadow } from "react-native-shadow-2";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
          <TextGuia
            style={
              buttonClicked && {
                color: `#fff`,
                fontFamily: `LouisGeorgeCafe-Bold`,
              }
            }
          >
            Feed
          </TextGuia>
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
          <TextGuia
            style={
              !buttonClicked && {
                color: `#fff`,
                fontFamily: `LouisGeorgeCafe-Bold`,
              }
            }
          >
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
      <ContainerGuiaItem>
      <TitleGuiaItem>Meus posts</TitleGuiaItem>
      <Shadow startColor="#000" endColor="#000" distance={0} offset={[5, 5]}>
        <ButtonGuia
          style={buttonClicked && { backgroundColor: `#8531C6` }}
          onPress={() => {
            setButtonClicked(true);
            setGuia("posts");
          }}
        >
          {buttonClicked ? (
            <MaterialCommunityIcons name="image-plus" size={30} color="#fff" />
          ) : (
            <MaterialCommunityIcons name="image-plus" size={30} color="#000" />
          )}
        </ButtonGuia>
      </Shadow>
      </ContainerGuiaItem>

      <ContainerGuiaItem>
        <TitleGuiaItem>Favoritos</TitleGuiaItem>
      <Shadow startColor="#000" endColor="#000" distance={0} offset={[5, 5]}>
        <ButtonGuia
          style={!buttonClicked && { backgroundColor: `#8531C6` }}
          onPress={() => {
            setButtonClicked(false);
            setGuia("curtidos");
          }}
        >
          {buttonClicked ? (
            <MaterialCommunityIcons name="heart" size={30} color="#000" />
          ) : (
            <MaterialCommunityIcons name="heart" size={30} color="#fff" />
          )}
        </ButtonGuia>
      </Shadow>
      </ContainerGuiaItem>
    </ContainerGuia>
  );
};
