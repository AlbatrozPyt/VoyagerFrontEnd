import { ActivityIndicator, FlatList, ScrollView } from "react-native"
import { CardExplorar } from "../CardExplorar/CardExplorar"
import { SearchBar } from "../Search/style"
import { ContainerExplorar, ContainerList, LoadingContent } from "./style"
import { Grid } from "react-native-easy-grid"
import api from "../../service/Service";
import { TitleDefault } from "../Text/style"
import { useEffect, useState } from "react"
import { ModalInformativo } from "../Modal"
import { MostrarModal } from "../../utils/MostrarModal"


export const Explorar = ({navigation}) => {
    const [searchText, setSearchText] = useState("")
    const [showLoading, setShowLoading] = useState(false)
    const [placesList, setPlacesList] = useState([])

    const [mensagemModal, setMensagemModal] = useState("")
    const [showModalMensagem, setShowModalMensagem] = useState(false)

    const HandleSearch = async (place) => {
        setShowLoading(true)
        await api.post(`/PlaceSearch?local=${place}`).then(response => {
            setPlacesList(response.data)
        }).catch(erro => {
            MostrarModal("Não foi possível encontrar informações dobre o local informado. Verifique se o nome foi digitado corretamente ou inclua mais detalhes em relação ao nome e localização do mesmo. Após isto tente novamente", setShowModalMensagem, setMensagemModal)
        })
        setShowLoading(false)
        
    }

    return (
        <ContainerExplorar>
            <SearchBar placeholder={`Explorar...`} value={searchText} onChangeText={text => setSearchText(text)} onEndEditing={() => {
                setShowLoading(true)
                HandleSearch(searchText)
            }} />

            {showLoading ?
                <LoadingContent>
                    <TitleDefault>
                        Buscando!
                    </TitleDefault>
                    <ActivityIndicator  color={"#8531C6"} />
                </LoadingContent>
                :
                null}

            {placesList.length === 0 && !showLoading ?
                <LoadingContent>
                    <TitleDefault>
                        Informe um local!
                    </TitleDefault>
                </LoadingContent>
                : null}

            {placesList.length > 0 && !showLoading ?
                <ContainerList>
                    <Grid style={{ padding: 15 }}>
                        <FlatList
                            style={{marginBottom: 50}}
                            horizontal={false}
                            data={placesList}
                            renderItem={({ item }) => <CardExplorar navigation={navigation} dadosLocal={item} />}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                        />
                    </Grid>
                </ContainerList>
                : null}

                <ModalInformativo
                    mensagem={mensagemModal}
                    showModal={showModalMensagem}
                    setShowModal={setShowModalMensagem}
                />
        </ContainerExplorar>
    )
}