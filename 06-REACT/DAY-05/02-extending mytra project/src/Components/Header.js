export default function Header(){
    return(
        <>
            <div className="head" >
                <img src="https://plus.unsplash.com/premium_photo-1679941208875-0fa8522fe6a5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" width={20} height={30}></img>
                <div className="Section">
                    <button className="but">MEN</button>
                    <button className="but">WOMEN</button>
                    <button className="but">KIDS</button>
                    <button className="but">GEN-Z</button>
                    <button className="but">SUMMER</button>
                </div>
                <input className="search" placeholder="Search For Products"></input>
                <div className="profile">
                        <button  className="but">Store</button>
                        <button  className="but">Login</button>
                        <button  className="but">Profile</button>
                </div>
            </div>
        
        </>
    )
}