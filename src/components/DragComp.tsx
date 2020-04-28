import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export interface Package {
  name: string;
  detail: string;
  color: string;
}

export interface Props {
  task: Package[];
}


const DragComp: React.FC<Props> = ({task}) => {
 
  
  return(
   
      <Drag
        drag='y' 
        dragConstraints={{top: 0, bottom: 100}}
      >
      {/* <h4>{tasks}</h4>
      <p>{tasks}</p>
      
      <p>{tasks}</p> */}
      </Drag>
  );
};

const Drag = styled(motion.div)`
  background-color: gray;
  border-radius: 5px;
  > * {
    margin: 0;
  }
`

export default DragComp;