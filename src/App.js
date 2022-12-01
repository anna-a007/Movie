import { Component } from "./core";
import './components';
import { movieService } from "./services/MovieService";


export class App extends Component {

  constructor() {
    super();

    this.state = {
      movies: [],
      searchValue: '',
      selectedCategory: ''
    }
  }

  componentDidMount() {
    movieService.getAllMovies()
      .then(({ data }) => {
        this.setState((state) => {
          return {
            ...state,
            movies: data
          }
        })
      })
  }

  render() {
    return (
      `
        <div id="shell">
          <it-header></it-header>
          ${this.state.movies.map((item) => {
            return `
                <movie-card>
                  title="${item.title}"
                  rating="${item.rating}"
                  poster="${item.poster}"
                </movie-card>`
          }).join('')}
        </div>
      `
    )
  }
}

customElements.define("my-app", App);
