import { shallow } from "enzyme";
import React from "react";
import { Loader } from "./Loader";

describe("<Loader/>", () => {
    describe("component", () => {
        it("should render loader", () => {
            const wrapper = shallow(<Loader />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});
