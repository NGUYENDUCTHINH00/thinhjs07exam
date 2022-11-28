import React, { Component } from "react";
import Result from "./Result";
import SearchBox from "./SearchBox";
import Spinner from "../img/spinner.gif";

class CharactersContainer extends Component {
  state = {};
  render() {
    let { profile, isLoading, handleSearchChange } = this.props;
    return isLoading ? (
      <img
        src={Spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt='Loading'
      />
    ) : (
      <>
        <SearchBox handleSearchChange={handleSearchChange} />

        <div className='row'>
          {profile.map((e, i) => (
            <Result
              id={e.char_id}
              key={i}
              name={e.name}
              actorname={e.portrayed}
              nickname={e.nickname}
              birthday={e.birthday}
              status={e.status}
              img={e.img}
            />
          ))}
        </div>
      </>
    );
  }
}

export default CharactersContainer;
