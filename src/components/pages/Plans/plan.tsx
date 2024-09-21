import React, { useState } from 'react';
import plansData from '../../../data/PlansList.json'; // assuming the JSON file is named plans.json
import UpArrowIcon from '../../../assets/icons/up-arrow-icon';
import DownArrowIcon from '../../../assets/icons/down-arrow-icon';

const Plans: React.FC = () => {
  const [showAllPlans, setShowAllPlans] = useState(false);

  return (
    <section id="plans" className={`py-20 bg-white `}>
      <div className={`container mx-auto px-6`}>
        <h2 className="text-3xl font-bold text-gray-800 text-center">BSNL Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 relative">
          {plansData.plans.slice(0, showAllPlans ? plansData.plans.length : 6).map((plan, index) => (
            <div
              key={plan.id}
              className={`bg-blue-100 p-6 shadow-lg rounded-lg ${!showAllPlans && index > 2 ? 'blur-sm opacity-50' : ''
                }`}
            >
              <h3 className="text-xl font-semibold">{plan.plan_name}</h3>
              <p className="text-gray-600 mt-2">
                {plan.bandwidth} at ₹{plan.fixed_monthly_charges}/month
              </p>
              <p className="text-gray-600 mt-2">{plan.additional_features}</p>
            </div>
          ))}
          <div className={` ${showAllPlans ? 'bottom-0' : 'absolute top-1/2'} left-0 w-full text-center items-center justify-center`}>
            <button
              className="bg-transparent text-black font-bold py-2 px-4 rounded justify-center items-center"
              onClick={() => setShowAllPlans(!showAllPlans)}
            >
              {/* <img src={showAllPlans ? ArrowUp : ArrowDown} alt="ArrowDown" className="ml-2" /> */}
              {showAllPlans ? <UpArrowIcon className='w-10 h-10 fill-black' /> : <DownArrowIcon className='w-10 h-10 fill-black'/>}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;