import { shallow } from "enzyme";
import React from "react";
import { Loader } from "./Loader";

describe("<Loader/>", () => {
    describe("component", () => {
        const setup = () => ({
            wrapper: shallow(<Loader />)
        });

        it("should render loader", () => {
            const { wrapper } = setup();
            expect(wrapper).toMatchSnapshot();
        });
    });
});
