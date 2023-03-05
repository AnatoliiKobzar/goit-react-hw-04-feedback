import { Feedback } from './Feedback/Feedback';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <Feedback />
      <GlobalStyle />
    </Layout>
  );
};
