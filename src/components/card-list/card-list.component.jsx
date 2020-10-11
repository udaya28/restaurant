import React from 'react'
import {Card} from '../card/card.component'
import './card-list.styles.css'
import r1 from '../../photos/r1.jpg';
import r2 from '../../photos/r2.jpg';
import r3 from '../../photos/r3.jpg';
import r4 from '../../photos/r4.jpg';
import r5 from '../../photos/r5.jpg';
import r6 from '../../photos/r6.jpg';
import r7 from '../../photos/r7.jpg';
import r8 from '../../photos/r8.jpg';
import r9 from '../../photos/r9.jpg';
import r10 from '../../photos/r10.jpg';
import r11 from '../../photos/r11.jpg';
import r12 from '../../photos/r12.jpg';


export const CardList = () => {
    return (
        <div className="container card-list">
            <Card url={r1} name ="udaya"/>
            <Card url={r2} name ="udaya"/>
            <Card url={r3} name ="udaya"/>
            <Card url={r4} name ="udaya"/>
            <Card url={r5} name ="udaya"/>
            <Card url={r6} name ="udaya"/>
            <Card url={r7} name ="udaya"/>
            <Card url={r8} name ="udaya"/>
            <Card url={r9} name ="udaya"/>
            <Card url={r10} name ="udaya"/>
            <Card url={r11} name ="udaya"/>
            <Card url={r12} name ="udaya"/>
           

        </div>
    )
}
