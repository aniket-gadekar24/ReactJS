
import './App.css';
import Props from './concept/Props';
import UseStae from './Hooks/useState/UseStae';

function App() {

  let person = {
    name : "aniket",
    age : 25,
    city : "pune"
  }
  return (
    <div className="App">
        {/* <Props  person={person} person2="jivan" person3="pankaj"/> */}

        <UseStae/>
    </div>
  );
}

export default App;
 