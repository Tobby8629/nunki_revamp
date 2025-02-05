import React, { useEffect, useState } from "react";
import template from "../component/products/template.module.css";
import Contentstyle from "../component/Content/Content.module.css";
import Content from "../component/Content/Content";

const Difference = () => {
  const blog_points = [
    {
      id: 1,
      point_header: "The Nunki Difference",
      point_header_text: "Transforming Lives in Informal Communities",
      point_body: `At Nunki Africa, we understand that home is more than just a place—it’s a sanctuary, a space where life unfolds and memories are made. That’s why we’ve dedicated ourselves to protecting these havens and the personal treasures they hold.
      `,
    },
    {
      id: 2,
      point_header: "Insurance with a Heart",
      point_body: `In the heart of informal communities, where the rhythm of life beats 
      strongest, we bring a new kind of insurance—one that’s built on understanding, 
      not just underwriting. We recognize the unique challenges and needs of these 
      vibrant areas. Our insurance solutions for homes and personal property are 
      crafted to offer not just coverage, but comfort and peace of mind.
      `,
    },

    {
      id: 3,
      point_header: "Lifestyle Benefits That Matter",
      point_body: `We go beyond the policy. With Nunki Africa, insurance is just 
      the beginning. We bring lifestyle benefits that truly enhance the day-to-day 
      experiences of our clients. From educational support to health services, 
      we’re committed to enriching lives, not just insuring assets.`,
    },

    {
      id: 4,
      point_header: "Understanding the Unspoken",
      point_body: `We listen. We learn. We act. Our approach is rooted in a deep 
      understanding of what is essential to our clients. We’re not just in the 
      business of insurance; we’re in the business of empathy. By engaging with 
      the communities we serve, we tailor our products to resonate with their realities.
      `,
    },
    {
      id: 5,
      point_header: "Innovation as a Tradition",
      point_body: `he Nunki Difference is defined by our relentless pursuit of innovation. 
      We’re continually creating new products and services to meet the evolving needs of our
       clients. 
      Our team is always exploring, always discovering new ways to deliver value and security.`,
    },

    {
      id: 6,
      point_header: "our promise",
      point_header_text: "The Nunki difference",
      point_body: `We promise to be there, like the steadfast star Nunki, guiding our clients through the uncertainties of life. With Nunki Africa, 
      you’re not just insured; you’re understood, supported, and empowered.
      Join us, and experience the Nunki Difference—where every policy is a promise, and every benefit is a bridge to a brighter future.
      `,
    },
  ];
  return (
    <section className={template.section}>
      <div className={Contentstyle.wrapper}>
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
