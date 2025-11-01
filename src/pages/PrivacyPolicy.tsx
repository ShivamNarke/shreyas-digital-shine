import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
            <span className="gradient-text">Privacy</span> Policy
          </h1>
          
          <div className="space-y-8 text-muted-foreground animate-slide-up">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Introduction</h2>
              <p>
                At Shreyas Enterprises, we are committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy explains how we 
                collect, use, disclose, and safeguard your information when you visit our website 
                or use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Address and location information</li>
                <li>Payment and billing information</li>
                <li>Service preferences and requirements</li>
                <li>Communication records with our team</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide and maintain our services</li>
                <li>To process your orders and transactions</li>
                <li>To send you updates, promotions, and marketing communications</li>
                <li>To respond to your inquiries and support requests</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Data Protection</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect 
                your personal information from unauthorized access, disclosure, alteration, or 
                destruction. However, no method of transmission over the Internet is 100% secure, 
                and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may 
                share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Service providers who assist in our business operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners for joint services (with your consent)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. Cookies are small 
                files stored on your device that help us understand how you use our website and 
                improve our services. You can control cookie settings through your browser.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not 
                knowingly collect personal information from children. If you believe we have 
                collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last 
                Updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data 
                practices, please contact us at:
              </p>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p><strong>Email:</strong> info@shreyasenterprises.com</p>
                <p><strong>Phone:</strong> +91 123 456 7890</p>
                <p><strong>Address:</strong> Shreyas Enterprises, [Your Business Address]</p>
              </div>
            </section>

            <section className="pt-6 border-t border-border">
              <p className="text-sm">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
