/** @format */
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      articales: [],
      loading: false,
      totalResults: 0,
      page: 1,
    };
  }

  async oneFun(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2a6bcbda6c8b4723b462973cb9197992&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cb201e2d020b46c890e14d7c999c2a59&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    let newsData = await data.json();
    this.setState({
      articales: newsData.articles,
      totalResults: newsData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.oneFun();
  }

  previousFun = async () => {
    console.log("prev");
    this.setState({
      page: this.state.page - 1,
    });
    this.oneFun()
  };

  nextFun = async () => {
   
      this.setState({
        page: this.state.page + 1,
      });
      this.oneFun()
    }
  

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsToday - Top headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articales.map((elm) => {
              return (
                <div className="col md-4" key={elm.url}>
                  <NewsItem
                    title={!elm.title ? "" : elm.title.slice(0, 42)}
                    description={
                      elm.description ? elm.description.slice(0, 65) : ""
                    }
                    imgUrl={
                      elm.urlToImage
                        ? elm.urlToImage
                        : "https://www.investors.com/wp-content/uploads/2022/03/Stock-applelogocart-01-adobe.jpg"
                    }
                    detail={elm.url}
                    author={elm.author}
                    date = {elm.publishedAt}
                    source={elm.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark "
            disabled={this.state.page <= 1}
            onClick={this.previousFun}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.nextFun}
          >
            {" "}
            Next &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }
}
