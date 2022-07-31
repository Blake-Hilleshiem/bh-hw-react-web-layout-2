import "../styles/App.scss";
import ProfileItem from "./ProfileItem";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-left-wrapper">
          <div className="logo">Descriptive Logo</div>
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
        <div className="row-wrapper">
          <ProfileItem />
          <ProfileItem />
          <ProfileItem />
          <ProfileItem />
          <ProfileItem />
        </div>
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
