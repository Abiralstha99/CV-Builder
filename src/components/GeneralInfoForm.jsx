import React, { useState } from "react";

function GeneralInfoForm({ name, setName, email, setEmail, address, setAddress }) {
    return (
        <div className="flex flex-col gap-4">
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                placeholder="Full Name"
            />
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                placeholder="Email Address"
                type="email"
            />
            <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                placeholder="Address"
            />
        </div>
    )
}

export default GeneralInfoForm;