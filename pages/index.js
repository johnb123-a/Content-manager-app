
import ResourceHighLight from "components/ResourceHighLight";
import ResourceList from "components/ResourceList";
import Newsletter from "components/Newsletter";
import Footer from "components/Footer";
import Layout from "components/Layout";


const Home = ({ resources }) => {
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

//is called at the build time, and it´s called only once
// export async function getStaticProps() {
//   const resData = await fetch("http://localhost:3000/api/resources")
//   const data = await resData.json();
//   return {
//     props: {
//       resources: data
//     }
//   }
// }

//Is called every time you will visit the page 
// function is executed on the server
export async function getServerSideProps() {

  const resData = await fetch("http://localhost:3000/api/resources")
  const data = await resData.json();
  return {
    props: {
      resources: data
    }
  }
}


export default Home;



