import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import NavBarCss from "../../css/navbar.module.css"

const NavButtons = (prop) => {
    return(
        <>
        <div className="navBtn-container">
            <button><Link to={prop.label}>{prop.label}</Link></button>
        </div>
        </>
    )
}
NavButtons.PropTypes = {
    label: PropTypes.string.isRequired,
}

export default NavButtons