import React, { useState } from "react";

//include images into your bundle

//create your first component

export default function Home() {
  const [selectedColor, setSelectedColor] = useState("null");


  return (
    <div className="traffic-light">
      <div 
        onClick = { () => setSelectedColor("red") } 
        
        className={"light red" + (selectedColor === "red" ? " glow" : "")}
      >
      </div>
      <div onClick= { () => setSelectedColor("yellow")}
        className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}
      >
      </div>
      <div onClick= { () => setSelectedColor("green")}
        className={"light green" + (selectedColor === "green" ? " glow" : "")}
      >
      </div>
    </div>
  );
}

//<div class="light red"></div>
//<div class="light yellow"></div>
//<div class="light green glow"></div>
//</div>
//</div>
//<script type="text/javascript" src="./bundle.js"></script>
//</body>
//</html>
