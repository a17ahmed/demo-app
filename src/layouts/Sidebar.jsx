import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import { FaBook, FaInfoCircle, FaDollarSign, FaQuestionCircle, FaMusic, FaHandsHelping, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Example imports

const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [activeIcon, setActiveIcon] = useState('');

    const navData = [
        { icon: MdSpaceDashboard, title: 'Dashboard', page: 'dashboard' },
        { icon: FaBook, title: 'Black Book', page: 'black_book' },
        { icon: FaInfoCircle, title: 'Property Tips', page: 'property_tip' },
        { icon: FaDollarSign, title: 'Make Money', page: 'make_money' },
    ];

    // Update active icon based on the path
    useEffect(() => {
        const currentPath = location.pathname.split("/")[2];
        setActiveIcon(currentPath || 'dashboard');
    }, [location]);

    const goToPage = (page) => {
        if (page) {
            return navigate(`/checkverse/${page}`);
        } else {
            alert("Clicked")
        }
    };

    const iconClass = "tw-size-4 tw-mr-2";
    const liClass = "tw-cursor-pointer tw-flex tw-items-center active:tw-scale-95 tw-select-none";

    return (
        <div
            className={`tw-flex tw-flex-col tw-justify-between tw-shadow-md tw-bg-[var(--fourth-color)] tw-rounded-xl tw-text-[var(--second-color)] tw-h-[84vh] tw-px-4 tw-py-4 tw-sticky tw-top-20`}
        >
            <div>
                <div className='tw-bg-primary tw-text-center tw-rounded-md tw-py-1 tw-px-5 tw-mb-2 tw-text-lg tw-font-bold tw-text-nowrap'>
                    Book a Check
                </div>
                {navData.map((item, idx) => (
                    <div
                        key={idx}
                        className={`tw-flex tw-flex-row tw-select-none tw-justify-start tw-items-center tw-py-3 tw-cursor-pointer tw-rounded-[8px] tw-gap-2 active:tw-scale-95
            ${activeIcon === item.page ? 'tw-text-white' : 'hover:tw-bg-gray-200 hover:tw-text-primary hover:tw-pl-2'}`}
                        onClick={() => goToPage(item.page)}
                    >
                        {/* Hover background change only for the hovered icon on smaller screens */}
                        <div className={`tw-flex tw-justify-center tw-rounded-md tw-items-center tw-w-[22px] tw-h-[22px] tw-text-[var(--third-color)]`}>
                            <item.icon className={`tw-w-[22px] tw-h-[22px] ${activeIcon === item.page ? 'tw-text-white' : 'tw-text-[var(--third-color)]'}`} />
                        </div>

                        {/* Title hover logic only for smaller screens */}
                        <span className={`${activeIcon === item.page ? 'tw-font-bold' : null} tw-text-nowrap`}>
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>

            <ul className="tw-text-[var(--second-color)] tw-space-y-4">
                <li className={liClass} onClick={() => alert("Clicked")}>
                    <FaQuestionCircle className={iconClass} />
                    FAQs
                </li>
                <li className={liClass} onClick={() => alert("Clicked")}>
                    <FaMusic className={iconClass} />
                    Music
                </li>
                <li className={liClass} onClick={() => alert("Clicked")}>
                    <FaHandsHelping className={iconClass} />
                    Thank You
                </li>
                <li className={liClass} onClick={() => alert("Clicked")}>
                    <FaCog className={iconClass} />
                    Settings
                </li>
                <li className={liClass} onClick={() => alert("Clicked")}>
                    <FaSignOutAlt className={iconClass} />
                    Logout
                </li>
            </ul>
        </div>
    );
};

export default SideBar;