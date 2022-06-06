import * as React from 'react'
import QueryHandler from '../api'
import Header from '../components/Header'

const Home = () => {
    const [articles, setArticles] = React.useState([])

    React.useEffect(() => {
        const fetch = async () => {
            const newArticles = await QueryHandler.fetchArticles()
            setArticles(newArticles)
        }
        fetch()
    }, [])

    return (
        <div>
            <Header />
            {articles.map((article) => (
                <div key={article.id}>{article.title}</div>
            ))}
            Content
        </div>
    )
}

export default Home
