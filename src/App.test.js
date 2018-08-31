import Enzyme from "enzyme";
import React from "react";
import { App, enhance } from "./App";

describe("<App/>", () => {
    describe("base component", () => {
        it("should show test text", () => {
            const wrapper = Enzyme.shallow(<App showText />);
            expect(wrapper.contains(<div>Test text</div>)).toEqual(true);
        });

        it("show not show test text", () => {
            const wrapper = Enzyme.shallow(<App />);
            expect(wrapper.contains(<div>Test text</div>)).not.toEqual(true);
        });
    });

    describe("enhancer", () => {
        it("should have props - testOne", () => {
            const MockComponent = () => null;
            const EnhancedComponent = enhance(MockComponent);
            const wrapper = Enzyme.mount(<EnhancedComponent />);
            const props = wrapper.find(MockComponent).props();
            expect(props.showText).toEqual(true);
        });
    });
});
