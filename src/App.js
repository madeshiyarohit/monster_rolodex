import React, { useEffect, useState } from "react";
import Cardlist from "./components/card-list/card-list.component";
import InputBox from "./components/input-box/input-box.component";
import "./App.css";
export default function App() {
  const [searchField, setSearchField] = useState("");
  const [myMonster, setMyMonster] = useState([]);
  const [filteredArray, setFilteredArray] = useState(myMonster);
  const inputSearchField = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monster) => setMyMonster(monster));
    // console.log("This is UseEffect One !!!");
  }, []);
  // console.log("MyMonster", myMonster);
  useEffect(() => {
    // console.log("This is UseEfect Two !!!");
    const filteredArray = myMonster.filter((singleMonster) => {
      return singleMonster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredArray(filteredArray);
  }, [myMonster, searchField]);
  return (
    <div className="App">
      <h1 className="app-title">Rolodex Monsters</h1>
      <div className="container">
        <InputBox
          onchangeFunction={inputSearchField}
          placeholder="Enter The Monster Name !!!"
        />
        <Cardlist monster={filteredArray} />
      </div>
    </div>
  );
}
// import { Component } from "react";
// import Cardlist from "./components/card-list/card-list.component";
// import InputBox from "./components/input-box/input-box.component";
// import "./App.css";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       myMonsters: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((monsterObjet) =>
//         this.setState(() => {
//           return { myMonsters: monsterObjet };
//         })
//       );
//   }
//   inputSearchField = (event) => {
//     const searchString = event.target.value.toLocaleLowerCase();
//     this.setState({
//       searchField: searchString,
//     });
//   };
//   render() {
//     const { myMonsters, searchField } = this.state;
//     const { inputSearchField } = this;
//     const filterdArray = myMonsters.filter((singleMonster) => {
//       return singleMonster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Rolodex Monsters</h1>
//         <div className="container">
//           <InputBox
//             onchangeFunction={inputSearchField}
//             placeholder="Enter The Monster Name !!!"
//           />
//           <Cardlist monster={filterdArray} />
//         </div>
//       </div>
//     );
//   }
// }
// export default App;
