import { render, screen } from "@testing-library/react";
import { Accounts } from "../pages/Accounts/Accounts";
import { useFetch } from "../hook/useFetch";
import { mockGlobalFetch } from "./mock/fetchMock";
import { vi, expect, test } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import AccountList from "../pages/Accounts/components/AccountList";

vi.mock("react-router-dom", async () => {
  const mod = await vi.importActual("react-router-dom");
  return {
    ...mod,
    useNavigate: vi.fn(),
  };
});

describe("Accounts", () => {
  beforeEach(() => {
    mockGlobalFetch();
    useFetch[vi] = vi.fn().mockImplementation(useFetch);
  });

  test("renders Accounts component", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://api.example.com/endpoint")
    );
    console.log(result);
    render(<Accounts />);
    const accountsComponent = screen.getByTestId("account-component");
    expect(accountsComponent).toBeDefined();
    await waitForNextUpdate();
    expect(
      render(<AccountList accountList={result.current.data.cuentas} />)
    ).toBeDefined();
  });
});
