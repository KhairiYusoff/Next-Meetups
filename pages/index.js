import React from 'react';
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

const HomePage = () => {
    return (
        <div>

            <MeetupList meetups={DUMMY_MEETUPS} />

        </div>
    )
}

export default HomePage;