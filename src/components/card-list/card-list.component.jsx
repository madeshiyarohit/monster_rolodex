import React from "react";
export default function Cardlist(props) {
  return (
    <div className="card-list">
      {props.monster.map((monster, index) => {
        return (
          <div key={index} className="my-card">
            <div className="my-card-margin">
              <img
                src={`https://robohash.org/${monster.id}?set=set3&size=180x180`}
                alt=""
              />
              <h3>{monster.name}</h3>
              <p>{monster.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
// import  { Component } from 'react'

// export default class Cardlist extends Component {
//   render() {
//       const {monster} = this.props;
//     return (
//       <div className='card-list'>{monster.map((monster,index)=>{
//           return(
//               <div key={index} className="my-card">
//                   <div className="my-card-margin">
//                   <img src={`https://robohash.org/${monster.id}?set=set3&size=180x180`} alt="" />
//                     <h3>{monster.name}</h3>
//                     <p>{monster.email}</p>
//                   </div>

//               </div>
//           )
//       })}</div>
//     )
//   }
// }
