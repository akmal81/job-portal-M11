import { info } from 'autoprefixer';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id} =useParams();
    const {user} = useAuth();
    const navigate = useNavigate()
    

    const submitJobApplication = (e) =>{
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
            job_id : id,
            applicant_email: user.email,
            linkedIn,
            github, 
            resume
        }

        fetch('http://localhost:5000/job-applications',{
            method:'POST',
            headers:{
                'content-Type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.insertedId){
                Swal.fire({
                    position:'top-end',
                    icon:'success',
                    title:'Job has Been added',
                    showConfirmButton:false,
                    timer:1500
                });
                navigate('/myApplications')
            }
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Apply</h1>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={submitJobApplication} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="url" name='linkedin' placeholder="LinkedIn" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">GitHub</span>
                            </label>
                            <input type="url" name='github' placeholder="Github link" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume</span>
                            </label>
                            <input type="url" name='resume' placeholder="Resume" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Apply</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;