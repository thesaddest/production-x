import type { Meta, StoryObj } from "@storybook/react";

import { ProfileCard } from "./ProfileCard";
import { Country } from "entities/country";
import { Currency } from "entities/currency";
import { STATE_STATUSES } from "shared/constants/state.constants";
import AvatarImg from "shared/assets/tests/storybook.png";

const meta: Meta<typeof ProfileCard> = {
    title: "entities/ProfileCard",
    component: ProfileCard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
            username: "TEST_USERNAME",
            age: 21,
            country: Country.Poland,
            firstName: "TEST_FIRSTNAME",
            lastName: "TEST_LASTNAME",
            currency: Currency.PLN,
            city: "Warsaw",
            avatar: AvatarImg,
        },
    },
};

export const withError: Story = {
    args: {
        status: STATE_STATUSES.ERROR,
        error: "Error",
    },
};

export const Loading: Story = {
    args: {
        status: STATE_STATUSES.LOADING,
    },
};
