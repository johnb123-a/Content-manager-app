import Layout from 'components/Layout'
import React from 'react'
import axios from "axios";
import ResourceForm from 'components/ResourceForm';

const ResourceEdit = ({ resource }) => {

    const updateResource = (formData) => {
        alert(JSON.stringify(formData))
    }

    return (
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <ResourceForm
                            initialData={resource}
                            onFormSubmit={updateResource}
                        />
                    </div>
                </div>
            </div>
        </Layout >
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

export default ResourceEdit;
