import React from "react";
import { CloseIcon } from "../../icons";
import "./style.css";
export default function AgentForm(props) {
  return (
    <div ref={props.formRef} className="agent-form-container">
      <form className="agent-form">
        <button className="close-form-btn">
          <CloseIcon className="agent-form-colse-icon" />
        </button>
        <div className="agent-form-input-container">
          <label htmlFor="agent_name">Name</label>
          <input
            type="text"
            id="agent_name"
            name="name"
            placeholder="name..."
          />
        </div>
        <div className="agent-form-input-container">
          <label htmlFor="agent_phone">Phone</label>
          <input
            type="tel"
            id="agent_phone"
            name="phone"
            placeholder="phone..."
          />
        </div>

        <div className="agent-form-input-container">
          <label htmlFor="agent_email">Email</label>
          <input
            type="email"
            id="agent_email"
            name="email"
            placeholder="email..."
          />
        </div>

        <div className="agent-form-input-container">
          <label htmlFor="agent_location">Village</label>
          <input
            type="location"
            id="agent_location"
            name="location"
            placeholder="village..."
          />
        </div>
        <div className="agent-form-submit-btn-container">
          <button type="submit" className="agent-form-submit-btn">
            Add Agent
          </button>
        </div>
      </form>
    </div>
  );
}