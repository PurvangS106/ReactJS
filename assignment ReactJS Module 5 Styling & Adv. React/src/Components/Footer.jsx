import React from 'react'
import styled from "styled-components";

function Footer() {

    const Container = styled.div`
    padding: 0 30px;
    display: flex;
    justify-content: space-evenly;
    background: silver;
  `;
  const SmallText = styled.span`
    font-size: 1rem;
    color: black;
    text-align:left;
    font-weight: lighter;
    &:hover{
      color:goldenrod;
    }
    `;

  const Usermenu = styled.ul`
    width: 200px;
    font-size: 1.2rem;
    font-weight: bold;
  `;
  const Usermenulist = styled.li`
    padding: 8px 5px;
    list-style-type: none;
    cursor: pointer;
  `;
  const About = styled.div`
    width: 20%;
    text-align: justify;
  `;
  const Foot = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 15px 0px;
    background: black;
    color: white;
  `;

  return (
    <>
      <Container>
        <About>
          <h3>About Our Company</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            id deserunt accusamus odio repellendus aperiam ducimus, eaque culpa
            perferendis. Quod fuga temporibus eveniet similique voluptate est
            unde, odit beatae dignissimos?
          </p>
        </About>
        <div className="list">
          <Usermenu>
            Categories
            <Usermenulist>
              <SmallText>Cake & Milk</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>Coffes & Teas</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>Vegatables</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>Pet Foods</SmallText>
            </Usermenulist>       
          </Usermenu>
        </div>
        <div className="list">
          <Usermenu>
            Fav. Categories
            <Usermenulist>
              <SmallText>Cake & Milk</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>Coffes & Teas</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>Vegatables</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>Pet Foods</SmallText>
            </Usermenulist>          
          </Usermenu>
        </div>
        <div className="list">
          <Usermenu>
            Featured Categories
            <Usermenulist>
              <SmallText>Cake & Milk</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>Coffes & Teas</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>Vegatables</SmallText>
            </Usermenulist>
            <Usermenulist>
              <SmallText>Pet Foods</SmallText>
            </Usermenulist>
          </Usermenu>
        </div>
      </Container>
      <Foot>
        <b>&copy; Superman. Powered by NEST Grocessery Shop</b>
      </Foot>
    </>
  )
}

export default Footer