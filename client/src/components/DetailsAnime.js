import { useParams, useHistory } from "react-router-dom";
import useFetch from "../useFetch";

const DetailsAnime = () => {
    
    const { id } = useParams();
    const history = useHistory()

    const goBack = () => {
        history.goBack();
    }

    const { data: results, isPending, error } = useFetch(`https://api.jikan.moe/v3/anime/${id}`);

    return ( 
        <div>
            { error && <div>{ error }</div> }
            { isPending && <div className="text-white">Loading...</div> }
            { results && 
            <div className="mx-56 mt-20 text-white shadow-lg">
                <div>
                    <button type="button" onClick={goBack}>Back</button>
                </div>
                <h1 className="py-8 text-4xl">{results.title}</h1>
                <div className="relative w-full h-full flex">
                    <img className="object-cover h-auto w-auto" src={results.image_url} alt="" />
                    <div>
                        <div className="flex">
                            <div className="px-5 w-24">
                                <h1 className="px-0">Synopsis: </h1>
                            </div>
                            <div className="">
                                <h2 className="">{results.synopsis}</h2>
                            </div>
                        </div>
                        <div className="flex pt-6">
                            <div className="px-5 w-24">
                                <h1 className="px-0">Genres: </h1>
                            </div>
                            <div className="flex">
                                { results.genres.map((result) => (
                                    <h2 className="" key={ result.mal_id }>{result.name}, &nbsp;</h2>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-10 mt-24 text-4xl text-center">
                    <h1>TRAILER</h1>
                    <div className="pt-10">
                    <iframe src={results.trailer_url}
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                            width='100%'
                            height='500px'
                    />
                    </div>
                </div>
            </div>
            }
        </div>
     );
}
 
export default DetailsAnime;