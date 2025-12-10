import expandIcon from "/expand.jpg";
import "./Card.css"

const Card = ({name,place}) => {
    return (
        <div className="card">
            <div className='expand'>
                <img src={expandIcon} alt="" />
            </div>
            <img src={place} alt="" />
            <h2>{name})</h2>
            <p>Symbol of ancient Rome, the Colosseum (or Flavian Amphitheater), built between 72 and 80 AD, could host up to 50,000 spectators for gladiator fights, shows, and public games.</p>
        </div>
    )
}

export default Card