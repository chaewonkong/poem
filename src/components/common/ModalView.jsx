import React from "react";
import { Modal, Button } from "antd";

const ModalView = props => {
  return (
    <Modal
      className="modal"
      width="240px"
      centered
      closable={props.closable}
      visible={props.visible}
      footer={props.footer}
      okButtonProps={props.okButtonProps}
      cancelButtonProps={props.cancelButtonProps}
    >
      <p>{props.message}</p>
      <div className="modal-div">
        {props.okText ? (
          <Button className="modal-btn" onClick={props.handleOk}>
            {props.okText}
          </Button>
        ) : null}
        {props.cancelText ? (
          <Button className="modal-btn" onClick={props.handleCancel}>
            {props.cancelText}
          </Button>
        ) : null}
      </div>
    </Modal>
  );
};

export default ModalView;
