import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rib: "",
      date: "",
      user: ""
    };
  }

  getRib = e => {
    let str = e.target.value;
    const re = /^[0-9\b\s]/;

    if (str === "" || re.test(str)) {
      this.setState({
        rib: str
          .substring(0, 19)
          .replace(/\s/g, "")
          .replace(/(\d{4})/g, "$1 ")
      });
    }
  };

  getDate = e => {

    if (!e.target.value.match(/[^0-9/]/gi) && e.target.value.slice(0, 2) < 13 && e.target.value.slice(0, 2) > 0) 
    {
      this.setState({
          date: e.target.value.replace(/(.{2})/g, "$1/").slice(0, 5)
      })       }
/*     let str = e.target.value;
 */    /* let year = str.slice(0, 2);
    let month = str.slice(3, 5); */

  /*   const re = /^[0-9\b\/]+$/;

    if (str === "" || re.test(str)) {
      this.setState({
        date: str
      });
    } */
  };

  getUser = e => {
    let str = e.target.value;
    let ch = str.toUpperCase();

    const re = /^[A-Z,a-z\b\s]+$/;

    if (ch === "" || re.test(ch)) {
      this.setState({ user: ch });
    }
  };

  render() {
    console.log(this.state.rib);
    return (
      <div className="displayCard">
        <div className="Card">
          <span className="titel">Credit card</span>

          <div className="inputs">
            <img
              className="simCardImage"
              src="https://uploads.codesandbox.io/uploads/user/8f10ee4c-10fc-41b7-885a-4b795b293c1d/hh7c-chip.png"
              alt=""
            />
            <input
              name="champ1"
              className="champ"
              placeholder="7*** **** **** ****"
              defaultValue={this.state.rib}
            />

            <input
              name="champ1"
              className="champ1"
              placeholder="15/11"
              defaultValue={this.state.date}
            />

            <input
              name="champ1"
              className="champ"
              placeholder="FOULEN"
              defaultValue={this.state.user}
            />
          </div>
        </div>

        <div className="inputInterface">
          <input
            type="text"
            name="rib"
            maxLength="19"
            value={this.state.rib}
            onChange={this.getRib}
          />
          <input
            type="text"
            name="date"
            maxLength="5"
            value={this.state.date}
            onChange={this.getDate}
          />
          <input
            type="text"
            name="user"
            maxLength="20"
            value={this.state.user}
            onChange={this.getUser}
          />
        </div>
      </div>
    );
  }
}
export default Card;
