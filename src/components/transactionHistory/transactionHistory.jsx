import PropTypes from 'prop-types';
import TransactionItem from '../transactionItem/transactionItem';

const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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
