import Home from './pages/home';
import { useEffect,useState } from 'react';
import Loading from './components/Loading';


//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const[cards,setCards] = useState(null);
  //const CardsContext = createContext();
  useEffect(() => {
    try{
      fetch('http://localhost:3000/cards')
      .then(resp => resp.json())
      .then(data => {
        setCards(data);
        console.log(cards);
      })
    }
    catch(err){
      console.log(err);
    } 
    
  }, [])
  return (
    <div>
      {!cards ?
        (<Loading/>)
        :
        (<Home cards ={cards} />)
      }
    </div>
  
  );
}
export default App;



