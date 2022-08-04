import mockDataCall from "../mock-data/mockDataCall";

function ProfileItem(props) {
  return (
    <div className="item-section">
      <div className="profile-wrapper">
        <img src={mockDataCall.results[props.id].img} alt="profile img" />
        <div className="profile-name">
          {mockDataCall.results[props.id].name}
        </div>
        <div className="profile-description">
          {mockDataCall.results[props.id].description}
        </div>
      </div>
      <button>Action Btn</button>
    </div>
  );
}

export default ProfileItem;
