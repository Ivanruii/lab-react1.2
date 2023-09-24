import React from 'react';
import classes from './create-account.component.module.css';
import { Account } from '../api';
import { mapAccountFromVMToApi } from '../account.mapper';
import { createEmptyAccount } from '../account.vm';

const SAVINGS_ACCOUNT = "1";
const SHARE_ACCOUNT = "2";
const EXPENSES_PER_MONTH_ACCOUNT = "3";

interface Props {
  onCreateAccount: (account: Account) => void;
}

export const CreateAccount: React.FC<Props> = ({ onCreateAccount }) => {
  const [account, setAccount] = React.useState<Account>(createEmptyAccount());
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const [successMessage, setSuccessMessage] = React.useState<string>('');

  const handleSelectedOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const selectedType = e.target.value;

    setAccount((account) => ({
      ...account,
      type: selectedType,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccount((prevAccount) => ({ ...prevAccount, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!account.name || !account.type) {
      setErrorMessage("Por favor, complete todos los campos.");
    } else {
      onCreateAccount(mapAccountFromVMToApi(account));
      setSuccessMessage("La cuenta se creó con éxito.");
      setAccount(createEmptyAccount());
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <h1>Crear Cuenta</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={classes.dataCell}>
          <div className={`${classes.selectContainer} ${classes.input}`}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={account.name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <span className={`${classes.dataCell} ${classes.selectContainer}`}>
          <label htmlFor="type">Tipo:</label>
          <select
            id="type"
            className={classes.select}
            onChange={handleSelectedOptionChange}
          >
            <option value={SAVINGS_ACCOUNT}>Ahorros</option>
            <option value={SHARE_ACCOUNT}>Compartida</option>
            <option value={EXPENSES_PER_MONTH_ACCOUNT}>Gastos mensuales</option>
          </select>
        </span>
        <button type="submit" className={classes.button}>
          Crear
        </button>
      </form>
      {errorMessage && <div className={classes.alertBox}>{errorMessage}</div>}
      {successMessage && <div className={classes.alertBox}>{successMessage}</div>}
    </div>
  );
};
