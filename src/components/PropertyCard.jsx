/* eslint-disable react/prop-types */
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