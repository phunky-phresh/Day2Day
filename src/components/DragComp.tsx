import React from 'react';
import { motion, useDragControls } from 'framer-motion';
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
 
  // TODO: add delete button, edit button to each drag comp
  // include time in each task, and get it to reflect time taken in day.

  // TODO: each item needs to recognise the other, drag n drop
  // const dragControls = useDragControls()
  // function startDrag(event: any) {
  //   dragControls.start(event, { snapToCursor: true })
  // }
  return(
    <div
      // onMouseDown={startDrag}
    >
      <Drag
        drag='y' 
        dragConstraints={{top: 0, bottom: 100}}
        color={color}
        // dragControls={dragControls}
      >
      <h4>{title}</h4>
      <p>{detail}</p>
      {/* <p>{color}</p> */}
      
     
      </Drag>
    </div>

  );
};  

const Drag = styled(motion.div)`
background-color: ${props => props.color || 'gray'};
border-radius: 5px;
> * {
  margin: 5px;
}
margin: 5px 10px;
`


export default DragComp;