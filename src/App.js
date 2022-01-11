import React, { Component } from "react";
import "./App.css";
import SectionTitle from "./Components/TitleSec";
import Statistics from "./Components/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions";
import Notification from "./Components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrementGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  onIncrementNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onIncrementBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    const totalFeedback = good + neutral + bad;

    let positFeedPerctenger = (good / totalFeedback) * 100;

    return (positFeedPerctenger = positFeedPerctenger
      ? positFeedPerctenger
      : 0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <SectionTitle title={"Please leave feedback"}>
          <FeedbackOptions
            onIncrementGood={this.onIncrementGood}
            onIncrementNeutral={this.onIncrementNeutral}
            onIncrementBad={this.onIncrementBad}
          />
          {good || neutral || bad ? (
            <div>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback(this.state)}
                positivePercentage={this.countPositiveFeedbackPercentage(
                  this.state
                )}
              />{" "}
            </div>
          ) : (
            <Notification message={"There is no feedback"} />
          )}
        </SectionTitle>
      </div>
    );
  }
}

export default App;
