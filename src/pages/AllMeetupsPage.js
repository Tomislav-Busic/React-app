import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';


const AllMeetupsPage = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ loadedMeetups, setLoadedMeetups ] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-app-new-3f80d-default-rtdb.europe-west1.firebasedatabase.app/meetups.json')
    .then(response => response.json())
    .then(data => {
      const meetups = [];

      for (let key in data){
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup);
      }
    setIsLoading(false);
    setLoadedMeetups(meetups);
    });
  }, []);
  

  if (isLoading){
    return <section>
      <p>
        Loading...
      </p>
    </section>
  }

    return (
        <section>
            <h1>All meetups</h1>
            <ul>
               <MeetupList meetups={loadedMeetups} /> 
            </ul>
        </section>
    );
}

export default AllMeetupsPage;