import { Nav } from "./components/Nav/Nav";
import { Subtitle } from "./components/Subtitle/Subtitle";
import { Title } from "./components/Title/Title";
import { Accounts } from "./pages/Accounts/Accounts";
import { AppRouter } from "./router/AppRouter";
import { useFetch } from "./useFetch";

function App() {
  const { data, isLoading } = useFetch("https://api.npoint.io/97d89162575a9d816661");
  // console.log(data, "data en app");
  // console.log(isLoading , "isLoading"); 


  return (
    <div className="App">
      <Nav />
      <AppRouter />
      <Subtitle className="text-xl text-[#7ccc72] font-bold text-center mt-8" value="Consulte su saldo" />
      <Title className="text-3xl text-[#5a5a5a] font-bold text-center mt-4 pb-4" value="Seleccione la cuenta a consultar" />

      <div className="card">

        <ul>
          {isLoading && <li>Loading...</li>}
          {/* {data && data.cuestas && data.cuestas.map((cuenta) => (
          <li key={cuenta.id}>
            ID: {cuenta.id}, Nombre: {cuenta.nombre}
          </li>
        ))} */}

          {data && data.cuentas && data.cuentas.map((account) => (
            <Accounts

              key={account.n}
              accountNumber={account.n}
              balance={account.saldo}
              coin={account.moneda}
              typeAccount={account.tipo_letras}


            />
          ))}

        </ul>
      </div>

    </div>
  );
}

export default App;