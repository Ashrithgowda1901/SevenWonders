import './App.css'
import Card from './components/Card'

function App(){
  return(
    <>
      <div id="parent">
        <Card name="Colosseum (Italy)" place="public\italy.jpg" />
        <Card name="Christ the Redeemer (Brazil)" place="public\brazil.jpg" />
        <Card name="Great Wall (China)" place="public\china.jpg" />
        <Card name="Machu Picchu (Peru)" place="public\peru.jpg" />
        <Card name="Petra (Jordan)" place="public\jordan.jpg" />
        <Card name="Chichén Itzá (Mexico)" place="public\mexico.jpg" />
        <Card name="Taj Mahal (India)" place="public\india.jpg" />
      </div>
    </>
  )
}
export default App
