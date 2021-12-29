import React from "react"
import './pill.scss'
import creditIcon from '../../assets/credit-card.png'
import pieceIcon from '../../assets/diamond.png'
import balanceIcon from '../../assets/money.png'

const PILLS = [
    {
        id:'cards',
        icon: creditIcon,
        description:'Meus cartões',
    },
    {
        id:'piece',
        icon: pieceIcon,
        description:'Meu Pedacinho do Bank app',
        value:'R$ 0,48'
    },
    {
        id:'balance',
        icon: balanceIcon,
        description:'Saldo para transferência',
        value:'R$ 0,00'
    }
]

function identifyType(id) {
    const typeArray = []

    PILLS.forEach((type) => {
        if (type.id === id) {
            typeArray.push(type)
        }
    })

    return typeArray[0]
}

const Pill = function ({id}) {
    const type = identifyType(id)
    console.log(type)

    return (
        <div className="pill">
            <img className="pill__icon" src={type.icon}/>
            <p className="pill__description">{type.description}</p>
            <span className="pill__value">{type.value}</span>
        </div>
    )
}

export default Pill