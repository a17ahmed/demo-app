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
        { icon: FaInfoCircle, title: 'Property Tips' },
        { icon: FaDollarSign, title: 'Make Money' },
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

    return (
        <div
            className={`tw-flex tw-flex-col tw-justify-between tw-shadow-md tw-bg-[var(--fourth-color)] tw-rounded-xl tw-text-[var(--second-color)] tw-h-[84vh] tw-px-4 tw-py-4`}
        >
            <div>
                <div className='tw-bg-primary tw-text-center tw-rounded-md tw-py-1 tw-px-5 tw-mb-2 tw-text-lg tw-font-bold tw-text-nowrap'>
                    Book a Check
                </div>
                {navData.map((item, idx) => (
                    <div
                        key={idx}
                        className={`tw-flex tw-flex-row tw-select-none tw-justify-start tw-items-center tw-py-3 tw-cursor-pointer tw-rounded-[8px] tw-gap-2
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
                <li className="tw-cursor-pointer tw-flex tw-items-center">
                    <FaQuestionCircle className="tw-size-4 tw-mr-2" />
                    FAQs
                </li>
                <li className="tw-cursor-pointer tw-flex tw-items-center">
                    <FaMusic className="tw-size-4 tw-mr-2" />
                    Music
                </li>
                <li className="tw-cursor-pointer tw-flex tw-items-center">
                    <FaHandsHelping className="tw-size-4 tw-mr-2" />
                    Thank You
                </li>
                <li className="tw-cursor-pointer tw-flex tw-items-center">
                    <FaCog className="tw-size-4 tw-mr-2" />
                    Settings
                </li>
                <li className="tw-cursor-pointer tw-flex tw-items-center">
                    <FaSignOutAlt className="tw-size-4 tw-mr-2" />
                    Logout
                </li>
            </ul>
        </div>
    );
};

export default SideBar;






// {navData.map((item, idx) => (
//     <div
//         key={idx}
//         className={`
//             tw-flex tw-flex-col lg:tw-flex-row tw-select-none
//             ${isHovered ? 'tw-justify-start' : 'tw-justify-center'}
//             tw-items-center md:tw-gap-2 tw-py-2 lg:tw-py-3 tw-px-2 lg:tw-px-4 tw-cursor-pointer tw-rounded-[8px]
//             ${activeIcon === item.page ? 'tw-text-[var(--primary-color)] lg:tw-bg-[var(--primary-color-shade2)]' : 'tw-text-[var(--third-color)] lg:hover:tw-bg-gray-200'}`}
//         onClick={() => goToPage(item.page)}
//         // Apply hover logic for smaller screens and preserve lg hover for larger screens
//         onMouseEnter={() => {
//             setIsMobileHovered(idx);
//         }
//         }
//         onMouseLeave={() => {
//             setIsMobileHovered(false);
//         }
//         }
//     >
//         {/* Hover background change only for the hovered icon on smaller screens */}
//         <div className={`tw-w-[40px] tw-h-[40px] tw-flex tw-justify-center tw-rounded-md tw-items-center lg:tw-w-[22px] lg:tw-h-[22px] ${isMobileHovered === idx && window.innerWidth < 1024 ? 'tw-bg-gray-300 ' : ''} ${activeIcon === item.page && window.innerWidth < 1024 ? 'tw-text-[var(--primary-color)] tw-bg-[var(--primary-color-shade2)]' : 'tw-text-[var(--third-color)]'}`}>
//             <item.icon className={`tw-w-[22px] tw-h-[22px] ${activeIcon === item.page ? 'tw-text-[var(--primary-color)]' : 'tw-text-[var(--third-color)]'}`} />
//         </div>

//         {/* Title hover logic only for smaller screens */}
//         <span className={`md:tw-block lg:${isHovered ? 'tw-block' : 'tw-hidden'} tw-text-xs lg:tw-text-md tw-whitespace-nowrap`}>
//             {item.title}
//         </span>
//     </div>
// ))}
