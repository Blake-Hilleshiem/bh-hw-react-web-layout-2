import profileFlamingo from "../images/profileFlamingo.jpg";

function ProfileItem() {
  return (
    <div className="item-section">
      <div className="profile-wrapper">
        <img src={profileFlamingo} alt="profile img" />
        <div className="profile-name">Blake</div>
        <div className="profile-description">Description or something</div>
      </div>
      <button>Action Btn</button>
    </div>
  );
}

export default ProfileItem;
