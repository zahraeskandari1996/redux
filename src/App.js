import logo from "./logo.svg";
import "./App.css";
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
import { onSubmitFunction, post } from "./Functions";
import Item from "./Item";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitFunction = onSubmitFunction.bind(this);
    this.post = post.bind(this);
  }
  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.onSubmit.bind(this)}>
          <label>
            <input
              value={this.props.fName}
              onChange={(event) => {
                this.props.fNameChanged(event.target.value);
              }}
              placeholder="نام"
              type="text"
              name="name"
            />
          </label>
          <label>
            <input
              value={this.props.nationality}
              onChange={(event) => {
                this.props.nationalityChanged(event.target.value);
              }}
              placeholder="ملیت"
              type="text"
              name="nationality"
            />
          </label>
          <label>
            <input
              value={this.props.number}
              onChange={(event) => {
                this.props.numberChanged(event.target.value);
              }}
              placeholder="شماره بازیکن"
              type="number"
              min="1"
              max="99"
              name="number"
            />
          </label>
          <label>
            <select
              value={this.props.post}
              onChange={(event) => {
                this.props.postChanged(event.target.value);
              }}
            >
              <option value="1">دروازه بان</option>
              <option value="2">مدافع</option>
              <option value="3">هافبک</option>
              <option value="4">مهاجم</option>
            </select>
          </label>
          {this.props.viewType == 1 ? (
            <input type="submit" value="ثبت بازیکن" />
          ) : (
            <input type="submit" value="ویرایش بازیکن" />
          )}
        </form>
        {JSON.stringify(this.props.players) != "[]" ? (
          <div className="rows">
            <p className="actions">نام</p>
            <p className="actions">ملیت</p>
            <p className="actions">شماره</p>
            <p className="actions">پست</p>
            <div className="actions">عملیات</div>
          </div>
        ) : (
          <div></div>
        )}
        {this.showRecords()}
      </div>
    );
  }
  showRecords() {
    return this.props.players.map((item, index) => {
      return <Item item={item} index={index}></Item>;
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.onSubmitFunction(event);
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
