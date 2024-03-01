import React from 'react'
import { Brack, ImgStyle, ContainerHero,
 Span1, Span2} from "./Section1Styles"
import { ProfilePicture } from '../data/ProfilePic'

const Section1 = () => {
  return (
    <>
<ContainerHero>
  <Span1>Hi, I'm a 
       <Brack> 
           <span>{"<"}</span>
       </Brack> 
  </Span1>
  <Span2>Software Developer
       <Brack> 
          <span>{"/"}</span> 
          <span>{">"}</span>
      </Brack>
  </Span2>
      <ImgStyle src={ProfilePicture} />
     
</ContainerHero>
    </>
  )
}

export default Section1
