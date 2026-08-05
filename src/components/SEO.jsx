import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * High-performance SEO metadata component.
 * Directly updates DOM metadata elements on load to prevent external library overhead.
 */
export default function SEO({ title, description, schema }) {
  const location = useLocation();
  const baseUrl = "https://naturewisetrees.com";
  const canonicalUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // 1. Update Document Title
    const formattedTitle = title 
      ? `${title} | Nature Wise Tree Service` 
      : "Nature Wise Tree Service | Certified Arborists & Eco-Friendly Tree Care";
    document.title = formattedTitle;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || "Nature Wise Tree Service offers premium, eco-friendly arborist solutions. Certified experts in tree removal, precision trimming, stump grinding, and 24/7 emergency response. Free estimates!";

    // 3. Update Canonical Link tag
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;

    // 4. Update Open Graph (Social) Tags
    const updateOGTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };
    
    updateOGTag("og:title", formattedTitle);
    updateOGTag("og:description", metaDescription.content);
    updateOGTag("og:url", canonicalUrl);
    updateOGTag("og:type", "website");
    updateOGTag("og:image", "https://res.cloudinary.com/naturewisetrees/image/upload/v1/og_image.jpg");

    // 5. Update Twitter Card Tags
    const updateTwitterTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateTwitterTag("twitter:card", "summary_large_image");
    updateTwitterTag("twitter:title", formattedTitle);
    updateTwitterTag("twitter:description", metaDescription.content);
    updateTwitterTag("twitter:image", "https://res.cloudinary.com/naturewisetrees/image/upload/v1/og_image.jpg");

    // 6. Dynamic JSON-LD Structured Data Schema Insertion
    let schemaScript = document.getElementById("jsonld-structured-data");
    if (schemaScript) {
      schemaScript.remove();
    }
    
    if (schema) {
      schemaScript = document.createElement("script");
      schemaScript.id = "jsonld-structured-data";
      schemaScript.type = "application/ld+json";
      schemaScript.innerHTML = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

    // Cleanup: Remove structured data on unmount if any
    return () => {
      const script = document.getElementById("jsonld-structured-data");
      if (script) {
        script.remove();
      }
    };

  }, [title, description, schema, canonicalUrl]);

  return null;
}
