export const renderAccounts = (data, currentPage, itemsPerPage) => {
  const adjustedItemsPerPage =
    currentPage > 1 ? itemsPerPage - 1 : itemsPerPage;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + adjustedItemsPerPage;
  return data?.cuentas.slice(startIndex, endIndex);
};