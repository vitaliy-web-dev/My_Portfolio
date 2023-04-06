import Info from "../Info/Info";

const users = [
    {
        'name':'Vitaliy',
        'sureName':'Gurnik',
        'age':36,
        'year':1987
    }
  ];

const AboutMe = () => {
    return(
        <>
            <div className='aboutme'>
             <h1>About_me</h1>
             <div className="main">
                <div className="l">
                   <div className="y"><h2>Name</h2></div>
                   <div className="y"><h2>Sure_Name</h2></div>
                   <div className="y"><h2>Age</h2></div>
                   <div className="y"><h2>Year</h2></div>
                </div>
                <div className="r">
                    {users.map(item => <Info name={item.name}sure={item.sureName}age={item.age}year={item.year} style={{}} /> )}
                </div>
             </div>
            </div>
        </>
    )
}

export default AboutMe;