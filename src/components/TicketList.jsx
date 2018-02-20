import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.ticketList).map(function(ticketId) {
        let ticket = props.ticketList[ticketId];
        return <Ticket names={ticket.names}
                  location={ticket.location}
                  issue={ticket.issue}
                  formattedWaitTime={ticket.formattedWaitTime}
                  currentRouterPath={props.currentRouterPath}
                  key={ticket.id}
                  ticketId={ticket.id}
                  onTicketSelection={props.onTicketSelection}/>
              })}

    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default TicketList;

//when ticketList was an array we looped through it like:
//{props.ticketList.map((ticket) =>
//   <Ticket names={ticket.names}
//     location={ticket.location}
//     issue={ticket.issue}
//     formattedWaitTime={ticket.formattedWaitTime}
//     currentRouterPath={props.currentRouterPath}
//     key={ticket.id}
//     onTicketSelection={props.onTicketSelection}/>
// )}
