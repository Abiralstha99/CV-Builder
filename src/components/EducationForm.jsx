import React, { useState } from "react";

function EducationForm({ educationEntries, addEducationEntry, updateEducationEntry, removeEducationEntry }) {
    return (
        <div className="flex flex-col gap-4">
            {educationEntries.map((education, index) => (
                <div key={education.id} className="bg-white p-4 rounded-lg border-2 border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium text-gray-700">Education {index + 1}</h4>
                        {educationEntries.length > 1 && (
                            <button
                                onClick={() => removeEducationEntry(education.id)}
                                className="text-white bg-red-500 hover:bg-red-600 font-bold px-2 py-1 rounded transition-colors duration-200"
                            >
                                ×
                            </button>
                        )}
                    </div>

                    <div className="flex flex-col gap-3">
                        <input
                            value={education.schoolName}
                            onChange={(e) => updateEducationEntry(education.id, 'schoolName', e.target.value)}
                            className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                            placeholder="School/University Name"
                        />

                        <input
                            value={education.major}
                            onChange={(e) => updateEducationEntry(education.id, 'major', e.target.value)}
                            className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                            placeholder="Major/Degree"
                        />

                        <input
                            value={education.graduationDate}
                            onChange={(e) => updateEducationEntry(education.id, 'graduationDate', e.target.value)}
                            className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                            placeholder="Expected Graduation Date"
                        />
                    </div>
                </div>
            ))}

            <button
                onClick={addEducationEntry}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200"
            >
                + Add Education
            </button>
        </div>
    )
}
export default EducationForm;