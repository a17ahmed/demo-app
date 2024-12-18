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
  
import { FaCheckCircle } from "react-icons/fa";

const PropertyCard = () => {
    return (
        <div className="tw-flex tw-self-start  tw-items-center tw-p-1 tw-border-b tw-border-gray-400">
            <div className="tw-flex tw-justify-center tw-items-center  tw-p-2 tw-border-r tw-border-black tw-text-gray-400">
                #3232332
            </div>
            <div className="tw-flex tw-self-start tw-p-2 tw-items-start">
                <img src="https://s3-alpha-sig.figma.com/img/37a6/8822/fbe7eceec076c92488af0c9c01d44d72?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KjiXBzycIiDCQfnXvMGia8R6WcIMtokEJMi5WNgDt3p6slRsBcgL-QCs5KA77fAojazn~DrciYa3WeY9PDnp6xMjmBR-tvoaxcpxApsRj09dRtHpauXg2BjmQjMfYRfzHLODjQVNInmLAKvomefXeKVoFdXgNcKpjWsTaW1ooeAJQrEtGWF-rj8uo1FR3zQyEwfJVoYE-UaR~YSxI4ADIJDChEkgOtgo8BV0lF-W4M6mWiHtwvlV~EukBUZhzzx2wK8O9GqW4neESGy5Ei~ZNaGuNEm91rYUiDi8lCkW7jRqtf-lUumFqQUiqyLPZ~U~aUJWEk~5SwS0vvupKuGSeQ__" alt="img" className="tw-size-14" />
                <div className="tw-flex tw-flex-col tw-text-gray-400 tw-justify-start tw-pl-2">
                    <div className="tw-text-sm tw-w-96 tw-flex tw-flex-wrap tw-pb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, facere? </div>
                    <div className="tw-text-xs tw-w-96 tw-flex tw-flex-wrap">sit amet consectetur adipisicing elit. Cupiditate</div>
                </div>
            </div>
            <div className="tw-flex tw-flex-row tw-justify-center tw-items-center tw-gap-6 tw-text-gray-400">
                <span className="tw-text-sm">27/09/24</span>
                <FaCheckCircle />
            </div>
        </div>
    )
}

export default PropertyCard