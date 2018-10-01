import constants from './../constants';

export function AddScore(count){
  return {
    type: constants.ADD_WIN_SCORE,
    payload: { 
      count 
    }
  }
}

export function AddCoins(count){
  return {
    type: constants.ADD_COINS,
    payload: { 
      count 
    }
  }
}

export function AddBet(count){
  return {
    type: constants.ADD_BET,
    payload: { 
      count 
    }
  }
}

export function ToggleAutoSpin(){
  return {
    type: constants.TOGGLE_AUTO_SPIN
  }
}

export function Spin(){
  return {
    type: constants.SPIN
  }
}

export function Home(active){
  return {
    type: constants.HOME,
    payload: { 
      active 
    }
  }
}

export function Settings(active){
  return {
    type: constants.SETTINGS,
    payload: { 
      active 
    }
  }
}