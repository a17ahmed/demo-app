
const UpcomingCheck = () => {
    return (
        <div className="tw-flex tw-flex-col tw-border tw-border-primary/30 tw-py-2 tw-px-1.5 tw-shadow tw-rounded-md">
            <div className="tw-flex tw-self-start tw-justify-center tw-items-center tw-text-[0.5rem] tw-px-2 tw-text-gray-400 tw-rounded-2xl tw-p-1 tw-bg-black/25">
                ⚪ Pending
            </div>
            <div className="tw-flex tw-justify-between tw-text-gray-400 tw-text-sm">
                <span>#323332</span>
                <span>29/09/24</span>
            </div>
            <div className="tw-w-80 tw-text-gray-400 tw-text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </div>
            <div className="tw-text-sm tw-text-gray-400 tw-pt-0.5">
                CHECK TYPE : SECONDARY MARKET
            </div>
        </div>
    )
}

export default UpcomingCheck