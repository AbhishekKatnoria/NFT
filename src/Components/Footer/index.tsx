import { FooterData } from "../../json";

const Footer = () => {
    return (
        <footer className="mt-[180px] w-full bg-backgroundSec">
            {FooterData.length > 0 && <div className="container pt-[50px] pb-[40px]">
                {
                    FooterData?.map((item, i) => (
                        <>
                            <div className="flex justify-between items-center mb-[18px]">
                                {item?.logo && <img src={item?.logo} key={i} />}
                                {item?.icons && <div className="flex justify-center items-center gap-6">
                                    {item?.icons.map((items, index) => (
                                        <img src={items?.img} key={index} className=" py-[15px] px-[14px] bg-white/30 backdrop-blur-[130.47px] rounded-full" />
                                    ))}
                                </div>
                                }
                            </div>
                            <div className="flex justify-between items-center">
                                <span>{item?.copyRight}</span>
                                <span>{item?.policty}</span>
                            </div>
                        </>
                    ))
                }
            </div>}
        </footer>
    )
}

export default Footer;