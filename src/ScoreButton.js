import React, { Component } from 'react';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  button: {
    height: '36px',
    width: '36px'
  }
});

class ScoreButton extends Component {

  label = () => {
    return this.props.score.label;
  };

  color = () => {
    return this.props.highlighted ? "primary" : "default";
  };

  onClick = () => {
    this.props.onClick(this.label());
  };

  render() {
    return (
      <Tooltip title={this.label()}>
      <IconButton className={this.props.classes.button}
        aria-label={this.label()} color={this.color()}
        onClick={this.onClick}>
        {this.props.score.icon}
      </IconButton>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(ScoreButton);
