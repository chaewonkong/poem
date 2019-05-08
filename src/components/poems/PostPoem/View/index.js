import { connect } from "react-redux";
import PoemView from "./PoemView";

const mapStateToProps = state => state;

export default connect(mapStateToProps)(PoemView);
