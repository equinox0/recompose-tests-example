import { mount } from "enzyme";
import React from "react";
import { SearchForm, enhance } from "./SearchForm";

describe("<SearchForm/>", () => {
    describe("component", () => {
        const setup = overriddenProps => {
            const props = {
                onChange: jest.fn(),
                onSubmit: jest.fn(),
                values: { vehicleId: 0 },
                ...overriddenProps
            };
            const wrapper = mount(<SearchForm {...props} />);
            return { wrapper };
        };

        it("should display search form", () => {
            const { wrapper } = setup();
            expect(wrapper).toMatchSnapshot();
        });

        it("should call onChange", () => {
            const onChange = jest.fn();
            const { wrapper } = setup({ onChange });
            wrapper.find('input[name="vehicleId"]').simulate("change");
            expect(onChange).toBeCalled();
        });

        it("should call onSubmit with button", () => {
            const onSubmit = jest.fn();
            const { wrapper } = setup({ onSubmit });
            wrapper.find('button[type="submit"]').simulate("submit");
            expect(onSubmit).toBeCalled();
        });

        it("should call onSubmit with form submit", () => {
            const onSubmit = jest.fn();
            const { wrapper } = setup({ onSubmit });
            wrapper.find("form").simulate("submit");
            expect(onSubmit).toBeCalled();
        });
    });

    describe("enhance", () => {
        const setup = overriddenProps => {
            const props = {
                onChange: jest.fn(),
                onSubmit: jest.fn(),
                values: { vehicleId: 0 },
                ...overriddenProps
            };
            const MockComponent = () => null;
            const EnhancedComponent = enhance(MockComponent);
            const wrapper = mount(<EnhancedComponent {...props} />);
            return { MockComponent, wrapper };
        };

        it("should call onChange with new form values", () => {
            const onChange = jest.fn();
            const { MockComponent, wrapper } = setup({ onChange });
            const props = wrapper.find(MockComponent).props();
            props.onChange({ target: { name: "vehicleId", value: "666" } });
            expect(onChange).toBeCalledWith({ vehicleId: 666 });
        });

        it("should prevent default submit and call onSubmit", () => {
            const onSubmit = jest.fn();
            const event = {
                preventDefault: jest.fn()
            };
            const { MockComponent, wrapper } = setup({ onSubmit });
            const props = wrapper.find(MockComponent).props();
            props.onSubmit(event);
            expect(event.preventDefault).toBeCalled();
            expect(onSubmit).toBeCalled();
        });
    });
});
