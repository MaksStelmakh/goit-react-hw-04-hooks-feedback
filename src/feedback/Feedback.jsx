import { useState } from "react";
import Statistics from "../statistics/Statistics";
import Notification from "../notification/Notification";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions";
import Section from "../section/Section";
import { MainSection } from "./Feedback.styled";

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [netural, setNetural] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = (event) => {
    if (event === "good") {
      setGood((state) => state + 1);
    } else if (event === "netural") {
      setNetural((state) => state + 1);
    } else if (event === "bad") {
      setBad((state) => state + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + netural + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback()) || 0;
  };
  const feedback = countPositiveFeedbackPercentage();
  const total = countTotalFeedback();
  return (
    <MainSection>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "netural", "bad"]}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            netural={netural}
            bad={bad}
            total={total}
            feedback={feedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </MainSection>
  );
}
