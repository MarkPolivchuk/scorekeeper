import React from "react";
import PropTypes from "prop-types";

const Pin = ({ value }) => (
  <button className="text-blue-dark font-bold hover:bg-blue hover:text-blue-lighter border-blue border-2 rounded-full h-12 w-12 mx-2">
    {value}
  </button>
);

const PinDeck = () => {
  return (
    <div className="absolute pin-r pin-b py-4 px-2 border border-grey-lighter shadow bg-white rounded-full mr-8 mb-8">
      <Pin value={2} />
      <Pin value={3} />
      <Pin value={5} />
      <Pin value={3} />
      <Pin value={2} />
    </div>
  );
};

PinDeck.propTypes = {
  children: PropTypes.node,
  frames: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
};

export default PinDeck;
