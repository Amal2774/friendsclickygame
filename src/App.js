import React, { Component } from "react";
import Card from "./components/card"
import friends from "./friends.json"
import Navbar from "./components/navbar";
import Footer from "./components/card";
import Wrapper from "./components/wrapper";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
  };

render () {
  return (
    <div>
      <Navbar />
      <Wrapper>
        {this.state.friends.map(friends => (
          <Card
            id={friends.id}
            // image={friends.image}
          />
        ))}
      </Wrapper>
      <Footer />
    </div>
  );
}
}

export default App;