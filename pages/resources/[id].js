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

export async function getServerSideProps(context) {

    const dataRes = await axios.get(`http://localhost:3001/api/resources/${context.params.id}`)
    const { data } = dataRes;
    return {
        props: {
            resource: data
        }
    }
}

export default ResourceDetail;