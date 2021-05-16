import React, { Component } from 'react'
import ArticleList from '../components/Article/ArticleList';
import Search from '../components/Article/Search';
import { getArticleByKeyword, getArticles } from '../services/NewsAPI';
export default class NewsSearch extends Component {
    state = {
        loading: true,
        articles: [],
        search: '',
    };

    async componentDidMount(){
        const articles = await getArticles();
        this.setState({
            articles,
            loading: false,
        })
    }
    handleSearch= ({target}) =>
    this.setState({search: target.value});

    handleSubmit = async (event) =>{
        event.preventDefault();
        this.setState({ loading: true});
        const articles = await getArticleByKeyword(this.state.search);
        this.setState({
            articles,
            loading: false,
        }); 
    };
    
    render() {
        const {loading, articles, search} =this.state;
        if(loading) return <h1>LOADING...</h1>;
        return (
            <div>
                <Search
                keyword={search}
                onKeywordChange={this.handleSearch}
                onSubmit={this.handleSubmit}
                />
                <ArticleList articles={articles}/>
            </div>
        );
    }
}

