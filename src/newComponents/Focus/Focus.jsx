import Blog from "./Blog";
import Home3 from "./Home3";
import UserProfile from "./UserProfile";
import Contact from "./Contact";

const page = ({
    blog,
    home3,
    userProfile,
    contact
}) => {
    switch (page) {
        case "blog":
            return <Blog />;
        case "home3":
            return <Home3 />;
        case "userProfile":
            return <UserProfile />;
        case "contact":
            return <Contact />;
        default:
            return <Home3 />;
    }
}

export default page;