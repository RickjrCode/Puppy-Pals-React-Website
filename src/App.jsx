import { useState } from "react";
import "./App.css";
import Lottie from "lottie-react";

// Import your Lottie animation data files for each puppy
import animationData1 from "./assets/dog-animation.json";
import animationData2 from "./assets/dog-animation2.json";
import animationData3 from "./assets/dog-animation3.json";
import animationData4 from "./assets/dog-animation4.json";
import animationData5 from "./assets/dog-animation5.json";
import animationData6 from "./assets/dog-animation6.json";
import animationData7 from "./assets/dog-animation7.json";

// Import the puppyList data
import { puppyList } from "./data";

function App() {
  const [featPupId, setFeatPupId] = useState(null);
  const [currentAnimation, setCurrentAnimation] = useState(null);

  const idToAnimationMapping = {
    1: animationData1,
    2: animationData2,
    3: animationData3,
    4: animationData4,
    5: animationData5,
    6: animationData6,
    7: animationData7,
  };

  // Function to update the current animation and other information based on the clicked puppy
  const handleClick = (puppy) => {
    setCurrentAnimation(idToAnimationMapping[puppy.id]);
    setFeatPupId(puppy);
  };

  return (
    <div>
      {featPupId && (
        <div>
          <h2>{featPupId.name}</h2>
          <ul>
            <li>Age: {featPupId.age}</li>
            <li>Email: {featPupId.email}</li>
            {currentAnimation && (
              <Lottie
                animationData={currentAnimation}
                style={{ width: "200px", height: "200px" }}
              />
            )}
          </ul>
        </div>
      )}
      {puppyList.map((puppy) => (
        <p onClick={() => handleClick(puppy)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}
    </div>
  );
}

export default App;
