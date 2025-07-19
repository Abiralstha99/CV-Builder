import React from "react";

function ExperienceForm({
    companyName,
    setCompanyName,
    positionTitle,
    setPositionTitle,
    details,
    setDetails,
    startDate,
    setStartDate,
    endDate,
    setEndDate
}) {
    return (
        <div className="flex flex-col gap-4">
            <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                placeholder="Company Name"
            />

            <input
                value={positionTitle}
                onChange={(e) => setPositionTitle(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                placeholder="Position Title"
            />

            <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                placeholder="Job responsibilities and achievements..."
                rows="4"
            />

            <div className="grid grid-cols-2 gap-4">
                <input
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                    placeholder="Start Date (e.g., Jan 2024)"
                />

                <input
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-gray-50 hover:bg-white"
                    placeholder="End Date (or 'Present')"
                />
            </div>
        </div>
    );
}

export default ExperienceForm;
