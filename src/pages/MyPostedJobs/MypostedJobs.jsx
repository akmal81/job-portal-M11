import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { title } from 'motion/react-client';

const MypostedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const {user} = useAuth();

    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[user.email])

    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            jobs.map((job, idx)=>
                <tr>
                    <td>{idx+1}</td>
                    <td>{job.job_title}</td>
                    <td>{job.CompanyName}</td>
                </tr>    
            )
           }
           
          </tbody>
        </table>
      </div>
    );
};

export default MypostedJobs;