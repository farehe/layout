// import { Time } from "lightweight-charts";
import { nobitexAxios } from "../store/constants";

// interface EquityAndBalanceInterface {
//     balance: string
//     equity: string
//     n: number
//     o: number
//     p: number
//     r: number
//     total: string
// }
// export async function getEquityAndBalance(): Promise<EquityAndBalanceInterface> {
//     const _response = await myAxios.get("/api");
//     return _response.data;
// }

interface OHLCInterface {
  // time: Time;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}
export async function getOHLC(
  symbol: string = "BTCIRT",
  resolution: "D" | number = 15,
  to: string = (new Date().getTime() / 1000).toFixed(0)
): Promise<OHLCInterface[]> {
  const _response = await nobitexAxios.get(
    `/market/udf/history?symbol=${symbol}&resolution=${resolution}&to=${to}&page=1`
  );
  let result = [];
  for (let i = 0; i < _response.data.t.length; i++) {
    result.push({
      time: _response.data.t[i],
      open: _response.data.o[i],
      high: _response.data.h[i],
      low: _response.data.l[i],
      close: _response.data.c[i],
      volume: _response.data.v[i],
    });
  }
  return result;
}
