import { always, cond, isNil, T } from 'ramda';
import React, { Component } from 'react';
import Introduction from './Introduction';
import Questionnaire from './Questionnaire';
import Summary from './Summary';

class App extends Component {

  state = {
    introduced: false,
    answers: null
  };

  render() {
    return <div style={{ padding: 20}}>
      {this.routedDialog()}
    </div>;
  }

  routedDialog = () => {
    console.log("Routing dialog");
    return cond([
      [state => !state.introduced,    always(this.introduction)],
      [state => isNil(state.answers), always(this.questionnaire)],
      [T,                             always(this.summary)]
    ])(this.state)();
  };

  introduction = () => <Introduction
    onClose={this.handleIntroductionAcknowledgement}/>;

  handleIntroductionAcknowledgement = () => this.setState({ introduced: true });

  questionnaire = () => {
    console.log("questionnaire");
    return <Questionnaire onCompletion={this.handleCompletion} />
  }

  handleCompletion = answers => this.setState({ answers: answers });

  summary = () => <Summary answers={this.state.answers}
    onClose={this.resetQuestionnaire} />;

  resetQuestionnaire = () => this.setState({
    introduced: false,
    answers: null
  });
}

export default App;
