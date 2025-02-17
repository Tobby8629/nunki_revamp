import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";
import { create, success } from "../../public/images/productImage/ProductImage";

export const menu = [
  { name: "Home", link: "/", mobileOnly: true },
  {
    name: "products pricing",
    link: "",
    otherlink: [
      { name: "Funeral Cover", link: "/products/funeral/insure" },
      { name: "Teacher online", link: "/products/teacher_online/insure" },
      { name: "Shack Insurance", link: "/products/shack/insure" },
      { name: "Medical Advice", link: "/products/medical_advice/insure" },
      {
        name: "Repatriation of Mortal Remains",
        link: "/products/mortal_remains/insure",
      },
    ],
    show: false,
  },
  { name: "difference we make", link: "/differences", otherlink: [] },
  { name: "T&Cs", link: "/terms", otherlink: [] },
  { name: "Blogs", link: "/blogs", otherlink: [] },
  {
    name: "Contact Us",
    link: "",
    otherlink: [
      {
        name: "info@nunki.africa",
        link: "mailto:info@nunki.africa",
        icon: faEnvelope,
      },
      { name: "021 701 0874", link: "tel:+27217010874", icon: faPhone },
      { name: "Message Us", link: "/contact", icon: faTelegramPlane },
    ],
  },
];

export const productLinks = [
  { name: "Funeral Cover", link: "/products/funeral/insure" },
  { name: "Teacher online", link: "/products/teacher_online/insure" },
  { name: "Shack Insurance", link: "/products/shack/insure" },
  { name: "medical advice", link: "/products/medical_advice/insure" },
  {
    name: "repatriation of mortal remains",
    link: "/products/mortal_remains/insure",
  },
  { name: "Merchant Insurance", link: "/products/merchant" },
  {
    name: "Emergency Medical Response",
    link: "/products/emergencymedicalresponse",
  },
  { name: "Trauma Counselling", link: "/products/trauma_counselling" },
  { name: "Trauma, Assualt and HIV", link: "/products/clinic" },
  { name: "Discount Funeral", link: "/products/discount_funeral" },
];

export const blog_points = [
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
    Join us, and experience the Nunki Difference—where every policy is a promise, and every benefit is a bridge to a brighter future.
    `,
  },
];

export const footerLinks = [
  {
    header: "products",
    links: [
      { name: "Funeral Cover", link: "/products/funeral/insure" },
      { name: "Teacher Online", link: "products/teacher_online/insure" },
      { name: "Shack Insurance", link: "/products/shack/insure" },
      { name: "Medical Advice", link: "/products/medical_advice/insure" },
      {
        name: "Emergency Medical Response",
        link: "/products/emergencymedicalresponse/insure",
      },
    ],
  },
  {
    header: "company",
    links: [
      { name: "About us", link: "/about" },
      { name: "Blogs", link: "/blogs" },
      { name: "Nunki difference", link: "/differences" },
    ],
  },
  {
    header: "Help",
    links: [
      { name: "FAQs", link: "/faqs" },
      { name: "Contact Us", link: "/contact" },
    ],
  },
];

export const Alert = (icon, title, text, background) => {
  Swal.fire({
    background: background,
    width: 300,
    position: "center",
    icon: icon,
    title: title,
    text: text,
    showConfirmButton: true,
  });
};

export const telemedSteps = {
  title: "How to get Telemedicine",
  benefits: [
        {
          id: 0,
          benefit: "Create your Nunki Profile",
          img: create,
        },
        {
          id: 1,
          benefit: "Accept Nunki Terms & conditions",
        },
        { 
          id: 2, 
          benefit: "Pay for your Telemedicine Product" 
        },
        { 
          id: 3, 
          benefit: 'Store Your Personalized token you receive safe it should look like "NUN838391"', 
          img: success
        },
        {
          id: 4,
          benefit: "Follow the link to our Telemedicine product where you can create your digital medical ID.",
        },
        {
          id: 5,
          benefit:
            "The rest is handled for you and you can start using the product",
        }
      ],
} 