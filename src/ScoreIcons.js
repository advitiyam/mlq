import React from 'react';
import MoodBadIcon from 'material-ui-icons/MoodBad';
import SentimentVeryDissatisfiedIcon from 'material-ui-icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from 'material-ui-icons/SentimentDissatisfied';
import SentimentNeutralIcon from 'material-ui-icons/SentimentNeutral';
import SentimentSatisfiedIcon from 'material-ui-icons/SentimentSatisfied';
import SentimentVerySatisfiedIcon from 'material-ui-icons/SentimentVerySatisfied'
import ChildCareIcon from 'material-ui-icons/ChildCare';

const scoreIcons = [
  {
    label: "Absolutely Untrue",
    icon: <MoodBadIcon />
  },
  {
    label: "Mostly Untrue",
    icon: <SentimentVeryDissatisfiedIcon />
  },
  {
    label: "Somewhat Untrue",
    icon: <SentimentDissatisfiedIcon />
  },
  {
    label: "Can't Say True or False",
    icon: <SentimentNeutralIcon />
  },
  {
    label: "Somewhat True",
    icon: <SentimentSatisfiedIcon />
  },
  {
    label: "Mostly True",
    icon: <SentimentVerySatisfiedIcon />
  },
  {
    label: "Absolutely True",
    icon: <ChildCareIcon />
  }
];

export default scoreIcons;
