import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import "../App.css";
import DBRequest from "../DBRequest";
import axios from 'axios';

const AnimeList = ( { results } ) => {

    const [data, setData] = useState([]);

    const FavoriteState = (result) => {
        console.log("calling Favorite state");
        console.log(data);
        console.log(data.find(({mal_id}) => mal_id === result.mal_id));
        if (data.find(({mal_id}) => mal_id === result.mal_id) === undefined) {
            setData(data => [ ...data, {mal_id: result.mal_id}]);
            DBRequest(`/api/favorite/post`, "POST", result);
            console.log("add " + result.mal_id);
        } else {
            setData(data.filter(item => item.mal_id !== result.mal_id));
            DBRequest(`/api/favorite/delete/${result.mal_id}`, "DELETE", result);
            console.log("remove " + result.mal_id);
        }
    }

    useEffect(() => { 
        console.log("use effect is triggered");
        const fetchData = () => {
            axios.get("/api/favorite/getall")
            .then(function(response) {
                setData(response.data);
                console.log("calling use effect");
                console.log(data);
            }).catch(function(error) {
                console.log(error);
            })
        }
        fetchData(); 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    return ( 
        <div className="anime-list flex overflow-auto no-scrollbar">
            { results && results.map((result) => (
                <div className="anime-preview p-3" key={ result.mal_id }>
                    <div className="group w-48 h-72 relative cursor-none">
                        <img className="object-cover absolute h-full w-full z-10 filter group-hover:blur-sm group-hover:opacity-50" src={ result.image_url } alt="" />
                        <h2 className="absolute w-full top-0 text-left p-2 font-bold text-base z-20 pointer-events-none opacity-0 group-hover:opacity-100">{ result.type }</h2>
                        <h2 className="absolute w-full top-1/4 text-center font-bold text-base z-20 pointer-events-none opacity-0 group-hover:opacity-100">{ result.title }</h2>
                        <span id="heart">
                            <button onClick={ () => { FavoriteState(result) } }>
                                {data.find(({mal_id}) => mal_id === result.mal_id) !== undefined ? (
                                   <i className="fa fa-heart absolute top-0 right-0 p-2 font-bold text-base z-20 opacity-0 group-hover:opacity-100" aria-hidden="true" >
                                   </i>
                                ) : (
                                    <i className="fa fa-heart-o absolute top-0 right-0 p-2 font-bold text-base z-20 opacity-0 group-hover:opacity-100" aria-hidden="true" >
                                    </i>
                                )}
                            </button>
                        </span>

                        <Link to={`details/${result.mal_id}`} >
                            <button className="absolute top-3/4 left-0 right-0 mx-auto w-4/5 z-30 border-2 font-bold py-2 px-4 rounded opacity-0 group-hover:opacity-100 hover:bg-black">
                                See Details
                            </button>
                        </Link>

                    </div>
                </div>
            )) }
        </div>
    );
}
 
export default AnimeList;
