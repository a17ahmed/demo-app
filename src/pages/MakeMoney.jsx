import { MdSlowMotionVideo } from "react-icons/md";

const MakeMoney = () => {
    return (
        <>
            <div className="tw-flex tw-justify-between tw-items-center">
                <div className="tw-flex tw-flex-col">
                    <div className="tw-flex tw-flex-col">
                        <span className="tw-text-lg tw-font-bold tw-text-white">
                            REFERRAL-EVERYONE WINS!
                        </span>
                        <span className="tw-text-sm tw-text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eligendi ratione culpa
                        </span>
                    </div>
                    <span className="tw-text-sm tw-text-gray-400 tw-py-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eligendi
                    </span>
                    <span className="tw-text-sm tw-text-gray-400 tw-py-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                </div>
                <div className="tw-flex tw-justify-center tw-items-center tw-text-white tw-bg-primary tw-font-bold tw-rounded-md tw-p-2 tw-select-none tw-cursor-pointer active:tw-scale-95">New Referral</div>
            </div>
            <div className="tw-flex tw-flex-row tw-w-full tw-gap-2">
                <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-black/25 tw-rounded-md tw-w-full tw-p-9">
                    <span className="tw-text-6xl tw-font-extrabold tw-text-white tw-mb-1">34</span>
                    <span className="tw-text-gray-400 ">People Referred</span>
                </div>
                <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-black/25 tw-rounded-md tw-w-full tw-p-9">
                    <span className="tw-text-6xl tw-font-extrabold tw-text-white tw-mb-1">17,000 AED</span>
                    <span className="tw-text-gray-400 ">Potential Amount Earned</span>
                </div>
            </div>
            <div className="tw-text-sm tw-text-white tw-font-semibold tw-my-2 ">WHAT IS A PROPERTY CHECK REFERRAL</div>

            <div className="tw-p-5 tw-bg-black tw-rounded-lg tw-relative">
                <img src="https://images.pexels.com/photos/29837542/pexels-photo-29837542/free-photo-of-charming-row-houses-in-san-francisco-suburbs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="tw-h-96 tw-w-full tw-object-cover tw-rounded-lg tw-select-none" />
                <div className="tw-absolute tw-top-0 tw-inset-1/2 tw-translate-y-48">
                    <MdSlowMotionVideo className="tw-text-white tw-size-12 tw-cursor-pointer" />
                </div>
            </div>

        </>

    )
}

export default MakeMoney