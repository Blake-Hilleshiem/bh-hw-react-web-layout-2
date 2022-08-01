// import profileFlamingo from "../images/profileFlamingo.jpg";
import { Component } from "react";
import mockDataCall from "../mock-data/mockDataCall";

// console.log(mockDataCall.results[0].name);

// class ProfileItem extends Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <div className="item-section">
//         <div className="profile-wrapper">
//           {/* <img src={mockDataCall.results[2].img} alt="profile img" /> */}
//           <img
//             src={mockDataCall.results[this.props.id].img}
//             alt="profile img"
//           />
//           <div className="profile-name">
//             {mockDataCall.results[this.props.id].name}
//           </div>
//           <div className="profile-description">
//             {mockDataCall.results[this.props.id].description}
//           </div>
//         </div>
//         <button>Action Btn</button>
//       </div>
//     );
//   }
// }

// function ProfileItem(props) {
//   console.log(props.id);
//   return (
//     <div className="item-section">
//       <div className="profile-wrapper">
//         {/* <img src={mockDataCall.results[2].img} alt="profile img" /> */}
//         <img src={mockDataCall.results[props.id].img} alt="profile img" />
//         <div className="profile-name">
//           {mockDataCall.results[props.id].name}
//         </div>
//         <div className="profile-description">
//           {mockDataCall.results[props.id].description}
//         </div>
//       </div>
//       <button>Action Btn</button>
//     </div>
//   );
// }

function ProfileItem(props) {
  // console.log(props.id);
  return (
    <div className="item-section">
      <div className="profile-wrapper">
        {/* <img src={mockDataCall.results[2].img} alt="profile img" /> */}
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
