import { connect } from "react-redux";
import PostPoem from "./PostPoem";

const mapStateToProps = state => {
  const { poems, auth, today } = state;
  return { poems, auth, today };
};

export default connect(mapStateToProps)(PostPoem);
