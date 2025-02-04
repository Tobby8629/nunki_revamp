import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'

export const menu = [
    { name: 'Home', link: '/', mobileOnly: true },
    {
      name: 'products pricing', link: '', otherlink: [
        { name: 'Funeral Cover', link: '/products/funeral/insure' },
        { name: 'Teacher online', link: '/products/teacher_online' },
        { name: 'Shack Insurance', link: '/products/shack' },
        { name: 'Medical Advice', link: '/products/medical_advice' },
        { name: 'Repatriation of Mortal Remains', link: '/products/mortal_remains' },
      ], show: false,
    },
    { name: 'difference we make', link: '/differences', otherlink: [] },
    { name: 'T&Cs', link: '/terms', otherlink: [] },
    { name: 'Blogs', link: '/blogs', otherlink: [] },
    { name: 'Contact Us', link: '', otherlink: [
      { name: 'info@nunki.africa', link: 'mailto:info@nunki.africa', icon: faEnvelope },
      { name: '021 701 0874', link: 'tel:+27217010874', icon: faPhone },
      { name: 'Message Us', link: '/contact', icon: faTelegramPlane },
    ] },
 ]

 export const productLinks = [
  { name: 'Funeral Cover', link: '/products/funeral/insure' },
  { name: 'Teacher online', link: '/products/teacher_online' },
  { name: 'Shack Insurance', link: '/products/shack' },
  { name: 'medical advice', link: '/products/medical_advice' },
  { name: 'repatriation of mortal remains', link: '/products/mortal_remains' },
  { name: 'Merchant Insurance', link: '/products/merchant' },
  { name: 'Emergency Medical Response', link: '/products/emergencymedicalresponse' },
  {name: 'Trauma Counselling', link: '/products/trauma_counselling'},
  {name: 'Trauma, Assualt and HIV', link: '/products/clinic'},
  {name: 'Discount Funeral', link: '/products/discount_funeral'},
  
];