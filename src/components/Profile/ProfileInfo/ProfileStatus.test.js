import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe("Profile Stattus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="I am new status"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("I am new status");
    });
    test("after creation status span shuold be displayed", () => {
        const component = create(<ProfileStatus status="I am new status"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation status span should display with correct status", () => {
        const component = create(<ProfileStatus status="I am new status"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("I am new status");
    });
    test("after creation <input> shouldn`t be displayed", () => {
        const component = create(<ProfileStatus status="I am new status"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });
    test("input should be displayed on span double click", () => {
        const component = create(<ProfileStatus status="I am new status"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe("I am new status");
    });
    test("span should hide on double click", () => {
        const component = create(<ProfileStatus status="I am new status"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        expect(() => {
            let span = root.findByType('span');
        }).toThrow();
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="I am new status" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});