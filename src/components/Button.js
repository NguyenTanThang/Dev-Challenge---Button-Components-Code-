import React, { Component } from 'react';
import {getSelectedVariantClass, getSelectedColorClass, getSelectedSizeClass} from "../utils/utils";

class Button extends Component {
    
    state = {
        buttonStyleClass: "",
    }

    componentDidMount() {
        const {variant, disabled, active, disableShadow, color, size} = this.props;
        console.log(this.props)

        const buttonStyleVariant = getSelectedVariantClass(variant);
        const buttonStyleSize = getSelectedSizeClass(size);
        const buttonStyleColor = getSelectedColorClass(color);
        const buttonStyleDisable = disabled ? "disabled" : "";
        const buttonStyleActive = active ? "active" : "";
        const buttonStyleShadowDisable = disableShadow ? "btn--shadow-disabled" : "";

        const buttonStyleClass = ["btn", buttonStyleVariant, buttonStyleColor, buttonStyleDisable, buttonStyleShadowDisable, buttonStyleActive, buttonStyleSize].join(" ");

        this.setState({
            buttonStyleClass
        })
    }

    createRipple = (event) => {
        const button = event.currentTarget;
    
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
    
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");
    
        const ripple = button.getElementsByClassName("ripple")[0];
    
        if (ripple) {
          ripple.remove();
        }
    
        button.appendChild(circle);
      }

    render() {
        const {createRipple} = this;
        const {startIcon, endIcon, text} = this.props;
        const {buttonStyleClass} = this.state;

        if (startIcon) {
            return (
                <button className={`btn--icon btn--icon-start ${buttonStyleClass}`} onClick={createRipple}>
                <div>
                    <span className="material-icons">
                        {startIcon}
                    </span>
                    <p>{text}</p>
                </div>
            </button>
            )
            
        }

        if (endIcon) {
            return (
            <button className={`btn--icon btn--icon-end ${buttonStyleClass}`} onClick={createRipple}>
                <div>
                    <p>{text}</p>
                    <span className="material-icons">
                        {endIcon}
                    </span>
                </div>
            </button>)
        }

        return (
            <>
                <button className={`${buttonStyleClass}`} onClick={createRipple}>{text}</button>
            </>
        )
    }
}

export default Button;
