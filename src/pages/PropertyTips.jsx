import PropertyTipCard from "../components/PropertyTipCard"
import Notifications from "../components/Notifications";

const PropertyTips = () => {

    const propertyNotificationsData = [
        { id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim, consequatur " },
        { id: 2, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim, consequatur " },
        { id: 3, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim, consequatur " },
        { id: 4, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim, consequatur " },
        { id: 5, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim, consequatur " },
        { id: 6, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim, consequatur " },
    ];

    return (
        <>

            <div className="tw-flex tw-flex-row tw-justify-between tw-items-center">
                <div className="tw-flex tw-flex-col">
                    <span className="tw-font-bold tw-text-white">PROPERTY TIPS</span>
                    <span className="tw-text-sm tw-text-gray-400"> elit. Expedita neque voluptatum libero! Quidem culpa hic vero quod? Non ab quam autem nobis, consequuntur quo vitae maxime veritatis, excepturi mollitia unde.</span>
                </div>
                <div className="tw-flex tw-justify-center tw-items-center tw-font-semibold tw-cursor-pointer tw-select-none active:tw-scale-95 tw-text-primary tw-border tw-border-primary tw-rounded-md tw-px-3 tw-py-1 tw-text-nowrap">
                    Visit our Blog
                </div>
            </div>
            <div>
                <Notifications propertyNotificationsData={propertyNotificationsData} isOpen="propertyTip" />
            </div>
            <div className="tw-font-bold tw-text-white tw-mt-3 tw-text-sm">
                SOME HELPFUL RESOURECES
            </div>
            <PropertyTipCard />
        </>

    )
}

export default PropertyTips