import { useNavigate } from "react-router-dom";

export const AccountItem = ({ balance, coin, typeAccount, accountNumber, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/balance/${id}`, {
      state: { coin, balance, typeAccount, accountNumber },
    });
  };

  const getAccountTypeLabel = () => {
    const accountTypes = {
      CC: "Cuenta Corriente",
      CA: "Caja de Ahorro",
    };

    return accountTypes[typeAccount] || typeAccount;
  };

  return (
    <div className="flex items-center text-sm" data-testid="account-component">
      <ul
        className="bg-[#7ccc72] justify-center hover:bg-[#82db76] text-white font-bold py-2 px-10 rounded transition duration-300 ease-in-out transform  cursor-pointer"
        onClick={handleClick}
      >
        {getAccountTypeLabel()}
        <p> {accountNumber}</p>
      </ul>
    </div>
  );
};
