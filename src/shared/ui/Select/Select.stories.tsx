import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

const meta: Meta<typeof Select> = {
    title: "shared/Select",
    component: Select,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: "SOME_LABEL",
        options: [
            {
                value: "SOME_VALUE",
                content: "SOME_CONTENT",
            },
            {
                value: "ANOTHER_VALUE",
                content: "ANOTHER_CONTENT",
            },
        ],
    },
};
