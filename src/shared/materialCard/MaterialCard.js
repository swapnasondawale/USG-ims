import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  cardClasses: {
    width: props => props.width,
    height: props => props.height,
    textAlign: props => props.textAlign,
    [theme.breakpoints.up('xl')]: {
      width: '400px',
      height: '400px',
      textAlign: props => props.desktopTextAlign,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '200px',
      height: '250px',
      padding: '0px',
    },
  },
  cardImages: {
    [theme.breakpoints.up('xl')]: {
      width: '400px',
      height: '400px',
      textAlign: props => props.textAlign,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '200px',
      height: '250px',
      padding: '0px',
      textAlign: props => props.textAlign,
    },
  }
}))
function CustomButton({ children, ...props }) {
  const { cardClasses, cardImages } = useStyles(props);
  return (
    <Grid className={`${cardClasses}`} >
      <img src={props.cardContent} className={`${cardImages}`} />
    </Grid>
  );
}
export default CustomButton;