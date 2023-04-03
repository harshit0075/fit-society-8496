

import AllRoutes from './AllRoutes';
import Navbar from './Navbar';
import { useContext ,useState} from 'react';
import { Authcontext } from '../Context/AuthContext';
function Main() {
    
  const{authState} =useContext(Authcontext)

   let Token="QpwL5tke4Pnpja7X4"
   if( authState.token===Token){
  
   return <div className="Admin"><AllRoutes/></div>
  
}
 

  
  return (
 <div className="Main">
      <Navbar/>
     <AllRoutes/>
     </div>
    


  );
}

export default Main;





