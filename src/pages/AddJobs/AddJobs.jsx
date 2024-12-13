import { object } from 'motion/react-client';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';

const AddJobs = () => {

    const {user} = useAuth();
    const navigate = useNavigate()
    console.log(user);

    const [formData, setFormData] = useState({ email: '', password: '' });


    const handleAddJobs = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData);
        const { max_salary, min_salary, currency, ...newjob } = initialData;
        console.log(newjob);
        newjob.salaryRange = { min_salary, max_salary, currency };
        newjob.requirements = newjob.requirements.split('\n');
        newjob.responsibility = newjob.responsibility.split('\n');
        console.log('salary', newjob);

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(newjob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your application submited successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myPostedJobs')
                }
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add Job</h1>
                </div>
                <div className="card bg-base-100   shrink-0 shadow-2xl">
                    <form onSubmit={handleAddJobs} className="card-body">

                        {/* JOB Title  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input
                                type="text"
                                name='job_title'
                                placeholder="Job Title"
                                className="input input-bordered"
                                required />
                        </div>

                        {/* job location */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Location</span>
                            </label>
                            <input
                                type="text"
                                name='location'
                                placeholder="Job Location"
                                className="input input-bordered"
                                required />

                        </div>

                        {/* job Type */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Type</span>
                            </label>
                            <select
                                defaultValue="Pick a Job Type"
                                name='job_type'
                                className="select select-bordered w-full max-w-xs">
                                <option disabled >Pick a Job Type</option>
                                <option>Full-time</option>
                                <option>Intern</option>
                                <option>Onsite</option>
                                <option>Remote</option>
                                <option>Part-time</option>
                                <option>Hybrid</option>
                            </select>

                        </div>
                        {/* Job field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pick a job field</span>
                            </label>
                            <select
                            defaultValue='Pick a job field'
                                name='job_field'
                                className="select select-bordered  w-full max-w-xs">
                                <option disabled >Pick a job field</option>
                                <option>Engeniaring</option>
                                <option>Finanace</option>
                                <option>Teaching</option>
                                <option>Human Resource</option>
                                <option>Information technology</option>
                            </select>
                        </div>
                        {/*max salary range */}
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Max</span>
                                </label>

                                <input
                                    type="text"
                                    name='min_salary'
                                    placeholder="Minimum salary"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Max salary</span>
                                </label>

                                <input
                                    type="text"
                                    name='max_salary'
                                    placeholder="Maximum salary"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Currency</span>
                                </label>
                                <select
                                defaultValue='Currency'
                                    name='currency'
                                    className="select select-primary  w-full max-w-xs">
                                    <option disabled >Currency</option>
                                    <option>BDT</option>
                                    <option>$dollar</option>
                                    <option>Euro</option>
                                </select>
                            </div>
                        </div>
                        {/* description */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>

                            <textarea
                                className="textarea textarea-bordered"
                                name='description'
                                placeholder="Job description"
                                required>
                            </textarea>
                        </div>
                        {/* company name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Company Name</span>
                            </label>

                            <textarea
                                className="textarea textarea-bordered"
                                name='CompanyName'
                                placeholder="Company Name"
                                required>
                            </textarea>
                        </div>
                        {/* Requirements */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Requirements</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered"
                                name='requirements'
                                placeholder="write each requirements in single line"
                                required>
                            </textarea>
                        </div>
                        {/* responsibility */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Responsibility</span>
                            </label>

                            <textarea
                                className="textarea textarea-bordered"
                                name='responsibility'
                                placeholder="Write each responsibility in a new line"
                                required>
                            </textarea>
                        </div>
                        {/* hr email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Hr Email</span>
                            </label>

                            <input
                                type="text"
                                name='hr_email'
                                defaultValue={user?.email}
                                placeholder="hr_email"
                                className="input input-bordered"
                                required />
                        </div>
                        {/* hr name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Hr name</span>
                            </label>

                            <input
                                type="text"
                                name='hr_name'
                                defaultValue={user?.displayName}
                                placeholder="Hr Name"
                                className="input input-bordered"
                                required />
                        </div>
                        {/* deadline */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Dead Line</span>
                            </label>

                            <input
                                type="date"
                                name='dead_line'
                                placeholder="Company Logo URL"
                                className="input input-bordered"
                                required />
                        </div>
                        {/*  */}

                        {/* company logo */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Company Logo URL</span>
                            </label>

                            <input
                                type="url"
                                name='company_logo'
                                placeholder="Company Logo URL"
                                className="input input-bordered"
                                required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default AddJobs;