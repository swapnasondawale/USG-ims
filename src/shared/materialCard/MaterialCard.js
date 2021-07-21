import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
/**
 * This are used to style the card component
 */
const useStyles = makeStyles({
  root: {
    minWidth: 75,
    margin:10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
/**
 * This function return Card 
 * @param {*} props It is used to get dynamic data on card
 */
export default function MaterialCard(props) {
  const classes = useStyles();

  return (
    <Grid>
     {/* <div className={classes.root} style={{minWidth:`${props.cardWidth}%`, height:`${props.cardHeight}rem`, textAlign:"left"}}> */}
      <img src={props.cardContent} className="card-images"/>

       {/* <CardActions>
         <Button size="small">Read More</Button>
       </CardActions> */}
     {/* </div> */}
    </Grid>
  );
}
