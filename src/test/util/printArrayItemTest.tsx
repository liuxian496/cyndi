import React, { useState } from "react";

import { userEvent, within, expect } from "@storybook/test";
import { UtilStory } from "../../stories/util.stories";

import { printArrayItem } from "../../util/printArrayItem";

import { Button } from "litten/dist/button";

const Test = () => {
    const [msg, setMsg] = useState("");

    const items = [
        { x: 1, y: 2 },
        { x: 2, y: 3 },
    ];

    function handleInputItemsClick() {
        setMsg(printArrayItem(items));
    }

    return (
        <>
            <Button onClick={handleInputItemsClick}>print items</Button>
            <p>{msg}</p>
        </>
    );
};

export const PrintArrayItemTest: UtilStory = {
    render: () => <Test />,
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement);

        const printBtu = canvas.getByText("print items");

        await step(
            "Click 'print items' button, then msg is '{x: 1, y: 2, },{x: 2, y: 3, }' ",
            async () => {
                await userEvent.click(printBtu);

                await expect(
                    canvas.getByText("{x: 1, y: 2, },{x: 2, y: 3, }")
                ).toBeInTheDocument();
            }
        );
    },
};
