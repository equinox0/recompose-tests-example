import { shallow } from "enzyme";
import React from "react";
import { Vehicle } from "./Vehicle";

describe("<Vehicle/>", () => {
    describe("component", () => {
        it("should render vehicle", () => {
            const vehicle = {
                model: "Vehicle model",
                name: "Vehicle name"
            };
            const wrapper = shallow(<Vehicle vehicle={vehicle} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});
