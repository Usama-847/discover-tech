// utils/schema.js - Create this utility file
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.discovertech.com.pk/#organization",
  name: "Discover Tech",
  alternateName: "DiscoverTech",
  url: "https://www.discovertech.com.pk/",
  logo: {
    "@type": "ImageObject",
    url: "https://www.discovertech.com.pk/images/logo/logo.png",
    width: 50,
    height: 50,
  },
  description:
    "Discover Tech is a leading technology solutions company specializing in web development, mobile app development, and AI/ML/LLM-powered innovations.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rawalpindi",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Urdu"],
  },
  sameAs: [
    "https://twitter.com/DiscoverTech",
    "https://www.facebook.com/DiscoverTech",
    "https://www.linkedin.com/company/discovertech",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.discovertech.com.pk/#website",
  url: "https://www.discovertech.com.pk/",
  name: "Discover Tech",
  description:
    "Discover Tech builds modern digital products using web, mobile, AI, and LLM technologies.",
  publisher: {
    "@id": "https://www.discovertech.com.pk/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.discovertech.com.pk/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const bootcampSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Discover Tech Bootcamps",
  url: "https://www.discovertech.com.pk/bootcamp",
  description:
    "Professional training bootcamps in technology and digital skills",
  parentOrganization: {
    "@id": "https://www.discovertech.com.pk/#organization",
  },
};

// Generate course schema for individual bootcamp pages
export const generateCourseSchema = (courseName, courseUrl, description) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: courseName,
  url: courseUrl,
  description: description,
  provider: {
    "@type": "EducationalOrganization",
    name: "Discover Tech",
    url: "https://www.discovertech.com.pk/",
  },
  courseMode: "blended",
  inLanguage: "en",
});

// Generate breadcrumb schema
export const generateBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
