import  "./card-list.styles.css";
import Card from "../card/card.component";
import { Monster } from "../../App";
 
type CardListProps = {
    monsters: Monster[]
}
//Implicit decinstruct bc its the only prop
const CardList = ({monsters}: CardListProps) =>  {
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