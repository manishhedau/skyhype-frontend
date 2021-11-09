import './error_page.css';

const ErrorPage = () => {
    return (
        <div className="error-page">
            <img src="https://skyhype.in/htdocs_error/something-lost.png" alt="Error"/>
            <h1>Oops, looks like the page is lost.</h1>
            <p>This is not a fault, just an accident that was not intentional.</p>
        </div>
    );
}

export default ErrorPage;