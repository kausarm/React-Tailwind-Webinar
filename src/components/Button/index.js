import React from 'react'
import PropTypes  from 'prop-types';

export default function Button(props) {
  return (
    <button type="button" className="bg-orange-200 px-[88px] py-4 text-black font-semibold rounded-full">
      {props.label}
    </button>
  );
}


Button.propTypes = {
    label: PropTypes.string.isRequired,
}
