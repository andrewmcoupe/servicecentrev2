import axios from "axios";

export const deleteCustomer = async (id: string) =>
  await axios.delete(
    `${process.env.NEXT_PUBLIC_CUSTOMERS_SERVICE_API_ENDPOINT}/customers/${id}`
  );
