import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return <div className="bg-red-400 text-4xl">User:{userid}</div>;
};

export default User;
