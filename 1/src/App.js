import './App.css';
import {About} from "./MainFile.js"
function App()
 {
  const obj = {
    Name: "Tom's Bistro",
    Adress: "вул. Смачної їжі, 12, Київ, Україна",
    Rate: "4.7",
    Cuisin: "Європейська, Французька",
    Photo: ""
  };

  return (
    <div>
      <About user={obj}></About>

    </div>
  );
}

export default App;


