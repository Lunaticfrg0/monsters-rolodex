import  "./card-list.styles.css";
import Card from "../card/card.component";

//Implicit decinstruct bc its the only prop
const CardList = ({monsters}) =>  {
    return (
        <div className="card-list"> 
            {monsters.map((monster) => {
                
                return (
                      <Card monster = {monster}/>
                )
            }
            )}
        </div>
    )
}

export default CardList;