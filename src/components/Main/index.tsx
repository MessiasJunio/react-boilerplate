import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Image of an atom and Advanced React written beside."
    />
    <S.Title>Advanced React</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer in front of a screen with code."
    />
  </S.Wrapper>
)

export default Main
