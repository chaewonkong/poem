import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPoems, getPoem } from "../../../../actions";
import PoemMenu from "./PoemMenu";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    fetchPoems: bindActionCreators(fetchPoems, dispatch),
    getPoem: bindActionCreators(getPoem, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoemMenu);
