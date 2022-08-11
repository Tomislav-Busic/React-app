import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://cdn.pixabay.com/photo/2017/09/01/11/22/zagreb-2703916_960_720.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://cdn.pixabay.com/photo/2022/01/29/14/51/underground-tunnel-6977690__340.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];


const AllMeetupsPage = () => {
    return (
        <section>
            <h1>All meetups</h1>
            <ul>
               <MeetupList meetups={DUMMY_DATA} /> 
            </ul>
        </section>
    );
}

export default AllMeetupsPage;