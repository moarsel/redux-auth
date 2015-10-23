import React, { PropTypes } from "react";
import { Button, Glyphicon } from "react-bootstrap";
import Spinner from "react-loader";

class ButtonLoader extends React.Component {
  static propTypes = {
    glyph: PropTypes.string,
    icon: PropTypes.node,
    loading: PropTypes.bool,
    spinConfig: PropTypes.object,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    glyph: "heart",
    icon: <Glyphicon glyph="heart" />,
    loading: false,
    spinConfig: {
      lines: 10,
      length: 4,
      width: 2,
      radius: 3
    },
    children: <span>Submit</span>
  }

  renderIcon () {
    let icon;

    if (this.props.loading) {
      let spinColor;
      if (!this.props.bsStyle || this.props.bsStyle === "default") {
        spinColor = "#444";
      } else {
        spinColor = "#fff";
      }
      icon = <Spinner {...this.props.spinConfig} color={spinColor} loaded={false} />;
    } else {
      icon = this.props.icon;
    }

    return (
      <div style={{
        position: "relative",
        display: "inline-block",
        marginRight: "6px",
        width: "10px",
        height: "10px",
        top: "1px"
      }}>
        {icon}
      </div>
    );
  }

  render () {
    return (
      <Button onClick={this.props.onClick}
              disabled={this.props.disabled || this.props.loading}
              bsStyle={this.props.bsStyle}
              className={this.props.className}
              type={this.props.type}
              bsSize={this.props.bsSize}>
        {this.renderIcon()} {this.props.children}
      </Button>
    );
  }
}

export default ButtonLoader;