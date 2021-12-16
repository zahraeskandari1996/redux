const players = (content) => {
  return {
    type: "players_changed",
    payload: content,
  };
};

export const playersChanged = (obj) => {
  return (dispatch) => {
    dispatch(players(obj));
  };
};
const post = (content) => {
  return {
    type: "post_changed",
    payload: content,
  };
};

export const postChanged = (obj) => {
  return (dispatch) => {
    dispatch(post(obj));
  };
};
const fName = (content) => {
  return {
    type: "fName_changed",
    payload: content,
  };
};

export const fNameChanged = (obj) => {
  return (dispatch) => {
    dispatch(fName(obj));
  };
};
const nationality = (content) => {
  return {
    type: "nationality_changed",
    payload: content,
  };
};

export const nationalityChanged = (obj) => {
  return (dispatch) => {
    dispatch(nationality(obj));
  };
};
const number = (content) => {
  return {
    type: "number_changed",
    payload: content,
  };
};

export const numberChanged = (obj) => {
  return (dispatch) => {
    dispatch(number(obj));
  };
};
const viewType = (content) => {
  return {
    type: "viewType_changed",
    payload: content,
  };
};

export const viewTypeChanged = (obj) => {
  return (dispatch) => {
    dispatch(viewType(obj));
  };
};
const id = (content) => {
  return {
    type: "id_changed",
    payload: content,
  };
};

export const idChanged = (obj) => {
  return (dispatch) => {
    dispatch(id(obj));
  };
};
