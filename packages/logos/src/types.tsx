import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
  fill?: string;
  size?: 20 | number;
  strokeWidth?: 2 | number;
  strokeLinecap?: "butt" | "round" | "square";
  strokeLinejoin?: "round" | "miter" | "bevel"; 
  strokeDasharray?: string;
  opacity?: number;
  className?: string;
  type?: "stroke" | "icon" | string;
}

export interface IconMetadata {
  name: string;
  category: string;
  tags: string[];
  description?: string;
  author?: string;
  created?: string;
  type?: ("stroke" | "icon")[];
}

export type IconComponent<P extends IconProps = IconProps> =
  React.ForwardRefExoticComponent<P & React.RefAttributes<SVGSVGElement>> & {
    metadata?: IconMetadata;
    displayName?: string;
  };