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

  onIncrement = (e) => {
    if (e.target.textContent === "good") {
      this.setState((prevState) => ({
        good: prevState.good + 1,
      }));
    } else if (e.target.textContent === "neutral") {
      this.setState((prevState) => ({
        neutral: prevState.neutral + 1,
      }));
    } else {
      this.setState((prevState) => ({
        bad: prevState.bad + 1,
      }));
    }
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
            onIncrement={this.onIncrement}
            buttons={this.state}
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
