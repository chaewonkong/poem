import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../../actions";
import App from "./App";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: bindActionCreators(fetchUser, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
