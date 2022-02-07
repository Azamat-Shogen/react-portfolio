import {useNavigate, useParams, useLocation } from "react-router-dom";

// Custom HOC function wrapper
const withRouter = (InnerComponent) => {
    const WrapperComponent = () => {
        const navigate = useNavigate();
         const params = useParams();
         const location = useLocation();

       const props = {navigate, params, location}
        return (
            <InnerComponent {...props} />
        )
    }
    return WrapperComponent;
}

export default withRouter