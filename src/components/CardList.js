import Card from "./Card";
import data from "./data";
import './CardList.css';


const CardList = () => {
    return (
        <div className="cardsList">
            {
                data.users.map((user) =>
                    <Card {...user} />
                )
            }
        </div>
    )
}

export default CardList;