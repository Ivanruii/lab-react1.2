import Axios from "axios";
import { Account } from "./account.api-model";

const url = import.meta.env.VITE_BASE_API_URL;
const accountsEndPoint = `account-list`

export const saveAccount = (account: Account): Promise<Account> =>
  Axios.post<Account>(`${url}/${accountsEndPoint}`, account).then(({ data }) => data);
