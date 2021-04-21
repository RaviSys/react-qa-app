import React from 'react';

const NoQuestion = () => {
  return(
    <div className="card shadow rounded-0 mt-5 mb-5">
      <div className="card-body">
        <div className="text-center">
          <h1 className="p-4">OOPS!!!</h1>
          <h1 className="p-4">No question found for the category you selected!</h1>
        </div>
      </div>
    </div>
  )
}

export default NoQuestion;
