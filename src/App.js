import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { compose, lifecycle, withHandlers, withState } from "recompose";
import { getVehicle } from "./api/vehicle";
import { Loader, SearchForm, Vehicle } from "./components";

const App = ({ isLoading, onSearchValuesChange, onSubmitSearch, searchValues, vehicle }) => (
    <Fragment>
        <h1>Star wars vehicle</h1>
        <SearchForm
            onChange={onSearchValuesChange}
            onSubmit={onSubmitSearch}
            values={searchValues}
        />
        {isLoading ? (
            <Loader />
        ) : vehicle ? (
            <Vehicle vehicle={vehicle} />
        ) : (
            <div>Brak pojazdu o podanym Id</div>
        )}
    </Fragment>
);

App.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onSearchValuesChange: PropTypes.func.isRequired,
    onSubmitSearch: PropTypes.func.isRequired,
    searchValues: PropTypes.shape({
        vehicleId: PropTypes.number.isRequired
    }).isRequired,
    vehicle: PropTypes.shape({
        model: PropTypes.string,
        name: PropTypes.string
    })
};

const enhance = compose(
    withState("isLoading", "setIsLoading", false),
    withState("searchValues", "setSearchValues", { vehicleId: 0 }),
    withState("vehicle", "setVehicle", undefined),
    withHandlers({
        onSearchValuesChange: ({ setSearchValues }) => values => {
            setSearchValues(values);
        },
        onSubmitSearch: ({ searchValues, setIsLoading, setVehicle }) => async () => {
            setIsLoading(true);
            try {
                const vehicle = await getVehicle(searchValues.vehicleId);
                setVehicle(vehicle);
            } catch (error) {
                setVehicle();
            } finally {
                setIsLoading(false);
            }
        }
    }),
    lifecycle({
        async componentDidMount() {
            this.props.onSubmitSearch();
        }
    })
);

export { enhance, App };
export default enhance(App);
