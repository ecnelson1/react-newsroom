const formatArticle = (json) => 
json.articles.map(({author, title, description, url}) => ({
    author,
    title,
    description,
    url,
}));

export const getArticles = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=today&apiKey=${process.env.API_KEY}`);
    const results = await res.json();
    return formatArticle(results);
};

export const getArticleByKeyword = async (keyword) =>{
    const res = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${process.env.API_KEY}`);
    const result = await res.json();
    return formatArticle(result);
};


