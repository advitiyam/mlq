import React, { Component } from 'react';
import Dialog, {
  DialogActions, DialogTitle, DialogContent, DialogContentText
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const title = "Meaning in Life Questionnaire";

const content = "The Meaning in Life Questionnaire assesses two dimensions of meaning in life using 10 items rated on a seven-point scale from \"Absolutely True\" to \"Absolutely Untrue.\" The Presence of Meaning subscale measures how full respondents feel their lives are of meaning. The Search for Meaning subscale measures how engaged and motivated respondents are in efforts to find meaning or deepen their understanding of meaning in their lives. The MLQ has good reliability, test-retest stability, stable factor structure, and convergence among informants. Presence is positively related to well-being, intrinsic religiosity, extraversion and agreeableness, and negatively related to anxiety and depression. Search is positively related to religious quest, rumination, past-negative and present-fatalistic time perspectives, negative affect, depression, and neuroticism, and negatively related to future time perspective, close-mindedness (dogmatism), and well-being. Presence relates as expected with personal growth self-appraisals, and altruistic and spiritual behaviors as assessed through daily diaries. The MLQ takes about 5 minutes to complete.";

const button = "Take the questionnaire";

const styles = theme => ({
  content: {
    textAlign: 'justify'
  }
});

class Introduction extends Component {

  render() {
    return <Dialog disableBackdrop={true} open={true}>
      {this.title()}
      {this.content()}
      {this.actions()}
    </Dialog>;
  }

  title = () => <DialogTitle>
    {title}
  </DialogTitle>;

  content = () => <DialogContent>
    <DialogContentText className={this.props.classes.content}>
      {content}
    </DialogContentText>
  </DialogContent>;

  actions = () => <DialogActions>
    <Button color="primary" autoFocus onClick={this.props.onClose}>
      {button}
    </Button>
  </DialogActions>;
}

export default withStyles(styles)(Introduction);
