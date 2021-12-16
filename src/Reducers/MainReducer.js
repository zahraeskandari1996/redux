const INITIAL_STATE = {
  players: [],
  post: "1",
  fName: "",
  nationality: "",
  number: "1",
  viewType: 1,
  id: "-1",
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "players_changed":
      return { ...state, players: action.payload };
    case "post_changed":
      return { ...state, post: action.payload };
    case "number_changed":
      return { ...state, number: action.payload };
    case "fName_changed":
      return { ...state, fName: action.payload };
    case "nationality_changed":
      return { ...state, nationality: action.payload };
    case "viewType_changed":
      return { ...state, viewType: action.payload };
    case "id_changed":
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
