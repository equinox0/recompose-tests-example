import { mount, shallow } from "enzyme";
import React from "react";
import { App, enhance } from "./App";

jest.mock("./api/vehicle", () => ({
    getVehicle: async () => ({ model: "Vehicle model", name: "Vehicle name" })
}));

describe("<App/>", () => {
    describe("component", () => {
        const setup = overridenProps => {
            const props = {
                isLoading: false,
                ...overridenProps
            };
            const wrapper = shallow(<App {...props} />);

            return {
                wrapper
            };
        };

        it("should show header, search form and information that there is no vehicle", () => {
            const { wrapper } = setup();
            expect(wrapper).toMatchSnapshot();
        });

        it("should show loader", () => {
            const { wrapper } = setup({ isLoading: true });
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
        const setup = async () => {
            const MockComponent = () => null;
            const EnhancedComponent = enhance(MockComponent);
            const wrapper = await mount(<EnhancedComponent />);
            return { MockComponent, wrapper };
        };

        it('should be implemented', () => {
          
        })
        
    });
});
