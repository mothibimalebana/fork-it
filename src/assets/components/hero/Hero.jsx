import HeroCss from '../../css/Hero.module.css';

const Hero = () => {
    return (
        <>
        <div>
            <div  className={HeroCss.img}><img src="src/assets/img/Image copy.png" alt="pizza" /></div>
            <div className={HeroCss.text}>
                <p>
                Fuel your body & soul -
                find recipes that taste amazing!
                </p>
            </div>
        </div>
        </>
    )
}

export default Hero