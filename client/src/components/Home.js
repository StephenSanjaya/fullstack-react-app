import "../App.css";
import AiringAnime from "./AiringAnime.js";
import UpcomingAnime from "./UpcomingAnime.js";

const Home = () => {

    return (
        <div className="">
            <img className="filter brightness-50 w-full" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F01%2Fdemon-slayer-ufotable-free-download-background-info-tw.jpg?w=960&cbr=1&q=90&fit=max" alt="" />

            <div className="absolute top-1/2 text-center text-white w-full">
            <section>
                <div className="flex flex-wrap justify-center">
                <a
                    href="#AiringAnime" 
                    className="button button--nina px-16 py-0 bg-opacity-50 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden" 
                    data-text="Get Started"
                >
                    <span className="align-middle">G</span>
                    <span className="align-middle">E</span>
                    <span className="align-middle">T</span>
                    <span className="align-middle">&nbsp;</span>
                    <span className="align-middle">S</span>
                    <span className="align-middle">T</span>
                    <span className="align-middle">A</span>
                    <span className="align-middle">R</span>
                    <span className="align-middle">T</span>
                    <span className="align-middle">E</span>
                    <span className="align-middle">D</span>
                </a>
                </div>
            </section>
            </div>
            <div id="AiringAnime">
                <br />
                <AiringAnime />
            </div> 
            <br /><br /><br />
            <div id="UpcomingAnime">
                <UpcomingAnime />
            </div> 
            <br /><br /><br /><br /><br /><br /><br /><br />

        </div>
    );
}
 
export default Home;