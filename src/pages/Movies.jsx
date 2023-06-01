import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Movie from "../components/Movie";
import { getNowPlayingMovies } from "../apis";
import { Pagination } from "antd";

function Movies() {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const {isLoading, error, data} = useQuery(
        [`now-playing-movies`, page],
        () => getNowPlayingMovies(page),
        {
            onSuccess: (res) => {
                setTotalPages(res.total_results);
            }
        }
    )

    if(isLoading){
        return <span>Loading...</span>
    }
    if(error instanceof Error){
        return <span>An error has occurred : {error.message}</span>
    }

    return(
        <div>
            <div className="app-container">
                {data.results.map((item) => {
                    return(
                        <Movie 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            poster_path={item.poster_path}
                            vote_average={item.vote_average}/>
                    )
                })}
            </div>
            <div className="app-pagination-wrap">
                <Pagination
                    defaultCurrent={page}
                    total={totalPages}
                    defaultPageSize={20}
                    onChange={(page) => setPage(page)}/>
            </div>
        </div>
    )
}

export default Movies;