const formatArticle = (json) => 
json.articles.map(({author, title, description, url}) => ({
    author,
    title,
    description,
    url,
}));

export const getArticles = async () => {
    const res = await fetch('');
    const results = await res.json();
    return formatArticle(results);
};

export const getArticleByKeyword = async (keyword) =>{
    const res = await fetch('');
    const result = await res.json();
    return formatArticle(result);
};


