// import React from 'react'
// import { MaterialCard } from '../../shared';
import BlockSvg from '../../assets/images/Block.svg';
import Block1Svg from '../../assets/images/Block-1.svg';

// export default function Carousel() {
//     return (
//         <div className="card-carousel">
//             <MaterialCard cardWidth={31} cardHeight={17} cardContent={BlockSvg} />
//             <MaterialCard cardWidth={31} cardHeight={17} cardContent={Block1Svg} />
//             <MaterialCard cardWidth={31} cardHeight={17} cardContent={BlockSvg} />
//             <MaterialCard cardWidth={31} cardHeight={17} cardContent={Block1Svg} />
//             <MaterialCard cardWidth={31} cardHeight={17} cardContent={BlockSvg} />
//             <MaterialCard cardWidth={31} cardHeight={17} cardContent={Block1Svg} />
//             <MaterialCard cardWidth={31} cardHeight={17} cardContent={BlockSvg} />
//             <MaterialCard cardWidth={31} cardHeight={17} cardContent={Block1Svg} />
//             <MaterialCard cardWidth={31} cardHeight={17} cardContent={BlockSvg} />
//             <MaterialCard cardWidth={31} cardHeight={17} cardContent={Block1Svg} />
//         </div>
//     )
// }


import React from 'react';
import { MaterialCard } from '..';
import { Grid, makeStyles } from "@material-ui/core";
import { yellow } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
    cardCarousel: {
        width: props => props.width,
        height: props => props.height,
        // display: props =>props.display,
        display: 'flex',
        flex: 1,
        margin: 'auto',
        overflowX: "scroll",
        paddingRight: '2px'
    }
}))
const Carousel = (props) => {
    const { cardCarousel } = useStyles(props);
    return (
        <Grid className={`${cardCarousel}`}>
            <MaterialCard            
                cardContent={BlockSvg} />
            <MaterialCard
                cardContent={Block1Svg} />
            <MaterialCard
                cardContent={BlockSvg} />
            <MaterialCard
                cardContent={Block1Svg} />
            <MaterialCard
                cardContent={BlockSvg} />
                 <MaterialCard
                cardContent={Block1Svg} />
            <MaterialCard
                cardContent={BlockSvg} />
            <MaterialCard
                cardContent={Block1Svg} />
            <MaterialCard
                cardContent={BlockSvg} />
        </Grid>
    );
};

export default Carousel;
