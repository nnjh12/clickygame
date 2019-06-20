import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Jumbo from "./components/Jumbo";
import ImageCard from "./components/Container"
import images from "./images.json"


class App extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    images: images,
    message: "Click on an image to earn points, but don't click on any more than once!",
    score: 0,
    topScore: 0,
    clicked: [],
  };

  click = id => {
    console.log("On Click Test")
    console.log(id)

    this.shuffleImage()

    let include = this.state.clicked.includes(id)
    let newClicked = this.state.clicked.concat(id)

    if (include) {
      this.setState(prevState => {
        return {
          message: "You've already clicked it before!",
          score: 0,
          clicked: []
        }
      });
    } else {
      this.setState(prevState => {
        return {
          clicked: newClicked,
          message: "You guessed correctly!",
          score: prevState.score + 1,
          topScore: prevState.topScore < prevState.score + 1 ? prevState.score + 1 : prevState.topScore
        }
      }, () => console.log(this.state.clicked))
    }
  };

  shuffleImage = () => {
    let randomArray = []
    let newImages = []
    for (let i = 0; randomArray.length < images.length; i++) {
      let randomNumber = Math.floor(Math.random() * images.length)
      if (!randomArray.includes(randomNumber)) {
        randomArray.push(randomNumber)
      }
    }
    for (let i=0; i<randomArray.length; i++){
      newImages.push(images[randomArray[i]])
    }
    this.setState(prevState => {
      return {
        images: newImages,
      }
    }, () => {console.log(this.state.images)});

  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <>
        <Nav message="Clicky Game" />
        <Jumbo
          head="Clicky Game!"
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="container text-center">
          {this.state.images.map(element => (
            <ImageCard
              id={element.id}
              key={element.id}
              name={element.name}
              src={element.image}
              onclick={this.click}
            />
          ))}
        </div>
      </>

    );
  }
}

export default App;
