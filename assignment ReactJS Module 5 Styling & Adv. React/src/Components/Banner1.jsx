import React from 'react'
import styled from 'styled-components'

function Banner1({img}) {

    const Wrapper = styled.div`
    height: auto;
    margin: 10px 0px;
    width: 100%;
    /* background: silver; */
    display: flex;
    /* justify-content: center; */
    cursor: pointer;
  `;
  const CardBody = styled.div`
    font-size: 1.1rem;
    width: 100%;
    & img {
      width: 100%;
      height: 100%;
      mix-blend-mode: color-burn;
    }
  `;

  return (
    <Wrapper>
    <CardBody>
      <img src= {img} alt="" />
    </CardBody>
  </Wrapper>

  )
}

export default Banner1