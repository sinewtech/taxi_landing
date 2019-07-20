import React, { Component } from "react";
import "fullpage.js/vendors/scrolloverflow.js";
import ReactFullpage from "@fullpage/react-fullpage";

class Fullpage extends Component {
  render() {
    return (
      <ReactFullpage
        navigation
        verticalAlign={false}
        sectionsColor={this.props.sectionsColor}
        scrollOverflow
        arrowNavigation
        anchors={this.props.anchors}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>{this.props.children}</ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default Fullpage;
