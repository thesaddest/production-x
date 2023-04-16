import "app/styles/index.scss";
import { StoryFn } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator = (StoryComponent: StoryFn) => {
    const HOCStoryComponent = (storyTheme: Theme) => {
        return (
            <div className={`app ${storyTheme}`}>
                <StoryComponent />
            </div>
        );
    };
    HOCStoryComponent.displayName = "ThemeDecorator";
    return HOCStoryComponent;
};
