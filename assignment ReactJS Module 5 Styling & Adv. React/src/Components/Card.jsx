import React from 'react'
import styled from 'styled-components'

function Card({title,img}) {

    const Wrapper = styled.div`
        height: 200px;
        margin: 2.5%;
        width: 25%;
        display: flex;
        justify-content: center;
        padding: 10px;
        cursor: pointer;
    `;
    const CardTitle = styled.div`
        font-size: 2rem;
        font-weight: bold;
    `;
    const CardBody = styled.div`
    font-size: 1.1rem;
    width:fit-content;
    & img {
        width:100%;
        height: 100%;
    }
    `;

  return (
    <Wrapper>
            <CardTitle>
                <h4>{title.slice(0, 15)}</h4>
            </CardTitle>
            <CardBody>
                <img src={img} alt="" />
            </CardBody>
        </Wrapper>
  )
}

export default Card