import React from "react";
import "./ResumePreview.css";

function ResumePreview({ name, setName, email, setEmail, address, setAddress, linkedin, setLinkedin, schoolName, setSchoolName, major, setMajor, graduationDate, setGraduationDate }) {
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
                                     {linkedin.includes('/in/') ?
                                        linkedin.split('/in/')[1].split('/')[0] :
                                        linkedin.includes('linkedin.com/') ?
                                            linkedin.split('linkedin.com/')[1].split('/')[0] :
                                            linkedin
                                    }
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Education Section */}
            {(schoolName || major || graduationDate) && (
                <div className="resume-section">
                    <h2 className="resume-section-title">Education</h2>
                    <div className="resume-institution">
                        <div>
                            {schoolName && <div className="resume-school-name">{schoolName}</div>}
                            {major && <div className="resume-degree">{major}</div>}
                        </div>
                        <div>
                            {graduationDate && <div className="resume-date">Expected Graduation: {graduationDate}</div>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default ResumePreview;
