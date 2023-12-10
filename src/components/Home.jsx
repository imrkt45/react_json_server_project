import React from "react";
import Card from "./Card";
import CardProduct, {CardProduct2} from "./CardProduct";
import Header from "./Header";



const Home = () =>{
  //const searchParams = useLocation();
  // console.log(searchParams.state.name);
  // // const name = searchParams.get("name");
  // // console.log(name);
 // const name = searchParams.state.name;
 // const {name} = useParams();
return (
<>
     <div className="HomeCards">
        <Header name ="{name}"/>

        {CardProduct.map((val,ind)=>(
        <Card details={val} ind = {ind}/>
        ))
      }
      <p>another section</p>
      
      {CardProduct2.map((val,ind)=>(
        <Card details={val} ind = {ind}/>
        ))
      }
        </div>
</>
);

}
export default Home;
//make a route that will take dynamic query params from react router dom. show it on the route.