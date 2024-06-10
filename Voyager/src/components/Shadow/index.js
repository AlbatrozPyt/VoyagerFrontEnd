import { Shadow } from "react-native-shadow-2";
import { Shadow1 } from "./style";

export const ContainerShadowViagens = ({ render }) => {
  return (
    <Shadow
      startColor="#8531C6"
      endColor="#8531C6"
      distance={0}
      offset={[8, 8]}
      containerStyle={{ marginBottom: 20 }}
    >
      <Shadow1
        startColor="#000"
        endColor="#000"
        distance={0}
        offset={[2.5, 2.5]}
        style={{ borderRadius: 10 }}
      >
        {render}
      </Shadow1>
    </Shadow>
  );
};

export const ShadowDefault = ({ render }) => {
  return (
    <Shadow
      startColor="#000"
      endColor="#000"
      distance={0}
      offset={[5, 5]}
      containerStyle={{ marginBottom: 10 }}
    >
      {render}
    </Shadow>
  );
};

export const ShadowDefault2 = ({ render }) => {
  return (
    <Shadow
      startColor="#000"
      endColor="#000"
      distance={0}
      offset={[4, 4]}
      containerStyle={{ margin: 10 }}
    >
      {render}
    </Shadow>
  );
};

export const ShadowButton2 = ({ render }) => {
  return (
    <Shadow
      startColor="#8531C6"
      endColor="#8531C6"
      distance={0}
      offset={[8, 8]}
      containerStyle={{ marginBottom: 20 }}
    >
      <Shadow
        startColor="#000"
        endColor="#000"
        distance={0}
        offset={[2.5, 2.5]}
      >
        {render}
      </Shadow>
    </Shadow>
  );
};

export const ShadowButton3 = ({ render }) => {
  return (
    <Shadow
      startColor="#8531C6"
      endColor="#8531C6"
      distance={0}
      offset={[6, 6]}
      containerStyle={{ margin: 10 }}
    >
      <Shadow startColor="#000" endColor="#000" distance={0} offset={[2, 2]}>
        {render}
      </Shadow>
    </Shadow>
  );
};

export const ShadowOpacity = ({ render }) => {
  return (
    <Shadow
      startColor="rgba(0, 0, 0, .2)"
      endColor="rgba(0, 0, 0, .2)"
      distance={0}
      offset={[4, 4]}
      style={{ borderRadius: 10 }}
    >
      {render}
    </Shadow>
  );
};

export const ShadowPerfilImage = ({ children }) => {
  return (
    <Shadow
      startColor="#000"
      endColor="#000"
      distance={0}
      offset={[4, 4]}
      style={{ borderRadius: 8 }}
    >
      {children}
    </Shadow>
  );
};

export const ShadowBoxPerfil = ({ children }) => {
  return (
    <Shadow
      startColor="rgba(0, 0, 0, .2)"
      endColor="rgba(0, 0, 0, .2)"
      distance={0}
      offset={[4, 4]}
      containerStyle={{ bottom: 50, right: 60 }}
      style={{ borderRadius: 10 }}
    >
      {children}
    </Shadow>
  );
};

export const ShadowTakePicture = ({ children }) => {
  return (
    <Shadow
      startColor="rgba(0, 0, 0)"
      endColor="rgba(0, 0, 0)"
      distance={0}
      offset={[4, 4]}
      containerStyle={{ position: "absolute", left: 20, bottom: -20 }}
    >
      {children}
    </Shadow>
  );
};
