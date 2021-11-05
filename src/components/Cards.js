import React from 'react'
import CardItem from "./CardItem";
import './Cards.css'
import FirstCard from '../images/img_3.jpg'
import SecondCard from '../images/img_2.jpg'
import ThirdCard from '../images/img_4.jpg'
import FourthCard from '../images/img_1.jpg'
import FifthCard from '../images/img_5.jpg'
import SixCard from '../images/img_6.jpg'
import SevenCard from '../images/img_7.jpg'
import EightCard from '../images/img_8.jpg'


export default function Cards(){
    return(
        <div className='cards'>
            <h1>Check out these EPIC destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src={FirstCard}
                        text='Explore the World'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                            src={SecondCard}
                            text='Fly through the sky'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src={ThirdCard}
                            text='See the best sea sightseeing!'
                            label='Beautiful'
                            path='/products'
                        />
                        <CardItem
                            src={FourthCard}
                            text='Fly to any side of the World!'
                            label='Far away'
                            path='/products'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={FifthCard}
                            text='See the Sahara desert'
                            label='Adventure'
                            path='/sign-up'
                        />
                        <CardItem
                            src={SixCard}
                            text='Go to Bali!'
                            label='Luxury'
                            path='/sign-up'
                        />
                        <CardItem
                            src={SevenCard}
                            text='See the best city in the World!'
                            label='Beautiful'
                            path='/products'
                        />
                        <CardItem
                            src={EightCard}
                            text='Explore urban uniques!'
                            label='Far away'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}