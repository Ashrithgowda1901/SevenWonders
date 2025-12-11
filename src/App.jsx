import './App.css'
import Card from './components/Card'

function App() {
  let sevenWonders = [
    {
      name: "Colosseum (Italy)",
      place: "italy.jpg"
    },
    {
      name: "Christ the Redeemer (Brazil)",
      place: "brazil.jpg"
    },
    {
      name: "Great Wall (China)",
      place: "china.jpg"
    },
    {
      name: "Machu Picchu (Peru)",
      place: "peru.jpg"
    },
    {
      name: "Petra (Jordan)",
      place: "jordan.jpg"
    },
    {
      name: "Chichén Itzá (Mexico)",
      place: "mexico.jpg"
    },
    {
      name: "Taj Mahal (India)",
      place: "india.jpg"
    },
  ]
  // console.log(sevenWonders.map((sevenwonder)=>sevenwonder.id))
  
  return (
    <div id="parent" >
      {
        sevenWonders.map((sevenWonder,index) => (
          <Card key={index} name={sevenWonder.name} place={sevenWonder.place} />
        ))
      }
    </div>
  );
}
export default App
