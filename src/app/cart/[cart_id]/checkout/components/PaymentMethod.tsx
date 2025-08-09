"use client";

import { useState } from "react";

interface PaymentMethodSelectionProps {
  onSelect: (method: string, details?: any) => void;
}

const PaymentMethodSelection: React.FC<PaymentMethodSelectionProps> = ({
  onSelect,
}) => {
  const paymentMethods = [
    "Credit Card",
    "Debit Card",
    "UPI",
    "Internet Banking",
  ];

  const [selected, setSelected] = useState<string>("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");
  const [bank, setBank] = useState("");

  const handleSelect = (method: string) => {
    setSelected(method);
    onSelect(method);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <label
            key={method}
            className="flex items-center gap-3 cursor-pointer border p-3 rounded hover:border-blue-400"
          >
            <input
              type="radio"
              name="paymentMethod"
              value={method}
              checked={selected === method}
              onChange={() => handleSelect(method)}
              className="h-4 w-4 text-blue-500"
            />
            {method}
          </label>
        ))}
      </div>

      {/* Extra fields for each payment type */}
      {selected === "Credit Card" || selected === "Debit Card" ? (
        <div className="mt-4 space-y-3">
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
      ) : null}

      {selected === "UPI" ? (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter UPI ID"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>
      ) : null}

      {selected === "Internet Banking" ? (
        <div className="mt-4">
          <select
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            <option value="">Select Bank</option>
            <option value="HDFC">HDFC Bank</option>
            <option value="SBI">State Bank of India</option>
            <option value="ICICI">ICICI Bank</option>
            <option value="Axis">Axis Bank</option>
          </select>
        </div>
      ) : null}
    </div>
  );
};

export default PaymentMethodSelection;
