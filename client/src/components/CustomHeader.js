import React, { Component } from "react";
import { PageHeader } from "antd";

class CustomHeader extends Component {
  render() {
    return (
      <PageHeader
        onBack={() => window.history.back}
        title="Title"
        subTitle="This is a subtitle"
      />
    );
  }
}

export default CustomHeader;
