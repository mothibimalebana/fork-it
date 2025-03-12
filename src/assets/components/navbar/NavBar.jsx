import NavBarCss from '../../css/navbar.module.css'
import NavButtons from "./NavButtons"
const NavItems = () => {
    return(
        <>
        <div className={NavBarCss.btnContainer}>

            <div className={NavBarCss.right}>
                <NavButtons label='+ADD RECIPES'/>
                <div className={NavBarCss.lastChild}>
                    <NavButtons label='LOGIN/SIGNUP'/>
                </div>
            </div>
        </div>
        </>
    )
}

const NavBar = () => {
    return(
        <>
        <div className={NavBarCss.container}>
            <div className={NavBarCss.brand}>
                <svg width="51" height="61" viewBox="0 0 51 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2604_4915)">
                    <path d="M24.6754 4.40607C20.1634 2.31981 14.5334 4.89585 12.0997 10.1594C10.0159 14.666 10.9518 19.683 14.0961 22.3399L2.54945 43.7596C2.36246 44.0977 2.24765 44.4709 2.21228 44.8556C2.17692 45.2404 2.22176 45.6283 2.34397 45.9948C2.46619 46.3613 2.66312 46.6985 2.92232 46.985C3.18152 47.2715 3.49734 47.5012 3.84982 47.6594L5.21133 48.2889C6.70898 48.9814 8.42341 48.2901 9.02477 46.7536L17.8647 24.0824C21.9268 24.7542 26.354 22.2203 28.4377 17.7137C30.8715 12.4502 29.1874 6.49232 24.6754 4.40607ZM47.7747 15.0866L39.2112 27.6528L37.5093 26.8659L42.669 12.7259L41.5335 12.2009L34.1028 25.2909L32.4009 24.504L36.4279 9.84014L35.2924 9.31511L27.1086 27.0146C26.9416 27.3757 26.9249 27.7884 27.0622 28.1618C27.1995 28.5351 27.4795 28.8387 27.8406 29.0057L31.3859 30.645L19.974 51.8162C19.787 52.1543 19.6722 52.5276 19.6368 52.9123C19.6015 53.2971 19.6463 53.6849 19.7685 54.0515C19.8907 54.418 20.0877 54.7552 20.3469 55.0417C20.6061 55.3282 20.9219 55.5578 21.2744 55.7161L22.6359 56.3456C24.1335 57.0381 25.848 56.3468 26.4493 54.8103L35.1872 32.4026L38.7326 34.0419C39.0937 34.2088 39.5063 34.2255 39.8797 34.0883C40.2531 33.951 40.5567 33.671 40.7236 33.3099L48.9075 15.6104L47.772 15.0854L47.7747 15.0866Z" fill="#2E5834"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2604_4915">
                    <rect width="39.36" height="48" fill="white" transform="translate(15.145) rotate(24.8147)"/>
                    </clipPath>
                    </defs>
                </svg>
                <h2 className={NavBarCss.logo}>Fork <br />It</h2>
                <div className={NavBarCss.left}>
                <NavButtons label='Chicken'/>
                <NavButtons label='Beef'/>
                <NavButtons label='Ribs'/>
                </div>
            </div>
            <NavItems/>
        </div>
        </>
    )
}

export default NavBar