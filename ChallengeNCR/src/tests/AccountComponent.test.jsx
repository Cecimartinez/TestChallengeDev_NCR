import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import { mockGlobalFetch } from "./mock/fetchMock";
import { vi, expect, test } from "vitest";
import { AccountsComponent } from "../pages/Accounts/components/AccountsComponent";

describe("Accounts Component", () => {
  beforeEach(() => {
    mockGlobalFetch();
    useFetch[vi] = vi.fn().mockImplementation(useFetch);
  });

  test("renders Accounts component", () => {
    const { container } = render(
      <Router>
        <AccountsComponent  />
      </Router>
    );

    const accountsComponent = screen.getByTestId("account-component");
    expect(container.contains(accountsComponent)).toBeTruthy();
  });
});
