import { equals } from 'ramda';
import React, { Component } from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import ScoreButton from './ScoreButton';
import scoreIcons from './ScoreIcons';

function styles(theme) {
  return {
    item: {
      paddingBottom: '6px',
      paddingTop: '6px'
    }
  };
}

class Question extends Component {

  state = {
    answer: null
  };

  handleAnswer = (answer) => {
    this.setState({ answer: answer });
    this.props.onAnswer(this.props.text, answer);
  }

  render() {
    return (
      <ListItem className={this.props.classes.item}>
        <ListItemText primary={this.props.text} />
        {scoreIcons.map(scoreIcon => {
          const label = scoreIcon.label;
          return <ScoreButton
            key={label} score={scoreIcon}
            highlighted={equals(this.state.answer, label)}
            onClick={this.handleAnswer} />
        })}
      </ListItem>
    );
  }
}

export default withStyles(styles)(Question);
