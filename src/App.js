import React from "react";
import { compose, lifecycle, withState } from "recompose";

const App = () => {
    return <div>Test text</div>;
};

const enhance = compose(
    withState("stateOne", "setStateOne", ""),
    withState("stateTwo", "setStateTwo", ""),
    lifecycle({
        componentDidMount() {
            this.props.setStateOne("test one");
            this.props.setStateTwo("test two");
        }
    })
);

export { enhance, App };
export default enhance(App);
