import { StoryFn } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ComponentType } from "react";

export const ThemeDecorator = (storyTheme: Theme) => (StoryComponent: StoryFn) => {
    const DecoratedStoryComponent = () => (
        <div className={`app ${storyTheme}`}>
            <StoryComponent />
        </div>
    );

    (DecoratedStoryComponent as ComponentType).displayName = "ThemeDecorator";
    return <DecoratedStoryComponent />;
};
