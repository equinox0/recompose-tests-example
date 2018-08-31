import React, { Fragment } from "react";
import { compose, lifecycle, withState } from "recompose";

const App = ({ showText }) => <Fragment>{showText && <div>Test text</div>}</Fragment>;

const enhance = compose(
    withState("showText", "setShowText", false),
    lifecycle({
        componentDidMount() {
            this.props.setShowText(true);
        }
    })
);

export { enhance, App };
export default enhance(App);
