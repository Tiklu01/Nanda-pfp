import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";

vi.mock("@lottiefiles/dotlottie-react", () => ({
  DotLottieReact: ({ children }: { children?: React.ReactNode }) => (
    <div data-testid="lottie">{children}</div>
  ),
}));

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
  });

  it("renders the hero content", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /nanda lal das/i })).toBeInTheDocument();
    expect(screen.getByText(/the space/i)).toBeInTheDocument();
  });

  it("scrolls to the selected section when a navigation item is clicked", async () => {
    const user = userEvent.setup();
    const scrollIntoView = vi.fn();
    Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
      configurable: true,
      value: scrollIntoView,
    });

    render(<App />);

    await user.click(screen.getByRole("button", { name: /about me/i }));

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("toggles dark mode when the theme button is clicked", async () => {
    const user = userEvent.setup();

    render(<App />);

    expect(document.documentElement.classList.contains("dark")).toBe(false);

    await user.click(screen.getByTitle(/switch to dark mode/i));

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("opens the mobile navigation menu when the menu toggle is clicked", async () => {
    const user = userEvent.setup();

    render(<App />);

    const menuToggle = screen.getAllByRole("button")[0];
    await user.click(menuToggle);

    expect(screen.getAllByRole("button", { name: /home/i }).length).toBeGreaterThan(1);
  });
});
