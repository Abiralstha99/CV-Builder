import React from "react";

function ExperienceForm({
    experienceEntries,
    addExperienceEntry,
    updateExperienceEntry,
    removeExperienceEntry
}) {
    return (
        <div className="flex flex-col gap-4">
            {experienceEntries.map((experience, index) => (
                <div key={experience.id} className="bg-white p-4 rounded-lg border-2 border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium text-gray-700">Experience {index + 1}</h4>
                        {experienceEntries.length > 1 && (
                            <button
                                onClick={() => removeExperienceEntry(experience.id)}
                                className="text-white bg-red-500 hover:bg-red-600 font-bold px-2 py-1 rounded transition-colors duration-200"
                            >
                                ×
                            </button>
                        )}
                    </div>
                    <div className="flex flex-col gap-3">
                        <input
                            value={experience.companyName}
                            onChange={(e) => updateExperienceEntry(experience.id, 'companyName', e.target.value)}
                            className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all duration-200 bg-gray-50 hover:bg-white"
                            placeholder="Company Name"
                        />

                        <input
                            value={experience.positionTitle}
                            onChange={(e) => updateExperienceEntry(experience.id, 'positionTitle', e.target.value)}
                            className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all duration-200 bg-gray-50 hover:bg-white"
                            placeholder="Position Title"
                        />

                        <textarea
                            value={experience.details}
                            onChange={(e) => updateExperienceEntry(experience.id, 'details', e.target.value)}
                            className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all duration-200 bg-gray-50 hover:bg-white"
                            placeholder="Job responsibilities and achievements..."
                            rows="4"
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                value={experience.startDate}
                                onChange={(e) => updateExperienceEntry(experience.id, 'startDate', e.target.value)}
                                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all duration-200 bg-gray-50 hover:bg-white"
                                placeholder="Start Date (e.g., Jan 2024)"
                            />

                            <input
                                value={experience.endDate}
                                onChange={(e) => updateExperienceEntry(experience.id, 'endDate', e.target.value)}
                                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all duration-200 bg-gray-50 hover:bg-white"
                                placeholder="End Date (or 'Present')"
                            />
                        </div>
                    </div>
                </div>
            ))}
            <button
                onClick={addExperienceEntry}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition-all duration-200"
            >
                + Add Experience
            </button>
        </div>
    );
}

export default ExperienceForm;
