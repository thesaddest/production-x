import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getUserAuthData } from "entities/user";
import { RouterPath } from "shared/config";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RouterPath.main} state={{ from: location }} replace />;
    }

    return children;
};
