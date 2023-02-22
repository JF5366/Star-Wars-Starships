
import './App.css';
import { useEffect, useState } from 'react';
import StarshipsCard from './components/StarshipsCard';
import { getAllStarships } from './services/starships-api';
import Header from './components/Header';



function App() {
  let [starships, setStarships] = useState([])
  
  
  let getData = async () => {
    let allStarships = await getAllStarships()
    console.log(allStarships)

    let starshipComponents = allStarships.results.map((item) => {
      //console.log(item)
      return (
        <div className='starships'>  
            <StarshipsCard 
              name={item.name} 
            />
          </div>
      )
     })

    setStarships(starshipComponents)
   }

  useEffect(() => {
    getData("");
  }, []);
  

  return(
    <div className='mainPage'>
      <Header />
      <div className="parent">
         {starships}
         </div>
    </div>
  )
 }
export default App;
