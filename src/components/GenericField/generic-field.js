import React from "react"
import './generic-field.scss'
import creditIcon from '../../assets/credit-card.png'
import lendingIcon from '../../assets/dollar.png'
import investmentIcon from '../../assets/signal.png'
import heartIcon from '../../assets/heart.png'
import shoppingIcon from '../../assets/shopping.png'

const FIELDTYPES = [
    {
        id: 'account',
        title: 'Conta',
        currency: 'R$',
        value: '999,99',
        border: false
    },
    {
        id: 'cred-card',
        title: 'Cartão de crédito',
        icon: creditIcon,
        currency: 'R$',
        value: '1.999,00',
        subtitle: 'Fatura atual',
        description: 'Limite disponível de R$ 500,00',
        parcel: 'Parcelar compras'
    },
    {
        id: 'lending',
        title: 'Empréstimo',
        icon: lendingIcon,
        description: 'Valor disponível de até R$ 10.000,00',
    },
    {
        id: 'investment',
        title: 'Investimento',
        icon: investmentIcon,
        description: 'O jeito Bank app de se investir: sem asteriscos, linguagem fácil e a partir de R$1. Saiba mais.',
    },
    {
        id: 'life',
        title: 'Seguro de vida',
        icon: heartIcon,
        description: 'Conheça Bank app Vida: Um seguro simples e que cabe no bolso.',
    },
    {
        id: 'shopping',
        title: 'Shopping',
        icon: shoppingIcon,
        description: 'Vantagens exclusivas das nossas marcas preferidas.',
    }
]

function identifyType(id) {
    const typeArray = []

    FIELDTYPES.forEach((type) => {
        if (type.id === id) {
            typeArray.push(type)
        }
    })

    return typeArray[0]
}

function verifyParcel (id) {
    const type = identifyType(id)
    
    if(type.parcel === undefined) {
        
    } else {
        return <div className="generic-field__parcel">{type.parcel}</div>
    } 
}

const GenericField = function ({ id }) {
    const type = identifyType(id)

    return (
        <div className="generic-field">
            <img src={type.icon} className="generic-field__icon"/>
            <h2 className="generic-field__title">{type.title}</h2>
            <h3 className="generic-field__subtitle">{type.subtitle}</h3>
            <p className="generic-field__value">{type.currency} {type.value}</p>
            <p className="generic-field__description">{type.description}</p>
            {verifyParcel(id)}
        </div>
    )
}



export default GenericField