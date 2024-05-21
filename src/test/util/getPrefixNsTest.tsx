import React from "react";

import { within, expect } from "@storybook/test";
import { UtilStory } from "../../stories/util.stories";

import { getPrefixNs } from "../../util/getPrefixNs";

const Test = () => {
    return (
        <>
            <p>{`${getPrefixNs("button").toString()}`}</p>
            <p>{`${getPrefixNs("button","litten").toString()}`}</p>
        </>
    );
};

export const GetPrefixNsTest: UtilStory = {
    render: () => <Test />,
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement);
        await step('"cyndi-button" to be in the document', async () => {
            await expect(
                canvas.getByText('cyndi-button')
            ).toBeInTheDocument();
        });

        await step(
            '"litten-button" to be in the document',
            async () => {
                await expect(
                    canvas.getByText('litten-button')
                ).toBeInTheDocument();
            }
        );
    },
};
