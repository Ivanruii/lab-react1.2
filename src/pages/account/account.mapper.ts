import * as apiModel from "./api";
import * as viewModel from "./account.vm";

export const mapAccountFromVMToApi = (
    AccountVM: viewModel.AccountVM
): apiModel.Account => ({
    type: AccountVM.type,
    name: AccountVM.name,
});
