import React from "react";
import { AccountItem } from "./AccountsItem";

const AccountList = ({ accountList }) => {
  return (
    <>
      {accountList.map((account) => (
        <div
          className="w-1/6"
          key={`${account.moneda}${account.n}`}
          data-testid="account-item"
        >
          <AccountItem
            id={`${account.moneda}${account.n}`}
            accountNumber={account.n}
            balance={account.saldo}
            coin={account.moneda}
            typeAccount={account.tipo_letras}
          />
        </div>
      ))}
    </>
  );
};

export default AccountList;
