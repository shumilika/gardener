import React from 'react';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlined } from '@heroicons/react/24/outline';

interface StarRatingProps{
    start:number;
}

const StarRating:React.FC<StarRatingProps> = ({start}) => {

    const solidStars = Array.from({ length: start }, (_, index) => (
    <StarSolid key={`solid-${index}`} className="size-3.5 text-[#FFC966]" />
  ));

    const remainingStars = 5 - start
    const outlinedStars =  Array.from({ length: remainingStars }, (_, index) => (
    <StarOutlined key={`solid-${index}`} className="size-3.5 text-[#FFC966]" />
  ));

    return (
        <div className='flex flex-row '>
            {solidStars}
            {outlinedStars}
        </div>
    );
};

export default StarRating;