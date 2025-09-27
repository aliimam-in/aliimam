import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
  fill?: string;
  size?: number;
  strokeWidth?: number;
  strokeLinecap?: "butt" | "round" | "square";
  strokeLinejoin?: "round" | "miter" | "bevel";
  variant?: "stroke" | "solid" | "duotone" | "twotone" | "bulk";
  strokeDasharray?: string;
  opacity?: number;
  className?: string;
  type?: string;  
}

export interface IconMetadata {
  name: string;
  category: string;
  tags: string[];
  description?: string;
  author?: string;
  created?: string;
  variants: ("stroke" | "solid" | "duotone" | "twotone" | "bulk")[];
}

export type IconComponent<P extends IconProps = IconProps> =
  React.ForwardRefExoticComponent<P & React.RefAttributes<SVGSVGElement>> & {
    metadata?: IconMetadata;
    displayName?: string;
  };

