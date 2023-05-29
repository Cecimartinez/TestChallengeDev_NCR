import { vi } from "vitest";

export const fetchMock = {
  response: {
    cuentas: [
      { moneda: "$", tipo_letras: "CC", n: "123" , moneda:"$"},
      { moneda: "u$s", tipo_letras: "CA", n: "456", moneda:"u$s" },
    ],
  },
};

export const mockGlobalFetch = () => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(fetchMock.response),
  });
};
