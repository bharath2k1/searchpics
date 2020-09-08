import React from "react";
import axios from "axios";
import SearchBox from "./SearchBox";
import ImageList from "./ImageList";
import KEY from "./KEY";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: KEY,
      },
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBox onSubmit={this.onSearchSubmit} />
        <ImageList image={this.state.images} />
      </div>
    );
  }
}

export default App;
