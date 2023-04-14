import "app/styles/index.scss";
import { StoryFn } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator = (storyTheme: Theme) => (StoryComponent: StoryFn) => {
    return (
        <div className={`app ${storyTheme}`}>
            <StoryComponent />
        </div>
    );
};
