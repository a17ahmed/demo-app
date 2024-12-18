/* eslint-disable react/no-unescaped-entities */
// const Dashboard = () => {
//     return (
//         <div className='tw-w-full tw-border'>
//             Dashboard
//         </div>
//     )
// }

// export default Dashboard




import Notifications from "../components/Notifications";
import PropertyCard from "../components/PropertyCard";
import UpcomingCheck from "../components/UpcomingCheck";
// import UpcomingChecks from "../components/upcomingChecks";


const Dashboard = () => {
  // const properties = [
  //   { checkNo: "219921", address: "1 Sheikh Mohammed bin Rashid Blvd, Dubai", checkType: "Secondary Market", checkDate: "27/06/24" },
  //   { checkNo: "11351", address: "Oasis Tower, Sheikh Zayed Road, Dubai", checkType: "6 Bedroom/Mansion", checkDate: "27/06/24" },
  // ];

  // const upcomingChecks = [
  //   { id: "11248", address: "1005 Senton Tower, Dubai Marina", date: "29/07/24" },
  //   { id: "11264", address: "Villa 12 Street 6 Dubai South", date: "29/07/24" },
  // ];

  // return (
  //   <div className="tw-w-full tw-p-4 tw-bg-gray-800 tw-text-white">
  // {/* Notifications */}
  //     <Notifications />

  //     {/* Property List */}
  //     <h2 className="tw-text-lg tw-font-bold tw-mt-4">Properties</h2>
  //     {properties.map((property) => (
  //       <PropertyCard
  //         key={property.checkNo}
  //         checkNo={property.checkNo}
  //         address={property.address}
  //         checkType={property.checkType}
  //         checkDate={property.checkDate}
  //       />
  //     ))}

  //     {/* Upcoming Checks */}
  //     <UpcomingChecks checks={upcomingChecks} />
  //   </div>
  // );

  const notificationsData = [
    { id: 1, image_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSW0glvlNvjnfE7J-b9U4jfB2ByPSR3pYjgKxJKxONHeGZVaFyc", text: "Download our new app!" },
    { id: 2, image_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSBk-CowQ0eYai-Bz-HFmu6zhq5fnFqO_mb5gjQePEv4t0Ab7JO", text: "Be a man, take the property check survey" },
    { id: 3, image_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQN9thxBmLUrGxIeg6evni8kCSFtNb43BAUc-R7IcrQ0L_qu9el", text: "Tile and Grout Cleaning and Sealing" },
    { id: 4, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VwqkGtetQELNavBSp0C0mm7ueWTyTS9AeWcLjjr8Jx4mNjzf", text: "Tile and Grout Cleaning and Sealing" },
    { id: 5, image_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRe6_85dbd8IpaxTxp89XuS3eiF46TKu6bDI5JibfC_YuHbcDCv", text: "Tile and Grout Cleaning and Sealing" },
    { id: 6, image_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRyT2im0y2Nh1hXyTQrw7u1l26hGEkmmST1w4j401cUOQyuQOmJ", text: "Tile and Grout Cleaning and Sealing" },
  ];

  return (
    <div className="tw-py-4">

      <div className="tw-text-white">
        <h1 className="tw-text-xl tw-font-semibold tw-mb-4">Welcome to your Checkiverse!</h1>
        <p className="tw-mb-4">
          Here you can take a look at your Property Report Cards from completed Checks, see and amend
          upcoming Checks, as well as take a look at the region's best suppliers in our exclusive Check
          Book - look out for exclusive offers from our partners.
        </p>
        <p>
          There's tons of stuff in the Checkiverse from property tips to how to make money referring
          friends - take a look around and enjoy!
        </p>
      </div>
      <Notifications initialNotifications={notificationsData} />

      <div className="tw-grid tw-grid-cols-12 tw-gap-6">

        <div className="tw-col-span-8 tw-mt-4">
          <div className="tw-flex  tw-justify-between tw-items-center">
            <span className=" tw-text-white">PROPERTIES(123)</span>
            <span className="tw-text-green-600 ">VIEW ALL </span>
          </div>
          <PropertyCard/>
        </div>

        <div className="tw-col-span-3 tw-mt-4">
        <div className="tw-flex  tw-justify-between tw-items-center">
            <span className=" tw-text-white">PROPERTIES(123)</span>
            <span className="tw-text-green-600 ">VIEW ALL </span>
        </div>
        <UpcomingCheck/>
        </div>

      </div>


    </div>
  );

};

export default Dashboard;
