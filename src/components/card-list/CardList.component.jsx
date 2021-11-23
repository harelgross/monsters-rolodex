import React from "react";
import { Card
 } from "./card/Card.component";
import './CardList.style.css';

export const CardList = (props) => {
    return (
        <div className="card-list">
        {
          props.monsters.map((monster) => <Card monster={monster} />)
        }
        </div>
    )
}