import React, { Component } from "react";
import { connect } from "react-redux";
//import MadeWithLove from "react-made-with-love";
import "./responsive.css";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#021e36",
    color: "lightgray",
    position: "fixed",
    fontSize: "1rem",

    paddingTop: "1rem",
    paddingBottom: "1rem",
    filter: "opacity(0.8)",
    padding: "2rem",
    left: 0,
    bottom: 0,
    right: 0,

    "&:hover": {
      filter: "opacity(1)",
    },
  },
  footer: {
    display: "flex",
  },
  footerInfo: {},
};
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  render() {
    const { classes, isAuthenticated, user } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const guestLinks = null;

    const authLinks = isAuthenticated && (
      <div className={classes.root}>
        <div className="footer" style={{ display: "flex" }}>
          <div className="footerInfo">
            <label style={{ paddingRight: "1rem" }}>Need help?</label>
            <label>help@mail.com</label>
          </div>
          <div>2020 DORA | ANDREA</div>
        </div>
      </div>
    );

    return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated, //isAuth iz bool authRed
  user: state.auth.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Footer));
