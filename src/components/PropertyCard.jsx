/* eslint-disable react/prop-types */
const PropertyCard = ({ checkNo, address, checkType, checkDate }) => {
    return (
      <div className="tw-flex tw-items-start tw-border tw-rounded tw-p-4 tw-bg-black tw-text-white tw-mb-2">
        {/* Image Placeholder */}
        <div className="tw-mr-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Property"
            className="tw-h-16 tw-w-24 tw-rounded"
          />
        </div>
  
        {/* Property Details */}
        <div>
          <p className="tw-font-bold">#{checkNo}</p>
          <p className="tw-text-xs">{address}</p>
          <p className="tw-text-xs tw-text-gray-400">CHECK TYPE: {checkType}</p>
        </div>
  
        <div className="tw-ml-auto tw-text-sm tw-text-gray-300">{checkDate}</div>
      </div>
    );
  };
  
  export default PropertyCard;
  