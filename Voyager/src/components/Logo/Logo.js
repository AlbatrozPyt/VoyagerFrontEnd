import { LogoViagens } from "../../screens/Viagens/style";
import { LogoVoyager } from "./style";

export const LogoComponent = ({ source = "" }) => {
  return (
    <LogoVoyager
      source={{
        uri: "https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/LogoVoy.png?raw=true",
      }}
    />
  );
};

export const MinhasViagens = () => {
  return (
    <LogoViagens
      style={{ marginTop: 80 }}
      source={{
        uri: "https://github.com/AlbatrozPyt/VoyagerFrontEnd/blob/develop/Voyager/src/assets/images/LogoMinhasViagens.png?raw=true",
      }}
    />
  );
};
