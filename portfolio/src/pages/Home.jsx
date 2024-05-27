import Header from "./components/header.jsx";
import Main from "./components/main.jsx";
import Footer from "./components/footer.jsx";

function Home() {
  return (
    <>
      <div >
        {/* <Header /> */}
        <div className="flex justify-center items-center h-full">
          <Main />
        </div>
        
      </div>
    </>
  );
}

export default Home;
