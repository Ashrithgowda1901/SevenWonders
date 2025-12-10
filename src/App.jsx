import './App.css'
import Card from './components/Card'

function App(){
  return(
    <>
      <div id="parent">
        <Card name="Colosseum (Italy)" place="italy.jpg" />
        <Card name="Christ the Redeemer (Brazil)" place="brazil.jpg" />
        <Card name="Great Wall (China)" place="china.jpg" />
        <Card name="Machu Picchu (Peru)" place="peru.jpg" />
        <Card name="Petra (Jordan)" place="jordan.jpg" />
        <Card name="Chichén Itzá (Mexico)" place="mexico.jpg" />
        <Card name="Taj Mahal (India)" place="india.jpg" />
      </div>
    </>
  )
}
export default App
