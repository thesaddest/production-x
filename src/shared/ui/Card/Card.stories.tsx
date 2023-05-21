import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "shared/ui/Text/Text";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
    title: "shared/Card",
    component: Card,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: <Text title="Test title" text="Test Text" />,
    },
};
