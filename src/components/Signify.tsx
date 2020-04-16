import React from 'react';
import styled from 'styled-components';


// interface Props {
//   color: string
  
// }

const colorOptions = [
  {name: 'red', hex: '#FF0000'},
  {name: 'blue', hex: '#0000FF'},
  {name: 'green', hex: '#008000'}
]

const Signify: React.FC = () => {


  const colorPalette = colorOptions.map( c => {
    return <Swatch />
  })

  return(
    <Palette>
      
        
      
    </Palette>
  )
};

const Palette = styled.span`
  display: flex;
  justify-content: center;
`
const Swatch = styled.span`
  border-radius: 100%;
  
  height: 50px;
  width:  50px;
`

export default Signify;