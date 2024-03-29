import type { Meta, StoryObj } from "@storybook/react";

import { CurrencySelect } from "./CurrencySelect";

const meta: Meta<typeof CurrencySelect> = {
    title: "entities/currency/CurrencySelect",
    component: CurrencySelect,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
