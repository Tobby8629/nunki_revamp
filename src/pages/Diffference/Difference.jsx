import template from "../../component/products/template.module.css";
import Contentstyle from "./Content.module.css";
import Content from "./Content";
import { blog_points } from "../../constants";

const Difference = () => {
  return (
    <section className={template.section}>
      <div className={`${Contentstyle.wrapper} main_section`}>
        <h2>What makes Nunki Different</h2>
        <div className={Contentstyle.textwrapper}>
          {blog_points?.map((points) => (
            <Content key={points?.id} blog={points} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Difference;
