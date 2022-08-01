import "../styles/App.scss";
import ProfileItem from "./ProfileItem";
import mockDataCall from "../mock-data/mockDataCall";

// console.log(mockDataCall);

function TestRender() {
  return (
    <div className="row-wrapper">
      {Array(5)
        .fill(true)
        .map((_, i) => (
          <ProfileItem key={i} id={i} />
        ))}
      {/* <ProfileItem id={props.id} />; */}
    </div>
  );
}

function App() {
  return (
    <div className="App">
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
        {/* <div className="row-wrapper"> */}

        {/* <ProfileItem id={2} /> */}
        <TestRender />
        {/* </div> */}
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
