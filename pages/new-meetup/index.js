import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {
  const route = useRouter();
  const handlerSubmit = async (value) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(value),
      headers: { "Content-Type": "Application/json" },
    });

    const data = await response.json();
    console.log(data);
    route.back();
  };
  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta name="description" content="Add ypur own meetups " />
      </Head>
      <NewMeetupForm onAddMeetup={handlerSubmit} />
    </>
  );
};
export default NewMeetUpPage;
