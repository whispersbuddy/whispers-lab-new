/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Process from "./components/Process";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import WhoIsThisFor from "./components/WhoIsThisFor";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AutomationServicePage from "./components/AutomationServicePage";
import SaaSMVPServicePage from "./components/SaaSMVPServicePage";
import EcommerceServicePage from "./components/EcommerceServicePage";
import AIIntegrationServicePage from "./components/AIIntegrationServicePage";
import GHLServicePage from "./components/GHLServicePage";
import N8NServicePage from "./components/N8NServicePage";
import ShopifySpeedServicePage from "./components/ShopifySpeedServicePage";
import { useScrollAnimations } from "./hooks/useScrollAnimations";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "automation" | "saas-mvp" | "ecommerce" | "ai-integration" | "ghl-setup" | "n8n-automation" | "shopify-speed">("home");

  // Load premium scroll animations globally
  useScrollAnimations();

  useEffect(() => {
    // Dynamic premium SVG favicon injector
    const link = document.querySelector("link[rel*='icon']") || document.createElement("link");
    (link as any).type = "image/svg+xml";
    (link as any).rel = "icon shortcut";
    (link as any).href = "/favicon.svg";
    document.getElementsByTagName("head")[0].appendChild(link);
  }, []);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#services/automation") {
        setCurrentView("automation");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (window.location.hash === "#services/automation/gohighlevel") {
        setCurrentView("ghl-setup");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (window.location.hash === "#services/automation/n8n") {
        setCurrentView("n8n-automation");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (window.location.hash === "#services/saas-mvp") {
        setCurrentView("saas-mvp");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (window.location.hash === "#services/saas-mvp/ai-integration") {
        setCurrentView("ai-integration");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (window.location.hash === "#services/shopify/speed-optimization") {
        setCurrentView("shopify-speed");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (window.location.hash === "#services/ecommerce") {
        setCurrentView("ecommerce");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else {
        setCurrentView("home");
      }
    };

    window.addEventListener("hashchange", handleHash);
    handleHash(); // Run check on initial load

    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleReturnHome = () => {
    window.location.hash = "";
  };

  return (
    <div className="min-h-screen bg-[#faf9f9]" id="root-view">
      <Navigation />
      
      {currentView === "home" ? (
        <>
          <Hero />
          <StatsBar />
          <TrustBar />
          <Services />
          <CaseStudies />
          <Process />
          <Team />
          <Testimonials />
          <WhoIsThisFor />
          <FAQ />
          <CTA />
        </>
      ) : currentView === "automation" ? (
        <AutomationServicePage handleNavigateHome={handleReturnHome} />
      ) : currentView === "ghl-setup" ? (
        <GHLServicePage handleNavigateHome={handleReturnHome} />
      ) : currentView === "n8n-automation" ? (
        <N8NServicePage handleNavigateHome={handleReturnHome} />
      ) : currentView === "saas-mvp" ? (
        <SaaSMVPServicePage handleNavigateHome={handleReturnHome} />
      ) : currentView === "ai-integration" ? (
        <AIIntegrationServicePage handleNavigateHome={handleReturnHome} />
      ) : currentView === "shopify-speed" ? (
        <ShopifySpeedServicePage handleNavigateHome={handleReturnHome} />
      ) : (
        <EcommerceServicePage handleNavigateHome={handleReturnHome} />
      )}
      
      <Footer />
    </div>
  );
}

