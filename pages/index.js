import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';


const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A First Meetup",
        image: "https://images.unsplash.com/photo-1486571698588-a2204703bec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
        address: "Some address 10, 12345, Portugal",
        description: "Tourists on a sandy shore"
    },
    {
        id: "m2",
        title: "A Second Meetup",
        image: "https://images.unsplash.com/photo-1631962571320-65e96c8ac8e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        address: "Some address 20, 12345, Greece",
        description: "Summertime in Greece"
    },
    {
        id: "m3",
        title: "A Third Meetup",
        image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80",
        address: "Some address 20, 12345, France",
        description: "Paris France"
    },
]

const HomePage = (props) => {

    return (
        <div>

            <MeetupList meetups={props.meetups} />

        </div>
    )
}

// export async function getServerSideProps(context) {
//     const req = context.req
//     const res = context.res
//     //fetch data from an api
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
    // fetch data from an API
    MongoClient.connect();

    const client = await MongoClient.connect('mongodb+srv://khairi:tabligh@cluster0.turpfle.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.data.title,
                address: meetup.data.address,
                image: meetup.data.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default HomePage;