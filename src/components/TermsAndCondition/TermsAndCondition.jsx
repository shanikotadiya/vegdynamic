import { motion } from "framer-motion";

export default function TermsAndCondition() {
  return (
    <div className="p-6 max-w-3xl mx-auto mt-lg-5 mb-lg-5">
      <motion.main
        className="container bg-white shadow-lg rounded-2xl p-lg-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg font-light leading-relaxed">
          <strong>Welcome to VISHAL ENGINEERS & GALVANIZERS Pvt. Ltd.</strong>
          (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;) govern
          your use of our website&nbsp;
          <a
            href="https://www.vegtower.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline ml-1"
          >
            www.vegtower.com
          </a>
          . By accessing or using the Site, you agree to comply with and be
          bound by these Terms. If you do not agree with any part of these
          Terms, please do not use the Site.
        </p>

        <motion.h3
          className="text-xl font-semibold mt-4"
          whileHover={{ scale: 1.01 }}
        >
          1. Use of the Site
        </motion.h3>
        <p className="m-0">
          We may collect the following types of information:
        </p>
        <ol
          className="list-disc pl-6 space-y-2"
          style={{ listStyleType: "lower-alpha" }}
        >
          <li>
            Eligibility: You must be at least 18 years old to use the Site. By
            using the Site, you represent that you are at least 18 years old.
          </li>
          <li>
            Forms: You agree to provide accurate, current, and complete
            information during the registration process and to update such
            information to keep it accurate, current, and complete.
          </li>
          <li>
            Account Security: The information shared in the forms in our website
            will never be disclose to third party or used for some other
            purpose.
          </li>
        </ol>

        <motion.h3
          className="text-xl font-semibold mt-4"
          whileHover={{ scale: 1.01 }}
        >
          2. Intellectual Property
        </motion.h3>
        <ol
          className="list-disc pl-6 space-y-2"
          style={{ listStyleType: "lower-alpha" }}
        >
          <li>
            All content, features, and functionality on the Site, including but
            not limited to text, graphics, logos, and images, are the exclusive
            property of VISHAL ENGINEERS & GALVANIZERS Pvt. Ltd. or its
            licensors and are protected by intellectual property laws.
          </li>
          <li>
            Limited License: b.We grant you a limited, non-exclusive,
            non-transferable license to access and use the Site for your
            personal, non-commercial use. You may not reproduce, distribute,
            modify, or create derivative works from any content on the Site
            without our prior written consent. 
          </li>
        </ol>

        <motion.h3
          className="text-xl font-semibold mt-4"
          whileHover={{ scale: 1.01 }}
        >
          3. User Conduct
        </motion.h3>
        <p className="mt-2">
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties except as described below:
        </p>
        <ol
          className="list-disc pl-6 space-y-2"
          style={{ listStyleType: "lower-alpha" }}
        >
          <li>
            Prohibited Activities: You agree not to engage in any of the
            following prohibited activities:
            <ol
              className="list-disc pl-6 space-y-2"
              style={{ listStyleType: "upper-roman" }}
            >
              <li>Using the Site for any unlawful purpose.</li>
              <li>Interfering with or disrupting the Site or servers. </li>
              <li>
                Attempting to gain unauthorized access to any part of the Site
                or its related systems or networks. 
              </li>
              <li>
                Posting or transmitting any content that is defamatory, obscene,
                or otherwise objectionable. 
              </li>
            </ol>
          </li>
        </ol>

        <motion.h3
          className="text-xl font-semibold mt-4"
          whileHover={{ scale: 1.01 }}
        >
          4. Third-Party Links
        </motion.h3>
        <ol
          className="list-disc pl-6 space-y-2"
          style={{ listStyleType: "lower-alpha" }}
        >
          <li>
            Links to Other Websites: The Site may contain links to third-party
            websites. We are not responsible for the content, privacy practices,
            or accuracy of any third-party sites. Your use of third-party sites
            is at your own risk.
          </li>
        </ol>

        <motion.h3
          className="text-xl font-semibold mt-4"
          whileHover={{ scale: 1.01 }}
        >
          5. Disclaimers and Limitation of Liability
        </motion.h3>
        <ol
          className="list-disc pl-6 space-y-2"
          style={{ listStyleType: "lower-alpha" }}
        >
          <li>
            Disclaimer of Warranties: The Site is provided “as is” and “as
            available” without any warranties of any kind, either express or
            implied. We disclaim all warranties, including but not limited to
            implied warranties of merchantability and fitness for a particular
            purpose.
          </li>
          <li>
            Limitation of Liability: To the fullest extent permitted by law, we
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising from or related to your
            use of the Site
          </li>
        </ol>

        <motion.h3
          className="text-xl font-semibold mt-4"
          whileHover={{ scale: 1.01 }}
        >
          6. Indemnification
        </motion.h3>
        <ol
          className="list-disc pl-6 space-y-2"
          style={{ listStyleType: "lower-alpha" }}
        >
          <li>
            Indemnity: You agree to indemnify, defend, and hold harmless VISHAL
            ENGINEERS & GALVANIZERS Pvt. Ltd. and its affiliates, officers,
            directors, employees, and agents from and against any claims,
            liabilities, damages, losses, and expenses, including reasonable
            attorneys&apos; fees, arising out of or related to your use of the Site
            or violation of these Terms.
          </li>
        </ol>

        <motion.h3
          className="text-xl font-semibold mt-4"
          whileHover={{ scale: 1.01 }}
        >
          7. Changes to These Terms
        </motion.h3>
        <ol
          className="list-disc pl-6 space-y-2"
          style={{ listStyleType: "lower-alpha" }}
        >
          <li>
            Modifications: We reserve the right to modify these Terms at any
            time. Any changes will be effective when we post the revised Terms
            on the Site. Your continued use of the Site after any such changes
            constitutes your acceptance of the new Terms.
          </li>
        </ol>

        <motion.h3
          className="text-xl font-semibold mt-4"
          whileHover={{ scale: 1.01 }}
        >
          8. Termination
        </motion.h3>
        <ol
          className="list-disc pl-6 space-y-2"
          style={{ listStyleType: "lower-alpha" }}
        >
          <li>
            Termination by Us: We reserve the right to terminate or suspend your
            access to the Site at any time, with or without cause, and with or
            without notice, for any reason, including if we believe you have
            violated these Terms.
          </li>
        </ol>

        <motion.h3
          className="text-xl font-semibold mt-4"
          whileHover={{ scale: 1.01 }}
        >
          9. Governing Law
        </motion.h3>
        <ol
          className="list-disc pl-6 space-y-2"
          style={{ listStyleType: "lower-alpha" }}
        >
          <li>
            Applicable Law: These Terms are governed by and construed in
            accordance with the laws of the state of Gujarat/India, without
            regard to its conflict of law principles. 
          </li>
        </ol>

        <motion.h3
          className="text-xl font-semibold mt-4"
          whileHover={{ scale: 1.01 }}
        >
          10. Changes to This Terms & Condition 
        </motion.h3>
        <p className="m-0 p-0">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us by 
        </p>
        <p className="p-0 m-0">Call: +91 9376866611</p>
        <p>
          Email:&nbsp;
          <a
            href="mailto:info@vegtower.com"
            className="text-blue-500 hover:underline ml-1"
          >
            info@vegtower.com
          </a>
        </p>
      </motion.main>
    </div>
  );
}
