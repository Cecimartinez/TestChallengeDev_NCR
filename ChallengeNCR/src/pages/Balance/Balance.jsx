import { Link, useLocation } from "react-router-dom";
import { Title } from "../../components/Title/Title";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { COIN_TEXT } from "../../constants/coin-text-map";
import { TYPE_ACCOUNT } from "../../constants/type-account-text";
import { BalanceInfo } from "./components/balanceInfo";

export const Balance = () => {
  const location = useLocation();
  const { balance, coin, typeAccount, accountNumber } = location.state;

  const coinText = COIN_TEXT[coin];
  const typeAccountText = TYPE_ACCOUNT[typeAccount];

  return (
    <div
      className="flex justify-center items-center h-screen"
      data-testid="balance-component"
    >
      <div className="text-center">
        <Subtitle
          value="Consulte su saldo"
          className="text-lg font-semibold text-[#414141]"
        />
        <Title
          value="Este es tu saldo actual"
          className="mb-4 text-2xl font-bold text-[#49b03c] "
        />

        <BalanceInfo
          balance={balance}
          typeAccountText={typeAccountText}
          coinText={coinText}
          accountNumber={accountNumber}
        />

        <div className="flex justify-center">
          <Link
            to="/accounts"
            className="bg-[#7ccc72] text-sm  hover:bg-[#82db76] text-white font-bold py-2 px-7 rounded mx-0"
          >
            salir
          </Link>
        </div>
      </div>
    </div>
  );
};
