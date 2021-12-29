import React from "react"
import GenericField from "../../components/GenericField/generic-field"
import Pill from "../../components/Pill/pill"
import CardFuncions from "../../components/SliderFunctions/card-functions"
import './home.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/css'
import globeIcon from '../../assets/globe.png'
import codeIcon from '../../assets/codigo-de-barras.png'
import transferIcon from '../../assets/transferir.png'
import depoIcon from '../../assets/depositar.png'
import handIcon from '../../assets/mao.png'
import phoneIcon from '../../assets/smartphone.png'
import dollarIcon from '../../assets/money.png'
import heartIcon from '../../assets/heart.png'

const name = 'Gustavo'

const FUNCTIONS = [
    {
        id: 1,
        icon: globeIcon,
        title: 'Area pix'
    },
    {
        id: 2,
        icon: codeIcon,
        title: 'Pagar'
    },
    {
        id: 3,
        icon: transferIcon,
        title: 'Transferir'
    },
    {
        id: 4,
        icon: depoIcon,
        title: 'Depositar'
    },
    {
        id: 5,
        icon: handIcon,
        title: 'Pegar emprestado'
    },
    {
        id: 6,
        icon: phoneIcon,
        title: 'Recarregar celular'
    },
    {
        id: 7,
        icon: dollarIcon,
        title: 'Cobrar'
    },
    {
        id: 8,
        icon: heartIcon,
        title: 'Doação'
    },
    {
        id: 6,
        icon: globeIconslider,
        title: 'Transferir Internac.'
    }
]

const Header = function () {
    return (
        <div className="wapper">
            <header className="header">
                <div className="header__button">
                    <button className="header__button__account">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Outline" viewBox="0 0 24 24"
                            width="512" height="512"
                        >
                            <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
                            <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
                        </svg>
                    </button>
                    <button className="header__button__eye">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Outline"
                            viewBox="0 0 24 24"
                            width="512"
                            height="512"
                        >
                            <path d="M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z" />
                            <path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" />
                        </svg>
                    </button>
                    <button className="header__button__help">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Outline"
                            viewBox="0 0 24 24"
                            width="512"
                            height="512"
                        >
                            <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
                            <path d="M12.717,5.063A4,4,0,0,0,8,9a1,1,0,0,0,2,0,2,2,0,0,1,2.371-1.967,2.024,2.024,0,0,1,1.6,1.595,2,2,0,0,1-1,2.125A3.954,3.954,0,0,0,11,14.257V15a1,1,0,0,0,2,0v-.743a1.982,1.982,0,0,1,.93-1.752,4,4,0,0,0-1.213-7.442Z" />
                            <rect x="11" y="17" width="2" height="2" rx="1" />
                        </svg>
                    </button>
                    <button className="header__button__mail">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            width="512"
                            height="512"
                        >
                            <path d="M24,10v9a5.006,5.006,0,0,1-5,5H5a5.006,5.006,0,0,1-5-5V8A5.006,5.006,0,0,1,5,3h8a1,1,0,0,1,0,2H5A2.99,2.99,0,0,0,2.361,6.6l7.517,7.518a3.008,3.008,0,0,0,4.244,0L17.943,10.3a1,1,0,0,1,1.414,1.414l-3.821,3.822a5.008,5.008,0,0,1-7.072,0L2,9.071V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A1,1,0,0,1,24,10ZM17,5h2V7a1,1,0,0,0,2,0V5h2a1,1,0,0,0,0-2H21V1a1,1,0,0,0-2,0V3H17A1,1,0,0,0,17,5Z" />
                        </svg>
                    </button>
                </div>
                <p className="header__title">Olá, {name}</p>
            </header>
            <main>
                <GenericField id="account" />
                <Swiper 
                    slidesPerView={5}
                >
                    {
                        FUNCTIONS.map(item => (
                            <SwiperSlide key={item.id}>
                                <CardFuncions key={item.id} item={item}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <Pill id='cards' />
                <GenericField id="cred-card" />
                <GenericField id="lending" />
                <GenericField id="investment" />
                <Pill id='piece' />
                <Pill id='balance' />
                <GenericField id="life" />
                <GenericField id="shopping" />
            </main>
        </div>
    )
}

export default Header