/* eslint-disable react/prop-types */
import { FaCheckCircle } from "react-icons/fa";

const PropertyCard = () => {
    const propertyData = [
        {
            id: "#3232332",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, facere?",
            details: "sit amet consectetur adipisicing elit. Cupiditate",
            date: "27/09/24",
        },
        {
            id: "#4545454",
            description: "Another sample description for a property listing.",
            details: "Some additional details about this property.",
            date: "15/10/24",
        },
        {
            id: "#6767676",
            description: "Yet another description of a property listing.",
            details: "More details about the property go here.",
            date: "01/11/24",
        },
        {
            id: "#3232332",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, facere?",
            details: "sit amet consectetur adipisicing elit. Cupiditate",
            date: "27/09/24",
        },
        {
            id: "#4545454",
            description: "Another sample description for a property listing.",
            details: "Some additional details about this property.",
            date: "15/10/24",
        },
        {
            id: "#6767676",
            description: "Yet another description of a property listing.",
            details: "More details about the property go here.",
            date: "01/11/24",
        },
    ];

    return (
        <div
            className="tw-mt-4 tw-overflow-auto"
        >
            <div className="tw-grid tw-grid-cols-12 tw-bg-[var(--third-color)] tw-text-white">
                <div className="tw-col-span-2 tw-pl-2 tw-border-r">Check</div>
                <div className="tw-col-span-8 tw-flex tw-justify-center">Address</div>
                <div className="tw-col-span-2 tw-flex tw-justify-start tw-border-l tw-pl-2">Check Date</div>
            </div>

            {propertyData.map((property) => (
                <div key={property.id} className="tw-grid tw-grid-cols-12 tw-p-1 tw-border-b tw-border-gray-400 tw-bg-black/40 tw-items-center">
                    <div className="tw-col-span-2 tw-p-2 tw-border-r tw-border-black tw-text-gray-400">
                        {property.id}
                    </div>

                    <div className="tw-col-span-8 tw-p-2 tw-flex">
                        <img
                            src={"https://s3-alpha-sig.figma.com/img/37a6/8822/fbe7eceec076c92488af0c9c01d44d72?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KjiXBzycIiDCQfnXvMGia8R6WcIMtokEJMi5WNgDt3p6slRsBcgL-QCs5KA77fAojazn~DrciYa3WeY9PDnp6xMjmBR-tvoaxcpxApsRj09dRtHpauXg2BjmQjMfYRfzHLODjQVNInmLAKvomefXeKVoFdXgNcKpjWsTaW1ooeAJQrEtGWF-rj8uo1FR3zQyEwfJVoYE-UaR~YSxI4ADIJDChEkgOtgo8BV0lF-W4M6mWiHtwvlV~EukBUZhzzx2wK8O9GqW4neESGy5Ei~ZNaGuNEm91rYUiDi8lCkW7jRqtf-lUumFqQUiqyLPZ~U~aUJWEk~5SwS0vvupKuGSeQ__"}
                            alt="Property"
                            className="tw-w-14 tw-h-14 tw-object-cover"
                        />

                        <div className="tw-flex tw-flex-col tw-text-gray-400 tw-justify-start tw-pl-2">
                            <div className="tw-text-sm tw-flex tw-flex-wrap tw-pb-1">{property.description}</div>
                            <div className="tw-text-xs tw-w-96 tw-flex tw-flex-wrap">{property.details}</div>
                        </div>
                    </div>

                    <div className="tw-col-span-1 tw-text-gray-400 tw-flex tw-pl-2">
                        {property.date}
                    </div>
                    <div className="tw-col-span-1 tw-flex tw-justify-center tw-pl-4">
                        <FaCheckCircle color="#fff" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PropertyCard;