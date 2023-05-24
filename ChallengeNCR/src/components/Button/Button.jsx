
export const Button = ({ value, accountNumber }) => {
  return (

    <div className="flex justify-center items-center flex-col py-6">
      <button className="bg-[#7ccc72] justify-center flex-col hover:bg-[#82db76] text-white font-bold py-2 px-7 rounded "> Cuenta: {value} 
      <p className=""> Nro: {accountNumber}</p>
      
      </button>

    </div>

  )
};
