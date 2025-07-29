import React from "react";
import { format } from 'date-fns';
import "./ResumePreview.css";

function formatMonthYear(dateString) {
    if (!dateString) return '';
    try {
        return format(new Date(dateString), 'MMMM yyyy');
    } catch {
        return dateString;
    }
}

function ResumePreview({
    name, setName,
    email, setEmail,
    address, setAddress,
    linkedin, setLinkedin,
    educationEntries,
    experienceEntries
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
                                    {education.graduationDate && <div className="resume-date">Expected Graduation:  {formatMonthYear(education.graduationDate)}</div>}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            )}

            {/* Experience Section */}
            {experienceEntries && experienceEntries.length > 0 && experienceEntries.some(exp => exp.companyName || exp.positionTitle || exp.details || exp.startDate || exp.endDate) && (
                <div className="resume-section">
                    <h2 className="resume-section-title">Experience</h2>

                    {/* Looping through each experience entry and displaying it */}
                    {experienceEntries.map((experience, index) => {
                        // Checking if this particular experience has value inside or not
                        const hasContent = experience.companyName ||
                            experience.positionTitle ||
                            experience.details ||
                            experience.startDate ||
                            experience.endDate;

                        // after checking now if it has content then we will display it
                        if (hasContent) {
                            return (
                                <div key={experience.id} className="resume-experience-entry">
                                    {/* Company and job title section */}
                                    <div className="resume-experience-header">
                                        <div>
                                            {/* Showing company name if it exists */}
                                            {experience.companyName && (
                                                <div className="resume-company-name">
                                                    {experience.companyName}
                                                </div>
                                            )}
                                            {experience.positionTitle && (
                                                <div className="resume-position-title">
                                                    {experience.positionTitle}
                                                </div>
                                            )}
                                        </div>

                                        {/* Dates section */}
                                        <div>
                                            {(experience.startDate || experience.endDate) && (
                                                <div className="resume-experience-dates">
                                                    {formatMonthYear(experience.startDate)}
                                                    {experience.startDate && experience.endDate && ' - '}
                                                    {formatMonthYear(experience.endDate)}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Job details section */}
                                    {experience.details && (
                                        <div className="resume-job-details">
                                            {experience.details.split('\n').map((line, index) => (
                                                line.trim() && (
                                                    <div key={index} className="resume-bullet-point">
                                                        • {line.trim()}
                                                    </div>
                                                )
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            )}
        </div>
    )
}
export default ResumePreview;