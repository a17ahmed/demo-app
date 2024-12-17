import { SiLinkedin } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { IoNotifications } from "react-icons/io5";

const Header = () => {
    return (
        <div className="tw-flex  tw-bg-[var(--first-color)] tw-justify-between tw-items-center tw-p-2 tw-px-4">
            <div className="tw-flex tw-flex-col tw-justify-start">
                <div className="tw-flex tw-self-start tw-gap-1 tw-select-none">
                    <div className="tw-bg-primary tw-font-bold tw-text-white tw-px-2">PROPERTY</div>
                    <div className="tw-flex tw-justify-center tw-items-center tw-bg-primary tw-px-1 ">
                        <TiTick className="tw-text-white tw-size-5" />
                    </div>
                </div>
                <span className="tw-text-lg tw-font-semibold tw-text-white tw-line-through tw-decoration-2">
                    CHECK
                </span>
            </div>
            <div className="tw-flex tw-items-center tw-text-[0.9rem] tw-text-gray-400">
                <span > We`re always just a Whatsapp away </span>
                <div className="tw-flex tw-items-center tw-px-1 tw-gap-1 tw-flex-row tw-text-primary">
                    <TbBrandWhatsappFilled className="tw-text-white" /> <span className="tw-font-semibold">800 CHECK ME</span>
                </div>
                <span className="tw-text-gray-400 tw-px-2">|</span>
                <span>Follow us</span>
                <div className="tw-flex tw-flex-row tw-items-center tw-gap-2 tw-pl-2">
                    <ImFacebook2 />
                    <PiInstagramLogoFill className="tw-size-5" />
                    <SiLinkedin />
                </div>
            </div>
            <div className="tw-flex tw-items-center tw-flex-row tw-gap-5">
                <IoNotifications className="tw-size-5 tw-text-white" />
                <div className="tw-flex tw-flex-row tw-items-center tw-gap-3 tw-rounded-md tw-border tw-border-white tw-self-start tw-px-2 tw-py-1">
                    <img src="https://s3-alpha-sig.figma.com/img/37a6/8822/fbe7eceec076c92488af0c9c01d44d72?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KjiXBzycIiDCQfnXvMGia8R6WcIMtokEJMi5WNgDt3p6slRsBcgL-QCs5KA77fAojazn~DrciYa3WeY9PDnp6xMjmBR-tvoaxcpxApsRj09dRtHpauXg2BjmQjMfYRfzHLODjQVNInmLAKvomefXeKVoFdXgNcKpjWsTaW1ooeAJQrEtGWF-rj8uo1FR3zQyEwfJVoYE-UaR~YSxI4ADIJDChEkgOtgo8BV0lF-W4M6mWiHtwvlV~EukBUZhzzx2wK8O9GqW4neESGy5Ei~ZNaGuNEm91rYUiDi8lCkW7jRqtf-lUumFqQUiqyLPZ~U~aUJWEk~5SwS0vvupKuGSeQ__" alt="" className="tw-rounded-full tw-size-9 tw-object-cover" />
                    <div className="tw-flex tw-flex-col tw-text-xs tw-text-white">
                        <span>
                            LIAM KETLY
                        </span>
                        <span>
                            KAIMLETLY@GMAIL.COM
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;