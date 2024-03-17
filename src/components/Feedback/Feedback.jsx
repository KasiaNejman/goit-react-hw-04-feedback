import Section from "../Section/Section";
import Notification from "../Notification/Notification";
import Statistics from "../Notification/Notification";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";

const Feedback = ({feedback, onFeedbackChange}) => {

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback; 
    const total = countTotalFeedback();
  
    if (total === 0) {
      return 0;
    }
    return Math.floor((good / total) * 100);
  };
  
  const totalFeedback = countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onFeedbackChange}
        />
      </Section>
      {totalFeedback === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
};

export default Feedback;