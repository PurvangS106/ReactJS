import React from 'react'
import { BsFire } from 'react-icons/bs';
import styled from "styled-components";

function Header() {

    const Container = styled.div`
    &:nth-child(1) {
      position: sticky;
      top: -53px;
    }
  `;

  const SmallText = styled.span`
    font-size: 0.9rem;
    color: black;
    font-family: 'Segoe UI', Tahoma, Geneva, sans-serif;
    font-weight: bold;
    `;

  const Topheader = styled.div`
    padding: 0px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const Usermenu = styled.ul`
    display: flex;
    justify-content: center;
  `;
  const Usermenulist = styled.li`
    padding: 0px 10px;
    list-style-type: none;
    font-size: 1.15rem;
    margin: 0 5px;
    position: relative;
    cursor: pointer;
    &::after {
      height: 2px;
      position: absolute;
      content: "";
      width: 0%;
      background-color: black;
      left: 0px;
      bottom: -5px;
      width: 0%;
      transition: 0.5s;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
  `;
  const Optionlist = styled.select`
    border: none;
    font-weight: bold;
  `;

  const Navigation = styled.div`
    padding: 10px 30px;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background: blue  ;
  `;
  const Logo = styled.div`
    width: 20%;
    height: 60px;
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKdOBzzUxf1uUoU1Pq3LBhpY9GT7s22lswZw&usqp=CAU);
    background-repeat: no-repeat;
    background-size: contain;
  `;



  return (
    <Container>
      <Topheader>
        {/* <SmallText>Order Online or Call us on 1234567890</SmallText> */}
        <Usermenu>
            <Usermenulist> <SmallText>About us</SmallText></Usermenulist>
            <Usermenulist> <SmallText>My Account</SmallText></Usermenulist>
            <Usermenulist> <SmallText>Wish List</SmallText></Usermenulist>
        </Usermenu>
        <Usermenu>
          <Usermenulist><SmallText>Need Help? Call us 123456789</SmallText></Usermenulist>
          <Usermenulist><SmallText>
              <Optionlist>
                <option value="">
                  <SmallText>English</SmallText>
                </option>
                <option value="">
                  <SmallText>Gujarati</SmallText>
                </option>
                <option value="">
                  <SmallText>Hindi</SmallText>
                </option>
              </Optionlist>
            </SmallText>
          </Usermenulist>
          <Usermenulist><SmallText>
              <Optionlist>
                <option value="">
                  <SmallText>USD</SmallText>
                </option>
                <option value="">
                  <SmallText>EUR</SmallText>
                </option>
                <option value="">
                  <SmallText>CAD</SmallText>
                </option>
              </Optionlist>
            </SmallText>
          </Usermenulist>
         
        </Usermenu>
      </Topheader>
      <Navigation>
        <Logo>  </Logo>
        <Usermenu>
        <Usermenulist><BsFire/> Hot Deals</Usermenulist>
          <Usermenulist>Home</Usermenulist>
          <Usermenulist>About</Usermenulist>
          <Usermenulist>Shop</Usermenulist>
          <Usermenulist>Venders</Usermenulist>
          <Usermenulist>Mega Menu</Usermenulist>
          <Usermenulist>Blog</Usermenulist>
          <Usermenulist>Contact Us</Usermenulist>
        </Usermenu>
        <Usermenu>
          <Usermenulist>
            <b>CART: </b>0
          </Usermenulist>
        </Usermenu>
      </Navigation>
    </Container>
  )
}

export default Header