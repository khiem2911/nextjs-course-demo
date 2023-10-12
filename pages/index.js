import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";


const Home = ({ meetups }) => {
  return (
  <>
  <Head>
    <title>React Meetups</title>
    <meta name="description" content="Browse a huge list of highly active React meetups"/>
  </Head>
  <MeetupList meetups={meetups} />;
  </>
  )
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://khiem:phamduykhiem@cluster0.pbnv8dq.mongodb.net/"
  );

  const db = client.db();

  const meetupCollections = db.collection("meetups");

  const meetups = await meetupCollections.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((item) => ({
        id:item._id.toString(),
        title: item.title,
        address: item.address,
        description: item.description,
        image: item.image,
      })),
    },
    revalidate: 1,
  };
}

export default Home;
