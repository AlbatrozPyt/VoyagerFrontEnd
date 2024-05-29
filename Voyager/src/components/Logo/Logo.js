import { LogoVoyager } from "./style"

export const LogoComponent = ({ path = "../../assets/VoyagerLogo3.png", source = '' }) => {
    return (
        <LogoVoyager source={require('../../assets/images/VoyagerLogo3.png')} />
    ); 
};