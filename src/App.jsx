import { Component } from "react";
import ClassComp from "./ClassComp";
import Funkc1Comp from "./Funkc1Comp";
import Funkc2Comp from "./Funkc2Comp";
export default class App extends Component {

  users = [
    {
      ime: "Branko",
      prezime: "Branković",
      dob: 32,
    },
    {
      ime: "Janko",
      prezime: "Janković",
      dob: 42,
    },
    {
      ime:"Stanko",
      prezime:"Stanković",
      dob: 52,
    },
  ];

    render() {
      const users = this.users;
        
            return (
              <>
              <Funkc1Comp ime={users[0].ime} godine= {users[0].dob}/>
              <ClassComp user={users[1]}/>
              <Funkc2Comp>
                {users}
              </Funkc2Comp>
              </>
            )
        
    }
}
