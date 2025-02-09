import React, { useState } from 'react';
import template from '../component/products/template.module.css'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const faqs = [
    {
      question: 'What types of insurance does Nunki offer?',
      answer: 'Nunki Insurance provides a wide range of insurance products, including auto, home, life, and business insurance. We cater to the unique needs of our customers and work with them to find the best coverage options.'
    },
    {
      question: 'How do I file a claim with Nunki?',
      answer: 'Filing a claim with Nunki is easy. You can either call our 24/7 claims hotline, submit a claim online through our customer portal, or contact your local Nunki agent. Our team will guide you through the process and ensure your claim is handled efficiently.'
    },
    {
      question: 'What is the process for getting a quote from Nunki?',
      answer: "Getting a quote from Nunki is simple. You can visit our website, call our customer service line, or schedule an appointment with a local agent. We'll ask you a few questions about your coverage needs and provide you with a personalized quote. Our agents are also available to discuss the details and help you choose the best policy."
    },
    {
      question: 'Does Nunki offer discounts on insurance policies?',
      answer: 'Yes, Nunki offers a variety of discounts to help our customers save money on their insurance premiums. Some of the common discounts include multi-policy, good driver, safety feature, and bundling discounts. Our agents can provide more information on the available discounts and how you can qualify.'
    },
    {
      question: 'How can I manage my Nunki insurance policy online?',
      answer: 'Nunki offers a convenient online customer portal where you can manage your insurance policy. Through the portal, you can view your policy details, make payments, file claims, and update your personal information. We also have a mobile app for easy access to your policy information on the go.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={template.section}>
      <div className={template.headerwrapper}>
        <h2 className={template.headerText}>Frequently Asked Questions</h2>
      </div>
      <div className={template.main}>
        <div className={template.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={template.faqItem}>
              <div
                className={`${template.faqHeader} ${
                  activeIndex === index ? template.active : ''
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h3>{faq.question}</h3>
                <span className={template.faqIcon}>
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <div className={template.faqContent}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;