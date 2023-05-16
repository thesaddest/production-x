import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";
import AvatarImg from "shared/assets/tests/storybook.png";

const meta: Meta<typeof Avatar> = {
    title: "shared/Avatar",
    component: Avatar,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const Primary_50px: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};
