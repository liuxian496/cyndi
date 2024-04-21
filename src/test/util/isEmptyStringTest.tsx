import { within, expect } from "@storybook/test";
import { UtilStory } from "../../stories/util.stories";

import { isEmptyString } from "../../util/isEmptyString";

const Test = () => {
    return (
        <>
            <p>{`isEmptyString(""):${isEmptyString("").toString()}`}</p>
            <p>{`isEmptyString(" "):${isEmptyString(" ").toString()}`}</p>
            <p>{`isEmptyString("apple"):${isEmptyString("apple").toString()}`}</p>
        </>
    );
};

export const IsEmptyStringTest: UtilStory = {
    render: () => <Test />,
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement);
        await step('isEmptyString(""):true to be in the document', async () => {
            await expect(
                canvas.getByText('isEmptyString(""):true')
            ).toBeInTheDocument();
        });

        await step(
            'isEmptyString(" "):true to be in the document',
            async () => {
                await expect(
                    canvas.getByText('isEmptyString(" "):true')
                ).toBeInTheDocument();
            }
        );

        await step(
            'isEmptyString("apple"):false to be in the document',
            async () => {
                await expect(
                    canvas.getByText('isEmptyString("apple"):false')
                ).toBeInTheDocument();
            }
        );
    },
};
