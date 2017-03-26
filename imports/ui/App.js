import React from "react";

import TitleBar from "./TitleBar";
import AddPlayer from "./AddPlayer";
import PlayerList from "./PlayerList";

class App extends React.Component {
  render() {
    let { title, players } = this.props;
    return (
      <div>
        <TitleBar title={title} />
        <PlayerList players={players} />
        <AddPlayer />
      </div>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
};
export default App;
