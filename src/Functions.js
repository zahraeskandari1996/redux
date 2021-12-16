export function onSubmitFunction(event) {
  event.preventDefault();
  if (this.props.viewType == 1) {
    if (
      this.props.fName != "" &&
      this.props.nationality != "" &&
      this.props.post != "" &&
      this.props.number != ""
    ) {
      let players = this.props.players;
      players.push({
        fName: this.props.fName,
        nationality: this.props.nationality,
        number: this.props.number,
        post: this.props.post,
        id: this.props.players.length,
      });
      this.props.playersChanged(players);

      this.props.postChanged(1);
      this.props.fNameChanged("");
      this.props.nationalityChanged("");
      this.props.numberChanged(1);
      this.props.idChanged("-1");
      this.props.viewTypeChanged(1);
    } else {
      alert("ورودی اشتباه است");
    }
  } else {
    if (
      this.props.fName != "" &&
      this.props.nationality != "" &&
      this.props.post != "" &&
      this.props.number != ""
    ) {
      let players = this.props.players;
      for (let i = 0; i < players.length; i++) {
        if (players[i].id == this.props.id) {
          players[i] = {
            fName: this.props.fName,
            nationality: this.props.nationality,
            number: this.props.number,
            post: this.props.post,
            id: this.props.id,
          };
        }
      }
      this.props.playersChanged(players);
      this.props.postChanged(1);
      this.props.fNameChanged("");
      this.props.nationalityChanged("");
      this.props.numberChanged(1);
      this.props.idChanged("-1");
      this.props.viewTypeChanged(1);
    } else {
      alert("ورودی اشتباه است");
    }
  }
}
export function post(number) {
  if (number == 1) {
    return "دروازه بان";
  } else if (number == 2) {
    return "مدافع";
  } else if (number == 3) {
    return "هافبک";
  } else if (number == 4) {
    return "مهاجم";
  }
}
