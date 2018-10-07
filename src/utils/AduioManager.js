import AudioPool from './AudioPool'

class AudioManager {

  audioTick = new AudioPool('./assets/422642__trullilulli__sfx-ambiance-clock-tick.wav', 5);
  audioComplete = new AudioPool('./assets/367627__fxkid2__idea.wav', 1);
  audioMoney = new AudioPool('./assets/140382__d-w__coins-01.wav', 1);
}

const instance = new AudioManager()

export default instance;