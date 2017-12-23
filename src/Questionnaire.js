import { assoc, isEmpty, keys, symmetricDifference } from 'ramda';
import React, { Component } from 'react';
import Dialog, {
  DialogActions, DialogContent, DialogTitle
} from 'material-ui/Dialog';
import List from 'material-ui/List';
import Button from 'material-ui/Button';
import Question from './Question';
import questions from './Questions';

const title = "Meaning in Life Questionnaire";

const button = "Show me the results";

class Questionnaire extends Component {

  state = {
    answers: {}
  }

  render() {
    console.log("rendering questionnaire");
    return <Dialog disableBackdrop={true} open={true} maxWidth="md">
      {this.title()}
      {this.content()}
      {this.actions()}
    </Dialog>;
  }

  title = () => <DialogTitle>
    {title}
  </DialogTitle>;

  content = () => <DialogContent>
    <List>
      {questions.map(question =>
        <Question key={question} text={question} onAnswer={this.handleAnswer}/>
      )}
    </List>
  </DialogContent>;

  handleAnswer = (question, answer) => this.setState({
    answers: assoc(question, answer, this.state.answers)
  });

  actions = () => <DialogActions>
    <Button color="primary" autoFocus
      disabled={this.isButtonDisabled()} onClick={this.handleContinue}>
      {button}
    </Button>
  </DialogActions>;

  isButtonDisabled = () => {
    return !isEmpty(symmetricDifference(questions, keys(this.state.answers)));
  };

  handleContinue = () => this.props.onCompletion(this.state.answers);
}

export default Questionnaire;
