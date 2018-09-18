import React from "react";
import { withHandlers } from "recompose";
import PropTypes from "prop-types";

const SearchForm = ({ onChange, onSubmit, values }) => (
    <form onSubmit={onSubmit}>
        <input name="vehicleId" onChange={onChange} type="number" value={values["vehicleId"]} />
        <button type="submit">Szukaj</button>
    </form>
);

SearchForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    values: PropTypes.shape({
        vehicleId: PropTypes.number.isRequired
    }).isRequired
};

const enhance = withHandlers({
    onChange: ({ onChange, values }) => ({ target }) => {
        onChange({ ...values, [target.name]: Number(target.value) });
    },
    onSubmit: ({ onSubmit }) => event => {
        event.preventDefault();
        onSubmit();
    }
});

export { SearchForm, enhance };
export default enhance(SearchForm);
