import Contentstyle from "./Content.module.css";
import Content from "./Content";
import { blog_points } from "../../constants";
import PageWrapper from "../../component/Layout/pageWrapper/PageWrapper";

const Difference = () => {
  return (
    <PageWrapper className={Contentstyle.difference}> 
      <h2>What makes Nunki Different</h2>
      <div className={Contentstyle.textwrapper}>
          {blog_points?.map((points) => (
            <Content key={points?.id} blog={points} />
          ))}
      </div>
    </PageWrapper>
  );
};

export default Difference;
