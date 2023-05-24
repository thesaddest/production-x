import type { Meta, StoryObj } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
    title: "shared/Tabs",
    component: Tabs,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        value: "tab2",
        onTabClick: action("onTabClick"),
        tabs: [
            {
                value: "tab1",
                content: <div>TAB 1</div>,
            },
            {
                value: "tab2",
                content: <div>TAB 2</div>,
            },
            {
                value: "tab3",
                content: <div>TAB 3</div>,
            },
        ],
    },
};
