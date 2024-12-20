import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Myapplications = () => {
    const {user} = useAuth();
    const [jobs, setJobs] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setJobs(data);
        })
    },[user.email])
    return (
        <div>
            <h2 className="text-3xl">My Applications:{jobs.length}</h2>
        </div>
    );
};

export default Myapplications;