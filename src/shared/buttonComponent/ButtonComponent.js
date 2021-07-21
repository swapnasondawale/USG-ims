import React from 'react';
import Button from '@material-ui/core/Button';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';

import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
/**
 * This function are used to the Button
 * @param {*} props send value name for Button 
 */
export default function ButtonComponent(props) {

  return (
    <Button onClick={()=> props.onClickFun()} 
            style={{color: `${props.textColor}`, width: `${props.width}px`, height:`${props.height}px`, borderRadius:'12px', border:`${props.border?'solid 1px':'none'}`, borderColor: `${props.borderColor}`, background:`${props.backgroudColor}`, fontWeight: '600', textTransform:'none', margin:'0rem 2rem 0rem 2rem', borderShadow: `${props.borderShadow}`, fontSize:`${props.fontSize}px`, fontFamily:'SF Pro Rounded'}} 
            disabled={props.disabled}
            >
              {props.leftIcon?
    <ChevronLeftOutlinedIcon />:''  
    }
      {props.value}
      {props.rightIcon?
    <ChevronRightOutlinedIcon />:''  
    }
    </Button>
  );
}