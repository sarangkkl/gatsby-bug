import * as React from "react";
import { Layout, Crousal,Card } from "../components";

import { useStaticQuery, graphql } from "gatsby";

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allStrapiExshow {
        nodes {
          title
          video
        }
      }
    }
  `);
 
  return (
    <Layout>
      <main>
        <Crousal />
        <p className="text-center my-3">GHARWAPASI STORIES</p>
        <div className="container mt-3">
          <div className="row">
            {data.allStrapiExshow.nodes.map((item,index)=>(
              <div className="col-md-4" key={index}>
                <Card title={item.title} video={item.video} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
