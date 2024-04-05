import Notification from "../Notification/Notification";

export default function Feedback({ feedback, totalFeedback }) {
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  if (totalFeedback === 0) {
    return <Notification />;
  } else {
    return (
      <div>
        <ul>
          <li>Good: {feedback.good}</li>
          <li>Neutral: {feedback.neutral}</li>
          <li>Bad: {feedback.bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedback}%</li>
        </ul>
      </div>
    );
  }
}
