import Layout from "components/Layout";
import axios from "axios";

const ResourceDetail = ({ resource }) => {
    return (
        <Layout>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        <section className="section">
                            <div className="columns">
                                <div className="column is-8 is-offset-2">
                                    <div className="content is-medium">
                                        <h2 className="subtitle is-4">{resource.createdAT}</h2>
                                        <h1 className="title">{resource.title}</h1>
                                        <p>{resource.description}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </Layout>
    )

}

// I'ts called on the server and side on the client
// ResourceDetail.getInitialProps = async (context) => {
//     const dataRes = await axios.get(`http://localhost:3001/api/resources/${context.query.id}`)
//     const { data } = dataRes;
//     console.log(context)
//     return {
//         resource: data
//     }
// }

export async function getStaticPaths() {
    const dataRes = await axios.get(`http://localhost:3001/api/resources`)
    const { data } = dataRes;

    const paths = data.map(resource => {
        return {
            params: { id: resource.id }
        }
    })

    return {
        paths,
        //means that other routes should resolve into 404 page
        fallback: false
    }
}

export async function getStaticProps(context) {

    const dataRes = await axios.get(`http://localhost:3001/api/resources/${context.params.id}`)
    const { data } = dataRes;
    return {
        props: {
            resource: data
        }
    }
}

// export async function getServerSideProps(context) {

//     const dataRes = await axios.get(`http://localhost:3001/api/resources/${context.params.id}`)
//     const { data } = dataRes;
//     return {
//         props: {
//             resource: data
//         }
//     }
// }

export default ResourceDetail;