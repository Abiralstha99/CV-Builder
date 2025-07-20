import React from "react";
import "./ResumePreview.css";

function ResumePreview({
    name, setName,
    email, setEmail,
    address, setAddress,
    linkedin, setLinkedin,
    educationEntries,
    companyName, setCompanyName,
    positionTitle, setPositionTitle,
    details, setDetails,
    startDate, setStartDate,
    endDate, setEndDate
}) {
    return (
        <div className="resume-container">
            {/* Header Section */}
            <div className="resume-header">
                {name && <h1 className="resume-name">{name}</h1>}
                <div className="resume-contact">
                    {(email || address || linkedin) && (
                        <div>
                            {email && <span>{email}</span>}
                            {email && (address || linkedin) && <span> | </span>}
                            {address && <span>{address}</span>}
                            {address && linkedin && <span> | </span>}
                            {linkedin && (
                                <a
                                    href={linkedin.startsWith('http') ? linkedin : `https://${linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resume-linkedin-link"
                                >
                                    {
                                        linkedin.includes('/in/') ?
                                            linkedin.split('/in/')[1].split('/')[0]
                                                .replace(/-[a-z0-9]+$/i, '') // Remove ID at the end
                                                .replace(/-/g, ' ') // Replace hyphens with spaces
                                                .replace(/\b\w/g, l => l.toUpperCase()) // Capitalize first letter of each word
                                            : linkedin.includes('linkedin.com/') ?
                                                linkedin.split('linkedin.com/')[1].split('/')[0]
                                                : linkedin
                                    }
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Education Section */}
            {(educationEntries && educationEntries.length > 0 && educationEntries.some(edu => edu.schoolName || edu.major || edu.graduationDate)) && (
                <div className="resume-section">
                    <h2 className="resume-section-title">Education</h2>
                    {educationEntries.map((education, index) => (
                        (education.schoolName || education.major || education.graduationDate) && (
                            <div key={index} className="resume-institution">
                                <div>
                                    {education.schoolName && <div className="resume-school-name">{education.schoolName}</div>}
                                    {education.major && <div className="resume-degree">{education.major}</div>}
                                </div>
                                <div>
                                    {education.graduationDate && <div className="resume-date">Expected Graduation: {education.graduationDate}</div>}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            )}

            {/* Experience Section */}
            {(companyName || positionTitle || details || startDate || endDate) && (
                <div className="resume-section">
                    <h2 className="resume-section-title">Experience</h2>
                    <div className="resume-experience-header">
                        <div>
                            {companyName && <div className="resume-company-name">{companyName}</div>}
                            {positionTitle && <div className="resume-position-title">{positionTitle}</div>}
                        </div>
                        <div>
                            {(startDate || endDate) && (
                                <div className="resume-experience-dates">
                                    {startDate} {startDate && endDate && ' - '} {endDate}
                                </div>
                            )}
                        </div>
                    </div>
                    {details && (
                        <div className="resume-job-details">
                            {details.split('\n').map((line, index) => (
                                line.trim() && (
                                    <div key={index} className="resume-bullet-point">
                                        • {line.trim()}
                                    </div>
                                )
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
export default ResumePreview;
