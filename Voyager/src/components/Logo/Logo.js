import { LogoVoyager } from "./style"

export const LogoComponent = ({ path = "../../assets/LogoVoy.png", source = '' }) => {
    return (
        <LogoVoyager source={require('../../assets/images/LogoVoy.png')} />
    ); 
};