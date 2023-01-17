import React from "react";
import JobCard from "./JobCard/JobCard";
import L1 from '../../assets/crypto_currency_icons_1.png'
import L2 from '../../assets/crypto_currency_icons_2.png'
import L3 from '../../assets/crypto_currency_icons_3.png'
import L4 from '../../assets/crypto_currency_icons_4.png'
import L5 from '../../assets/crypto_currency_icons_5.png'
import L6 from '../../assets/crypto_currency_icons_6.png'

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
            <JobCard position="Senior UX Designer at" company="Safaricon" logo={L1}/>
            <JobCard position="Junior Call Support Assistan at" company="Airtel" logo={L2}/>
            <JobCard position="Marketing Manager at" company="Twiga LTD" logo={L3}/>
            <JobCard position="Product Manager at" company="Dairy" logo={L4}/>
            <JobCard position="DEVOPS Engineer at" company="Google" logo={L5}/>
            <JobCard position="Data Analyst at" company="Facebook" logo={L6}/>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
