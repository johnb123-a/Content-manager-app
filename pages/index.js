
import ResourceHighLight from "components/ResourceHighLight";
import ResourceList from "components/ResourceList";
import Newsletter from "components/Newsletter";
import Footer from "components/Footer";
import Layout from "components/Layout";

import { resources } from "api/data";

const Home = () => {
  return (
    <>
      <Layout>
        <ResourceHighLight resources={resources} />
        <Newsletter />
        <ResourceList resources={resources} />

        <Footer />
      </Layout>
    </>
  )
}

export default Home;



