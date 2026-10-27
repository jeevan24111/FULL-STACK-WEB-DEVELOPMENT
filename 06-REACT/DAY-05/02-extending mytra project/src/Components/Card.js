export default function Card(props){
        return(<>
        
            <div className="card" style={{marginTop:"40px",border:"1px solid black",backgroundColor:"lightblue",borderRadius:"10px"}}>
                 <img src={props.image} width={350} height={170}></img>
         <div style={{textAlign:"center"}}>
                <h1>{props.cloth}</h1>
                <h2>{props.offer}</h2>
                <h1>{props.avail}</h1>
                <h1>₹{props.price}</h1>
         </div>
            </div>
            </>
        
        )
}


