import { grey, ai, kids, funeral_cover } from "/public/images/blog/blog";
import {
  shackproduct,
  telemed,
} from "../../public/images/productImage/ProductImage";
import { Dark } from "/public/images/dark/Dark";
import { light } from "/public/images/light/Light";

export const products = [
  {
    id: 1,
    name: "Shack Insurance",
    price: 56,
    lightImage: light?.Lshack,
    darkImage: Dark?.Dhouse,
    route: "/products/shack/insure",
    link: "/products/shack/insure",
    value: "Shack Insurance",
    productImage: shackproduct,
    sub_name: "professional support just a call away",
    phone_number: "",
    text: ` At Nunki we ensure you have immediate access to qualified insurance support for your home
    24/7`,
    benefits: [
      {
        id: 0,
        benefit:
          " covers the structure and contents of your home should it be destroyed in a fire, storm, wind  or flooding.",
      },
      {
        id: 1,
        benefit:
          "Claim settlement is through gift cards/vouchers. No cash Settlement will be allowed",
      },
      { id: 2, benefit: "compensation will be allowed as follows." },
      {
        id: 3,
        table_head: [
          "Insured Amount",
          "Building Benefit",
          "content Benefit",
          "monthly premium",
        ],
        table_body: [
          {
            insured_amount: "R6 000",
            building_benefit: "R2 400",
            content_benefit: "R3 600",
            monthly_premium: "R56",
          },
          {
            insured_amount: "R10 000",
            building_benefit: "R4 000",
            content_benefit: "R6 000",
            monthly_premium: "R96",
          },
          {
            insured_amount: "R15 000",
            building_benefit: "R6 000",
            content_benefit: "R9 000",
            monthly_premium: "R146",
          },
          {
            insured_amount: "R25 000",
            building_benefit: "R10 000",
            content_benefit: "R15 000",
            monthly_premium: "R196",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "Merchant Insurance",
    price: 208,
    lightImage: light?.shop,
    darkImage: Dark.shop,
    route: "/products/merchant/insure",
    link: "/products/merchant/insure",
    value: "Shack Insurance",
    sub_name: "professional support just a call away",
    phone_number: "",
    text: ` At Nunki we ensure you have immediate access to qualified insurance support for your home
    24/7`,
    productImage: shackproduct,
    benefits: [
      {
        id: 0,
        benefit:
          " covers the structure and contents of your home should it be destroyed in a fire, storm, wind  or flooding.",
      },
      {
        id: 1,
        benefit:
          "Claim settlement is through gift cards/vouchers. No cash Settlement will be allowed",
      },
      { id: 2, benefit: "compensation will be allowed as follows." },
      {
        id: 3,
        table_head: ["Insured Amount", "monthly premium"],
        table_body: [
          {
            insured_amount: "R50,000",
            monthly_premium: "R 208",
          },
          {
            insured_amount: "R100,000",
            monthly_premium: "R417",
          },
          {
            insured_amount: "R150,000",
            monthly_premium: "R625",
          },
          {
            insured_amount: "R200,000",
            monthly_premium: "R833",
          },
          {
            insured_amount: "250,000",
            monthly_premium: "R1042",
          },
          {
            insured_amount: "R300,000",
            monthly_premium: "R1250",
          },
          {
            insured_amount: "R400,000",
            monthly_premium: "R1667",
          },
          {
            insured_amount: "R500,000",
            monthly_premium: "R2083",
          },
        ],
      },
    ],
  },

  {
    id:3,
    name:"Tele Medicine",
    price:30,
    lightImage: light?.telemed,
    darkImage: Dark.telemed,
    route: '/products/tele_medicine/insure_',
    link: '/products/tele_medicine/insure_',
    value: 'Tele Medicine',
    sub: "What you get for R30?",
    sub_name: "professional support just a call away",
    phone_number: "0861 113 527",
    text: `The Nunki Healthcare Membership is a subscription-based service that provides access to a team of healthcare professionals`,
    productImage: telemed,
    benefits: [
      {id: 0, benefit:" 4 Virtual healthcare consultations for the 12-month period with a medical doctor 24 hours per day 7 days per week."}, 
      {id:1, benefit:" Scripts at time of consult as indicated if needed or advise on what medication to dispense"},
      {id:2, benefit:"6 facial scans."},
      {id: 3, benefit: "Sick notes as appropriate"},
      {id: 4, benefit: "Referral letters as appropriate for specialists/x-rays etc."},
      {id: 5, benefit: "Patient may upload dependents (unlimited) who may use the consultations"},
      {id: 6, benefit: "Additional bundle of consultations may be purchased once the initial consults have been utilised"},
    ]
  },
];

export const blogs = [
  {
    id: 100,
    img: grey,
    name: "The grey Economy in South Africa",
    summary:
      "Explore the vibrant yet informal grey economy through a minimalist aeril view of a bustling market of shacks highlighting the complex web of small-scale transactions",
    // blog_header: "The Vital Role of Insurance and Value-Added Benefits in Grey Economies",
    blog_header: "The gray Economy",
    blog_header_text:
      "In the shadowed corners of our global economy lie the grey areas—informal sectors where traditional financial services often fail to reach. Here, insurance isn’t just a policy; it’s a lifeline. It’s a promise of stability in an unstable world. For individuals in these regions, insurance and value-added benefits are not mere conveniences; they are essential tools for survival and growth.",
    blog_points: [
      {
        id: 1,
        point_header: "Insurance",
        point_header_text: "A shield Against uncertainity",
        point_body: `In grey economies, where the informal nature of transactions leads to a lack of financial security, insurance plays a critical role. 
        It acts as a shield against the unforeseen, providing a safety net that can catch individuals when they fall. 
        Whether it’s a natural disaster that wipes out a home or a sudden illness that drains savings, insurance helps to mitigate the financial shocks that can otherwise be devastating`,
      },
      {
        id: 2,
        point_header: "Value-Added Benefits",
        point_header_text: "Enhancing Quality of life",
        point_body: `Beyond the basic protection insurance offers, value-added benefits can significantly enhance the 
        quality of life for individuals in grey economies. These benefits often include access to healthcare,
         educational support, and even entrepreneurial assistance. They address the broader needs of individuals, 
        helping them not only to recover from setbacks but also to thrive and progress`,
      },

      {
        id: 3,
        point_header: "Creating Confidence and fostering Growth",
        point_body: `Insurance and value-added benefits create a sense of confidence among people in grey economies. 
        This confidence is crucial for encouraging investment and innovation. When individuals know they have a safety net, they are more likely to take risks, start new businesses, and invest in their futures. 
        This in turn, can stimulate economic growth and lift communities out of poverty.`,
      },

      {
        id: 4,
        point_header: "The Nunki Difference",
        point_header_text: "Tailored Solutions for Grey Economies",
        point_body: `At Nunki Africa, we understand the unique challenges faced by those living in grey economies.
         We don’t just offer insurance; we offer a partnership. Our tailored solutions are designed to meet the specific needs of these communities, 
        providing not just financial security but also the tools for sustainable development.`,
      },
      {
        id: 5,
        point_header: "conclusion",
        point_header_text: "Tailored Solutions for Grey Economies",
        point_body: `Insurance and value-added benefits are more than financial products; 
        they are catalysts for change. In grey economies, they provide the foundation upon 
        which individuals can build a brighter future. As we continue to innovate and tailor our services, we remain committed to making a difference, 
        ensuring that the light of opportunity reaches even the most informal of markets.`,
      },
    ],
  },

  {
    id: 200,
    img: funeral_cover,
    name: "Importance of Funeral cover",
    summary:
      "Explore the vibrant yet informal grey economy through a minimalist aeril view of a bustling market of shacks highlighting the complex web of small-scale transactions",
    blog_header:
      "The Vital Role of Insurance and Value-Added Benefits in Grey Economies",
    blog_header_text:
      "In the shadowed corners of our global economy lie the grey areas—informal sectors where traditional financial services often fail to reach. Here, insurance isn’t just a policy; it’s a lifeline. It’s a promise of stability in an unstable world. For individuals in these regions, insurance and value-added benefits are not mere conveniences; they are essential tools for survival and growth.",
    blog_points: [
      {
        id: 1,
        point_header: "Insurance",
        point_header_text: "A shield Against uncertainity",
        point_body: `In grey economies, where the informal nature of transactions leads to a lack of financial security, insurance plays a critical role. 
        It acts as a shield against the unforeseen, providing a safety net that can catch individuals when they fall. 
        Whether it’s a natural disaster that wipes out a home or a sudden illness that drains savings, insurance helps to mitigate the financial shocks that can otherwise be devastating`,
      },
      {
        id: 2,
        point_header: "Value-Added Benefits",
        point_header_text: "Enhancing Quality of life",
        point_body: `Beyond the basic protection insurance offers, value-added benefits can significantly enhance the 
        quality of life for individuals in grey economies. These benefits often include access to healthcare,
         educational support, and even entrepreneurial assistance. They address the broader needs of individuals, 
        helping them not only to recover from setbacks but also to thrive and progress`,
      },

      {
        id: 3,
        point_header: "Creating Confidence and fostering Growth",
        point_body: `Insurance and value-added benefits create a sense of confidence among people in grey economies. 
        This confidence is crucial for encouraging investment and innovation. When individuals know they have a safety net, they are more likely to take risks, start new businesses, and invest in their futures. 
        This in turn, can stimulate economic growth and lift communities out of poverty.`,
      },

      {
        id: 4,
        point_header: "The Nunki Difference",
        point_header_text: "Tailored Solutions for Grey Economies",
        point_body: `At Nunki Africa, we understand the unique challenges faced by those living in grey economies.
         We don’t just offer insurance; we offer a partnership. Our tailored solutions are designed to meet the specific needs of these communities, 
        providing not just financial security but also the tools for sustainable development.`,
      },
      {
        id: 5,
        point_header: "conclusion",
        point_header_text: "Tailored Solutions for Grey Economies",
        point_body: `Insurance and value-added benefits are more than financial products; 
        they are catalysts for change. In grey economies, they provide the foundation upon 
        which individuals can build a brighter future. As we continue to innovate and tailor our services, we remain committed to making a difference, 
        ensuring that the light of opportunity reaches even the most informal of markets.`,
      },
    ],
  },

  {
    id: 300,
    img: kids,
    name: "Unlocking kids potential",
    summary:
      "Explore the vibrant yet informal grey economy through a minimalist aeril view of a bustling market of shacks highlighting the complex web of small-scale transactions",
    blog_header:
      "The Vital Role of Insurance and Value-Added Benefits in Grey Economies",
    blog_header_text:
      "In the shadowed corners of our global economy lie the grey areas—informal sectors where traditional financial services often fail to reach. Here, insurance isn’t just a policy; it’s a lifeline. It’s a promise of stability in an unstable world. For individuals in these regions, insurance and value-added benefits are not mere conveniences; they are essential tools for survival and growth.",
    blog_points: [
      {
        id: 1,
        point_header: "Insurance",
        point_header_text: "A shield Against uncertainity",
        point_body: `In grey economies, where the informal nature of transactions leads to a lack of financial security, insurance plays a critical role. 
        It acts as a shield against the unforeseen, providing a safety net that can catch individuals when they fall. 
        Whether it’s a natural disaster that wipes out a home or a sudden illness that drains savings, insurance helps to mitigate the financial shocks that can otherwise be devastating`,
      },
      {
        id: 2,
        point_header: "Value-Added Benefits",
        point_header_text: "Enhancing Quality of life",
        point_body: `Beyond the basic protection insurance offers, value-added benefits can significantly enhance the 
        quality of life for individuals in grey economies. These benefits often include access to healthcare,
         educational support, and even entrepreneurial assistance. They address the broader needs of individuals, 
        helping them not only to recover from setbacks but also to thrive and progress`,
      },

      {
        id: 3,
        point_header: "Creating Confidence and fostering Growth",
        point_body: `Insurance and value-added benefits create a sense of confidence among people in grey economies. 
        This confidence is crucial for encouraging investment and innovation. When individuals know they have a safety net, they are more likely to take risks, start new businesses, and invest in their futures. 
        This in turn, can stimulate economic growth and lift communities out of poverty.`,
      },

      {
        id: 4,
        point_header: "The Nunki Difference",
        point_header_text: "Tailored Solutions for Grey Economies",
        point_body: `At Nunki Africa, we understand the unique challenges faced by those living in grey economies.
         We don’t just offer insurance; we offer a partnership. Our tailored solutions are designed to meet the specific needs of these communities, 
        providing not just financial security but also the tools for sustainable development.`,
      },
      {
        id: 5,
        point_header: "conclusion",
        point_header_text: "Tailored Solutions for Grey Economies",
        point_body: `Insurance and value-added benefits are more than financial products; 
        they are catalysts for change. In grey economies, they provide the foundation upon 
        which individuals can build a brighter future. As we continue to innovate and tailor our services, we remain committed to making a difference, 
        ensuring that the light of opportunity reaches even the most informal of markets.`,
      },
    ],
  },

  {
    id: 400,
    img: ai,
    name: "The power of AI",
    summary:
      "Explore the vibrant yet informal grey economy through a minimalist aeril view of a bustling market of shacks highlighting the complex web of small-scale transactions",
    blog_header:
      "The Vital Role of Insurance and Value-Added Benefits in Grey Economies",
    blog_header_text:
      "In the shadowed corners of our global economy lie the grey areas—informal sectors where traditional financial services often fail to reach. Here, insurance isn’t just a policy; it’s a lifeline. It’s a promise of stability in an unstable world. For individuals in these regions, insurance and value-added benefits are not mere conveniences; they are essential tools for survival and growth.",
    blog_points: [
      {
        id: 1,
        point_header: "Insurance",
        point_header_text: "A shield Against uncertainity",
        point_body: `In grey economies, where the informal nature of transactions leads to a lack of financial security, insurance plays a critical role. 
        It acts as a shield against the unforeseen, providing a safety net that can catch individuals when they fall. 
        Whether it’s a natural disaster that wipes out a home or a sudden illness that drains savings, insurance helps to mitigate the financial shocks that can otherwise be devastating`,
      },
      {
        id: 2,
        point_header: "Value-Added Benefits",
        point_header_text: "Enhancing Quality of life",
        point_body: `Beyond the basic protection insurance offers, value-added benefits can significantly enhance the 
        quality of life for individuals in grey economies. These benefits often include access to healthcare,
         educational support, and even entrepreneurial assistance. They address the broader needs of individuals, 
        helping them not only to recover from setbacks but also to thrive and progress`,
      },

      {
        id: 3,
        point_header: "Creating Confidence and fostering Growth",
        point_body: `Insurance and value-added benefits create a sense of confidence among people in grey economies. 
        This confidence is crucial for encouraging investment and innovation. When individuals know they have a safety net, they are more likely to take risks, start new businesses, and invest in their futures. 
        This in turn, can stimulate economic growth and lift communities out of poverty.`,
      },

      {
        id: 4,
        point_header: "The Nunki Difference",
        point_header_text: "Tailored Solutions for Grey Economies",
        point_body: `At Nunki Africa, we understand the unique challenges faced by those living in grey economies.
         We don’t just offer insurance; we offer a partnership. Our tailored solutions are designed to meet the specific needs of these communities, 
        providing not just financial security but also the tools for sustainable development.`,
      },
      {
        id: 5,
        point_header: "conclusion",
        point_header_text: "Tailored Solutions for Grey Economies",
        point_body: `Insurance and value-added benefits are more than financial products; 
        they are catalysts for change. In grey economies, they provide the foundation upon 
        which individuals can build a brighter future. As we continue to innovate and tailor our services, we remain committed to making a difference, 
        ensuring that the light of opportunity reaches even the most informal of markets.`,
      },
    ],
  },
];

export const pathsToHideFooter = [
  "/products/teacher_online/insure",
  "/products/teacher_online/insure/:form_link",
  "/products/medical_advice/insure",
  "/products/medical_advice/insure/:form_link",
  "/products/mortal_remains/insure",
  "/products/mortal_remains/insure/:form_link",
  "/products/shack/insure",
  "/products/shack/insure/:form_link",
  "/products/funeral/insure",
  "/products/merchant/insure",
  "/products/merchant/insure/:form_link",
  "products/emergencymedicalresponse/insure",
  "products/emergencymedicalresponse/insure/:form_link",
  "/products/trauma_counselling/insure",
  "/products/trauma_counselling/insure/:form_link",
  "/products/clinic/insure",
  "/products/clinic/insure/:form_link",
  "/products/discount_funeral/insure",
  "/products/discount_funeral/insure/:form_link",
  "/products/tele_medicine/insure",
];

export const TelemedInputs = [
  {
    name: "firstName",
    placeholder: "First name",
    headline: "First Name",
    page: "name",
    type: "textInput",
  },
  {
    name: "lastName",
    placeholder: "Last name",
    headline: "Last Name",
    page: "name",
    type: "textInput",
  },
  {
    name: "phoneNumber",
    placeholder: "Phone Number",
    headline: "Phone Number",
    page: "name",
    type: "phoneInput",
  },

  {
    name: "id_type",
    placeholder: "ID Type",
    headline: "ID Type",
    page: "identification",
    type: "dropdown",
    options: [
      {
        name: "Passport Number",
        value: "passport_number",
      },
      {
        name: "National ID Number",
        value: "national_id_number",
      },
    ],
  },

  {
    name: "id_number",
    placeholder: "ID Number",
    headline: "ID Number",
    type: "textInput",
    page: "identification",
  },

  {
    name: "email_Address",
    placeholder: "Email Address",
    headline: "Email Address",
    type: "textInput",
    page: "identification",
  },

  {
    name: "gender",
    placeholder: "Gender",
    headline: "Gender",
    page: "gender",
    type: "dropdown",
    options: [
      {
        name: "Male",
        value: "male",
      },
      {
        name: "Female",
        value: "female",
      },
    ],
  },

  {
    name: "dob",
    placeholder: "Date Of Birth",
    headline: "Date Of Birth",
    type: "textInput",
    page: "gender",
  },
];

// benefits: [
//   {
//     id: 0,
//     benefit:
//       " 4 Virtual healthcare consultations for the 12-month period with a medical doctor 24 hours per day 7 days per week.",
//   },
//   {
//     id: 1,
//     benefit:
//       " Scripts at time of consult as indicated if needed or advise on what medication to dispense",
//   },
//   { id: 2, benefit: "6 facial scans." },
//   { id: 3, benefit: "Sick notes as appropriate" },
//   {
//     id: 4,
//     benefit: "Referral letters as appropriate for specialists/x-rays etc.",
//   },
//   {
//     id: 5,
//     benefit:
//       "Patient may upload dependents (unlimited) who may use the consultations",
//   },
//   {
//     id: 6,
//     benefit:
//       "Additional bundle of consultations may be purchased once the initial consults have been utilised",
//   },
// ]
