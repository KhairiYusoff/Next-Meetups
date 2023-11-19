import { MongoClient } from 'mongodb';

// /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        //this is the code that you would NEVER run in your browser/frontend/client side
        const client = await MongoClient.connect('mongodb+srv://khairi:tabligh@cluster0.turpfle.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log(result)

        client.close();
        res.status(201).json({ message: 'meetups inserted' })
    }

}

export default handler; 