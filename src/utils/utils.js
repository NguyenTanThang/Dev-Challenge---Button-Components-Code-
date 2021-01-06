export const getSelectedVariantClass = (variant) => {
    switch (variant) {
        case "text":
            return "btn--text"
            break;
        case "outline":
            return "btn--outline"
            break;
        default:
            return "btn--default"
            break;
    }
}

export const getSelectedSizeClass = (size) => {
    switch (size) {
        case "sm":
            return "btn--sm"
            break;
        case "md":
            return "btn--md"
            break;
        case "lg":
            return "btn--lg"
            break;
        default:
            return "btn--md"
            break;
    }
}

export const getSelectedColorClass = (color) => {
    switch (color) {
        case "primary":
            return "btn--primary"
            break;
        case "secondary":
            return "btn--secondary"
            break;
        case "danger":
            return "btn--danger"
            break;
        default:
            return "btn--default"
            break;
    }
}