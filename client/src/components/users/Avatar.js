import React, { Component } from "react";
import { Upload, Icon, message } from "antd";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Avatar extends Component {
  state = {
    loading: false
  };

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={this.props.beforeUpload}
        onChange={this.props.onImageChange}
        customRequest={this.props.handleUpload}
      >
        {this.props.imageUrl ? (
          <img src={this.props.imageUrl} alt="avatar" width="100%" />
        ) : (
          uploadButton
        )}
      </Upload>
    );
  }
}

export default connect(
  null,
  actions
)(Avatar);
