import { mount, shallow } from "enzyme";
import React from "react";
import { App, enhance } from "./App";

jest.mock("./api/vehicle", () => {
    return { getVehicle: async () => ({ model: "Vehicle model", name: "Vehicle name" }) };
});

describe("<App/>", () => {
    describe("component", () => {
        const setup = props => ({
            wrapper: shallow(<App {...props} />)
        });

        it("should show loader", () => {
            const { wrapper } = setup();
            expect(wrapper).toMatchSnapshot();
        });

        it("should show vehicle if it exists", () => {
            const { wrapper } = setup({
                vehicle: { model: "Vehicle model", name: "Vehicle name" }
            });
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("enhancer", () => {
        const setup = () => {
            const MockComponent = () => null;
            const EnhancedComponent = enhance(MockComponent);
            const wrapper = mount(<EnhancedComponent />);
            return { MockComponent, wrapper };
        };

        it("should have vehicle in props", () => {
            const { MockComponent, wrapper } = setup();
            process.nextTick(() => {
                wrapper.update();
                const props = wrapper.find(MockComponent).props();
                expect(props.vehicle).toEqual({ model: "Vehicle model", name: "Vehicle name" });
            });
        });
    });
});
