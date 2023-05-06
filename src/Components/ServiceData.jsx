import { FaCode } from "react-icons/fa";
import { BiBarChartAlt, BiSearchAlt, BiCalendar } from "react-icons/bi";
import { MdSettings, MdDesignServices } from "react-icons/md";

const ServiceData = [
    {
        icon : <FaCode />,
        title: "Web Development",
        description: "From custom website design and development to website revamps and updates, we can help you create a professional, functional, and visually appealing online presence."
    },
    {
        icon : <BiBarChartAlt />,
        title: "Ecommerce Development",
        description: "Need to sell your products or services online? We can help you set up a professional ecommerce platform and get your store up and running in no time."
    },
    {
        icon : <MdDesignServices />,
        title: "Web Design",
        description: "Want to create your static website? we can develop all types of static, landing page, business websites, etc."
    },
    {
        icon :<MdSettings/>,
        title: "Custom Solutions",
        description: "Have a specific need or challenge? We can develop custom solutions to meet your unique requirements, whether it's a web application, an integration with a third-party service, or something else."
    },
    {
        icon : <BiSearchAlt/>,
        title: "SEO",
        description: "Want to improve your search engine rankings and drive more traffic to your site? We can help you optimize your website for SEO and increase its visibility online."
    },
    {
        icon : <BiCalendar/>,
        title: "Maintenance and Support",
        description: "Once your site is live, we can provide ongoing maintenance and support to ensure that it stays up-to-date and performing at its best."
    }
]

export default ServiceData;