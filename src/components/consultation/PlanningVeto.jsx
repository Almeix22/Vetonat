import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { format } from 'date-fns';
import dateFormat from 'dateformat';

class PlanningVeto extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        eventtest: []
    }
  }
  async componentDidMount() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    const response = await fetch('https://127.0.0.1:8000/api/consultation', { credentials: 'include' }, requestOptions);
    const data = await response.json();
    
    const ttt = Object.values(data['hydra:member']);
    let tabaffichage = [];
    for (var i in ttt){
      tabaffichage.push({id : ttt[i].id , 
        title : ttt[i].motifConsultation,
        start : new Date(ttt[i].start),
        end : new Date(ttt[i].end),
        allday : ttt[i].allday});
        
    }
    this.setState({
      eventtest: [
          this.state.eventtest,
          ...tabaffichage
      ]
    });
    }

    

  handleEventClick = (clickInfo) => {
    if (typeof window !== 'undefined') {
      window.location.href = `http://localhost:5173/infoRDV/${clickInfo.event._def.publicId}`;
    }
  };

  render() {
  return (
    <div>
      <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          events={this.state.eventtest}
          locale="fr"
          headerToolbar={{
            start: 'prev,next,today',
            center: 'title',
            end: 'timeGridWeek,timeGridDay',
          }}
          eventClick={this.handleEventClick}
        />
    </div>
  );
  }
}

export default PlanningVeto;
