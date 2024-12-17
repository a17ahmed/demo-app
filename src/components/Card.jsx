
const Card = ({ imgSrc, title, subtitle, description, buttonText }) => {
    return (
        <div className="tw-flex tw-self-start tw-bg-black tw-p-2 tw-rounded-md tw-items-center">
            <img
                src={imgSrc}
                alt=""
                className="tw-rounded-md tw-w-14 tw-h-14"
            />
            <div className="tw-flex tw-flex-col tw-justify-start tw-pl-2 tw-pr-3">
                <div className="tw-flex tw-flex-row tw-text-white tw-items-center tw-gap-2">
                    <span className="tw-text-lg tw-font-semibold">{title}</span>
                    <div className="tw-flex tw-p-1 tw-px-2 tw-items-center tw-justify-center tw-rounded-3xl tw-text-xs tw-font-semibold tw-text-green-500 tw-bg-white tw-self-start">Removel</div>
                </div>
                <span className="tw-text-sm tw-text-gray-400">{subtitle}</span>
                <div className="tw-w-56 tw-flex tw-flex-wrap tw-text-[0.6rem] tw-text-white">
                    {description}
                </div>
            </div>
            <div className="tw-text-sm tw-bg-primary tw-text-white tw-px-4 tw-rounded-md tw-font-semibold tw-text-nowrap">{buttonText}</div>
        </div>
    )
}

export default Card;
