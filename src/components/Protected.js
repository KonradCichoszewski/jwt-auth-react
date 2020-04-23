import React from 'react';

const Protected = () => {
  return (
    <div>
      <h1>Success! Welcome to the protected route :)</h1>
      <h4>You wouldn't be here if you didn't have the JWT</h4>
    </div>
  )
}

export default Protected;