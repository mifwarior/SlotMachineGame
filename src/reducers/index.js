import constants from './../constants';
import { combineReducers } from 'redux';


function AddScoreReducer(state = 0, action) {
  if (action.type === constants.ADD_WIN_SCORE) {
    const { count } = action.payload | 0;
    return state + count;
  }
  return state;
}

function AddCoinsReducer(state = 10000, action) {
  if (action.type === constants.ADD_COINS) {

    const { count } = action.payload | 0;
    return state + count;
  }
  return state;
}

function AddBetReducer(state = 0, action) {
  if (action.type === constants.ADD_BET) {
    const { count } = action.payload | 0;
    return state + count;
  }
  return state;
}

function ToggleAutoSpinReducer(state = false, action) {
  if (action.type === constants.TOGGLE_AUTO_SPIN) {
    return !state;
  }
  return state;
}

function SpinReducer(state = { drums: 3, symbols: 20, types: 4, result: [0, 0, 0] }, action) {
  if (action.type === constants.SPIN) {
    let result = [];
    for (let drum = 0; drum < state.drums; drum++) {
      result.push(Math.round(Math.random() * state.types));
    }
    return { ...state, result };
  }
  return state;
}

function SettingsReducer(state = false, action) {
  if (action.type === constants.SETTINGS) {
    return !state;
  }
  return state;
}

function HomeReducer(state = false, action) {
  if (action.type === constants.HOME) {
    return !state;
  }
  return state;
}

export default combineReducers({
  score: AddScoreReducer,
  coins: AddCoinsReducer,
  bet: AddBetReducer,
  autoSpin: ToggleAutoSpinReducer,
  spin: SpinReducer,
  settings: SettingsReducer,
  home: HomeReducer
});