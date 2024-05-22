import { Meta, StoryObj } from "@storybook/react";

import { GetPrefixNsTest } from "../test/util/getPrefixNsTest";
import { IsEmptyStringTest } from "../test/util/isEmptyStringTest";
import { PrintArrayItemTest } from "../test/util/printArrayItemTest";
import { UpdateScrollTopTest } from "../test/util/updateScrollTopTest";

export default {
    title: "Example/Util",
} as Meta;

export type UtilStory = StoryObj;

export const GetPrefixNs = {
    name: "getPrefixNs",
    ...GetPrefixNsTest,
};

export const IsEmptyString = {
    name: "isEmptyString",
    ...IsEmptyStringTest,
};

export const PrintArrayItem = {
    name: "printArrayItem",
    ...PrintArrayItemTest,
};

export const UpdateScrollTop = {
    name: "updateScrollTest",
    ...UpdateScrollTopTest,
};
