//dumb component
import './Card.css';
const Card = ({ id, imageUrl, firstName, lastName, age, isAvailable }) => {
    return (
        <div className="card" id={id}>
            <div className="cardImage" style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            <h1>{firstName + " " + lastName}</h1>
            <div className="age">Our pet is {age} y.o.</div>
            <div>{isAvailable ? "The pet is available" : "We've run out of pets"}</div>
        </div>

    )
}

export default Card;