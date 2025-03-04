const CardItems = ({title, imgSrc, }) =>{
    return(
        <>
        <div className="cardItem">
            <img src={imgSrc} alt={title}/>
            <h4>{title}</h4>
        </div>
        </>
    )
}

export default CardItems