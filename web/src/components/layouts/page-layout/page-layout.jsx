/* eslint-disable react/prop-types */
import bckg from '../../../assets/imgs/background-banner.webp'
function PageLayout ({ children, className }) {
    return(
        <div style={{ backgroundImage: `url(${bckg})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', height: '100vh'}}  className={className} >{children}</div>
    )
}
export default PageLayout;