import React from "react";
import { Layout,Card,Input } from "../components";
import { useStaticQuery, graphql } from "gatsby";
// import { graphql } from "gatsby"

const ApplyGharwapasi = () => {
  const data = useStaticQuery(graphql`
  query My9Query {
    allStrapiExshow {
      nodes {
        title
        video
      }
    }
  }
`);
console.log(data)

  const formField = [
    {
      label: "Name",
      type: "text",
    },
    {
      label:"Mobile Number",
      type:"number",
    },
    {
      label:"Address",
      type:"textArea",
    },
    {
      label:"Aadhar Number",
      type:"number",
    },
    {
      label:"Aadhar Photo",
      type:"file",
    },
    {
      label:"Small video Talking about your story",
      type:"file",
    }

  ]
  return (
    <Layout>
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <form className="row g-3 needs-validation" novalidate>
               {formField.map((item,index)=>(
                  <Input key={index} label={item.label} type={item.type}/>
               ))}
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />
                    <label className="form-check-label" for="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
                <div className="row">

                {/* {data.allStrapiExshow.nodes.map((item,index)=>(
                <div className="col-md-6" key={index}>
                    <Card title={item.title} video={item.video} />
                </div>
                ))} */}
                </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ApplyGharwapasi;
