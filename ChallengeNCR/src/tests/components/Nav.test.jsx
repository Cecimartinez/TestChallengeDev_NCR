import { render, screen } from "@testing-library/react";
import { Nav } from "../../components/Nav";
import { MemoryRouter } from "react-router-dom";

describe("Nav", () => {
  it("renders Nav component", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    const mainDiv = screen.getByTestId("nav-test-id");
    expect(mainDiv).toBeDefined();
  });
});
