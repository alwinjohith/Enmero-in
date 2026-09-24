import React from 'react';
import LegalPage from '../components/LegalPage.jsx';

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy">
      <section>
        <h2>What are cookies</h2>
        <p>
          Cookies are small text files stored on your device by a website. They are widely used to
          make websites work, or to make them work more efficiently, and to provide information to
          the owners of the site. Some cookies are essential for basic functions, while others help
          a site recognise you, remember your preferences, or measure how a site is used.
        </p>
      </section>

      <section>
        <h2>How this website uses cookies</h2>
        <p>
          This website does not currently set its own tracking or marketing cookies, and it does not
          include its own analytics tools. The only cookies that may be set on your device come from
          third-party services that are used to operate the website, as described below.
        </p>
      </section>

      <section>
        <h2>Essential cookies</h2>
        <p>
          Essential cookies are necessary for a website to provide core functions such as security
          and basic operation. At the time of writing, this website does not set cookies of its own.
          If we add a feature that requires essential cookies, this section will be updated.
        </p>
      </section>

      <section>
        <h2>Functional cookies</h2>
        <p>
          Functional cookies remember your preferences, such as language or display settings.
          This website does not currently use functional cookies. If such features are added in the
          future, this section will be updated to describe them.
        </p>
      </section>

      <section>
        <h2>Analytics cookies</h2>
        <p>
          Analytics cookies help website owners understand how visitors interact with a site.
          This website does not currently use analytics cookies and does not run its own analytics on
          visitors to the site.
        </p>
      </section>

      <section>
        <h2>Third-party cookies</h2>
        <p>
          Some third-party services used by this website may set cookies or collect information in
          line with their own policies:
        </p>
        <ul>
          <li><strong>Google Fonts.</strong> Fonts on this website are loaded from Google&apos;s servers, and Google may set cookies or collect data in line with its own policy.</li>
          <li><strong>Supabase.</strong> Our contact form storage provider may set cookies in line with its own policy.</li>
        </ul>
        <p>
          Enmero does not control the cookies set by third-party services. We recommend reviewing the
          privacy and cookie policies of these providers directly.
        </p>
      </section>

      <section>
        <h2>How you can manage cookies</h2>
        <p>
          You can control and delete cookies through your browser settings. Most browsers let you
          block new cookies, delete existing cookies, and ask before a website sets a cookie. How you
          do this depends on the browser and device you use, so please refer to your browser&apos;s help
          or settings. Please note that disabling cookies may affect how some websites, including this
          one, function.
        </p>
      </section>

      <section>
        <h2>Changes to this Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Any changes will be posted on this page
          with an updated &quot;Last updated&quot; date. Please review this page periodically to stay informed.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For any questions about this Cookie Policy, you can reach us through the contact form on our
          website at https://enmero.in. Cookie-related contact email:
          [COOKIE POLICY CONTACT EMAIL TO BE CONFIRMED]
        </p>
      </section>
    </LegalPage>
  );
}