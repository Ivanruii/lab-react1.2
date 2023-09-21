import React from 'react';
import classes from './create-account.component.module.css';

const SAVINGS_ACCOUNT = "";
const SHARE_ACCOUNT = "";
const EXPENSES_PER_MONTH_ACCOUNT = "";

interface Props {
  onCreateAccount: (account: Account) => void;
}

export interface Account {
  type: string;
  name: string;
}

export const CreateAccount: React.FC<Props> = ({ onCreateAccount }) => {
  const [account, setAccount] = React.useState<Account>({ type: '', name: '' });

  const handleSelectedOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    switch (e.target.value) {
      case SAVINGS_ACCOUNT:
        setAccount((prevAccount) => ({ ...prevAccount, type: SAVINGS_ACCOUNT }));
        break;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccount((prevAccount) => ({ ...prevAccount, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateAccount(account);
  };

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <h1>Create Account</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={classes.dataCell}>
          <div className={`${classes.displayFlex} ${classes.input}`}>
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
          <label htmlFor="name">Tipo:</label>
          <select
            className={classes.select}
            onChange={handleSelectedOptionChange}
          >
            <option value={SAVINGS_ACCOUNT}>Ahorros</option>
            <option value={SHARE_ACCOUNT}>Compartida</option>
            <option value={EXPENSES_PER_MONTH_ACCOUNT}>Gastos mensuales</option>
          </select>
        </span>
        <button type="submit" className={classes.button}>
          Create
        </button>
      </form>
    </div>
  );
};