import React from 'react';
import { mount } from 'enzyme';
import Accordion from './Accordion';
import { AccordionContent } from './AccordionContent';
import dummyMenuData from './Test.json';

const setState = jest.fn();
const useStateMock = (initState) => [initState, setState];

let accordionComponent;

beforeEach(() => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    accordionComponent = mount(
        <Accordion key={dummyMenuData[0].sectionTitle} title={dummyMenuData[0].sectionTitle}>
            <AccordionContent content={dummyMenuData[0]} />
        </Accordion>
    )
})

afterEach(() => {
    jest.clearAllMocks();
});

describe('Accordion', () => {
    it('renders the component', () => {
        expect(accordionComponent).toHaveLength(1);
    });

    it('should render an item title', () => {
        expect(accordionComponent.props().title).toBe('First Title');
    });

    it('should render the Accordion content when the Accordion is clicked', () => {
        const accordionIcon = accordionComponent.find('.accordion-icon');
        const rotatedIcon = accordionComponent.find('.rotated');
        const accordionTitle = accordionComponent.find('.accordion-title');
        expect(accordionIcon).toHaveLength(1);
    });
});