import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

class PlanningClient extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    events: [],
  };

  componentDidMount() {
    fetch('https://127.0.0.1:8000/api/consultations/1', { credentials: 'include' })
      .then((response) => response.json())
      .then((event) => {
        this.setState({ events: event });
      })
      // eslint-disable-next-line react/destructuring-assignment
      .then(console.log(this.state.events));
  }
  /* events = [
    { title: 'Meeting', start: new Date() },
  ]; */

  // eslint-disable-next-line class-methods-use-this
  handleEventClick = (clickInfo) => {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`,
      )
    ) {
      clickInfo.event.remove();
    }
  };

  render() {
    return (
      <div>
        <h1>Planning Client</h1>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          events={this.events}
          locale="fr"
          headerToolbar={{
            start: 'prev,next,today',
            center: 'title',
            end: 'timeGridWeek,timeGridDay',
          }}
          eventClick={this.handleEventClick}
          allDayContent={false}
        />
      </div>
    );
  }
}
export default PlanningClient;
