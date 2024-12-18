/* eslint-disable react/prop-types */
const UpcomingChecks = ({ checks }) => {
    return (
      <div className="tw-border tw-rounded tw-p-4 tw-bg-black tw-text-white">
        <h3 className="tw-font-bold tw-text-lg tw-mb-4">Upcoming Checks</h3>
        {checks.map((check) => (
          <div key={check.id} className="tw-flex tw-items-center tw-border-b tw-py-2">
            <p className="tw-mr-auto">#{check.id}</p>
            <p className="tw-text-gray-400">{check.address}</p>
            <p className="tw-ml-auto">{check.date}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default UpcomingChecks;
  