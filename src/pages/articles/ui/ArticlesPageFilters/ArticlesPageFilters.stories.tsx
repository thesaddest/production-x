import type { Meta, StoryObj } from "@storybook/react";

import { ArticlesPageFilters } from "./ArticlesPageFilters";

const meta: Meta<typeof ArticlesPageFilters> = {
    title: "pages/articles/ArticlesPageFilters",
    component: ArticlesPageFilters,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
