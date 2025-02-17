import React, { useState } from "react";
import template from "../../component/products/template.module.css";
import PageWrapper from "../../component/Layout/pageWrapper/PageWrapper";
import terms from "./Terms.module.css";

const Terms = () => {
  return (
    <PageWrapper>
      <section className={template.section}>
        <div className={template.headerwrapper}>
          <h2 className={template.headerText}>Disclaimer:</h2>
        </div>
        <div className={template.main}>
          <div className={terms.terms}>
            <p>
              I have been informed of my rights in terms of Policy Holder
              Protection Rules to have the following information disclosed to me
              before entering into any insurance, value added service and/or
              value-added products contract.
              <ol>
                <li>The Statutory Notice</li>
                <li>Intermediary Accreditation and Mandate Confirmation</li>
                <li>Mandatory Disclosures</li>
              </ol>
            </p>
            <p>
              I hereby apply for benefits and/or services stipulated in this
              document, subject to the terms and conditions of the policy and/or
              service agreement and I agree that this online application and
              declaration shall be the basis of the contract between me and the
              product provider.
            </p>
            <p>
              I hereby warrant that the answers and statements provided in this
              application are true and correct and that I have withheld no
              information whatsoever, which is material to or is likely to
              affect the assessment of the risk or service which is being
              applied for.
            </p>
            <p>
              I acknowledge that no representation made to me by an agent or
              employee of Nunki shall in anyway bind the product or service
              provider unless confirmed in writing by the product or service
              provider.
            </p>
            <p>
              I acknowledge that should any of my personal information and/or
              banking information change then it is my responsibility to ensure
              that Nunki are notified of the changes.
            </p>
            <p>
              I acknowledge that premium and/or service cost is due monthly in
              advance on the date chosen by me and if not received by Nunki,
              then this policy and/or service shall be deemed to have been
              cancelled at midnight on due date.
            </p>
            <p>
              Nunki undertakes to treat all information supplied by you and
              relating to your benefits strictly confidential. Nunki undertakes
              not to divulge to any party not signatory to this policy and/or
              service any information supplied by you and relating to your
              benefits without prior written consent from you except if required
              by law.
            </p>
            <p>
              I acknowledge that Nunki facilitates access to medical services
              provided by independent, registered healthcare practitioners in
              South Africa. We do not provide medical advice or services
              ourselves. All medical services are the sole responsibility of the
              treating practitioner. Nunki is not liable for any acts,
              omissions, or professional negligence of the healthcare
              practitioners.{" "}
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Terms;
