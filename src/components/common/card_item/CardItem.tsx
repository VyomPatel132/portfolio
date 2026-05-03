'use client';

import { useMouseEnter } from "@/hooks";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef } from "react";

export const CardItem = React.forwardRef<HTMLDivElement, CardItemProps>(
  (
    {
      as: Tag = "div",
      children,
      className,
      translateX = 0,
      translateY = 0,
      translateZ = 0,
      rotateX = 0,
      rotateY = 0,
      rotateZ = 0,
      ...rest
    },
    ref,
  ) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const resolvedRef =
      (ref as React.MutableRefObject<HTMLDivElement | null>) || innerRef;
    const [isMouseEntered] = useMouseEnter();

    useEffect(() => {
      handleAnimations();
    }, [isMouseEntered]);

    const handleAnimations = () => {
      if (!resolvedRef.current) return;
      if (isMouseEntered) {
        resolvedRef.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
      } else {
        resolvedRef.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      }
    };

    return (
      <Tag
        ref={resolvedRef}
        className={cn("w-fit transition duration-200 ease-linear", className)}
        {...rest}
      >
        {children}
      </Tag>
    );
  },
);
