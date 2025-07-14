import React, { useState } from "react";

function GeneralInfoForm({name,setName, email, setEmail, address, setAddress}) {
    return (
        <div className="flex flex-col gap-4">
            <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name"
            />
            <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
            />
            <input 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Address"
            />
        </div>
    )
}

export default GeneralInfoForm;