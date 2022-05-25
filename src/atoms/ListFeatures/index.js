import React from 'react'
import IcCheck from "../../assets/icons/ic-check.png";
import propTypes  from 'prop-types';


export default function ListFeatures(props) {
  return (
    <div className="mt-[30px] featureWrapper">
      <ul>
        <li className="flex">
          <img
            src={IcCheck}
            alt=""
            width={30}
            height={30}
            className="w-8 h-8 mr-3"
          />
          <span className="mr-1 font-medium text-purple-300">
            {props.title}
          </span>
          <span className="font-medium text-white">{props.title2}</span>
        </li>
      </ul>
    </div>
  );
}

ListFeatures.propTypes = {
    title: propTypes.string.isRequired,
    title2: propTypes.string.isRequired,
}
