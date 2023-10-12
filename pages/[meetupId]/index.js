import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
const DetailMeetUp = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetUpData.title}</title>
        <meta name="description" content={props.meetUpData.description}></meta>
      </Head>
      <MeetupDetail meetUpData={props.meetUpData} />;
    </>
  );
};
export default DetailMeetUp;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://khiem:phamduykhiem@cluster0.pbnv8dq.mongodb.net/"
  );

  const db = client.db();

  const meetupCollections = db.collection("meetups");

  const meetups = await meetupCollections.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((item) => ({
      params: { meetupId: item._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://khiem:phamduykhiem@cluster0.pbnv8dq.mongodb.net/"
  );

  const db = client.db();

  const meetupCollections = db.collection("meetups");
  const selectedMeetUp = await meetupCollections.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetUpData: {
        id: selectedMeetUp._id.toString(),
        title: selectedMeetUp.title,
        address: selectedMeetUp.address,
        description: selectedMeetUp.description,
        image: selectedMeetUp.image,
      },
    },
  };
}
