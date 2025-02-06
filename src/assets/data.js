import { grey, ai, kids, funeral_cover } from "/public/images/blog/blog";
import {
  chat,
  cash,
  emergency,
  healthInsurance,
  medical,
  repatration,
  shackproduct,
  support,
  telemed,
  Tutor,
  funeral,
} from "../../public/images/productImage/ProductImage";
import { Dark } from "/public/images/dark/Dark";
import { light } from "/public/images/light/Light";

export const products = [
  {
    id: 3,
    name: "Shack Insurance",
    price: 56,
    lightImage: light?.Lshack,
    darkImage: Dark?.Dhouse,
    route: "/products/shack/insure",
    link: "/products/shack",
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
    id: 7,
    name: "Merchant Insurance",
    price: 208,
    lightImage: light?.shop,
    darkImage: Dark.shop,
    route: "/products/merchant/insure",
    link: "/products/merchant",
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
    id: 10,
    name: "Tele Medicine",
    price: 30,
    lightImage: light?.telemed,
    darkImage: Dark.telemed,
    route: "/products/tele_medicine/insure_",
    link: "/products/tele_medicine",
    value: "Tele Medicine",
    sub_name: "professional support just a call away",
    phone_number: "0861 113 527",
    text: ` Nunki’s Telemedicine has the goal of addressing
            healthcare access barriers faced by millions
            every day. Our solution provides patients with
            instant access to certified doctors in a costeffective, convenient, and user-friendly way. We
            believe that everyone should have access to
            quality healthcare services`,
    productImage: telemed,
    benefits: [
      {
        id: 0,
        benefit:
          " 4 Virtual healthcare consultations for the 12-month period with a medical doctor 24 hours per day 7 days per week.",
      },
      {
        id: 1,
        benefit:
          " Scripts at time of consult as indicated if needed or advise on what medication to dispense",
      },
      { id: 2, benefit: "6 facial scans." },
      { id: 3, benefit: "Sick notes as appropriate" },
      {
        id: 4,
        benefit: "Referral letters as appropriate for specialists/x-rays etc.",
      },
      {
        id: 5,
        benefit:
          "Patient may upload dependents (unlimited) who may use the consultations",
      },
      {
        id: 6,
        benefit:
          "Additional bundle of consultations may be purchased once the initial consults have been utilised",
      },
    ],
  },

  {
    id: 2,
    route: "/products/teacher_online/insure",
    link: "/products/teacher_online",
    name: "Teacher Online",
    sub_name: "professional support just a call away",
    phone_number: "0861 113 527",
    lightImage: light.LTutor,
    darkImage: Dark.DTutor,
    text: `At Nunki, we provide parents with the tools to support their children 
    in understanding the curriculum and offer additional support when necessary`,
    benefits: [
      {
        id: 0,
        benefit:
          "Summaries: Customized to the textbooks used by your child's school",
      },
      {
        id: 1,
        benefit: "Samplo Examinations: Aligned with the chosen textbook.",
      },
      {
        id: 2,
        benefit:
          "Heip with Speecnes; Assistance in writing effective speeches.",
      },
      {
        id: 3,
        benefit:
          "Assignments: Providing content and images required for assignments ",
      },
      {
        id: 4,
        benefit:
          "Literature: Ovorviews and comprohension tools for prescribed literature.",
      },
      {
        id: 5,
        benefit:
          "Mathematics: Step-by-step problem-solving guidance. terminology overviews. and practice sncels.",
      },
      {
        id: 6,
        benefit:
          "Languages: Comprehensive support for Afrikaans and English, including ptacuce sntels",
      },
    ],
    price: 225,
    productImage: Tutor,
  },

  {
    id: 0,
    route: "/products/mortal_remains/insure",
    link: "/products/mortal_remains",
    name: "Repatriation of Mortal Remains",
    sub_name: "professional support just a call away",
    phone_number: "0861 113 527",
    lightImage: light.Lrepatration,
    darkImage: Dark.Drepatration,
    text: `Arrangements for repatriating mortal remains from the incident location to a funeral facility nearest to 
    the subscriber's permanent residentiall address, within South Africa and neighboring countries, are provided.`,
    benefits: [
      { id: 0, benefit: "Guidance on claims" },
      { id: 1, benefit: "Referral to a funeral home" },
      { id: 2, benefit: "Access to a nationwide service provider database" },
      { id: 3, benefit: "Information on standard funeral practices" },
      { id: 4, benefit: "Management of repatriation cases" },
      {
        id: 5,
        benefit:
          "Coordination with next of kin for travel to the burial site with the service provider",
      },
      { id: 6, benefit: "Arrangement of accommodation for next of kin" },
    ],
    price: 490,
    productImage: repatration,
  },

  {
    id: 1,
    route: "/products/medical_advice/insure",
    link: "/products/medical_advice",
    name: "Medical Advice",
    sub_name: "professional support just a call away",
    phone_number: "0861 113 527",
    lightImage: light.Lmedical,
    darkImage: Dark.Dmedical,
    text: `At nunki, we ensure you have immediate access to qualified medical advice 24/7`,
    benefits: [
      {
        id: 0,
        benefit:
          "Symptom assessment and referral to the right healthcare professionals",
      },
      {
        id: 1,
        benefit:
          "Information on healticare, including home remedies, with follow-up calls",
      },
      {
        id: 2,
        benefit:
          "Explanation of medical terms, test results, and medication details",
      },
      {
        id: 3,
        benefit: "counseling for chronic diseases to reduce their daily impact",
      },
      {
        id: 4,
        benefit: "Access to South Africa's top drug and poison database.",
      },
      {
        id: 5,
        benefit:
          "Telephonic trauma debriefing and referral to a trauma counseior if necessary.",
      },
      {
        id: 6,
        benefit:
          "Access to an audio health library with information on various medical topics",
      },
    ],
    price: 225,
    productImage: medical,
  },

  {
    id: 4,
    name: "Funeral",
    price: 34,
    lightImage: light.Lfuneral,
    darkImage: Dark.Dfuneral,
    route: "/products/funeral/insure",
    link: "/products/funeral",
    value: "Funeral Cover",
    sub_name: "professional support just a call away",
    phone_number: "0861 113 527",
    text: ` our funeral service provide comprehensive assistance to ease the financial burden
    of funeral arrangement  In the unfortunate event of death , we ensure that  you and your loved ones 
    are protected from the often overwhemling cost associated with funerals. `,
    productImage: funeral,
    benefits: [
      {
        id: 0,
        benefit:
          " Immediate access to a 24-hour Emergency medical assistance Contact Centre",
      },
      {
        id: 1,
        benefit:
          "Aid provided by certified medical agents registered with the HPCSA",
      },
      {
        id: 2,
        benefit:
          "Swift dispatch of emergency medical services to deliver life-saving support.",
      },
      {
        id: 3,
        benefit:
          "Ongoing monitoring of the situation until the member reaches the hospital.",
      },
      {
        id: 4,
        benefit:
          "Provision of Emergency Pre-Arrival instructions by our trained agents, including CPR.",
      },
      {
        id: 5,
        benefit:
          "Emergency transportation facilitated via air or road ambulance",
      },
      {
        id: 6,
        benefit:
          "Upgrade to an appropriate medical facility to ensure continued care if the initial treating facility is unable to manage the member's condition",
      },
      {
        id: 7,
        benefit:
          " Repatriation of the member to a treatment facility closer to their residence if the incident occurs more than 200km away from the members place of residence",
      },
      {
        id: 8,
        benefit:
          "Access to non-emergency medical transportation at the member's own cost",
      },
      { id: 9, benefit: "Payment of medical transportation expenses" },
      {
        id: 10,
        benefit:
          "Access to the largest national network of emergency medical service providers.",
      },
      {
        id: 11,
        benefit:
          "Detailed daily, monthly, or quarterly reporting of Contact Centre interactions and claims statistics",
      },
    ],
    funeralSection: {
      section: ["A", "B", "C"],
      planA: {
        table1: {
          title:
            "The Member, Spouse and Children of the Member will benefit from the following cover: ",
          tableHeader: [" ", "family", "single"],
          tableBody: [
            {
              age: "principal Insured",
              family_premium: "R10000",
              single_premium: "R10000",
            },
            {
              age: "spouse",
              family_premium: "R10000",
              single_premium: "",
            },
            {
              age: "18 to 21years",
              family_premium: "R10000",
              single_premium: "",
            },
            {
              age: "14 to 17years",
              family_premium: "R5000",
              single_premium: "",
            },
            {
              age: "6 to 13years",
              family_premium: "R2500",
              single_premium: " ",
            },
            {
              age: "Birth to 5 years",
              family_premium: "R1250",
              single_premium: "",
            },
            {
              age: "stillborn",
              family_premium: "R300",
              single_premium: "",
            },
          ],
        },
        table2: {
          title:
            "Policy's total monthly premium based on thr principal life's age next birthday, at entry for either a family or single policy: ",
          tableHeader: [" ", "family", "single"],
          tableBody: [
            {
              age: "< 50",
              family_premium: "R50.00",
              single_premium: "R25.00",
            },
            {
              age: "51 - 55",
              family_premium: "R63.00",
              single_premium: "R32.00",
            },
            {
              age: "56 - 60",
              family_premium: "R86.00",
              single_premium: "R45.00",
            },

            {
              age: "61 - 65",
              family_premium: "R122.00",
              single_premium: "R66.00",
            },
          ],
        },
        table3: {
          title: `You may add up to 2 Extended Family Members to your Family Plan’s selected
                  option. Extended Family are automatically added to either Plan A, Plan B or Plan
                  C, based on which plan was selected for the Principle Insured. The table below
                  contains the cover amounts and premium amounts payable for each Extended
                  Family Member added to the policy:`,
          tableHeader: ["", "cover", "monthly premium"],
          tableBody: [
            {
              age: "61 to 65 years",
              cover: "R10000",
              monthly_premium: "R66",
            },
            {
              age: "56 to 60 years",
              cover: "R10000",
              monthly_premium: "R45",
            },
            {
              age: "51 to 55 years",
              cover: "R10000",
              monthly_premium: "R32",
            },
            {
              age: "39 to 50 years",
              cover: "R10000",
              monthly_premium: "R25",
            },
            {
              age: "22 to 40 years",
              cover: "R10000",
              monthly_premium: "R18",
            },
            {
              age: "18 to 21 years",
              cover: "R10000",
              monthly_premium: "R6",
            },
            {
              age: "14 to 17 years",
              cover: "R5000",
              monthly_premium: "R6",
            },
            {
              age: "6 to 13 years",
              cover: "R2500",
              monthly_premium: "R6",
            },
            {
              age: "Birth to 5 years",
              cover: "R1250",
              monthly_premium: "R6",
            },
          ],
        },
      },
      planB: {
        table1: {
          title:
            "The Member, Spouse and Children of the Member will benefit from the following cover:",
          tableHeader: [" ", "family", "single"],
          tableBody: [
            {
              age: "principal Insured",
              family_premium: "R20000",
              single_premium: "R20000",
            },
            {
              age: "spouse",
              family_premium: "R20000",
              single_premium: "",
            },
            {
              age: "18 to 21years",
              family_premium: "R20000",
              single_premium: "",
            },
            {
              age: "14 to 17years",
              family_premium: "R10000",
              single_premium: "R50.00",
            },
            {
              age: "6 to 13years",
              family_premium: "R5000",
              single_premium: "R50.00",
            },
            {
              age: "Birth to 5 years",
              family_premium: "R2500",
              single_premium: "R50.00",
            },
            {
              age: "stillborn",
              family_premium: "R600",
              single_premium: "R50.00",
            },
          ],
        },
        table2: {
          title:
            "Policy's total monthly premium based on thr principal life's age next birthday, at entry for either a family or single policy: ",
          tableHeader: [" ", "family", "single"],
          tableBody: [
            {
              age: "less than 50",
              family_premium: "R100.00",
              single_premium: "R50.00",
            },
            {
              age: "51 - 55",
              family_premium: "R126.00",
              single_premium: "R46.00",
            },
            {
              age: "56 - 60",
              family_premium: "R172.00",
              single_premium: "R90.00",
            },

            {
              age: "61 - 65",
              family_premium: "R245.00",
              single_premium: "R132.00",
            },
          ],
        },
        table3: {
          title: `You may add up to 2 Extended Family Members to your Family Plan’s selected
                  option. Extended Family are automatically added to either Plan A, Plan B or Plan
                  C, based on which plan was selected for the Principle Insured. The table below
                  contains the cover amounts and premium amounts payable for each Extended
                  Family Member added to the policy:`,
          tableHeader: ["", "cover", "monthly premium"],
          tableBody: [
            {
              age: "61 to 65 years",
              cover: "R20000",
              monthly_premium: "R132",
            },
            {
              age: "56 to 60 years",
              cover: "R20000",
              monthly_premium: "R90",
            },
            {
              age: "51 to 55 years",
              cover: "R20000",
              monthly_premium: "R64",
            },
            {
              age: "39 to 50 years",
              cover: "R20000",
              monthly_premium: "R50",
            },
            {
              age: "22 to 40 years",
              cover: "R20000",
              monthly_premium: "R37",
            },
            {
              age: "18 to 21 years",
              cover: "R20000",
              monthly_premium: "R12",
            },
            {
              age: "14 to 17 years",
              cover: "R10000",
              monthly_premium: "R12",
            },
            {
              age: "6 to 13 years",
              cover: "R5000",
              monthly_premium: "R12",
            },
            {
              age: "Birth to 5 years",
              cover: "R2500",
              monthly_premium: "R12",
            },
          ],
        },
      },
      planC: {
        table1: {
          title:
            "The Member, Spouse and Children of the Member will benefit from the following cover",
          tableHeader: ["", "family", "single"],
          tableBody: [
            {
              age: "principal Insured",
              family_premium: "R30000",
              single_premium: "R30000",
            },
            {
              age: "spouse",
              family_premium: "R30000",
              single_premium: "",
            },
            {
              age: "18 to 21years",
              family_premium: "R30000",
              single_premium: "",
            },
            {
              age: "14 to 17years",
              family_premium: "R15000",
              single_premium: "",
            },
            {
              age: "6 to 13years",
              family_premium: "R75000",
              single_premium: "",
            },
            {
              age: "Birth to 5 years",
              family_premium: "R3750",
              single_premium: "",
            },
            {
              age: "stillborn",
              family_premium: "R900",
              single_premium: "",
            },
          ],
        },
        table2: {
          title:
            "Policy's total monthly premium based on thr principal life's age next birthday, at entry for either a family or single policy: ",
          tableHeader: ["", "family", "single"],
          tableBody: [
            {
              age: "less than 50",
              family_premium: "R150.00",
              single_premium: "R75.00",
            },
            {
              age: "51 - 55",
              family_premium: "R189.00",
              single_premium: "R97.00",
            },
            {
              age: "56 - 60",
              family_premium: "R258.00",
              single_premium: "R136.00",
            },

            {
              age: "61 - 65",
              family_premium: "R367.00",
              single_premium: "R198.00",
            },
          ],
        },
        table3: {
          title: `You may add up to 2 Extended Family Members to your Family Plan’s selected
                  option. Extended Family are automatically added to either Plan A, Plan B or Plan
                  C, based on which plan was selected for the Principle Insured. The table below
                  contains the cover amounts and premium amounts payable for each Extended
                  Family Member added to the policy:`,
          tableHeader: ["", "cover", "monthly premium"],
          tableBody: [
            {
              age: "61 to 65 years",
              cover: "R30000",
              monthly_premium: "R198",
            },
            {
              age: "56 to 60 years",
              cover: "R30000",
              monthly_premium: "R136",
            },
            {
              age: "51 to 55 years",
              cover: "R30000",
              monthly_premium: "R97",
            },
            {
              age: "39 to 50 years",
              cover: "R30000",
              monthly_premium: "R75",
            },
            {
              age: "22 to 40 years",
              cover: "R30000",
              monthly_premium: "R55",
            },
            {
              age: "18 to 21 years",
              cover: "R30000",
              monthly_premium: "R18",
            },
            {
              age: "14 to 17 years",
              cover: "R15000",
              monthly_premium: "R18",
            },
            {
              age: "6 to 13 years",
              cover: "R7500",
              monthly_premium: "R18",
            },
            {
              age: "Birth to 5 years",
              cover: "R3750",
              monthly_premium: "R18",
            },
          ],
        },
      },
    },
  },

  {
    id: 5,
    name: "Emergency Medical Response",
    price: 30,
    lightImage: light.emergency,
    darkImage: Dark.emergency,
    route: "/products/emergencymedicalresponse/insure",
    link: "/products/emergencymedicalresponse",
    value: "Emergency Medical Response",
    sub_name: "professional support just a call away",
    phone_number: "0861 113 527",
    text: ` Nunki customers will have exclusive access to a
            national network of over 5,000 trained medical
            responders, ready to quickly respond to
            emergencies. Our 24-hour Assist center can be
            contacted anytime for urgent medical help and
            transportation coordination`,
    productImage: emergency,
    benefits: [
      {
        id: 0,
        benefit:
          " Immediate access to a 24-hour Emergency medical assistance Contact Centre",
      },
      {
        id: 1,
        benefit:
          "Aid provided by certified medical agents registered with the HPCSA",
      },
      {
        id: 2,
        benefit:
          "Swift dispatch of emergency medical services to deliver life-saving support.",
      },
      {
        id: 3,
        benefit:
          "Ongoing monitoring of the situation until the member reaches the hospital.",
      },
      {
        id: 4,
        benefit:
          "Provision of Emergency Pre-Arrival instructions by our trained agents, including CPR.",
      },
      {
        id: 5,
        benefit:
          "Emergency transportation facilitated via air or road ambulance",
      },
      {
        id: 6,
        benefit:
          "Upgrade to an appropriate medical facility to ensure continued care if the initial treating facility is unable to manage the member's condition",
      },
      {
        id: 7,
        benefit:
          " Repatriation of the member to a treatment facility closer to their residence if the incident occurs more than 200km away from the members place of residence",
      },
      {
        id: 8,
        benefit:
          "Access to non-emergency medical transportation at the member's own cost",
      },
      { id: 9, benefit: "Payment of medical transportation expenses" },
      {
        id: 10,
        benefit:
          "Access to the largest national network of emergency medical service providers.",
      },
      {
        id: 11,
        benefit:
          "Detailed daily, monthly, or quarterly reporting of Contact Centre interactions and claims statistics",
      },
    ],
  },

  {
    id: 8,
    name: "Trauma Counselling",
    price: 22,
    lightImage: light?.Lchat,
    darkImage: Dark.Dchat,
    route: "/products/trauma_counselling/insure",
    link: "/products/trauma_counselling",
    value: "Trauma Counselling",
    sub_name: "professional support just a call away",
    phone_number: "0861 113 527",
    text: `Nunki provides a complete range of Trauma
          Counseling services, designed to deliver prompt
          and effective support for individuals
          experiencing distress.`,
    productImage: chat,
    benefits: [
      { id: 0, benefit: " Telephonic Trauma Counselling (Qualified Nurse)" },
      {
        id: 1,
        benefit:
          " 24/7 telephonic trauma debriefing by qualified nurses, with referrals if needed.",
      },
      { id: 2, benefit: " Face-to-Face Trauma Counselling." },
      {
        id: 3,
        benefit:
          "If the nurse’s assessment indicates the need for professional assistance, a face-to-face counselling session will be arranged.",
      },
      {
        id: 4,
        benefit:
          "The caller will be referred to local social workers or psychologists for counselling sessions, with costs paid by the patient.",
      },
    ],
  },

  {
    id: 9,
    name: "Trauma, Assualt and HIV",
    price: 22,
    lightImage: light?.support,
    darkImage: Dark.support,
    route: "/products/clinic/insure",
    link: "/products/clinic",
    value: "Trauma, Assault and HIV",
    sub_name: "professional support just a call away",
    phone_number: "0861 113 527",
    text: `Nunki offers comprehensive Trauma, Assault,
          and HIV Support Services, providing emergency
          transportation to the nearest, most appropriate
          medical facility if needed. Our coverage ensures
          that individuals receive timely medical and
          psychological assistance in times of crisis.`,
    productImage: support,
    benefits: [
      {
        id: 0,
        benefit:
          " Emergency transport to the nearest, most appropriate medical facility if needed.",
      },
      {
        id: 1,
        benefit:
          " Assault cover: R5,000 per person, up to R10,000 per family per incident for medical treatment.",
      },
      {
        id: 2,
        benefit:
          "Trauma cover: R5,000 per person, up to R10,000 per family per incident for psychological consultations..",
      },
      {
        id: 3,
        benefit:
          "24-hour access to trauma counsellors for telephonic and post-traumatic stress disorder counselling.",
      },
      {
        id: 4,
        benefit:
          "Up to 3 specialist consultations per incident with a general practitioner, trauma nurse, or trauma counsellor.",
      },
      {
        id: 5,
        benefit:
          "Up to 3 HIV blood tests per incident: immediately after the event, at 6 weeks, and at 3 months. Further testing not covered if the initial test is positive.",
      },
      {
        id: 6,
        benefit:
          "Benefits include antiretroviral medication, STI medication,‘morning-after pill’ and ongoing counselling, provided exposure is confirmed and the member was HIV negative at the time of the incident.",
      },
    ],
  },

  {
    id: 11,
    name: "Discount Funeral",
    price: 350,
    lightImage: light?.cash,
    darkImage: Dark.cash,
    route: "/products/discount_funeral/insure",
    link: "/products/discount_funeral",
    value: "Discount Funeral",
    sub_name: "professional support just a call away",
    phone_number: "0861 113 527",
    text: `Arrangements for repatriating mortal remains
          from the incident location to a funeral facility
          nearest to the subscriber’s permanent residential
          address, within South Africa and neighboring
          countries, are provided`,
    productImage: cash,
    benefits: [
      {
        id: 0,
        benefit: " Members get 10% off tombstones with Doves Funeral Services.",
      },
      {
        id: 1,
        benefit:
          " Members get a R1000 discount when spending R7500 or more on coffins and funeral services with Doves Funeral Services.",
      },
      {
        id: 2,
        benefit:
          "Members get a R500 discount when spending between R4500 and R7499 on coffin and funeral services with Doves Funeral Services.",
      },
      {
        id: 3,
        benefit: "Members save 15% on funeral services and coffins at AVBOB.",
      },
      { id: 4, benefit: "Members save 10% with Net Florist." },
      {
        id: 5,
        benefit: "Members get 15% OFF all printing services with HI Colour.",
      },
      { id: 6, benefit: "Members get an 8% discount with Flowers.co.za." },
      { id: 7, benefit: "Rent with Europcar from as little as R185 per day" },
      {
        id: 8,
        benefit: "Members get a special Car Hire rate with First Car Rental",
      },
      { id: 9, benefit: "Members get a special Car Hire rate with Intercape" },
    ],
  },

  {
    id: 12,
    name: "Health Insurance",
    price: 200,
    lightImage: light.Ldoctor,
    darkImage: Dark.Ddoctor,
    route: "/products/health_insurance/insure",
    link: "/products/health_insurance",
    value: "Health Insurance",
    sub_name: "professional support just a call away",
    phone_number: "0861 113 527",
    text: ` At Nunki, we ensure you have immediate access
            to qualified medical advice 24/7`,
    productImage: healthInsurance,
    benefits: [
      {
        id: 0,
        benefit:
          " Access to all private hospitals accepting health insurance products. Pre-authorisation required.",
      },
      {
        id: 1,
        benefit:
          "R225 000 per Insured per event. Maximum of R1 000 000 per policy per annum.",
      },
      { id: 2, benefit: "Shortfall Benefit." },
      { id: 3, benefit: "ICU Benefit" },
      {
        id: 4,
        benefit:
          "R10 000 per Insured per event for physiotherapy and occupational therapy only.",
      },
      { id: 5, benefit: "Casualty (Accident) Benefit R30 000 per policy" },
      {
        id: 6,
        benefit:
          "Casualty (Illness) R15 000 per policy per annum for Emergency Stabilisation in the case of an Illness",
      },
      {
        id: 7,
        benefit:
          "2 GP consultations at a contracted network doctor per Insured",
      },
      {
        id: 8,
        benefit:
          "Defined list of procedures a Network GP can perform in their rooms at no additional charge",
      },
      {
        id: 9,
        benefit:
          " 3 visits per Insured for a defined list of procedures available from nurses at Network pharmacies with contracted clinics",
      },
      {
        id: 10,
        benefit:
          " Acute Medication R1 500 per Insured. Max R190 per script. Combined with OTC benefit ",
      },
      {
        id: 11,
        benefit:
          " Over-the-Counter Medication (OTC) Combined with in Acute Medicine Limit ",
      },
    ],
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
