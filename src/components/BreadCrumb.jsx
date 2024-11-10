import { useLocation, Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

const BreadCrumb = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  const breadcrumb = pathParts.map((part, index) => {
    const routeTo = `/${pathParts.slice(0, index + 1).join("/")}`;
    const capitalized = part.charAt(0).toUpperCase() + part.slice(1);

    return (
      <span key={index}>
        {index > 0 && <FaAngleDoubleRight/>}
        <Link to={routeTo}>{capitalized}</Link>
      </span>
    );
  });

  return (
    <div className="flex items-center gap-2">
      <Link to={"/"}>Triocent</Link>
      {breadcrumb.length > 0 && <FaAngleDoubleRight/>}
      {breadcrumb}
    </div>
  );
};

export default BreadCrumb;
