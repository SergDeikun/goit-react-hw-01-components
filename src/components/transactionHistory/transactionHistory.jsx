import PropTypes from 'prop-types';
import TransactionItem from '../transactionItem/transactionItem';
import css from './transactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.headTitle}>
          <th className={css.headItem}>Type</th>
          <th className={css.headItem}>Amount</th>
          <th className={css.headItem}>Currency</th>
        </tr>
      </thead>
      {items.map(({ type, amount, currency, id }) => {
        return (
          <TransactionItem
            type={type}
            amount={amount}
            currency={currency}
            key={id}
          />
        );
      })}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
