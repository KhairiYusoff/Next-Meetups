import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {

    const router = useRouter();

    async function addMeetupHandler(enteredMeetupData) {
        //the url endpoint 'api/new-meetup' must be same as the name file of new-meetup.js
        //which is inside api folder
        const response = await fetch('api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();

        console.log(data);

        router.push('/');
    }
    return (
        <>
            <Head>
                <title>Add a new meetup</title>
                <meta
                    name='description'
                    content='Add your own meetup and create amazing opportunities!'
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    )
}

export default NewMeetupPage