import React from "react";
import "./TransactionTable.css";
const transactions = [
  {
    card: "**4920(credit)",
    type: "Mastercard",
    date: "Jun 24, 2023",
    time: "10:00 AM",
    status: "Verified",
    amount: 2890.0,
  },
  {
    card: "**4230(debit)",
    type: "Visa",
    date: "Jun 20, 2023",
    time: "11:00 AM",
    status: "Rejected",
    amount: -49.0,
  },
  {
    card: "**5510(credit)",
    type: "Visa",
    date: "Jun 19, 2023",
    time: "2:00 PM",
    status: "Pending",
    amount: -80.0,
  },
  {
    card: "**0983(debit)",
    type: "Amazonpay",
    date: "Jun 18, 2023",
    time: "11:00 AM",
    status: "Verified",
    amount: -30.0,
  },
  {
    card: "**4443(Credit)",
    type: "Visa",
    date: "Jun 17, 2023",
    time: "10:00 AM",
    status: "Verified",
    amount: 1500.0,
  },
  {
    card: "**7635(Debit)",
    type: "Mastercard",
    date: "Jun 14, 2023",
    time: "9:00 AM",
    status: "Rejected",
    amount: -200.0,
  },
];
const getCardImage = (type) => {
  switch (type) {
    case "Mastercard":
      return "https://m.eyeofriyadh.com/news_images/2021/02/37200ca6529d7.jpg";
    case "Visa":
      return "https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.png";
    case "Amazonpay":
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNO78bjEGVLW9jp32UneI1SzjIpp6Uq3ELw&s";
    default:
      return "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
  }
};
const getStatusClass = (status) => {
  switch (status) {
    case "Verified":
      return "status-verified";
    case "Rejected":
      return "status-rejected";
    case "Pending":
      return "status-pending";
    default:
      return "";
  }
};

const TransactionTable = () => {
  return (
    <div className="transaction-container">
      <div className="table-header">
        <h3>Recent Transactions</h3>
        <span className="menu-dots">...</span>
      </div>
      <h6>Transactions overview</h6>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Card</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, index) => (
            <tr key={index}>
              <td>
                <img
                  src={getCardImage(txn.type)}
                  alt={txn.type}
                  className="card-image"
                />
                <span className="card-number">{txn.card}</span>
              </td>
              <td>
                {txn.date} {txn.time}
              </td>
              <td className={getStatusClass(txn.status)}>{txn.status}</td>
              <td className={txn.amount > 0 ? "positive" : "negative"}>
                {txn.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
