import Card from "./Card";

function App() {
  return (
    <>
      <p>My name is Ojas</p>
      <h1>My Contacts</h1>
      {/* [{name: "beyonce", src: "Dsdsa", tel: "adads"},name: "beyonce", src: "Dsdsa", tel: "adads"},name: "beyonce", src: "Dsdsa", tel: "adads"}] 
      {data.map(element) => (
        <Card name={element.name} />
      )} */}
      <Card
        name="Beyonce"
        src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Jack Bauer"
        src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        tel="+987 654 321"
        email="jack@nowhere.com"
      />
    </>
  );
}
export default App;
