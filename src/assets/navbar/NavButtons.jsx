import PropTypes from "prop-types"

const NavButtons = (prop) => {
    return(
        <>
        <div className={prop.position}>
            <button>{prop.label}</button>
        </div>
        </>
    )
}
NavButtons.PropTypes = {
    label: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
}

export default NavButtons