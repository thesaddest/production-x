import { StoryFn } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { ComponentType } from "react";

export const ThemeDecorator = (storyTheme: Theme) => (StoryComponent: StoryFn) => {
    const DecoratedStoryComponent = () => (
        <ThemeProvider initialTheme={storyTheme}>
            <div className={`app ${storyTheme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );

    (DecoratedStoryComponent as ComponentType).displayName = "ThemeDecorator";
    return <DecoratedStoryComponent />;
};
