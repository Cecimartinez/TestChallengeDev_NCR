export const BalanceInfo = ({balance, typeAccountText, coinText, accountNumber}) => {
  return (
    <div className="py-14 px-5 my-11 mx-5">
      <ul className="text-sm mb-4">
        <li data-testid="account-balance">Saldo de la cuenta: {balance}</li>
        <li data-testid="account-type">
          Tipo de Cuenta: {typeAccountText} en {coinText}
        </li>
        <li data-testid="account-number">Número de Cuenta: {accountNumber}</li>
      </ul>
    </div>
  );
};
