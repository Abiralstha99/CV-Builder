import React from "react";

function ResumePreview({ name, setName, email, setEmail, address, setAddress }) {
    return (
        <>
            <div className="p-6 border rounded-md bg-white text-black shadow space-y-2 text-center">
                {name && <h1 className="text-2xl font-bold">{name}</h1>}
                {email && <p className="text-2xl font-bold">{email}</p>}
                {address && <p className="text-2xl font-bold">{address}</p>}
            </div>
        </>
    )
}
export default ResumePreview;
