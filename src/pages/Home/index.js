import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'
import { Audio } from 'expo-av'

import Header from '../../components/Header'

//============ Imagens dos ícones ============
import Beijo from './../../../assets/images/beijoca.png'
import Bomba from './../../../assets/images/bomba.png'
import Descarga from './../../../assets/images/descarga.png'
import Pistola from './../../../assets/images/pistola.png'
import Tambor from './../../../assets/images/tambor.png'
import Faca from './../../../assets/images/tramontina.png'
import Love from './../../../assets/images/love.png'
import Gato from './../../../assets/images/gato.png'
import Brasil from './../../../assets/images/brasil.png'
import Aplausos from './../../../assets/images/palmas.png'
import Bender from './../../../assets/images/bender.png'
import QueDelicia from './../../../assets/images/aiQueDelicia.png'
import QueDemais from './../../../assets/images/queDemais.png'
import engasgueiComigo from './../../../assets/images/engasguei.png'
import Happy from './../../../assets/images/happy.png'
import Flamengo from './../../../assets/images/flamengo.png'
import Vasco from './../../../assets/images/vasco.png'
import Fluminense from './../../../assets/images/fluminense.png'
import Botafogo from './../../../assets/images/botafogo.png'
import Santos from './../../../assets/images/santos.png'
import SaoPaulo from './../../../assets/images/saoPaulo.png'
import Palmeiras from './../../../assets/images/palmeiras.png'
import Corinthians from './../../../assets/images/corinthians.png'
import Galo from './../../../assets/images/galo.png'
import Cruzeiro from './../../../assets/images/cruzeiro.png'
import Gremio from './../../../assets/images/gremio.png'
import Internacional from './../../../assets/images/internacional.png'
import Zacarias from './../../../assets/images/zacarias.png'
import Baby from './../../../assets/images/baby.png'
import CaixaRegistradora from './../../../assets/images/caixaRegistradora.png'
import ForteAbraço from './../../../assets/images/bolsonaroForteAbraco.png'
import ParaJoaoKleber from './../../../assets/images/joaoKleber.png'
import Garrafa from './../../../assets/images/coca.png'
import Grilo from './../../../assets/images/grilo.png'
import Ai from './../../../assets/images/ai.png'

