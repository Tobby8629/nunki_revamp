import { element } from "prop-types";
import React from "react";
const Home = React.lazy(() => import("./Home"));
const Blog = React.lazy(() => import("./Blog/Blog"));
const Difference = React.lazy(() => import("./Diffference/Difference"));
const ComingSoon = React.lazy(() =>
  import("../component/comingSoon/ComingSoon")
);
const Telemedicine = React.lazy(() => import("./Telemedicine/Telemedicine"));
const Screen = React.lazy(() => import("./Screen"));
const Result = React.lazy(() => import("./result"));
const Response = React.lazy(() => import("./response"));
const ContactUs = React.lazy(() => import("./ContactUs"));
const GetPrices = React.lazy(() => import("./GetPrices/GetPrices"));
const AboutUs = React.lazy(() => import("./AboutUs"));
const FAQ = React.lazy(() => import("./FAQ"));

export const routes = [
  {
    route: "/",
    element: Home,
  },

  {
    route: "/blogs",
    element: Blog,
  },
  {
    route: "/prices",
    element: GetPrices,
  },

  {
    route: "/differences",
    element: Difference,
  },

  {
    route: "/result",
    element: Result,
  },

  {
    route: "/response",
    element: Response,
  },

  {
    route: "/about",
    element: AboutUs,
  },

  {
    route: "/contact",
    element: ContactUs,
  },

  {
    route: "/faqs",
    element: FAQ,
  },

  {
    route: "/terms",
    element: ComingSoon,
  },

  // {
  //   route: "/blogs/:name",
  //   element: BlogContent,
  // },

  {
    route: "/products/shack/insure",
    element: ComingSoon,
  },

  {
    route: "/products/teacher_online/insure",
    element: ComingSoon,
  },

  {
    route: "/products/mortal_remains/insure",
    element: ComingSoon,
  },

  {
    route: "/products/funeral/insure",
    element: ComingSoon,
  },

  {
    route: "/products/merchant/insure",
    element: ComingSoon,
  },

  {
    route: "/products/medical_advice/insure",
    element: ComingSoon,
  },

  {
    route: "/products/emergencymedicalresponse/insure",
    element: ComingSoon,
  },

  // {
  //   route: "/products/trauma_counselling/insure",
  //   element: TraumaCounselling,
  // },

  // {
  //   route: "/products/discount_funeral/insure",
  //   element: DiscountFuneral,
  // },

  // {
  //   route: "/products/clinic/insure",
  //   element: TraumaAsult,
  // },

  {
    route: "/products/tele_medicine/insure",
    element: Telemedicine,
  },

  {
    route: "/products/tele_medicine/insure_",
    element: Screen,
  },

  // {
  //   route: "/products/shack/insure/:form_link",
  //   element: Shack,
  // },

  // {
  //   route: "/products/teacher_online/insure/:form_link",
  //   element: Tutor,
  // },

  // {
  //   route: "/products/mortal_remains/insure/:form_link",
  //   element: Reapatration,
  // },

  // {
  //   route: "/products/medical_advice/insure/:form_link",
  //   element: MedicalAdvice,
  // },

  // {
  //   route: "/products/merchant/insure/:form_link",
  //   element: Merchant,
  // },

  // {
  //   route: "/products/emergencymedicalresponse/insure/:form_link",
  //   element: EmergencyMedicalResponse,
  // },

  // {
  //   route: "/products/trauma_counselling/insure/:form_link",
  //   element: TraumaCounselling,
  // },

  // {
  //   route: "/products/discount_funeral/insure/:form_link",
  //   element: DiscountFuneral,
  // },

  // {
  //   route: "/products/clinic/insure/:form_link",
  //   element: TraumaAsult,
  // },
];
