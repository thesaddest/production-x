import type { Meta, StoryObj } from "@storybook/react";

import { ArticleSortSelect } from "./ArticleSortSelect";

const meta: Meta<typeof ArticleSortSelect> = {
    title: "features/article-sort-select/ArticleSortSelect",
    component: ArticleSortSelect,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
