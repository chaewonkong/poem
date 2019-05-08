import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPoems, getToday } from "../../actions";
import PoemList from "./PoemList";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
  return {
    fetchPoems: bindActionCreators(fetchPoems, dispatch),
    getToday: bindActionCreators(getToday, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoemList);
