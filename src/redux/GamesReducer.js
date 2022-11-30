import shortid from 'shortid';
import { API_URL } from '../config';

//selectors
export const getAllGames = ({ games }) => games;

export const getGamesById = ({ games }, gameId) =>
  games.find((game) => game.id === gameId);

export const getFavoriteGame = (state) =>
  state.games.filter((game) => game.isFavorite === true);
console.log(getFavoriteGame);

//  actions
const createActionName = (actionName) => `app/games/${actionName}`;
const ADD_GAME = createActionName('ADD_GAME');
const REMOVE_GAME = createActionName('REMOVE_GAME');
const TOGGLE_GAME_FAVORITE = createActionName('TOGGLE_GAME_FAVORITE');
const UPDATE_GAMES = createActionName('UPDATE_GAMES');
const UPDATE = createActionName('UPDATE');

// action creators
export const addGame = (payload) => ({ type: ADD_GAME, payload });
export const removeGame = (payload) => ({ type: REMOVE_GAME, payload });
export const toggleGameFavorite = (payload) => ({
  type: TOGGLE_GAME_FAVORITE,
  payload,
});
export const updateApiGames = (payload) => ({ type: UPDATE_GAMES, payload });
export const update = (payload) => ({ type: UPDATE, payload });

export const fetchGames = (dispatch) => {
  fetch(`${API_URL}/games`)
    .then((response) => response.json())
    .then((games) => dispatch(updateApiGames(games)));
};

// export const updateGameValues = (newValues) => {
//   return (dispatch) => {
//     const options = {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ ...newValues }),
//     };

//     fetch(`${API_URL}/games/${newValues.id}`, options).then(() =>
//       dispatch(update(newValues))
//     );
//   };
// };

export const updateAddGames = ({ newGame }) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newGame),
  };

  return (dispatch) => {
    fetch(`${API_URL}/games`, requestOptions)
      .then((response) => response.json())
      .then((newGame) => dispatch(addGame(newGame)))
      .catch((rejected) => {
        console.log('fetch add rejected info: ', rejected);
      });
  };
};

export const fetchDeleteRequest = (id) => {
  console.log('fetchDelete id: ', id);
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };

  return (dispatch) => {
    fetch(API_URL + `/${id}`, requestOptions)
      .then((response) => response.json())
      .then((id) => dispatch(removeGame(id)))
      .catch((rejected) => {
        console.log('fetch delete rejected info: ', rejected);
      });
  };
};

const gamesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_GAME:
      return [...statePart, { ...action.payload, id: shortid() }];
    case REMOVE_GAME:
      return statePart.filter((game) => game.id !== action.payload);
    case TOGGLE_GAME_FAVORITE:
      return statePart.map((game) =>
        game.id === action.payload
          ? { ...game, isFavorite: !game.isFavorite }
          : game
      );
    case UPDATE_GAMES:
      return [...action.payload];
    case UPDATE:
      return statePart.map((game) =>
        game.id === action.payload.id ? { ...game, ...action.payload } : game
      );
    default:
      return statePart;
  }
};
export default gamesReducer;
