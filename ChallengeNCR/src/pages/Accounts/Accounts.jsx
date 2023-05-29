import { useState } from "react";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { Title } from "../../components/Title/Title";
import { useFetch } from "../../hook/useFetch";
import AccountList from "./components/AccountList";
import Button from "../../components/Button/Button";
import { renderAccounts } from "./helpers/render-accounts";

const URL_ENDPOINT = import.meta.env.VITE_BASE_URL_ENDPOINT;

export const Accounts = () => {
  const { data, isLoading, errorState } = useFetch(URL_ENDPOINT);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data?.cuentas.length / itemsPerPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handleShowMoreOptions = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleShowPreviousOptions = () => {
    setCurrentPage(currentPage - 1);
  };
  if (errorState) {
    return (
      <h1 className="text-red-500 text-2xl font-bold uppercase text-center h-1/2 my-auto">
        ocurrio un error inesperado
      </h1>
    );
  }
  const renderAccountOptions = () => {
    const accounts = renderAccounts(data, currentPage, itemsPerPage);

    return (
      <>
        {!isFirstPage && (
          <Button
            handleClick={handleShowPreviousOptions}
            buttonText={"<<Opciones anteriores"}
          />
        )}
      
        <AccountList accountList={accounts} />

        {!isLastPage && (
          <Button
            handleClick={handleShowMoreOptions}
            buttonText={"Mas opciones>>"}
          />
        )}
      </>
    );
  };

  return (
    <div className="card justify-center mx-28" data-testid="account-component">
      <section className="py-10 px-10 my-10 text-center">
        <Subtitle
          value="Consulte su saldo"
          className="text-lg  font-semibold text-[#414141]"
        />
        <Title
          value="Seleccione la cuenta a consultar"
          className="mb-4 text-2xl font-bold text-[#49b03c] "
        />
      </section>

      <div className="grid grid-cols-3 gap-4 mx-20" >
        {isLoading ? <li>Loading...</li> : renderAccountOptions()}
      </div>
    </div>
  );
};
