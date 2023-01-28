import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {

static defaultProps = {
    country:"in",
    pageSize:8,
    category:"general",
    newsName:"All about todays news"
  }
static propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
  newsName:PropTypes.string,

}


  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    }
  }

//to update the news 

async updateNews(){

  let url  = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ae7f78e7d8cf40cc97e3b8ef73a1c201&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  {this.setState({loading:true})}
  let data = await fetch(url);
  let parsedata = await data.json();
  this.setState({ articles: parsedata.articles,loading:false,totalResults:parsedata.totalResults})


  }


nextPage = async ()=>{
this.setState({page:this.state.page+1})
this.updateNews();
}

prevPage=async()=>{
  this.setState({page:this.state.page-1})
  this.updateNews();
  }

  //adding data after scroliing by the user by using infinte scrolling feature of react 

  fetchMoreData = async () => {
    this.setState({page:this.state.page + 1})
    let url  = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ae7f78e7d8cf40cc97e3b8ef73a1c201&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    {this.setState({loading:true})}
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ 
      articles: this.state.articles.concat(parsedata.articles),
      loading:false,
      totalResults:parsedata.totalResults
    })

  };

  //fetching url from here then sending object to the constructor

   async componentDidMount() {
     this.updateNews();
  }
  render() {

    return (
      <div>
        <h1 className="mt-10 mb-2 text-center capitalize text-4xl">Top-HeadLinesa: {this.props.newsName}</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
        <hr className='w-1/5 mx-auto' />
        <div className="grid  grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center mt-20 ">
          
          {
            this.state.articles.map((element) => {

            return <div className="row-span-3" key={element.url} >
                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} ImageUrl={!element.urlToImage ? "https://picsum.photos/seed/picsum/200/300" : element.urlToImage} newsUrl={element.url} author={!element.author?"Unknown":element.author} time={element.publishedAt}/>
            </div>


          })}
        </div>
        </InfiniteScroll>

        </div>
      
    )
  }
}

