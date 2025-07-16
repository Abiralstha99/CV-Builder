import React, {useState} from "react";

function EducationForm({schoolName, setSchoolName, major, setMajor, graduationDate, setGraduationDate}){
    return (
        <div className="flex flex-col gap-4">
            <input 
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="schoolName"
            />

            <input 
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Major"
            />

            <input 
                value={graduationDate}
                onChange={(e) => setGraduationDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Graduation Date"
            />
        </div>
    )
}
export default EducationForm;