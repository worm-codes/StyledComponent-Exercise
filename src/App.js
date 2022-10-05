import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header';
import GlobalStyles from './components/styles/Globals';
import Card from './components/Card';
import content from './content';

const theme = {
  colors: {
    header: ' #ebfbff ',
    body: ' #fff ',
    footer: ' # 003333 ',
  },
  mobile: '768px',
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, idx) => (
            <Card item={item} key={idx} />
          ))}
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
