import React, { forwardRef, useRef } from "react";
import "./item.less";

import { Button } from "litten/dist/button";
import { within, expect, userEvent } from "@storybook/test";

import { UtilStory } from "../../stories/util.stories";

import { updateScrollTop } from "../../util/updateScroll";

interface ItemProps {
    name: string;
}

const Item = forwardRef<HTMLDivElement, ItemProps>(function Item(
    props: ItemProps,
    ref
) {
    const { name } = props;
    return (
        <div ref={ref} className="item">
            {name}
        </div>
    );
});

const Test = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const item1Ref = useRef<HTMLDivElement>(null);
    const item3Ref = useRef<HTMLDivElement>(null);
    const item10Ref = useRef<HTMLDivElement>(null);
    const item12Ref = useRef<HTMLDivElement>(null);
    const item16Ref = useRef<HTMLDivElement>(null);

    function handleShow1Click() {
        updateScrollTop(
            item1Ref.current as HTMLElement,
            containerRef.current as HTMLElement
        );
    }

    function handleShow3Click() {
        updateScrollTop(
            item3Ref.current as HTMLElement,
            containerRef.current as HTMLElement
        );
    }

    function handleShow12Click() {
        updateScrollTop(
            item12Ref.current as HTMLElement,
            containerRef.current as HTMLElement
        );
    }

    function handleShow10Click() {
        updateScrollTop(
            item10Ref.current as HTMLElement,
            containerRef.current as HTMLElement
        );
    }

    function handleShow16Click() {
        updateScrollTop(
            item16Ref.current as HTMLElement,
            containerRef.current as HTMLElement
        );
    }

    return (
        <>
            <div data-testid="container" ref={containerRef} className="container">
                <Item ref={item1Ref} name="001" />
                <Item name="002" />
                <Item ref={item3Ref} name="003" />
                <Item name="004" />

                <Item name="005" />
                <Item name="006" />
                <Item name="007" />
                <Item name="008" />

                <Item name="009" />
                <Item ref={item10Ref} name="010" />
                <Item name="011" />
                <Item ref={item12Ref} name="012" />

                <Item name="013" />
                <Item name="014" />
                <Item name="015" />
                <Item ref={item16Ref} name="016"  />
            </div>
            <Button onClick={handleShow10Click}>show 10</Button>
            <Button onClick={handleShow3Click}>show 3</Button>
            <Button onClick={handleShow12Click}>show 12</Button>
            <Button onClick={handleShow16Click}>show 16</Button>
            <Button onClick={handleShow1Click}>show 1</Button>
        </>
    );
};

export const UpdateScrollTopTest: UtilStory = {
    render: () => <Test />,
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement);

        const container =canvas.getByTestId("container");

        // const item001 = canvas.getByText("001");
        // const item003 = canvas.getByText("003");
        // const item010 = canvas.getByText("010");
        // const item012 = canvas.getByText("012");
        // const item016 = canvas.getByText("016");

        const btu001 = canvas.getByText("show 1");
        const btu003 = canvas.getByText("show 3");
        const btu010 = canvas.getByText("show 10");
        const btu012 = canvas.getByText("show 12");
        const btu016 = canvas.getByText("show 16");

        await step('Click "show 10" button. Then container scrollTop to be equal 147.', async () => {
            await userEvent.click(btu010);

            await expect(container.scrollTop).toEqual(147);
        });

        await step('Click "show 3" button. Then container scrollTop to be equal 74.', async () => {
            await userEvent.click(btu003);

            await expect(container.scrollTop).toEqual(74);
        });

        await step('Click "show 12" button. Then container scrollTop to be equal 221.', async () => {
            await userEvent.click(btu012);

            await expect(container.scrollTop).toEqual(221);
        });

        await step('Click "show 16" button. Then container scrollTop to be equal 352.', async () => {
            await userEvent.click(btu016);

            await expect(container.scrollTop).toEqual(352);
        });

        await step('Click "show 11" button. Then container scrollTop to be equal 0.', async () => {
            await userEvent.click(btu001);

            await expect(container.scrollTop).toEqual(0);
        });
    },
};
