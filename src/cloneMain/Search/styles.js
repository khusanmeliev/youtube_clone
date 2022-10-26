import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 20px;
`;

export const Brand = styled.a`
  text-decoration: none;
`;

export const Input = styled.input`
  width: 50%;
  background-color: #121212;
  padding: 15px;
  border: none;
  font-size: 15px;
  color: #fff;
`;

export const Icons = styled.div``;

export const Image = styled.img``;

export const Profile = styled.a`
  margin-left: 20px;

  img {
    width: 40px;
    border-radius: 50px;
  }
`;
