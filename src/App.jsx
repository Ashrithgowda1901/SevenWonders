import './App.css'
import expandIcon from "/expand.jpg";

function App(){
  return(
    <>
      <div id="parent">
        <div className="card">
          <div className='expand'>
          <img src={expandIcon} alt=""  />
          </div>
          <img src="public\italy.jpg" alt="" />
          <h2>Colosseum (Italy)</h2>
          <p>Symbol of ancient Rome, the Colosseum (or Flavian Amphitheater), built between 72 and 80 AD, could host up to 50,000 spectators for gladiator fights, shows, and public games.</p>
        </div>
        <div className="card">
        <div className='expand'>
          <img src={expandIcon} alt=""  />
          </div>
          <img src="public\brazil.jpg" alt="" />
          <h2>Christ the Redeemer (Brazil)</h2>
          <p>Symbol of ancient Rome, the Colosseum (or Flavian Amphitheater), built between 72 and 80 AD, could host up to 50,000 spectators for gladiator fights, shows, and public games.</p>
        </div>
        <div className="card">
        <div className='expand'>
          <img src={expandIcon} alt=""  />
          </div>
          <img src="public\china.jpg" alt="" />
          <h2>Great Wall (China)</h2>
          <p>Symbol of ancient Rome, the Colosseum (or Flavian Amphitheater), built between 72 and 80 AD, could host up to 50,000 spectators for gladiator fights, shows, and public games.</p>
        </div>
        <div className="card">
        <div className='expand'>
          <img src={expandIcon} alt=""  />
          </div>
          <img src="public\peru.jpg" alt="" />
          <h2>Machu Picchu (Peru)</h2>
          <p>Symbol of ancient Rome, the Colosseum (or Flavian Amphitheater), built between 72 and 80 AD, could host up to 50,000 spectators for gladiator fights, shows, and public games.</p>
        </div>
        <div className="card">
        <div className='expand'>
          <img src={expandIcon} alt=""  />
          </div>
          <img src="public\jordan.jpg" alt="" />
          <h2>Petra (Jordan)</h2>
          <p>Symbol of ancient Rome, the Colosseum (or Flavian Amphitheater), built between 72 and 80 AD, could host up to 50,000 spectators for gladiator fights, shows, and public games.</p>
        </div>
        <div className="card">
        <div className='expand'>
          <img src={expandIcon} alt=""  />
          </div>
          <img src="public\mexico.jpg" alt="" />
          <h2>Chichén Itzá (Mexico)</h2>
          <p>Symbol of ancient Rome, the Colosseum (or Flavian Amphitheater), 
            built between 72 and 80 AD, could host up to 50,000 spectators for gladiator fights, shows, and public games.</p>
        </div>
        <div className="card">
        <div className='expand'>
          <img src={expandIcon} alt=""  />
          </div>
          <img src="public\india.jpg" alt="" />
          <h2>Taj Mahal (India)</h2>
          <p>Symbol of ancient Rome, the Colosseum (or Flavian Amphitheater), built between 72 and 80 AD, could host up to 50,000 spectators for gladiator
             fights, shows, and public games.</p>
        </div>
      </div>
    </>
  )
}
export default App
