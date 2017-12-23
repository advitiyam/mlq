import { indexOf, prop } from 'ramda';
import React, { Component } from 'react';
import Dialog, {
  DialogActions, DialogTitle,  DialogContent, DialogContentText
} from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import questions from './Questions';
import scoreIcons from './ScoreIcons';
import synopsis from './Synopsis';

const title = "Questionnaire is filled.";

const button = "Thank you!";

const scores = scoreIcons.map(prop("label"));

const styles = theme => ({
  scoreLabel: {
    flexBasis: 0,
    flexGrow: 1,
  },
  scoreValue: {
    flexBasis: 0,
    flexGrow: 3
  },
  synopsis: {
    textAlign: 'justify'
  }
});

class Summary extends Component {

  render() {
    return (
      <Dialog disableBackdrop={true} open={true}>
        {this.title()}
        {this.content()}
        {this.actions()}
      </Dialog>
    );
  }

  title = () => <DialogTitle>
    {title}
  </DialogTitle>;

  content = () => <DialogContent>
    <List>
      {this.scoreItem("Presence score:", this.presenceScore())}
      {this.scoreItem("Search score:", this.searchScore())}
    </List>
    {this.synopsis()}
  </DialogContent>;

  scoreItem = (scoreLabel, scoreValue) => <ListItem>
    <ListItemText className={this.props.classes.scoreLabel}
      primary={scoreLabel} />
    <ListItemText className={this.props.classes.scoreValue}
      primary={scoreValue} />
  </ListItem>;

  presenceScore = () => {
    return (this.score(8) - this.score(9))
      + this.score(1) + this.score(4)
      + this.score(5) + this.score(6);
  };

  searchScore = () => {
    return this.score(2) + this.score(3)
      + this.score(7) + this.score(8)
      + this.score(10);
  };

  score = questionNumber => {
    const score = this.props.answers[questions[questionNumber - 1]];
    return 1 + indexOf(score, scores);
  };

  synopsis = () => <DialogContentText className={this.props.classes.synopsis}>
    {this.synopsisText()}
  </DialogContentText>;

  synopsisText = () => {
    const highPresence = this.presenceScore() >= 24;
    const highSearch = this.searchScore() >= 24;
    return synopsis[highPresence][highSearch];
  };

  actions = () => <DialogActions>
    <Button color="primary" autoFocus onClick={this.props.onClose}>
      {button}
    </Button>
  </DialogActions>;

}

export default withStyles(styles)(Summary);
