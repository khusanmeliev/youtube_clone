import React, { useState } from "react";
import { Brand, Header, Icons, Image, Input, Profile } from "./styles";

import functions from "../images/functions.png";
import profileImg from "../images/profileImg.png";

const Search = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => setSearchTerm(event.target.value);

  const keyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  };

  return (
    <>
      <Header>
        <Brand href="/">
          <h1>YouTube</h1>
        </Brand>
        <Input
          type="text"
          fullWidth
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={keyPress}
        />

        <Icons>
          <Image src={functions} alt="functions" />
          <Profile>
            <img src={profileImg} alt="profile" />
          </Profile>
        </Icons>
      </Header>
    </>
  );
};

export default Search;
