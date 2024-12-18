/* eslint-disable react/prop-types */

const Card = ({ companyName = "Company Name", cat = "Category", slogon = "Slogon" }) => {

    const btnStyle = "tw-w-full tw-text-sm tw-bg-primary tw-text-white tw-h-6 tw-px-4 tw-rounded tw-font-semibold tw-text-nowrap active:tw-scale-95 hover:tw-bg-white hover:tw-text-primary"

    return (
        <div className="tw-flex tw-bg-black tw-p-4 tw-rounded-xl tw-items-center tw-h-[150px]">

            <img src="https://s3-alpha-sig.figma.com/img/37a6/8822/fbe7eceec076c92488af0c9c01d44d72?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KjiXBzycIiDCQfnXvMGia8R6WcIMtokEJMi5WNgDt3p6slRsBcgL-QCs5KA77fAojazn~DrciYa3WeY9PDnp6xMjmBR-tvoaxcpxApsRj09dRtHpauXg2BjmQjMfYRfzHLODjQVNInmLAKvomefXeKVoFdXgNcKpjWsTaW1ooeAJQrEtGWF-rj8uo1FR3zQyEwfJVoYE-UaR~YSxI4ADIJDChEkgOtgo8BV0lF-W4M6mWiHtwvlV~EukBUZhzzx2wK8O9GqW4neESGy5Ei~ZNaGuNEm91rYUiDi8lCkW7jRqtf-lUumFqQUiqyLPZ~U~aUJWEk~5SwS0vvupKuGSeQ__" alt="" className="tw-rounded-md tw-size-14 tw-object-cover" />
            
            <div className="tw-flex tw-flex-col tw-justify-start tw-pl-2 tw-pr-3">
                <div className="tw-flex tw-flex-row tw-text-white tw-items-center tw-gap-2">
                    <span className="tw-text-lg tw-font-semibold">{companyName}</span>
                    <div className="tw-flex tw-py-1 tw-px-2 tw-items-center tw-justify-center tw-rounded-3xl tw-text-xs tw-font-semibold tw-text-primary tw-bg-white tw-self-start">{cat}</div>
                </div>

                <span className="tw-text-sm tw-text-gray-400">{slogon}</span>

                <div className="tw-flex tw-flex-wrap tw-text-xs tw-text-white">
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, vero distinctio velit praesentium quisquam repellendus doloribus excepturi necessitatibus amet quam voluptates nostrum voluptatum perferendis eius laudantium architecto sint, doloremque
                </div>
            </div>

            <div className="tw-space-y-2">
                <button className={btnStyle}>Visit Website</button>
                <button className={btnStyle}>Call</button>
                <button className={btnStyle}>Book a Check</button>
            </div>
        </div>
    )
}

export default Card;