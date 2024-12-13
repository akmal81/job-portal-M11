import React from 'react';
import { IoBriefcase } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { div } from 'motion/react-client';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job
    return (

        <div className='border p-4 flex flex-col min-h-80 rounded-xl bg-gray-900'>
            <div className='flex items-center gap-4'>
                <div>
                    <img className='w-10' src={company_logo} alt="" />
                </div>
                <div>
                    <h2 className='font-bold text-xl'>{title}</h2>
                    <p className='flex items-center gap-1 text-sm'>
                        <span><IoBriefcase /></span>
                        <span>Full Time</span>
                        <span className='ml-2'><FaClock /></span>
                        <span>2 Years ago</span>
                    </p>
                </div>
            </div>
            <div className='mt-6 flex-grow'>
                <p>{description}</p>
            </div>
            <div className='flex gap-2 flex-wrap mt-4 '>
                {
                    requirements.map((r, idx ) => <div key={idx} className='bg-gray-700'>{r}</div>)
                }
            </div>
           
            <Link to={`/jobs/${_id}`} className='bg-gray-800 py-2 px-4 w-fit rounded-lg mt-7'>Apply Now</Link>
            
        </div>

    );
};

export default HotJobCard;