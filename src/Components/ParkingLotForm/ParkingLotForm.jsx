import React, { useState } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

import './ParkingLotForm.css';

const PRIORITIES = {
  Low: 'Low',
  Medium: 'Medium',
  High: 'High',
}

function mdyToYmd(mdyString) {
  let [M, d, y] = mdyString.split('/');
  return `${y}-${M}-${d}`;
}

export default function ParkingLotForm({ submitItem, defaultDate = '', defaultPriority = PRIORITIES.Medium, defaultLink = '', defaultDescription = '', cardId = 'create-form' }) {

  

const [date, setDate] = useState(mdyToYmd(defaultDate));
const [link, setLink] = useState(defaultLink);
const [description, setDescription] = useState(defaultDescription);
const [priority, setPriority] = useState(defaultPriority);

function handleDateChange(e) {
  setDate(e.target.value);
}

function handleLinkChange(e) {
  setLink(e.target.value);
}

function handleDescriptionChange(e) {
  setDescription(e.target.value);
}

function handlePriorityChange(e) {
  setPriority(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();

  const [y, M, d] = date.split('-');
  const formattedDate = `${M}/${d}/${y}`;
  submitItem(formattedDate, link, description, priority);

  setDate ('');
  setLink ('');
  setDescription ('');
  setPriority (PRIORITIES.Medium);
}

  return (
    <div className="form-container">
      <Form data-bs-theme="light" className="parking-lot-form" onSubmit={handleSubmit}>
        <FormGroup className="parking-lot-row">
          <Label for={"link-date-" + cardId}>
            Date
          </Label>
          <Input  
            id={"link-date-" + cardId}
            name="date"
            type="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </FormGroup>
        <FormGroup className="parking-lot-row">
          <Label for={"link-url" + cardId}>
            Link
          </Label>
          <Input  
            id={"link-url" + cardId}
            name="url"
            type="url"
            value={link}
            onChange={handleLinkChange}
            required
          />
        </FormGroup>
        <FormGroup className="parking-lot-row">
          <Label for={"link-description" + cardId}>
            Description
          </Label>
          <Input  
            id={"link-description" + cardId}
            name="description"
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </FormGroup>
        <FormGroup className="parking-lot-radio">
          <div>
            <Input
              name="radio-priority"
              type="radio"
              id={"priority-high" + cardId}
              value= "High"
              checked= {priority === PRIORITIES.High}
              onChange= {handlePriorityChange}
            />
            &nbsp;
            <Label for={"priority-high" + cardId} className="radio-label me-3">
              HIGH
            </Label>
          </div>
          <div>
            <Input
              name="radio-priority"
              type="radio"
              id={"priority-medium" + cardId}
              value= "Medium"
              checked= {priority === PRIORITIES.Medium}
              onChange= {handlePriorityChange}
            />
            &nbsp;
            <Label for={"priority-medium" + cardId} className="radio-label me-3">
              MEDIUM
            </Label>
          </div>
          <div>
            <Input
              name="radio-priority"
              type="radio"
              id={"priority-low" + cardId}
              value= "Low"
              checked= {priority === PRIORITIES.Low}
              onChange= {handlePriorityChange}
            />
            &nbsp;
            <Label for={"priority-low" + cardId}  className="radio-label">
              LOW
            </Label>
          </div>
        </FormGroup>
        <FormGroup className="submit-button-container">
          <Button type="submit" className="action-button">submit</Button>
        </FormGroup>
      </Form>
    </div>
  );
}
