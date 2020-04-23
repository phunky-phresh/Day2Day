import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { findIndex, Position } from './Drag-Index';
import move from 'array-move';
import styled from 'styled-components';



const Item = ({ color, setPosition, moveItem, i }) => {
  const [ isDragging, setDragging ] = useState(false);

  const ref = useRef(null);

  const dragOrginY = useMotionValue(0);

  useEffect(() => {
    setPosition( i, {
      height: ref.current.offsetHeight,
      top: ref.current.offsetTop
    });
  });

  return(
    <motion.li
      ref={ref}
      initial={false}
      animate={isDragging ? onTop : flat}
      style={{ background: color, height: heights[color]}}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.12 }}
      drag='y'
      dragOriginY={dragOriginY}
      dragConstraints={{ top: 0, bottom: 0}}
      dragElastic={1}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      onDrag={(e, { point }) => moveItem(i, point.y)}
      positionTransition={({ delta }) => {
        if (isDragging){
          dragOriginY.set(dragOriginY.get() + delta.y);
        }

        return !isDragging;
      }}
    >

    </motion.li>
  );
};


const DragComp: React.FC = () => {

  const [ colors, setColors ] = useState(initialColors);


  const positions = useRef<Position[]>([]).current;
  const setPosition = (i: number, offset: Position) => (positions[i] = offset);

  const moveItem = (i: number, dragOffset: number) => {
    const targetIndex = findIndex(i, dragOffset, positions);
    if (targetIndex !== i) setColors(move(colors, i, targetIndex));
  };
  
  return(
   <ul>
     {colors.map((color, i) => (
       <Item 
        key={color}
        i={i}
        color={color}
        setPosition={setPosition}
        moveItem={moveItem}
       />
     ))}
   </ul>
  );
};

const onTop = { zIndex: 1};
const flat = {
  zIndex: 0,
  transition: { delay: 0.3 }
};

const Drag = styled(motion.div)`
  background-color: gray;
  border-radius: 5px;
  > * {
    margin: 0;
  }
`
const initialColors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"];
const heights = {
  "#FF008C": 60,
  "#D309E1": 80,
  "#9C1AFF": 40,
  "#7700FF": 100
};

export default DragComp;