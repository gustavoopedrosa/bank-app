import React from "react"
import './card-functions.scss'
import creditIcon from '../../assets/credit-card.png'

const CardFuncions = function ({item}) {
    return (
        <div className="card">
            <img className="card__icon" src={item.icon}/>
            <span className="card__title">{item.title}</span>
        </div>
    )
}

export default CardFuncions