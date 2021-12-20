import { Layout } from "components/layout";
import { LayoutProvider } from "components/layout/common";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LayoutProvider>
  );
}

export default MyApp;
