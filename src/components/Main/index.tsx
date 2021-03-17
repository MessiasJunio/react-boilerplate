import * as S from './styles'

const Main = ({
  title = 'Advanced React',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Image of an atom and Advanced React written beside."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer in front of a screen with code."
    />
  </S.Wrapper>
)

export default Main