export default function App() {
  const [sound, setSound] = React.useState()

  //=================================== Funçoes (sons de cada botão) =========================
  async function beijoca() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/sounds/beijoca.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function bomba() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/sounds/bomba.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function descarga() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/descarga.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function pistola() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/tiro.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function corteRapido() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/corteRapido.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function tambor() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/tambores.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function love() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/love.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function gato() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/miado.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function brasil() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/brasil.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function aplausos() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/aplausos.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function agoraEntendi() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/agoraEuEntendi.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function delicia() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/aiQueDelicia.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function demais() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/queDemais.mp3')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function engasguei() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/dilmaEngasga.mp3')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function happy() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/dilmaHappyBirthday.mp3')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function flamengo() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/flamengo.wav')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function vasco() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/vasco.wav')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function fluminense() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/fluminense.wav')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function botafogo() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/botafogo.wav')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function saoPaulo() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/saoPaulo.wav')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function santos() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/santos.wav')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }
  async function palmeiras() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/palmeiras.wav')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function conrinthians() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/corinthians.wav')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function gremio() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/gremio.wav')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function internacional() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/inter.wav')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function galo() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/galo.wav')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function cruzeiro() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/cruzeiro.wav')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function santos() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/santos.wav')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function zacarias() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/zacarias.mp3')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function baby() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/risadaBebe.mp3')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function caixaRegistradora() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/caixaRegistradora.mp3')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function forteAbraco() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/umForteAbraco.wav')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function paraJoaoKleber() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/paraJoaoKleber.wav')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function garrafa() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/abrindoGarrafa.wav')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function grilo() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/grilo.mp3')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  async function ai() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('./../../../assets/sounds/aii.mp3')
    )

    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity style={styles.button} onPress={brasil}>
        <Image source={Brasil} />
        <Text style={styles.title}>Brasil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={forteAbraco}>
        <Image source={ForteAbraço} />
        <Text style={styles.title}>Forte abraço</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={pistola}>
        <Image source={Pistola} />
        <Text style={styles.title}>Tiro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={beijoca}>
        <Image source={Beijo} />
        <Text style={styles.title}>Beijoca</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={bomba}>
        <Image source={Bomba} />
        <Text style={styles.title}>Bomba</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={descarga}>
        <Image source={Descarga} />
        <Text style={styles.title}>Descarga</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={tambor}>
        <Image source={Tambor} />
        <Text style={styles.title}>Tambor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={corteRapido}>
        <Image source={Faca} />
        <Text style={styles.title}>Corte rápido</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={love}>
        <Image source={Love} />
        <Text style={styles.title}>Love</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={gato}>
        <Image source={Gato} />
        <Text style={styles.title}>Miau</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={aplausos}>
        <Image source={Aplausos} />
        <Text style={styles.title}>Aplausos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={agoraEntendi}>
        <Image source={Bender} />
        <Text style={styles.title}>Agora entendi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={demais}>
        <Image source={QueDemais} />
        <Text style={styles.title}>Que demais</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={delicia}>
        <Image source={QueDelicia} />
        <Text style={styles.title}>Ai que delicia</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={engasguei}>
        <Image source={engasgueiComigo} />
        <Text style={styles.title}>Engasguei</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={happy}>
        <Image source={Happy} />
        <Text style={styles.title}>Parabéns</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={zacarias}>
        <Image source={Zacarias} />
        <Text style={styles.title}>Zacarias</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={baby}>
        <Image source={Baby} />
        <Text style={styles.title}>Risos bebê</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={caixaRegistradora}>
        <Image source={CaixaRegistradora} />
        <Text style={styles.title}>Registradora</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={paraJoaoKleber}>
        <Image source={ParaJoaoKleber} />
        <Text style={styles.title}>Para para para</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={garrafa}>
        <Image source={Garrafa} />
        <Text style={styles.title}>Garrafa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={grilo}>
        <Image source={Grilo} />
        <Text style={styles.title}>Grilo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={ai}>
        <Image source={Ai} />
        <Text style={styles.title}>Aaaaaaí</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={flamengo}>
        <Image source={Flamengo} />
        <Text style={styles.title}>Flamengo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={vasco}>
        <Image source={Vasco} />
        <Text style={styles.title}>Vasco</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={fluminense}>
        <Image source={Fluminense} />
        <Text style={styles.title}>Flumenense</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={botafogo}>
        <Image source={Botafogo} />
        <Text style={styles.title}>Botafogo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={santos}>
        <Image source={Santos} />
        <Text style={styles.title}>Santos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={saoPaulo}>
        <Image source={SaoPaulo} />
        <Text style={styles.title}>São Paulo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={palmeiras}>
        <Image source={Palmeiras} />
        <Text style={styles.title}>Palmeiras</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={conrinthians}>
        <Image source={Corinthians} />
        <Text style={styles.title}>Corinthians</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={gremio}>
        <Image source={Gremio} />
        <Text style={styles.title}>Gremio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={internacional}>
        <Image source={Internacional} />
        <Text style={styles.title}>Inter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={galo}>
        <Image source={Galo} />
        <Text style={styles.title}>Atlético</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={cruzeiro}>
        <Image source={Cruzeiro} />
        <Text style={styles.title}>Cruzeiro</Text>
      </TouchableOpacity>
    </View>
  )
}

//========================  Estilização dos Botões  ==============
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: '#121212'
  },

  button: {
    height: 76,
    width: 76,
    borderRadius: 5,
    marginBottom: 17,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 10,
    color: '#fff'
  }
})
