import { ButtonReturn } from "../../components";
import { FormCustomers } from "../components";

export const CreateCustomers = () => {
  return (
    <>
      <div className="container">
        <h2>Crear Cliente - Proveedor</h2>
        <ButtonReturn route={"/accounting-system/customers"} />
        <FormCustomers />
      </div>
    </>
  );
};
