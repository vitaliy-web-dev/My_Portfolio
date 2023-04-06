
const Info = props => {
    return(
        <>
                <div className="info">
                    <div className="e"><h2>{props.name}</h2></div>
                    <div className="e"><h2>{props.sure}</h2></div>
                    <div className="e"><h2>{props.age}</h2></div>
                    <div className="e"><h2>{props.year}</h2></div>
                </div>
        </>
    )
}

export default Info;