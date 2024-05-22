import Header from "./components/header.jsx";
import Main from "./components/main.jsx";

function Home() {
    return (
        <>
            <div className="text-black bg-gray-100 min-h-screen">
                <Header />
                <Main />
            </div>
        </>
    );
}

export default Home;
