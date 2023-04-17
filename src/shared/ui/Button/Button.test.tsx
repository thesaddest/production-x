import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";

describe("Button", () => {
    test("renders successfully", () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });

    test("is theme class applied to button", () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
        screen.debug();
    });
});
