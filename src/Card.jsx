/* eslint-disable react/prop-types */
function Card(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <img src={props.src} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </>
  );
}

export default Card;
