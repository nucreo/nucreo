import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/nucreo/Layout";
import { Footer } from "@/components/nucreo/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4">404</h1>
          <p className="text-lg text-white/70 mb-6">Page not found</p>
          <a href="/" className="inline-flex items-center rounded-md bg-gradient-to-tr from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] px-5 py-3 font-semibold text-black">Return to Home</a>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default NotFound;
