import Enzyme from "enzyme";
import React from "react";
import { App, enhance } from "./App";

jest.mock("./api/vehicle", () => {
    return { getVehicle: async () => ({ model: "Vehicle model", name: "Vehicle name" }) };
});

describe("<App/>", () => {
    describe("base component", () => {
        it("should show header", () => {
            const wrapper = Enzyme.shallow(<App />);
            expect(wrapper.contains(<h1>Star wars vehicle</h1>)).toEqual(true);
        });

        it("should show vehicle if it exists", () => {
            const wrapper = Enzyme.shallow(
                <App vehicle={{ model: "Vehicle model", name: "Vehicle name" }} />
            );
            expect(
                wrapper.contains(
                    <dl>
                        <dt>Model:</dt>
                        <dd>Vehicle model</dd>
                        <dt>Name:</dt>
                        <dd>Vehicle name</dd>
                    </dl>
                )
            ).toEqual(true);
        });

        it("should not show loader if vehicle exists", () => {
            const wrapper = Enzyme.shallow(
                <App vehicle={{ model: "Vehicle model", name: "Vehicle name" }} />
            );
            expect(wrapper.contains(<div>Loading data...</div>)).not.toEqual(true);
        });

        it("should show loader if vehicle doest not exist", () => {
            const wrapper = Enzyme.shallow(<App />);
            expect(wrapper.contains(<div>Loading data...</div>)).toEqual(true);
        });
    });

    describe("enhancer", () => {
        it("should have vehicle in props", () => {
            const MockComponent = () => null;
            const EnhancedComponent = enhance(MockComponent);
            const wrapper = Enzyme.mount(<EnhancedComponent />);
            process.nextTick(() => {
                wrapper.update();
                const props = wrapper.find(MockComponent).props();
                expect(props.vehicle).toEqual({ model: "Vehicle model", name: "Vehicle name" });
            });
        });
    });
});
