import { useState, useEffect } from "react"
import { fetchArticles } from "./api"
import ArticlesDisplay from "./ArticlesDisplay"
import { useParams } from "react-router"
import { useSearchParams, Link } from "react-router-dom";
import ErrorPage from "./ErrorPage"
import Loading from "./Loading"
import Button from '@mui/material/Button';

const Homepage = () => {
    const { topic } = useParams()
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams();
    const sortByQuery = searchParams.get('sort_by');
    const orderQuery = searchParams.get('order')

    const setSortBy = (sort_by) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('sort_by', sort_by);
        setSearchParams(newParams);
    };

    const setOrder= (order) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('order', order);
        setSearchParams(newParams);
    };

    useEffect(() => {
        fetchArticles(topic, sortByQuery, orderQuery).then((articlesFromApi) => {
            setArticles(articlesFromApi)
            setErr(null)
            setIsLoading(false)
        }).catch((error) => {
            setErr({error})
        });
    }, [topic, sortByQuery, orderQuery])

    if(err){
        console.log(err)
        return (
            <ErrorPage msg={err.error.response.data.msg} status={err.error.response.status}/>
        )
    }
    if(isLoading){
        return <Loading/>
    }

    return (
        <>  
        <div className="topic_buttons_box">
            <Link to={`/articles`}>
            <Button variant="contained">All</Button>
            </Link>
            <Link to={`/articles/topic/coding`}>
            <Button variant="contained">coding</Button>
            </Link>
            <Link to={`/articles/topic/football`}>
            <Button variant="contained">football</Button>
            </Link>
            <Link to={`/articles/topic/cooking`}>
            <Button variant="contained">cooking</Button>
            </Link>
        
        </div>
            <section>
                <label htmlFor="sort_by">Sort By</label>
                <select name="sort_by" id="" onChange={(event) => { setSortBy(event.target.value) }}>
                    <option value={'created_at'}>Date</option>
                    <option value={'comment_count'}>Comment Count</option>
                    <option value={'votes'}>votes</option>
                </select>
            </section>
            <section>
                <label htmlFor="order">Order</label>
                <select name="order" id="" onChange={(event) => { setOrder(event.target.value) }}>
                    <option value={'DESC'}>Descending</option>
                    <option value={'ASC'}>Ascending</option>
                </select>
            </section>
            <ArticlesDisplay articles={articles} isLoading={isLoading} />
        </>
    )

}

export default Homepage
