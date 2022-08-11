import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
    const navigate = useNavigate();

    //Treba nazvati bazu ili tablicu npr meetups.json extenziju .json zahtjeva firebase
    const api_url = 'https://react-app-new-3f80d-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';

    const addMeetupHandler = (meetupData) => {
        fetch(api_url, {
            method: 'POST', 
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }      
        }).then(() => {
            navigate("/", {replace: true});
        });

    }


    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetup;