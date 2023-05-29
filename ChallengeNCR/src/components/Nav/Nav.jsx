import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="bg-[#7ccc72] py-4">
      <div className="container mx-auto" data-testid="nav-test-id">
        <div className="text-white text-start font-bold  mx-5 px-5 text-xl">
          <Link to="/accounts">NCR</Link>
        </div>
      </div>
    </nav>
  );
};
