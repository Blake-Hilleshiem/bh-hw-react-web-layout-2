import { useEffect, useState } from "react";

import "../styles/App.scss";
import ProfileItem from "./ProfileItem";
import mockDataCall from "../mock-data/mockDataCall";

// console.log(mockDataCall);

// function TestRender() {
//   return (
//     <div className="data-container">
//       <div className="row-wrapper">
//         {mockDataCall.results.map((_, i) => {
//           return <ProfileItem key={i} id={i} />;
//         })}
//       </div>
//     </div>
//   );
// }

function TestRender() {
  let numRuns = 1;
  if (mockDataCall.results.length % 5 !== 0) {
    numRuns = Math.floor(mockDataCall.results.length / 5) + 1;
  } else {
    numRuns = Math.floor(mockDataCall.results.length / 5);
  }

  return (
    <div className="data-container">
      {Array(numRuns)
        .fill(true)
        .map((_, i) => (
          <div className="row-wrapper" key={i}>
            {mockDataCall.results.map((item, i) => {
              return <ProfileItem key={item.id} id={i} />;
            })}
          </div>
        ))}
    </div>
  );
}

function App() {
  const [height, setHeight] = useState("65vh");

  useEffect(() => {
    if (mockDataCall.results.length > 5) {
      setHeight("auto");
    }
  }, []);

  return (
    <div className="App" style={{ gridTemplateRows: `150px ${height} 150px` }}>
      <header>
        <div className="header-left-wrapper">
          <div className="logo">Peeps n Profiles</div>
        </div>
        <div className="header-center-wrapper">
          <button>Nav Button</button>
          <button>Nav Button</button>
          <button>Nav Button</button>
          <button>Nav Button</button>
        </div>
        <div className="header-right-wrapper">
          <div>Blake Hilleshiem</div>
        </div>
      </header>
      <div className="middle-container">
        <TestRender />
      </div>
      <footer>
        <div className="footer-center-wrapper">
          <div className="footer-buttons-wrapper">
            <button>Nav Button</button>
            <button>Nav Button</button>
            <button>Nav Button</button>
            <button>Nav Button</button>
          </div>
          <div className="copyright-wrapper">© 2022 Blake's Company</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
