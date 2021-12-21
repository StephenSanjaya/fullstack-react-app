import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import "../App.css";
import DBRequest from "../DBRequest";
import axios from 'axios';

const Favorite = () => {

    const [datas, setDatas] = useState([]);

    const FavoriteState = (result) => {
        console.log("calling Favorite state");
        console.log(datas);
        console.log(datas.find(({mal_id}) => mal_id === result.mal_id));
        if (datas.find(({mal_id}) => mal_id === result.mal_id) === undefined) {
            setDatas(datas => [ ...datas, {mal_id: result.mal_id}]);
            DBRequest(`/api/favorite/post`, "POST", result);
            console.log("add " + result.mal_id);
        } else {
            setDatas(datas.filter(item => item.mal_id !== result.mal_id));
            DBRequest(`/api/favorite/delete/${result.mal_id}`, "DELETE", result);
            console.log("remove " + result.mal_id);
        }
    }

    useEffect(() => { 
        console.log("use effect is triggered");
        const fetchData = () => {
            axios.get("/api/favorite/getall")
            .then(function(response) {
                setDatas(response.data);
                console.log("calling use effect");
                console.log(datas);
            }).catch(function(error) {
                console.log(error);
            })
        }
        fetchData(); 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    return ( 
        <div className="anime-list overflow-auto no-scrollbar text-white m-12">
            <div className="p-3 font-bold text-3xl">
                    <h2>Favorite List</h2>
            </div>
            <div className="flex">
            { datas && datas.map((data) => (
                <div className="anime-preview p-3" key={ data.mal_id }>
                    <div className="group w-48 h-72 relative cursor-none">
                        <img className="object-cover absolute h-full w-full z-10 filter group-hover:blur-sm group-hover:opacity-50" src={ data.image_url } alt="" />
                        <h2 className="absolute w-full top-0 text-left p-2 font-bold text-base z-20 pointer-events-none opacity-0 group-hover:opacity-100">{ data.type }</h2>
                        <h2 className="absolute w-full top-1/4 text-center font-bold text-base z-20 pointer-events-none opacity-0 group-hover:opacity-100">{ data.title }</h2>
                        <span id="heart">
                            <button onClick={ () => { FavoriteState(data) } }>
                                {datas.find(({mal_id}) => mal_id === data.mal_id) !== undefined ? (
                                   <i className="fa fa-heart absolute top-0 right-0 p-2 font-bold text-base z-20 opacity-0 group-hover:opacity-100" aria-hidden="true" >
                                   </i>
                                ) : (
                                    <i className="fa fa-heart-o absolute top-0 right-0 p-2 font-bold text-base z-20 opacity-0 group-hover:opacity-100" aria-hidden="true" >
                                    </i>
                                )}
                            </button>
                        </span>

                        <Link to={`details/${data.mal_id}`} >
                            <button className="absolute top-3/4 left-0 right-0 mx-auto w-4/5 z-30 border-2 font-bold py-2 px-4 rounded opacity-0 group-hover:opacity-100 hover:bg-black">
                                See Details
                            </button>
                        </Link>

                    </div>
                </div>
            )) }
            </div>
        </div>
    );
}
 
export default Favorite;
