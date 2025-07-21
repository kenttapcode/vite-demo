import { useRouteError } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page">
            <Header />
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Footer />
        </div>
    );
}