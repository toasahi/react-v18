import {useQuery} from "@tanstack/react-query";
import axios from "axios";

type Albums = {
    userId: number;
    id: number;
    title: string;
}

const fetchAlbums = async () => {
    const result = await axios.get<Albums[]>('https://jsonplaceholder.typicode.com/albums');
    return result.data;
}

export const ReactQuery = () => {
    const {isLoading, error, data} = useQuery<Albums[]>(['albums'], fetchAlbums);

    if (error) return <p>エラーです!</p>
    if (isLoading) return <p>ローディング中です</p>

    return (
        <>
            <h1>React Query</h1>
            {data?.map((album) => <p key={album.id}>{album.title}</p>)}
        </>
    )
}
