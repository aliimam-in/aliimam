import React, { ReactNode, useEffect, useState } from "react";

// Shared type for children
interface ChildrenProps {
  children: ReactNode;
}

// Navigation Menu Components
const NavigationMenu: React.FC<ChildrenProps> = ({ children }) => (
  <nav className="relative z-50 flex items-center justify-center">
    {children}
  </nav>
);

const NavigationMenuList: React.FC<ChildrenProps> = ({ children }) => (
  <ul className="flex items-center justify-center space-x-1 list-none">
    {children}
  </ul>
);

interface NavigationMenuItemProps extends ChildrenProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({
  children,
  onMouseEnter,
  onMouseLeave,
}) => (
  <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    {children}
  </li>
);

interface NavigationMenuTriggerProps extends ChildrenProps {
  isActive?: boolean;
}

const NavigationMenuTrigger: React.FC<NavigationMenuTriggerProps> = ({
  children,
  isActive = false,
}) => (
  <button
    className={`inline-flex h-10 items-center justify-center px-4 py-2 text-xs transition-colors focus:outline-none ${
      isActive ? "text-background" : "text-background/90 hover:text-background"
    }`}
  >
    {children}
  </button>
);

interface NavigationMenuContentProps extends ChildrenProps {
  isOpen?: boolean;
}

const NavigationMenuContent: React.FC<NavigationMenuContentProps> = ({
  children,
  isOpen = false,
}) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true); // mount immediately
    } else {
      // delay unmount until after fade-out
      const timeout = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
   <div
      className={`fixed left-0 right-0 top-12 z-40 w-screen bg-foreground
        transform transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
      `}
    >
      <div className="w-full max-w-4xl mx-auto px-8 py-12">{children}</div>
    </div>
  );
};

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
};
