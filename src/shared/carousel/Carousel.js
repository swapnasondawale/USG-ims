import React from 'react'
import { MaterialCard } from '../../shared';
import BlockSvg from '../../assets/images/Block.svg';
import Block1Svg from '../../assets/images/Block-1.svg';

export default function Carousel() {
    return (
        <div className="card-carousel">
            <MaterialCard cardWidth={31} cardHeight={17} cardContent={BlockSvg} />
            <MaterialCard cardWidth={31} cardHeight={17} cardContent={Block1Svg} />
            <MaterialCard cardWidth={31} cardHeight={17} cardContent={BlockSvg} />
            <MaterialCard cardWidth={31} cardHeight={17} cardContent={Block1Svg} />
            <MaterialCard cardWidth={31} cardHeight={17} cardContent={BlockSvg} />
            <MaterialCard cardWidth={31} cardHeight={17} cardContent={Block1Svg} />
            <MaterialCard cardWidth={31} cardHeight={17} cardContent={BlockSvg} />
            <MaterialCard cardWidth={31} cardHeight={17} cardContent={Block1Svg} />
            <MaterialCard cardWidth={31} cardHeight={17} cardContent={BlockSvg} />
            <MaterialCard cardWidth={31} cardHeight={17} cardContent={Block1Svg} />
        </div>
    )
}
