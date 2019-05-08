import React from "react";
import { Upload, Icon } from "antd";
import styled from "styled-components";

const uploadButton = (
  <div>
    <Icon type="plus" />
    <div className="ant-upload-text">프로필사진</div>
  </div>
);

const UploadProfile = props => {
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
      {imageUrl ? <ImagePreview src={imageUrl} alt="avatar" /> : uploadButton}
    </Upload>
  );
};

const ImagePreview = styled.img`
  width: 100%;
`;

export default UploadProfile;
