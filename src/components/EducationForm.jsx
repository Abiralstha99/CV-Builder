import React, { useState } from "react";

function EducationForm({ schoolName, setSchoolName, major, setMajor, graduationDate, setGraduationDate }) {
    return (
        <div className="flex flex-col gap-4">
            <input
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                placeholder="School/University Name"
            />

            <input
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                placeholder="Major/Degree"
            />

            <input
                value={graduationDate}
                onChange={(e) => setGraduationDate(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                placeholder="Expected Graduation Date"
            />
        </div>
    )
}
export default EducationForm;