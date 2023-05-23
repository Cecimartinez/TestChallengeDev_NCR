import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Accounts } from "../pages/Accounts/Accounts";
import { Balance } from "../pages/Balance/Balance";
import { ROUTE_PATHS } from "./utils/routePaths";


export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route index element={<Home />} />
        <Route path={ROUTE_PATHS.ACCOUNTS} element={<Accounts />} />
        <Route path={ROUTE_PATHS.BALANCE} element={<Balance />} />

        <Route path="/*" element={<Navigate to={""} />} />
      </Routes>
    </>
  );
};