import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimeList from "./AnimeList";
import useFetch from "../useFetch";

const SubHome = ({ url, sub_title }) => {

    const { data: results, isPending, error } = useFetch(url);

    useEffect(() => {
        AOS.init({
            duration:700,
            offset:50
        });
    });

    return ( 
        <div>     
            <div className="text-white m-12">
                <div className="p-3 font-bold text-3xl">
                    <h2>{sub_title}</h2>
                </div>
                <div>
                    { error && <div>{ error }</div> }
                    { isPending && <div>Loading...</div> }
                    { results && <AnimeList results={results.top} /> } 
                </div>
            </div> 
        </div>
    );
}
 
export default SubHome;