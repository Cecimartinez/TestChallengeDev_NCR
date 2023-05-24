import { Button } from "../../components/Button/Button";

export const Accounts = ({accountNumber, balance, coin, typeAccount }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">

      <div className="col-span-1 md:col-span-1 flex ">

            <Button value={typeAccount} accountNumber={accountNumber} balance={balance} coin={coin} />
            
      </div>
      
    </div>
  );
};