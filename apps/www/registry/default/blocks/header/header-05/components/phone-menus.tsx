const PhoneMenu = () => {
  const mainNav = [
    {
      title: "Products",
      items: [
        { label: "New Arrivals", href: "#" },
        { label: "Best Sellers", href: "#" },
        { label: "Trending Now", href: "#" },
        { label: "Gift Ideas", href: "#" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Consulting", href: "#" },
        { label: "Custom Solutions", href: "#" },
        { label: "Training & Support", href: "#" },
        { label: "Maintenance Plans", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Partners", href: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", href: "#" },
        { label: "Guides & Tutorials", href: "#" },
        { label: "Webinars", href: "#" },
        { label: "Documentation", href: "#" },
      ],
    },
    {
      title: "Support",
      items: [
        { label: "Help Center", href: "#" },
        { label: "Contact Support", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Community Forums", href: "#" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
    {
      title: "Locations",
      items: [
        { label: "Find a Store", href: "#" },
        { label: "International Offices", href: "#" },
        { label: "Events", href: "#" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "Email Us", href: "#" },
        { label: "Request a Call", href: "#" },
        { label: "Live Chat", href: "#" },
      ],
    },
    {
      title: "Community",
      items: [
        { label: "Forums", href: "#" },
        { label: "Ambassadors", href: "#" },
        { label: "User Stories", href: "#" },
      ],
    },
    {
      title: "Extras",
      items: [
        { label: "Gift Cards", href: "#" },
        { label: "Promotions", href: "#" },
        { label: "Newsletter", href: "#" },
      ],
    },
  ];

  return (
    <nav className="flex flex-col py-6">
      {mainNav.map((item) => (
        <div key={item.title} className="border-b border-white/10">
          <button className="w-full px-6 py-3 text-left text-white text-sm hover:bg-white/5 transition-colors">
            {item.title}
          </button>
        </div>
      ))}
    </nav>
  );
};

export { PhoneMenu };
