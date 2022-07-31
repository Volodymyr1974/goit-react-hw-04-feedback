import React, { useState } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbackType = { good, neutral, bad };
  const keys = Object.keys(feedbackType);
  const value = Object.values(feedbackType);

  const onClickButton = (type) => {
    switch (type) {
      case "good":
        setGood(prevGood => prevGood + 1);
        break;
      case "neutral":
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case "bad":
        setBad(prevBad => prevBad + 1);
        break;
      default:
        console.log("Invalid subscription type");
    }

  };

  const countTotalFeedback = value.reduce(
    (total, ammount) => (total += ammount),
    0
  );

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedbackType.good / countTotalFeedback) * 100);
  };

  return (
    <div >
      <Section
        title="Please Leave feedback!" >
        <FeedbackOptions
          options={keys}
          onLeaveFeedback={onClickButton} />
      </Section>
      <Section title="Statistic">
        {countTotalFeedback !== 0 ?
          (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />) :
          (<Notification message="There is no feedback"
          />)
        }

      </Section>
    </div>
  )
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onClickButton = (key) => {
//     this.setState(prevState => ({
//       [key]: prevState[key] + 1,
//     }));
//   };

//   countTotalFeedback = () => Object.values(this.state).reduce(
//     (total, ammount) => (total += ammount),
//     0
//   );
//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const keys = Object.keys(this.state);
//     return (
//       <div >
//         <Section
//           title="Please Leave feedback!" >
//           <FeedbackOptions
//             options={keys}
//             onLeaveFeedback={this.onClickButton} />
//         </Section>
//         <Section title="Statistic">
//           {this.countTotalFeedback() !== 0 ?
//             (<Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()} />) :
//             (<Notification message="There is no feedback"
//             />)
//           }

//         </Section>
//       </div>



//     );
//   }
// }

export default App;