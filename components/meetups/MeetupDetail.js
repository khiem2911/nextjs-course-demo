import classes from './MeetupDetail.module.css'


const MeetupDetail = (props) => {


  return (
    <div className={classes.container}>
      <img src={props.meetUpData.image} alt={props.meetUpData.image} />
      <h1>{props.meetUpData.title}</h1>
      <address>{props.meetUpData.address}</address>
      <p>{props.meetUpData.description}</p>
    </div>
  );
};
export default MeetupDetail;
