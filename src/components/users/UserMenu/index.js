import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logoutUser, fetchUser } from "../../../actions";
import UserMenu from "./UserMenu";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: bindActionCreators(logoutUser, dispatch),
    fetchUser: bindActionCreators(fetchUser, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
