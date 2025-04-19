import React, { useState } from "react";

const FeedbackSection = () => {
  const [feedbackStatus, setFeedbackStatus] = useState(null);
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleYesClick = () => {
    setFeedbackStatus("yes");
  };

  const handleNoClick = () => {
    setFeedbackStatus("no");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", { email, reason });
    setSubmitted(true);
  };

  return (
    <div className="p-4 border rounded shadow-sm my-4 d-flex flex-column align-items-center text-center">
      <h5 className="mb-3">Was this information useful?</h5>

      {!feedbackStatus && (
        <div className="d-flex gap-2 justify-content-center">
          <button className="btn btn-success" onClick={handleYesClick}>
            Yes
          </button>
          <button className="btn btn-danger" onClick={handleNoClick}>
            No
          </button>
        </div>
      )}

      {feedbackStatus === "yes" && (
        <div className="alert alert-success mt-3" role="alert">
          Thank you for your feedback!
        </div>
      )}

      {feedbackStatus === "no" && !submitted && (
        <form onSubmit={handleSubmit} className="mt-3" style={{ maxWidth: "400px", width: "100%" }}>
          <p>
            We would like to improve our website.<br/>
            Could you help us by telling us why you didn't find this page useful?
          </p>
          <div className="mb-3 text-start">
            <label htmlFor="reason" className="form-label">Your Feedback</label>
            <textarea
              id="reason"
              className="form-control"
              rows="3"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">Email *</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Send Feedback</button>
          </div>
        </form>
      )}

      {submitted && (
        <div className="alert alert-info mt-3" role="alert">
          Thank you for helping us improve!
        </div>
      )}
    </div>
  );
};

export default FeedbackSection;
