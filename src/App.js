import React, { Fragment } from "react";
import { compose, lifecycle, withState } from "recompose";
import { getVehicle } from "./api/vehicle";

const App = ({ vehicle }) => (
    <Fragment>
        <h1>Star wars vehicle</h1>
        {vehicle ? (
            <dl>
                <dt>Model:</dt>
                <dd>{vehicle.model}</dd>
                <dt>Name:</dt>
                <dd>{vehicle.name}</dd>
            </dl>
        ) : (
            <div>Loading data...</div>
        )}
    </Fragment>
);

const enhance = compose(
    withState("vehicle", "setVehicle", undefined),
    lifecycle({
        async componentDidMount() {
            const vehicle = await getVehicle(9);
            this.props.setVehicle(vehicle);
        }
    })
);

export { enhance, App };
export default enhance(App);
