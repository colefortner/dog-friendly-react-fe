import BusinessCard from "./BusinessCard/BusinessCard";
import "./App.css";

function App() {
  const card = [
    {
      businessName: "Three Daughters Brewing",
      businessPicture:
        "https://beerconnoisseur.com/sites/default/files/network_members/3_daughters_brewing/1.jpeg",
      businessRating: 5,
      businessPhone: "777-777-7777",
      businessAddress: "1962 1st Ave S, St. Petersburg, FL 33712",
    },
    {
      businessName: "Pinellas Ale Works",
      businessPicture:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/61/d7/ab/paw-brewery-tap-room.jpg?w=500&h=-1&s=1",
      businessRating: 4.5,
      businessPhone: "555-555-5555",
      businessAddress: "1962 1st Ave S, St. Petersburg, FL 33712",
    },
  ];

  return (
    <div className="App">
      <BusinessCard businessCard={card} />
    </div>
  );
}

export default App;
