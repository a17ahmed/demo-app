const UpcomingCheck = () => {
    const upcomingChecksData = [
        {
            id: "#323332",
            status: "Pending",
            statusIcon: "⚪",
            date: "29/09/24",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            checkType: "SECONDARY MARKET",
        },
        {
            id: "#454545",
            status: "In Progress",
            statusIcon: "🟡",
            date: "01/10/24",
            description: "This check is currently being processed.",
            checkType: "PRIMARY MARKET",
        },
        {
            id: "#676767",
            status: "Completed",
            statusIcon: "🟢",
            date: "28/09/24",
            description: "This check has been successfully completed.",
            checkType: "SECONDARY MARKET",
        },
        {
            id: "#323332",
            status: "Pending",
            statusIcon: "⚪",
            date: "29/09/24",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            checkType: "SECONDARY MARKET",
        },
        {
            id: "#454545",
            status: "In Progress",
            statusIcon: "🟡",
            date: "01/10/24",
            description: "This check is currently being processed.",
            checkType: "PRIMARY MARKET",
        },
        {
            id: "#676767",
            status: "Completed",
            statusIcon: "🟢",
            date: "28/09/24",
            description: "This check has been successfully completed.",
            checkType: "SECONDARY MARKET",
        }
    ];

    return (
        <div
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="tw-space-y-4 tw-overflow-auto tw-h-[26vh]"
        >
            {upcomingChecksData.map((check) => (
                <div
                    key={check.id}
                    className="tw-flex tw-flex-col tw-border tw-border-primary/30 tw-py-2 tw-px-1.5 tw-shadow tw-rounded-md"
                >
                    <div className="tw-flex tw-self-start tw-justify-center tw-items-center tw-text-[0.5rem] tw-px-2 tw-text-gray-400 tw-rounded-2xl tw-p-1 tw-bg-black/25">
                        {check.statusIcon} {check.status}
                    </div>
                    <div className="tw-flex tw-justify-between tw-text-gray-400 tw-text-sm">
                        <span>{check.id}</span>
                        <span>{check.date}</span>
                    </div>
                    <div className="tw-w-80 tw-text-gray-400 tw-text-sm">
                        {check.description}
                    </div>
                    <div className="tw-text-sm tw-text-gray-400 tw-pt-0.5">
                        CHECK TYPE : {check.checkType}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UpcomingCheck;
