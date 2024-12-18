import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header />

            <div className='tw-w-full tw-flex tw-gap-6 tw-p-4'>
                <div className='tw-col-span-2 tw-px-2 tw-w-auto'>
                    <Sidebar />
                </div>

                <div className='tw-col-span-10 tw-overflow-hidden xl:tw-w-[84%]'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Main;