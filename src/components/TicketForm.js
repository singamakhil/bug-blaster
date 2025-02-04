import React, { useState } from "react";
import "../styles.css";

export default function TicketForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [Priority, setPriority] = useState("");

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
    setPriority();
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

        <div class="form-group">
          <label>Priority:</label>
          <br />
          <input type="checkbox" id="low" name="priority" value="Low" />
          <label for="low">Low</label>
          <input type="checkbox" id="medium" name="priority" value="Medium" />
          <label for="medium">Medium</label>
          <input type="checkbox" id="high" name="priority" value="High" />
          <label for="high">High</label>
        </div>

        <button type="submit">Submit</button>
      </form>
      <p> {title}</p>
    </div>
  );
}
