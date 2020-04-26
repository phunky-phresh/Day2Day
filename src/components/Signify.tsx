import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


interface Props {
  color: string;
  name: string;
  value: string;
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => string | void;
}





const Signify: React.FC<Props> = ({color, name, handleClick}) => {

  // console.log(color);
  


  return(
    <motion.div
      whileHover={{scale: 1.2}}
    >
       <Swatch onClick={handleClick} color={color} key={name}>
     
     </Swatch>
    </motion.div>
  )
};

const Swatch = styled.div`
border-radius: 100%;
height: 40px;
width:  40px;
margin: 10px 5px;
background-color: ${props => props.color}
`


export default Signify;