import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CameraView, Camera } from "expo-camera";
import * as MediaLibrary from 'expo-media-library'
import { useEffect, useState, useRef } from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { ButtonTitleCamera, ButtonAppointmentSecondary, ButtonModalAppointment, ButtonSecondaryText } from '../Button/style';
import { LastPhoto } from './style';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { ShadowButton2, ShadowDefault } from '../Shadow';
import { ButtonAction } from '../../screens/EditPerfil/style';
import { TitleDefault } from '../Text/style';
// import { Title } from '../Title/style';



export const ModalCamera = ({
  navigation,
  visible,
  setShowCameraModal,
  setCameraCapture,
  getMediaLibrary = false,
  ...rest

}) => {
  const cameraRef = useRef(null)

  const [openModal, setOpenModal] = useState(false)
  const [photo, setPhoto] = useState(null)
  const [tipoCamera, setTipoCamera] = useState('back')
  const [flash, setFlash] = useState('off')

  const [lastPhoto, setLastPhoto] = useState(null)


  async function GetLatestPhoto() {
    const { assets } = await MediaLibrary.getAssetsAsync({ sortBy: [[MediaLibrary.SortBy.creationTime, false]], first: 1 });

    if (assets.length > 0) {
      setLastPhoto(assets[0].uri)
    }

    console.log(assets);
  }

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()

      const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync()

    })();

    if (getMediaLibrary) {
      GetLatestPhoto()
    }



  }, [])

  async function SelectImageGallery() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1
    });

    console.log(result.assets[0].uri);
    if (!result.canceled) {
      setPhoto(result.assets[0].uri)
      setOpenModal(true)
    }
  }

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync()

      console.log(photo.uri);

      setPhoto(photo.uri)

      setOpenModal(true)

      console.log(photo);
    }
  }

  async function obterImagem() {
    await setCameraCapture(photo)

    HandleClose()
  }

  function HandleClose() {
    setShowCameraModal(false)
  }

  async function ClearPhoto() {

    setPhoto(null)

    setOpenModal(false)
  }

  async function UploadPhoto() {
    await MediaLibrary.createAssetAsync(photo)
      .then(() => {
        alert('Foto salva com sucesso')
      }).catch(() => {
        alert('Não foi possivel processar a foto')
      })
  }

  return (
    <Modal visible={visible} style={styles.container}>
      <CameraView
        flash={flash}
        facing={tipoCamera}
        ref={cameraRef}
        style={styles.camera}
      >
        <View style={
          { flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }
        }>
          <TouchableOpacity onPress={() => setFlash(flash == 'off' ? 'on' : 'off')} style={styles.btnFlash}>
            <Feather name={flash === 'on' ? "zap" : "zap-off"} size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => HandleClose()} style={styles.btnClose}>
            <AntDesign name="close" size={30} color="white" />
          </TouchableOpacity>

        </View>

        <View style={styles.ViewButton}>
          <View style={{ flexDirection: 'row', backgroundColor: 'rgba(0, 0, 0, 0.3)', width: '90%', alignItems: 'center', justifyContent: 'space-around', height: 90, borderRadius: 50, marginBottom: 20 }}>



            <TouchableOpacity onPress={() => SelectImageGallery()} style={styles.btnLastPhoto}>
              {
                lastPhoto != null ? (
                  <>
                    <LastPhoto
                      source={{ uri: lastPhoto }}
                    />
                  </>
                ) : (
                  <></>
                )
              }

            </TouchableOpacity>

            <TouchableOpacity onPress={() => CapturePhoto()} style={styles.btnCapture}>
              <FontAwesome name="camera" size={24} color="transparent" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setTipoCamera(current => (current === 'back' ? 'front' : 'back'))} style={styles.btnFlip}>
              <MaterialCommunityIcons
                name="camera-retake"
                size={40}
                color='#fff'
              />
            </TouchableOpacity>

          </View>

        </View>

      </CameraView>




      <Modal animationType='slide' transparent={false} visible={openModal}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20, gap: 30 }}>
          <Image
            style={{ width: '100%', height: 500, borderRadius: 15, marginTop: 50 }}
            source={{ uri: photo }}
          />
          <View style={{ margin: 10, flexDirection: 'row', gap: 20 }}>

            {/* Botão */}
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', }}>
              <ShadowButton2
                styleRender={{ width: 280 }}
                render={
                  <ButtonAction onPress={() => obterImagem() && ClearPhoto()}>
                    <TitleDefault style={{ color: `#8531C6` }}>Confirmar</TitleDefault>
                  </ButtonAction>
                }
              />

              <ShadowDefault
                styleRender={{ width: 280 }}
                render={
                  <ButtonAction
                    onPress={() => ClearPhoto() && setShowCameraModal(true)}
                    style={{ backgroundColor: `#8531C6` }}
                  >
                    <TitleDefault style={{ color: `#fff` }}>Cancelar</TitleDefault>
                  </ButtonAction>
                }
              />
            </View>

          </View>

        </View>
      </Modal>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  btnClear: {
    padding: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnUpload: {
    padding: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnFlash: {
    padding: 25,
    marginTop: 20
  },
  btnClose: {
    padding: 19,
    marginTop: 20
  },
  ViewButton: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',

  },

  btnFlip: {
    padding: 8,

  },
  btnLastPhoto: {
    padding: 20,

  },

  btnCapture: {
    padding: 20,
    width: 60,
    borderRadius: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
})