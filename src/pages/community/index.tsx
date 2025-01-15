import React from 'react'
import AiCollection from '../../Components/HomePage/AiCollection';
import { OurPopularAICollection } from '../../json';

const Community = () => {
  return (
    <>
      <AiCollection data={OurPopularAICollection} />
    </>
  )
}

export default Community;