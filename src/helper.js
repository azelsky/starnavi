export const handleArea = (area) => {
    return area && `${area} sq. fr.`
};

export const handlePrice = (price) => {
    return `$${price.toString().replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g, " $1 ")}`;
};

export const handleRating = (rating) => {
    return rating && `${rating} points`
}