import React, { useState } from "react";

const Login = ({ playerNames }) => {
  const [formData, setFormData] = useState({
    player1: "",
    player2: "",
  });
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <div className="wrapper">
      <div className="screen">
        <form>
          <div className="form-group">
            <label>Name Player1</label>
            <input
              type="name"
              id="player1"
              name="player1"
              className="form-control"
              onChange={onChange}
            />

            <label>Name Player2</label>
            <input
              type="name"
              id="player2"
              name="player2"
              className="form-control"
              onChange={onChange}
            />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              playerNames(formData);
            }}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

//   handleClick = (event) => {
//     event.preventDefault();
//     const { player1, player2 } = this.state;
//     this.props.names(player1, player2);
//   };
//   render() {
//     return (
//       <div className="wrapper">
//         <div className="screen">
//           <form>
//             <div className="form-group">
//               <label>Name Player1</label>
//               <input
//                 type="name"
//                 id="player1"
//                 className="form-control"
//                 onChange={this.handleChange}
//               />

//               <label>Name Player2</label>
//               <input
//                 type="name"
//                 id="player2"
//                 className="form-control"
//                 onChange={this.handleChange}
//               />
//             </div>

//             <button onClick={this.handleClick} className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
