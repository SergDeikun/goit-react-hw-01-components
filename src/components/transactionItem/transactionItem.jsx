import PropTypes from 'prop-types';
import css from './transactionItem.module.css';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tbody>
      <tr className={css.tr}>
        <td className={css.bodyItem}>{type}</td>
        <td className={css.bodyItem}>{amount}</td>
        <td className={css.bodyItem}>{currency}</td>
      </tr>
    </tbody>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
