import {Route,
        Routes as PortfolioRoutesDOM,
        BrowserRouter } from "react-router-dom";
import Section1 from "../Section/Section1";
import Section2 from "../Section/Section2/Section2";
import Section3 from "../Section/Section3/Section3";
import Section4 from "../Section/Section4/Section4";
import Layout from "../Layout/Layout"

const Routes = () => {

    return (
     <BrowserRouter>
          <Layout>
             <PortfolioRoutesDOM>
                 <Route path="/" element={<Section1 />} />
                 <Route path="About" element={<Section2 />} />
                 <Route path="Projects" element={<Section3 />} />
                 <Route path="Contact" element={<Section4 />} />
             </PortfolioRoutesDOM>
             </Layout>  
     </BrowserRouter>   
  
)}

export default Routes