import { Navigate, Route, Routes } from "react-router-dom";
import { Accounts } from "../pages/Accounts/Accounts";
import { Balance } from "../pages/Balance/Balance";
import { ROUTE_PATHS } from "./utils/routePaths";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accounts />} />
        <Route path={`${ROUTE_PATHS.BALANCE}/:id`} element={<Balance />} />

        <Route path="/*" element={<Navigate to={""} />} />
      </Routes>
    </>
  );
};
