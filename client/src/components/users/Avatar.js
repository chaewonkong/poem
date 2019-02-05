import React from "react";
import { Upload, Icon } from "antd";

const uploadButton = (
  <div>
    <Icon type="plus" />
    <div className="ant-upload-text">프로필사진</div>
  </div>
);

const Avatar = props => {
  const { beforeUpload, onImageChange, handleUpload, imageUrl } = props;
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      beforeUpload={beforeUpload}
      onChange={onImageChange}
      customRequest={handleUpload}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="avatar" width="100%" />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default Avatar;
