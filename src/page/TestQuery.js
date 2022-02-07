import React from 'react';
import {useQuery} from 'react-query'

const TestQuery = () => {

    const { isLoading, error, data } = useQuery('movieList', () =>
     fetch("https://yts.mx/api/v2/list_movies.json?with_images=true")
        .then(res =>
            res.json())
    );

    if (isLoading) return "Loading...";

    if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
        <ul>
            {
                data.data.movies.map((item, index) => {
                    return (
                        <li key={index}>
                            <h1>{item.title}</h1>
                            <ul>
                                <li>{item.genres}</li>
                                <li>{item.runtime}</li>
                                <li>{item.summary}</li>
                            </ul>
                        <img src={item.large_cover_image}/>
                    </li>
                    )
                })
            }
        </ul>
    </div>
  )
};

export default TestQuery;
