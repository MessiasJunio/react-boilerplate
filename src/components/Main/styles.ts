import styled from 'styled-components'

const Wrapper = styled.main`
  background-color: #2c3531;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`
const Logo = styled.img`
  width: 35rem;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 3rem;
`

const Description = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
`

const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`

export { Wrapper, Logo, Title, Description, Illustration }
