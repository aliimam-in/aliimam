const PhoneMenu = () => {
  const mainNav = [
    {
      title: "Store",
      items: [
        { label: "Shop the Latest", href: "#" },
        { label: "Mac", href: "#" },
        { label: "iPad", href: "#" },
        { label: "iPhone", href: "#" },
        { label: "Apple Watch", href: "#" },
        { label: "AirPods", href: "#" },
        { label: "Accessories", href: "#" },
      ],
    },
    {
      title: "Mac",
      items: [
        { label: "Explore All Mac", href: "#" },
        { label: "MacBook Air", href: "#" },
        { label: "MacBook Pro", href: "#" },
        { label: "iMac", href: "#" },
        { label: "Mac mini", href: "#" },
        { label: "Mac Studio", href: "#" },
        { label: "Mac Pro", href: "#" },
        { label: "Compare Mac", href: "#" },
      ],
    },
    {
      title: "iPad",
      items: [
        { label: "Explore All iPad", href: "#" },
        { label: "iPad Pro", href: "#" },
        { label: "iPad Air", href: "#" },
        { label: "iPad", href: "#" },
        { label: "iPad mini", href: "#" },
        { label: "Apple Pencil", href: "#" },
        { label: "Keyboards", href: "#" },
      ],
    },
    {
      title: "iPhone",
      items: [
        { label: "Explore All iPhone", href: "#" },
        { label: "iPhone 17 Pro", href: "#" },
        { label: "iPhone Air", href: "#" },
        { label: "iPhone 17", href: "#" },
        { label: "iPhone 16", href: "#" },
        { label: "iPhone 16e", href: "#" },
      ],
    },
    {
      title: "Watch",
      items: [
        { label: "Explore All Apple Watch", href: "#" },
        { label: "Apple Watch Series 11", href: "#" },
        { label: "Apple Watch SE 3", href: "#" },
        { label: "Apple Watch Ultra 3", href: "#" },
        { label: "Apple Watch Nike", href: "#" },
      ],
    },
    {
      title: "AirPods",
      items: [
        { label: "Explore All AirPods", href: "#" },
        { label: "AirPods 4", href: "#" },
        { label: "AirPods Pro 3", href: "#" },
        { label: "AirPods Max", href: "#" },
      ],
    },
    {
      title: "TV & Home",
      items: [
        { label: "Explore TV & Home", href: "#" },
        { label: "Apple TV 4K", href: "#" },
        { label: "HomePod", href: "#" },
        { label: "HomePod mini", href: "#" },
      ],
    },
    {
      title: "Entertainment",
      items: [
        { label: "Explore Entertainment", href: "#" },
        { label: "Apple One", href: "#" },
        { label: "Apple TV+", href: "#" },
        { label: "Apple Music", href: "#" },
        { label: "Apple Arcade", href: "#" },
      ],
    },
    {
      title: "Accessories",
      items: [
        { label: "Shop All Accessories", href: "#" },
        { label: "Made by Apple", href: "#" },
        { label: "Beats by Dr. Dre", href: "#" },
        { label: "AirTag", href: "#" },
      ],
    },
    {
      title: "Support",
      items: [
        { label: "iPhone Support", href: "#" },
        { label: "Mac Support", href: "#" },
        { label: "iPad Support", href: "#" },
        { label: "Watch Support", href: "#" },
        { label: "AirPods Support", href: "#" },
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
