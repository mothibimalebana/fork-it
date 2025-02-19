import PropTypes from "prop-types"
import NavBarCss from "../../css/navbar.module.css"

const NavButtons = (prop) => {
    return(
        <>
        <div className="navBtn-container">
            <button>{prop.label}</button>
        </div>
        </>
    )
}
NavButtons.PropTypes = {
    label: PropTypes.string.isRequired,
}

export default NavButtons