import "./App.css";
import {FC} from "react";


type H1Props = {userName: string};
const AppH1: FC <H1Props> = (props) => (
  <h1>First name {props.userName}</h1>
);




const Firstname = () => (
  <div className="first_name">Firstname: Dasha</div>
)

const Age = () => (
  <div className="age">Age: 32</div>
)

const Contact = () => (
  <div className="contact">contact: 0932743365</div>
)

const App = () => (
  <div className="App">
    <h1>About me:</h1>
    <Firstname/>
    <Age/>
    <Contact/>
  </div>
);



export default App;
