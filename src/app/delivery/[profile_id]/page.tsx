"use client";

import { useState } from "react";
import BestSellers from "../components/BestSellers";
import ProductRecommendationCarousel from "../components/RecommendationCarousel";

interface Address {
  id: number;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
}

export default function DeliveryAddress() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Jane Smith",
      street: "45 Market Street",
      city: "Boston",
      state: "MA",
      zip: "02108",
      phone: "9871234560",
    },
  ]);

  const [selectedId, setSelectedId] = useState<number>(addresses[0].id);
  const [showForm, setShowForm] = useState(false);
  const [newAddress, setNewAddress] = useState<Address>({
    id: Date.now(),
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const handleAddAddress = () => {
    setAddresses([...addresses, { ...newAddress, id: Date.now() }]);
    setNewAddress({
      id: Date.now(),
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
    });
    setShowForm(false);
  };

  const handleRemoveAddress = (id: number) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
    if (selectedId === id && addresses.length > 1) {
      setSelectedId(addresses[0].id);
    }
  };

  return (
    <>
      <div className="p-6 grid grid-cols-1 md:grid-cols-[70%_30%] gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-7xl">
          <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>

          {/* Saved Addresses */}
          <div className="space-y-3">
            {addresses.map((addr) => (
              <div
                key={addr.id}
                className="flex items-center justify-between border border-gray-200 rounded-lg p-4"
              >
                <label className="flex items-center gap-3 cursor-pointer w-full">
                  <input
                    type="radio"
                    name="selectedAddress"
                    checked={selectedId === addr.id}
                    onChange={() => setSelectedId(addr.id)}
                    className="accent-blue-500"
                  />
                  <div>
                    <p className="font-medium">{addr.name}</p>
                    <p className="text-sm text-gray-600">
                      {addr.street}, {addr.city}, {addr.state} - {addr.zip}
                    </p>
                    <p className="text-sm text-gray-600">Phone: {addr.phone}</p>
                  </div>
                </label>
                <button
                  onClick={() => handleRemoveAddress(addr.id)}
                  className="text-red-500 text-sm hover:underline ml-4"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Add Address Toggle */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            {showForm ? "Cancel" : "Add New Address"}
          </button>

          {/* New Address Form */}
          {showForm && (
            <div className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                value={newAddress.name}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, name: e.target.value })
                }
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Street Address"
                value={newAddress.street}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, street: e.target.value })
                }
                className="w-full border p-2 rounded"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="City"
                  value={newAddress.city}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, city: e.target.value })
                  }
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="State"
                  value={newAddress.state}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, state: e.target.value })
                  }
                  className="border p-2 rounded"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="ZIP Code"
                  value={newAddress.zip}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, zip: e.target.value })
                  }
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={newAddress.phone}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, phone: e.target.value })
                  }
                  className="border p-2 rounded"
                />
              </div>
              <button
                onClick={handleAddAddress}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Save Address
              </button>
            </div>
          )}
        </div>
        <BestSellers />
      </div>
      <ProductRecommendationCarousel />
    </>
  );
}
