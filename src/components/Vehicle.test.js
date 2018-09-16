import { shallow } from "enzyme";
import React from "react";
import { Vehicle } from "./Vehicle";

describe("<Vehicle/>", () => {
    describe("component", () => {
        const setup = () => ({
            wrapper: shallow(
                <Vehicle
                    vehicle={{
                        model: "Vehicle model",
                        name: "Vehicle name"
                    }}
                />
            )
        });

        it("should render vehicle", () => {
            const { wrapper } = setup();
            expect(wrapper).toMatchSnapshot();
        });
    });
});
