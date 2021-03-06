import * as S from './styles'

const Main = ({
  title = 'Stack',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Image of an atom and React Boilerplate written beside."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Image of a robot behind a notebook."
    />
  </S.Wrapper>
)

export default Main
