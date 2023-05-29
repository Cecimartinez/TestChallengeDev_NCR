import { render, screen } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { expect, test, vi } from "vitest";
import { useFetch } from "../hook/useFetch";
import { Balance } from "../pages/Balance/Balance";
import { mockGlobalFetch } from "./mock/fetchMock";

vi.mock("react-router-dom", async () => {
  const mod = await vi.importActual("react-router-dom");
  return {
    ...mod,
    useLocation: vi.fn().mockReturnValue({
      pathname: "/balance/$872378326703",
      search: "",
      hash: "",
      state: {
        balance: "745",
        coin: "$",
        typeAccount: "CC",
        accountNumber: "872378326703",
      },
    }),
  };
});

const typeAccountTextMap = {
  CC: "Cuenta Corriente",
  CA: "Caja de ahorro",
};

describe("Balance", () => {
  beforeEach(() => {
    mockGlobalFetch();
    useFetch[vi] = vi.fn().mockImplementation(useFetch);
  });

  test("renders Balance component", async () => {
    const location = useLocation();
    render(
      <MemoryRouter initialEntries={["/balance/$872378326703"]}>
        <Balance />
      </MemoryRouter>
    );

    const accountBalance = screen.getByTestId("account-balance");
    const accountType = screen.getByTestId("account-type");
    const typeAccountText = typeAccountTextMap[location.state.typeAccount];
    const accountNumber =screen.getByTestId("account-number")

    expect(accountBalance.textContent).toBe("Saldo de la cuenta: 745");
    expect(accountType.textContent).toBe(
      `Tipo de Cuenta: ${typeAccountText} en pesos`);
    expect (accountNumber.textContent).toBe("Número de Cuenta: 872378326703")

  });
});
