
const Card = () => {
    return (
        <div className="tw-flex tw-self-start tw-bg-black tw-p-2 tw-rounded-md tw-items-center tw-w-96">
            <img src="https://s3-alpha-sig.figma.com/img/37a6/8822/fbe7eceec076c92488af0c9c01d44d72?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KjiXBzycIiDCQfnXvMGia8R6WcIMtokEJMi5WNgDt3p6slRsBcgL-QCs5KA77fAojazn~DrciYa3WeY9PDnp6xMjmBR-tvoaxcpxApsRj09dRtHpauXg2BjmQjMfYRfzHLODjQVNInmLAKvomefXeKVoFdXgNcKpjWsTaW1ooeAJQrEtGWF-rj8uo1FR3zQyEwfJVoYE-UaR~YSxI4ADIJDChEkgOtgo8BV0lF-W4M6mWiHtwvlV~EukBUZhzzx2wK8O9GqW4neESGy5Ei~ZNaGuNEm91rYUiDi8lCkW7jRqtf-lUumFqQUiqyLPZ~U~aUJWEk~5SwS0vvupKuGSeQ__" alt="" className="tw-rounded-md tw-size-14 tw-object-cover" />
            <div className="tw-flex tw-flex-col tw-justify-start tw-pl-2 tw-pr-3">
                <div className="tw-flex tw-flex-row tw-text-white tw-items-center tw-gap-2">
                    <span className="tw-text-lg tw-font-semibold">Grout King</span>
                    <div className="tw-flex tw-p-1 tw-items-center tw-justify-center tw-rounded-3xl tw-text-xs tw-font-semibold tw-text-green-500 tw-bg-white tw-self-start">Removel</div>
                </div>
                <span className="tw-text-sm tw-text-gray-400">Grout and Tile Solution</span>
                <div className="tw-flex tw-flex-wrap tw-text-xs tw-text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit assumenda velit expedita ab voluptatibus architecto dolore perspicia
                </div>
            </div>
            <div className="tw-text-sm tw-bg-primary tw-text-white tw-px-4 tw-rounded-md tw-font-semibold tw-text-nowrap">Visit Website</div>
        </div>
    )
}

export default Card