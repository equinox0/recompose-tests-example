import React from "react";
import PropTypes from "prop-types";

const Vehicle = ({ vehicle }) => (
    <dl>
        <dt>Model:</dt>
        <dd>{vehicle.model}</dd>
        <dt>Name:</dt>
        <dd>{vehicle.name}</dd>
    </dl>
);

Vehicle.propTypes = {
    vehicle: PropTypes.shape({
        model: PropTypes.string,
        name: PropTypes.string
    }).isRequired
};

export { Vehicle };
export default Vehicle;
