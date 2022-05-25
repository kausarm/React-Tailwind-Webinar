import ListFeatures from 'atoms/ListFeatures';
import Button from 'components/Button';
import React from 'react'
import ImCard from '../../assets/images/icon1.png'

export default function Card() {
  return (
    <div className="cardWrapper bg-purpleCostume w-[350px] h-[430px] p-7 rounded-[30px] ">
      <div className="flex cardHeader">
        <div className="mr-4 imgWrapper">
          <img src={ImCard} alt="" width={80} height={80} />
        </div>
        <div className="titleWrapper">
          <h1 className="mb-3 font-medium text-white">Enterprise</h1>
          <span className="font-medium text-orange-200">$22 / user</span>
        </div>
      </div>
      <div className="line bg-white h-[1px] rounded-full mt-4" />
      <ListFeatures title="All features in" title2="Starter" />
      <ListFeatures title="Report" title2="Unlimited" />
      <ListFeatures title="cloud storage" title2="280 TB" />
      <div className="text-center button-wrapper mt-9">
        <Button label="Choose Plan" />
      </div>
    </div>
  );
}
