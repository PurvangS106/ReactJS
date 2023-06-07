import React from 'react'
import styled from 'styled-components'

function Banner({img,title,price}) {

    const Wrapper = styled.div`
    height: 400px;
    margin: 2.5%;
    width: 45%;
    display: flex;
    justify-content: center;
    cursor: pointer;
  `;
  const CardTitle = styled.div`
    width:20%;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  `;
  const CardBody = styled.div`
    font-size: 1.1rem;
    width: 400px;
    & img {
      width: 100%;
      padding-top: 2.5%;
      height: 95%;
      mix-blend-mode: color-burn;
    }
  `;


  return (
    <Wrapper>
      <CardTitle>
        <h4>{title}</h4>
        <h3>Price: {price}</h3>
      </CardTitle>
      <CardBody>
        <img src= {img} alt=""/>
      </CardBody>
    </Wrapper>
  )
}

export default Banner