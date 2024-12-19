const PropertyTipCard = () => {
    const tips = [
        {
            id: 1,
            name: "Easlo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            additionalInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            imgSrc: "https://s3-alpha-sig.figma.com/img/37a6/8822/fbe7eceec076c92488af0c9c01d44d72?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KjiXBzycIiDCQfnXvMGia8R6WcIMtokEJMi5WNgDt3p6slRsBcgL-QCs5KA77fAojazn~DrciYa3WeY9PDnp6xMjmBR-tvoaxcpxApsRj09dRtHpauXg2BjmQjMfYRfzHLODjQVNInmLAKvomefXeKVoFdXgNcKpjWsTaW1ooeAJQrEtGWF-rj8uo1FR3zQyEwfJVoYE-UaR~YSxI4ADIJDChEkgOtgo8BV0lF-W4M6mWiHtwvlV~EukBUZhzzx2wK8O9GqW4neESGy5Ei~ZNaGuNEm91rYUiDi8lCkW7jRqtf-lUumFqQUiqyLPZ~U~aUJWEk~5SwS0vvupKuGSeQ__",
        },
        {
            id: 2,
            name: "Property Insights",
            description: "Discover amazing tips for managing property.",
            additionalInfo: "Stay ahead with our professional guides and insights.",
            imgSrc: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Real Estate Pro",
            description: "Expert tips for property investors.",
            additionalInfo: "Learn the secrets to maximizing your property value.",
            imgSrc: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            name: "Home Guide",
            description: "Step-by-step guide to finding your dream home.",
            additionalInfo: "Our experts share actionable insights for homeowners.",
            imgSrc: "https://via.placeholder.com/150",
        },
    ];

    return (
        <>
            {tips.map((tip) => (
                <div key={tip.id} className=" tw-bg-black/25 tw-rounded-md tw-w-full tw-p-2 tw-my-2">
                    <div className="tw-flex tw-justify-between tw-items-center">
                        <div className="tw-flex tw-flex-row tw-items-center">
                            <img
                                src={tip.imgSrc}
                                alt=""
                                className="tw-size-12 tw-rounded-full tw-object-cover"
                            />
                            <div className="tw-flex tw-flex-col tw-justify-center tw-ml-1">
                                <span className="tw-text-lg tw-text-white tw-font-bold">{tip.name}</span>
                                <span className="tw-text-xs tw-text-gray-400">{tip.description}</span>
                                <span className="tw-text-sm tw-text-gray-400">{tip.additionalInfo}</span>
                            </div>
                        </div>
                        <span className="tw-text-primary/60 tw-font-semibold tw-text-sm tw-cursor-pointer tw-select-none">
                            VIEW YOUTUBE CHANNEL
                        </span>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PropertyTipCard;
