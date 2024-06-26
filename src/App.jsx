import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const saveFeedback = localStorage.getItem("feedbackCount");

    if (saveFeedback !== null) {
      return JSON.parse(saveFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem("feedbackCount", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        onUpdate={updateFeedback}
        onUpdateReset={updateReset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
