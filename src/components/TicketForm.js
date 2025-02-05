import React, { useState } from "react";
import "../styles.css";

export default function TicketForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(e.target.title.value);
    setDescription(e.target.title.value);
    clearForm();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="ticket-form">
        <div class="form-group">
          <label for="title">Title:</label>
          <input
            type="text"
            className="form-input"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div class="form-group">
          <label for="description">Description:</label>
          <textarea
            id="description"
            className="form-input"
            value={description}
            rows="4"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <fieldset className="priority-fieldset">
          <legend>Priority</legend>
          {Object.entries(priorityLabels).map(([value, label]) => (
            <label key={value} className="priority-label">
              <input
                type="radio"
                className="priority-input"
                value={value}
                checked={priority === value}
                onChange={(e) => setPriority(e.target.value)}
              ></input>
              {label}
            </label>
          ))}
        </fieldset>

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}
