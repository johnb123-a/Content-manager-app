
import ResourceHighLight from "components/ResourceHighLight";
import ResourceList from "components/ResourceList";
import Newsletter from "components/Newsletter";
import Footer from "components/Footer";
import Layout from "components/Layout";



function Home({ resources }) {
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


export async function getServerSideProps() {

  const resData = await fetch("http://localhost:3001/api/resources")
  const data = await resData.json();
  return {
    props: {
      resources: data
    }
  }
}


export default Home;



