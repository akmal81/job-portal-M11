import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Jobdetails = () => {
    const job = useLoaderData();
    console.log(job);
    
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job;
    return (
        <div>
         <h2> {title}</h2>
          <p>{description}</p>
          <Link to={`/jobApply/${_id}`}>Apply Now</Link>
        </div>
    );
};

export default Jobdetails;