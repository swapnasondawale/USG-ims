import React from 'react';
import './SelectorButton.css';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import FlashVeryHighSvg from '../../assets/images/flash.svg';
import FlashSvg from '../../assets/images/flash_copy2.svg';
import FlashHighSvg from '../../assets/images/flash_copy.svg';



export default function SelectorButton(props) {

    return (
        <div className="selector-office"
            style={{
                backgroundColor: `${props.backgroundColor}`,
                //  width: `${props.selectorButtonWidth}px`,
                height: `${props.selectorButtonHeight}px`,
                border: `${props.selectedButton == props.id ? 'solid 2px #43A1F6' : props.border}`,
                boxShadow: `${props.boxShadow}`,
                borderColor: `${props.selectedButton == props.id ? props.borderColor : props.borderColor}`
            }}
            onClick={props.selectClick}>
            <div className="selector-container">
                {props.iconName == 'representative' ?
                    <SupervisedUserCircleOutlinedIcon className="selector-icon" fontSize="large" /> :
                    props.iconName == 'agency' ?
                        <BusinessCenterOutlinedIcon className="selector-icon" fontSize="large" /> :
                        props.iconName == 'company' ?
                            <BusinessOutlinedIcon className="selector-icon" fontSize="large" /> :
                            props.iconName == 'flash' ?
                                <img src={FlashSvg} className="selector-icon3" /> :
                                props.iconName == 'flashVeryHigh' ?
                                    <img src={FlashVeryHighSvg} className="selector-icon2" /> :
                                    props.iconName == 'flashHigh' ?
                                        <img src={FlashHighSvg} className="selector-icon3" /> :
                                        <></>
                }
                <span className="id-text-selector">{props.leftName}</span>
                <span className="normal-text-selector" style={{ color: props.addNew ? '#43A1F6' : '#2C3F58' }}>{props.buttonName}</span>
                <span className="subheading-text">{props.subHeading}</span>

            </div>
        </div>
    )
}
