import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export interface Props {
  title: string;
  detail: string;
  color: string;
}

// export interface Props {
//   task: Object;
// }


const DragComp: React.FC<Props> = ({color, detail, title}) => {
 
  // this shouldn't be here. props => props.color isn't working
  const Drag = styled(motion.div)`
  background-color: ${color};
  border-radius: 5px;
  > * {
    margin: 5px;
  }
`

  return(
   
      <Drag
        drag='y' 
        dragConstraints={{top: 0, bottom: 100}}
      >
      <h4>{title}</h4>
      <p>{detail}</p>
      {/* <p>{color}</p> */}
      
     
      </Drag>
  );
};



export default DragComp;