import React from "react";
// import "./input-box.style.css";
export default function InputBox(props) {
  return (
    <div>
      <input
        type="search"
        name="search-box"
        id="search-box"
        className="monsters-search-box search-box"
        placeholder={props.placeholder}
        onChange={props.onchangeFunction}
      />
    </div>
  );
}
// import React, { Component } from 'react'
// import "./input-box.style.css"

// export default class InputBox extends Component {
//   render() {
//       const {onchangeFunction, placeholder} = this.props
//     return (
//       <div>
//           <input
//           type="search"
//           name="search-box"
//           id="search-box"
//           className='monsters-search-box search-box'
//           placeholder={placeholder}
//           onChange={onchangeFunction}
//         />
//       </div>
//     )
//   }
// }
