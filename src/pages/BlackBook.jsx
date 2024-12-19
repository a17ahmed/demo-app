import { useState } from "react";
import Card from "../components/Card"
import { FaStar } from "react-icons/fa6";

const BlackBook = () => {

    const demoData = [
        {
            name: "SwiftShift Movers",
            slogan: "Moving Made Easy",
            category: "Furniture Removals",
        },
        {
            name: "DreamNest Interiors",
            slogan: "Your Space, Our Design",
            category: "Interior Design",
        },
        {
            name: "BrewHeaven Coffee Co.",
            slogan: "A Cup of Happiness",
            category: "Coffee",
        },
        {
            name: "UrbanStyle Furnishings",
            slogan: "Modern Furniture for Modern Living",
            category: "Furniture",
        },
        {
            name: "GreenThumb Landscapes",
            slogan: "Designing Nature's Beauty",
            category: "Landscaping",
        },
        {
            name: "AutoCare Mechanics",
            slogan: "Where Your Car Gets Care",
            category: "Auto Repair",
        },
        {
            name: "PixelPerfect Designs",
            slogan: "Designs That Speak",
            category: "Graphic Design",
        },
        {
            name: "CleanSweep Services",
            slogan: "Making Clean Happen",
            category: "Cleaning Services",
        },
        {
            name: "TasteBuds Catering",
            slogan: "Taste That Lingers",
            category: "Catering",
        },
        {
            name: "CodeCraft Solutions",
            slogan: "Crafting Your Digital Future",
            category: "Software Development",
        },
        {
            name: "RideOn Rentals",
            slogan: "Your Adventure, Our Ride",
            category: "Car Rentals",
        },
        {
            name: "ZenSpa Wellness",
            slogan: "Relax, Rejuvenate, Repeat",
            category: "Spa & Wellness",
        },
        {
            name: "FrameIt Photography",
            slogan: "Capturing Life’s Best Moments",
            category: "Photography",
        },
        {
            name: "Bloom & Co.",
            slogan: "Fresh Flowers, Fresh Smiles",
            category: "Floristry",
        },
        {
            name: "FixIt Handyman",
            slogan: "Solutions to Everyday Problems",
            category: "Home Repairs",
        },
        {
            name: "QuickPrint Studio",
            slogan: "Prints on Demand",
            category: "Printing Services",
        },
        {
            name: "Crafty Corner",
            slogan: "Handmade With Love",
            category: "Art & Craft",
        },
        {
            name: "StyleStitch Tailors",
            slogan: "Fashion, Fit, Finish",
            category: "Tailoring",
        },
        {
            name: "PureDrop Water",
            slogan: "Refreshing Every Drop",
            category: "Bottled Water",
        },
        {
            name: "AdventureNow Tours",
            slogan: "Where Journeys Begin",
            category: "Travel & Tourism",
        },
    ];

    const [selectCat, setSelectCat] = useState("All");
    const [searchText, setSearchText] = useState("");

    const renderCat = () => {
        return (
            <>
                {/* 'All' Option */}
                <span
                    className={`tw-inline-block tw-text-[var(--second-color)] tw-text-nowrap tw-cursor-pointer 
                        ${selectCat === "All" ? "tw-font-bold tw-text-white tw-border-b-2 tw-border-primary" : ""}`}
                    onClick={() => setSelectCat("All")} // Reset filter
                >
                    All
                </span>

                {/* Category Options */}
                {demoData.map((cat, idx) => (
                    <span
                        key={idx}
                        className={`tw-inline-block tw-text-[var(--second-color)] tw-text-nowrap tw-cursor-pointer 
                            ${selectCat === cat.category ? "tw-font-bold tw-text-white tw-border-b-2 tw-border-primary" : ""}`}
                        onClick={() => setSelectCat(selectCat === cat.category ? "All" : cat.category)} // Toggle logic
                    >
                        {cat.category}
                    </span>
                ))}
            </>
        );
    };



    // Filter The Result
    const filteredServiceData = demoData
        .filter((data) => {
            // Perform case-insensitive search on desired fields
            const searchLower = searchText.toLowerCase();
            return (
                data.name?.toLowerCase().includes(searchLower) ||
                data.category?.toLowerCase().includes(searchLower)
            );
        })
        .filter((data) => {
            // Filter services by the selected worker
            if (selectCat === "All") return true; // Show all services if no worker is selected
            return data.category?.includes(selectCat);
        })

    return (
        <div className="tw-w-full tw-flex tw-flex-col tw-self-start tw-justify-center tw-bg-secondary">

            <div className="tw-text-white">
                <p className="tw-font-bold">
                    OUR BEST IN CLASS PARTNERS
                </p>

                <p className="tw-text-justify tw-text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odit explicabo ea unde expedita dolores maxime. Animi voluptatum reiciendis perspiciatis nobis consequatur et, rem praesentium. Saepe eveniet vel quis minima sint ea quo quia ut similique, amet enim facilis ratione
                </p>

                <p className="tw-mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, impedit optio quibusdam provident temporibus eius itaque molestias magni doloremque at.
                </p>
            </div>

            <div
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                className="tw-w-full tw-overflow-auto tw-flex tw-gap-4 tw-scrollbar-none tw-mt-4 tw-select-none"
            >
                {renderCat()}
            </div>

            <div className="tw-w-full tw-flex tw-justify-between tw-mt-4">
                <span className="tw-text-white">
                    {selectCat ? selectCat : "All"}
                </span>

                <div className=' tw-relative'>
                    <div className='tw-absolute tw-left-3 tw-top-2'>
                        <FaStar color="#fff" />
                    </div>
                    <input
                        type="search"
                        placeholder='Search for services'
                        className='tw-w-full tw-py-1 tw-p-2 tw-pl-9 tw-text-white tw-bg-[var(--third-color)] tw-border tw-border-gray-300 tw-rounded-full tw-shadow-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-gray-300'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            </div>

            <div
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                className="tw-grid tw-grid-cols-2 tw-gap-4 tw-fixed tw-overflow-y-auto tw-mt-4 tw-bottom-10 tw-top-72 tw-mr-8"
            >
                {filteredServiceData.map((itm, idx) => <Card key={idx} companyName={itm.name} cat={itm.category} />)}
            </div>

        </div>
    )
}

export default BlackBook;