import { useEffect, useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count1] = useState(0);
  const { name, location, contact } = props;

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("namste React");
    }, 1000);

    return () => {
      // we right clenup fn in useEffect like this its very imp for optimization
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count1: {count1}</h1>
      <h3>name:{name}</h3>
      <h4>location:{location}</h4>
      <h4>contact:{contact}</h4>
    </div>
  );
};
export default User;
