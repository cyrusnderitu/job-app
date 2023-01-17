import React from "react";
import JobCard from "./JobCard/JobCard";

const Jobs = () => {
  return (
    <div className="md:py-24">
      <div className="cont">
        <div className="headline text-center mb-10">
          <h1 className="text-[40px] text-white"> Find a job that suits you</h1>
          <p className="text-gray-500">
            Finding a job should be a full-time endeavor. Tell us what you're
            searching for and we'll find you a job
          </p>
        </div>
        <div className="jobs_cont grid grid-cols-3 gap-8">
            <JobCard position="Senior UX Designer at" company="Safaricon"/>
            <JobCard position="Junior Call Support Assistan at" company="Airtel"/>
            <JobCard position="Marketing Manager at" company="Twiga LTD"/>
            <JobCard position="Product Manager at" company="Dairy"/>
            <JobCard position="DEVOPS Engineer at" company="Google"/>
            <JobCard position="Data Analyst at" company="Facebook"/>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
