import React, { FC, useState } from 'react';
import { Star } from './Star/Star';


export const RatingButton: FC = () => {
    const [value, setValue] = useState(5);

    const handlerOnClick = (newValue: number) => {
      setValue(newValue);
    };

   return <div>
            {[1,2,3,4,5].map(i=><Star onClick = {handlerOnClick} value = {i} enable = {i <= value}/>)}
          </div>;

};