"use client";

import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodePayment() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [expired, setExpired] = useState(false);

  // Example payment URL (replace with your actual payment link)
  const paymentUrl = "upi://pay?pa=merchant@upi&pn=MerchantName&am=500&cu=INR";

  useEffect(() => {
    if (timeLeft <= 0) {
      setExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6">Scan to Pay</h2>

      {!expired ? (
        <>
          <div className="bg-white rounded-xl shadow-lg w-[40vw] h-[60vh] flex flex-col justify-center">
            <div className="flex-1 flex items-center justify-center">
              <QRCode
                value={paymentUrl}
                style={{
                  height: "70%",
                  width: "70%",
                }}
                viewBox={`0 0 128 128`}
              />
            </div>
          </div>
          <p className="mt-4 text-lg text-gray-700">
            Expires in:{" "}
            <span className="font-bold">{formatTime(timeLeft)}</span>
          </p>
        </>
      ) : (
        <div className="text-center text-red-500 font-semibold mt-4">
          QR Code Expired. Please refresh to generate a new one.
        </div>
      )}
    </div>
  );
}
