export default class QueryHandler {
    static fetchArticles() {
        return fetch(`/api/articles`).then((res) => res.json())
    }
}
