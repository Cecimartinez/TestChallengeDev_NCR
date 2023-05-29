import { useFetch } from "../../hook/useFetch";
import { renderHook } from "@testing-library/react-hooks";
import { test } from "vitest";
import { fetchMock, mockGlobalFetch } from "../mock/fetchMock"

describe("useFetch", () => {
  test("fetches data from API", async () => {
    mockGlobalFetch();

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://api.example.com/endpoint")
    );

    expect(result.current.data).toBeNull();
    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.data).toEqual(fetchMock.response);
    expect(result.current.isLoading).toBe(false);

  });
});
