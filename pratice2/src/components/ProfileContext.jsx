import { useContextHook } from "../context/ContextHook";

const ProfileContext = () => {
  const { user } = useContextHook();

  if (!user) return <div>Please Login</div>;
  return (
    <div>
      <h1>This is a user profile Context</h1>
      Profilecontext : {user.name} || {user.password}
    </div>
  );
};

export default ProfileContext;
