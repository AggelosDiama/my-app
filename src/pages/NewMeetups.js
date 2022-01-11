import {useHistory} from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewlMeetupsPage() {
  const history = useHistory();

  function addMeetupHandler(meetupdata) {
    fetch(
      'https://react-getting-starting-d0abf-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', 
      {
        method: 'POST', 
        body: JSON.stringify(meetupdata),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() =>{
      history.replace('/');
    } )
  }

  return (
    <div>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewlMeetupsPage;
