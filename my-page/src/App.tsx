import "./App.css";

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
