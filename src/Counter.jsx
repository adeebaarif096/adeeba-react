
import { useState } from "react";

function Counter(){
   const[adeeba,setAdeeba] = useState(0);
   return(
<div>
    <h1>My Counter App</h1>
    <h1>{adeeba}</h1>
 <button onClick={()=> setAdeeba(adeeba+1)}>
My Counter in increasing
 </button>
<button onClick={()=>{if (adeeba > 0)
{setAdeeba(adeeba-1);}

}}>
My Counter in decreasing
</button>

<button onClick={()=>setAdeeba(0)}>
reset
</button>


</div>
    );
}
export default Counter;