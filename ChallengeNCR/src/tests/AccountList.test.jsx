import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { expect, test, vi } from "vitest";
import { useFetch } from "../hook/useFetch";
import AccountList from "../pages/Accounts/components/AccountList";
import { mockGlobalFetch } from "./mock/fetchMock";

const mockAccountList = [
  {
    e: "1",
    n: "872378326701",
    t: "02",
    saldo: "1500",
    moneda: "u$s",
    tipo_letras: "CC",
  },
];

describe("Accounts Component", () => {
  beforeEach(() => {
    mockGlobalFetch();
    useFetch[vi] = vi.fn().mockImplementation(useFetch);
  });

  test("renders Accounts component", () => {
    render(
      <Router>
        <AccountList accountList={mockAccountList} />
      </Router>
    );

    const accountsComponent = screen.getByTestId("account-item");
    expect(accountsComponent).toBeDefined();
  });
});
