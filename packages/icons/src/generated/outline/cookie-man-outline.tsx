/**
 * Auto-generated logo component: Cookie Man Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CookieManOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CookieManOutlineLogo = React.forwardRef<SVGSVGElement, CookieManOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 2a5 5 0 0 1 2.845 9.112l.147 .369l1.755 -.803c.969 -.443 2.12 -.032 2.571 .918a1.88 1.88 0 0 1 -.787 2.447l-.148 .076l-2.383 1.089v2.02l1.426 1.425l.114 .125a1.96 1.96 0 0 1 -2.762 2.762l-.125 -.114l-2.079 -2.08l-.114 -.124a2 2 0 0 1 -.161 -.22h-.599q -.071 .114 -.16 .22l-.115 .125l-2.08 2.079a1.96 1.96 0 0 1 -2.886 -2.648l.114 -.125l1.427 -1.426v-2.019l-2.383 -1.09l-.148 -.075a1.88 1.88 0 0 1 -.787 -2.447c.429 -.902 1.489 -1.318 2.424 -.978l.147 .06l1.755 .803l.147 -.369a5 5 0 0 1 -2.15 -3.895v-.217a5 5 0 0 1 5 -5l-.005 0" />
  <path d="M12 16h.01" />
  <path d="M12 13h.01" />
  <path d="M10 7h.01" />
  <path d="M14 7h.01" />
  <path d="M12 9h.01" />
    </svg>
  )
);

CookieManOutlineLogo.displayName = "CookieManOutlineLogo";

export const CookieManOutlineLogoMetadata = {
  id: "cookie-man-outline",
  baseId: "cookie-man-outline",
  variant: "default",
  name: "Cookie Man Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CookieManOutlineLogo;
