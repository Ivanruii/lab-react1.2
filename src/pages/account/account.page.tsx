import { AppLayout } from "@/layouts";
import React from "react";
import { Account } from "./api";
import { CreateAccount } from "./components/create-account.component";
import { saveAccount } from "./api";
export const AccountPage: React.FC = () => {
  const handleCreateAccount = (account: Account) => {
    saveAccount(account)
  };

  return (
    <AppLayout>
      <CreateAccount onCreateAccount={handleCreateAccount} />
    </AppLayout>
  );
};