import React from "react";
import { connect } from "react-redux";
import {
  playersChanged,
  postChanged,
  fNameChanged,
  nationalityChanged,
  numberChanged,
  viewTypeChanged,
  idChanged,
} from "./Actions/Actions";
import "./App.css";
import { onSubmitFunction, post } from "./Functions";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitFunction = onSubmitFunction.bind(this);
    this.post = post.bind(this);
  }
  render() {
    const { item, index } = this.props;
    return (
      <div className="rows">
        <p className="actions">{item.fName}</p>
        <p className="actions">{item.nationality}</p>
        <p className="actions">{item.number}</p>
        <p className="actions">{this.post(item.post)}</p>
        <div className="actions">
          <div
            className="actionDelete"
            onClick={(event) => {
              event.preventDefault();
              if (this.props.viewType == 2) {
                if (this.props.id == item.id) {
                  alert(
                    "برای حذف این بازیکن ابتدا دکمه ویرایش بازیکن را بزنید ."
                  );
                } else {
                  let players = this.props.players;
                  players = players.filter((e) => e.id != item.id);
                  this.props.playersChanged(players);
                }
              } else {
                let players = this.props.players;
                players = players.filter((e) => e.id != item.id);
                this.props.playersChanged(players);
              }
            }}
          >
            حذف
          </div>

          <div
            className="actionEdit"
            onClick={(event) => {
              event.preventDefault();
              this.props.postChanged(item.post);
              this.props.fNameChanged(item.fName);
              this.props.nationalityChanged(item.nationality);
              this.props.numberChanged(item.number);
              this.props.idChanged(item.id);
              this.props.viewTypeChanged(2);
            }}
          >
            ویرایش
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    players: state.main.players,
    fName: state.main.fName,
    nationality: state.main.nationality,
    post: state.main.post,
    number: state.main.number,
    viewType: state.main.viewType,
    id: state.main.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playersChanged: (params) => dispatch(playersChanged(params)),
    fNameChanged: (params) => dispatch(fNameChanged(params)),
    postChanged: (params) => dispatch(postChanged(params)),
    nationalityChanged: (params) => dispatch(nationalityChanged(params)),
    numberChanged: (params) => dispatch(numberChanged(params)),
    viewTypeChanged: (params) => dispatch(viewTypeChanged(params)),
    idChanged: (params) => dispatch(idChanged(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
