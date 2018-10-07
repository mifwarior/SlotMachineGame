import constants from './../constants';
import AduioManager from '../utils/AduioManager'

export function AddScore(count) {
  return {
    type: constants.ADD_WIN_SCORE,
    payload: {
      count
    }
  }
}

export function AddCoins(count) {
  return {
    type: constants.ADD_COINS,
    payload: {
      count
    }
  }
}

export function AddBet(count) {
  return {
    type: constants.ADD_BET,
    payload: {
      count
    }
  }
}

export function ToggleAutoSpin() {
  return {
    type: constants.TOGGLE_AUTO_SPIN
  }
}

export function Spin() {
  return function (dispatch, getState) {
    dispatch(AddCoins(-100));
    dispatch({
      type: constants.SPIN
    });
  }

}

export function Home(active) {
  return {
    type: constants.HOME,
    payload: {
      active
    }
  }
}

export function Settings(active) {
  return {
    type: constants.SETTINGS,
    payload: {
      active
    }
  }
}


export function CalcTurn() {
  return function (dispatch, getState) {

    const { spin } = getState();
    const { result, drums } = spin;

    setTimeout(function () {
      if (drums > 0) {
        let win = true;
        for (let i = 0; i < result.length - 1; i++) {
          if (result[i] !== result[i + 1]) {
            win = false;
          }
        }

        if (win) {
          const coins = result[0] * 1000;
          AduioManager.audioMoney.play();
          dispatch(AddCoins(coins));
          dispatch(AddScore(coins));
        }
      }
    }, 500);
  }
}