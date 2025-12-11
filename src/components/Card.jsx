import expandIcon from "/expand.jpg";
import "./Card.css"

const Card = (props) => {
    return (
        <div className="card">
            <div className='expand'>
                <img src={expandIcon} alt="" />
            </div>
            <img src={props.place} alt="" />
            <h2>{props.name}</h2>
            <p>Symbol of ancient Rome, the Colosseum (or Flavian Amphitheater), built between 72 and 80 AD, could host up to 50,000 spectators for gladiator fights, shows, and public games.</p>
        </div>
    )
}

export default Card