import React from 'react';
import Button from '../Button';
const Landing = () => (
  <div>
    {' '}
    <h1> Landing </h1>{' '}
    <Button
      name="A Button"
      action={() => {
        console.log('a button');
        window.location.href = 'https://google.com';
      }}
    />
    <Button
      name="Another Button"
      action={() => {
        console.log('another button');
      }}
      extraClassName="shadow"
    />
  </div>
);

export default Landing;
