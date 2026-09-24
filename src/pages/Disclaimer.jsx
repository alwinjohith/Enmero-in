import React from 'react';
import LegalPage from '../components/LegalPage.jsx';

export default function Disclaimer() {
  return (
    <LegalPage title="Disclaimer">
      <section>
        <h2>General information</h2>
        <p>
          The content on this website is provided for general information about Enmero and its
          services. It is not professional, legal, financial, or technical advice, and it should not
          be relied upon as such. Before acting on anything you read here, we recommend you contact
          us to discuss your specific situation.
        </p>
      </section>

      <section>
        <h2>Service information may change</h2>
        <p>
          The services, capabilities, and pricing described on this website may change at any time
          without notice. We make reasonable efforts to keep the site accurate, but we do not
          guarantee that the information shown is always current or complete. A written proposal or
          agreement takes precedence over the general descriptions on this website.
        </p>
      </section>

      <section>
        <h2>No guarantee of uninterrupted availability</h2>
        <p>
          We do not guarantee that this website will be available without interruption, free from
          errors, or free of harmful components. Access to the website may be suspended from time to
          time for maintenance, security, or other reasons.
        </p>
      </section>

      <section>
        <h2>Third-party links and services</h2>
        <p>
          This website may reference or link to third-party websites, tools, platforms, and services.
          These references are provided for convenience and information only. Enmero does not control
          these third parties and is not responsible for their content, products, or practices.
        </p>
      </section>

      <section>
        <h2>Limitation of responsibility for external websites</h2>
        <p>
          Links to external websites do not imply endorsement by Enmero. We are not responsible for
          the accuracy, privacy practices, security, or availability of any external website. You
          visit external sites at your own discretion and are subject to the terms of those sites.
        </p>
      </section>

      <section>
        <h2>No guarantee of specific business outcomes</h2>
        <p>
          We do not guarantee any specific business results or outcomes from our services. The success
          of any project depends on many factors that are outside our control, and results vary from
          project to project. Any expectations about outcomes should be discussed and agreed as part
          of a specific engagement.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For any questions about this disclaimer, you can reach us through the contact form on our
          website at https://enmero.in.
        </p>
      </section>
    </LegalPage>
  );
}