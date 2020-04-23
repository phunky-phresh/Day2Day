import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <motion.div drag='y'>
      <h4>{tasks.title}</h4>
      <p>{tasks.detail}</p>
      <p>{tasks.time}</p>
      <p>{tasks.color}</p>
    </motion.div>
  );
};

export default DragComp;