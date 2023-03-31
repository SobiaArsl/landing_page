import React from 'react';

import Wrapper from './Wrapper';

export default function Navbar() {
  return (
    <Wrapper>
      <div className='page3'>
        <div>
          <img
            src='./imagefld/Content.jpg'
            className='ing'
            alt='images'
            style={{
              width: '100%',
            }}
          />
        </div>

        <div>
          <img src='./svg/pagea3.svg' className='page_img3 ' />
        </div>
      </div>
    </Wrapper>
  );
}
