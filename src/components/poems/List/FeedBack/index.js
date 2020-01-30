import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reactPoem } from "../../../../actions";
import Feedback from "./Feedback";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    reactPoem: bindActionCreators(reactPoem, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
