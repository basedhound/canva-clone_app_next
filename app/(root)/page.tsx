import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <div>Home</div>;
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
