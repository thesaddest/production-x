import type { Meta, StoryObj } from "@storybook/react";

import { Code } from "./Code";

const meta: Meta<typeof Code> = {
    title: "Code",
    component: Code,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
