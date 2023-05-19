import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { Country } from "entities/country";
import { Currency } from "entities/currency";
import AvatarImg from "shared/assets/tests/storybook.png";
import ProfilePage from "./ProfilePage";

const meta: Meta<typeof ProfilePage> = {
    title: "pages/Profile",
    component: ProfilePage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
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
    }),
];
Light.decorators = [
    StoreDecorator({
        profile: {
            form: {
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
    }),
];
