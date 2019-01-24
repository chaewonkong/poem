import React, { Component } from "react";
import { Upload, Icon, message } from "antd";
import { connect } from "react-redux";
import * as actions from "../actions";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === "image/jpeg";
  if (!isJPG) {
    message.error("You can only upload JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJPG && isLt2M;
}

class Avatar extends Component {
  state = {
    loading: false
  };

  handleUpload = () => {};

  handleChange = info => {
    // if (info.file.status === "uploading") {
    //   this.setState({ loading: true });
    //   return;
    // }
    // if (info.file.status === "done") {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, imageUrl => {
      this.setState({
        data: info.file,
        imageUrl,
        loading: false
      });
      return this.props.uploadProfile({
        imageUrl: this.state.imageUrl,
        image: this.state.data
      });
    });
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
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
        customRequest={this.handleUpload}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
      </Upload>
    );
  }
}

export default connect(
  null,
  actions
)(Avatar);
