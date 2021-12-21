import SubHome from "./SubHome"

const UpcomingAnime = () => {
    return ( 
        <div>
            <SubHome url="https://api.jikan.moe/v3/top/anime/1/upcoming" sub_title="TOP UPCOMING ANIME"/>
        </div>
     );
}
 
export default UpcomingAnime;