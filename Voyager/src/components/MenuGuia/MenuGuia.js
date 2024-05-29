import { useState } from "react"
import { ButtonGuia, ContainerGuia, TextGuia } from "./style"
import { Shadow } from "react-native-shadow-2"

export const Guia = () => {

    const [buttonClicked, setButtonClicked] = useState(true)

    return (
        <ContainerGuia>
            <Shadow
                disabled={!buttonClicked}
                startColor="#000"
                endColor="#000"
                distance={0}
                offset={[5, 5]}
            >
                <ButtonGuia
                    style={buttonClicked && { backgroundColor: `#8531C6` }}
                    onPress={() => setButtonClicked(true)}
                >
                    <TextGuia
                        style={buttonClicked && { color: `#fff` }}
                    >
                        Feed
                    </TextGuia>
                </ButtonGuia>
            </Shadow>


            <Shadow
                disabled={buttonClicked}
                startColor="#000"
                endColor="#000"
                distance={0}
                offset={[5, 5]}
            >
                <ButtonGuia
                    style={!buttonClicked && { backgroundColor: `#8531C6` }}
                    onPress={() => setButtonClicked(false)}
                >
                    <TextGuia
                        style={!buttonClicked && { color: `#fff` }}
                    >
                        Explorar
                    </TextGuia>
                </ButtonGuia>
            </Shadow>
        </ContainerGuia>
    )
}