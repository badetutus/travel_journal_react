
export default function Card (props) {
    
   return ( 
    
    
   <div className="container">
        
       
        <img src={props.img} alt={props.location}></img>
        <main>
        <h3>{props.location} <a href={props.mapLink}>View on Google Maps</a> </h3>
        <h2>{props.title}</h2>
        
        <p>{props.description}</p>
        </main>
      

    </div>
   
)
}