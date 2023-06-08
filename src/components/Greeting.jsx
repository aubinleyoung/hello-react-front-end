import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGreetings } from './slice/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greetings);

  useEffect(() => {
    dispatch(getAllGreetings());
  }, [dispatch]);

  return (
    <>
      {greeting[0] !== undefined && <h1>{greeting[0].message}</h1>}
      <button type="button" onClick={() => dispatch(getAllGreetings())}>Greet</button>
    </>
  );
};

export default Greeting;
