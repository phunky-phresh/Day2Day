import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Tasks {
  title: string;
  detail: string;
  time: number;
  color: string;
}

interface Props {
  tasks: Tasks
}


const DragComp: React.FC<Props> = ({tasks}) => {

  return(
   
      <Drag
        drag='y' 
        dragConstraints={{top: 0, bottom: 100}}
      >
      <h4>{tasks.title}</h4>
      <p>{tasks.detail}</p>
      <p>{tasks.time}</p>
      <p>{tasks.color}</p>
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