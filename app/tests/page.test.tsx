import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Page from "../page";

describe("page", () => {
  it("renders a heading", () => {
    const { getByText } = render(<Page />);
    expect(getByText("page")).toBeInTheDocument();
  });
});
