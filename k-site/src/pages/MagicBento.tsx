import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type MagicBentoProps = {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  enableTilt?: boolean;
  clickEffect?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  glowColor?: string; // "r, g, b"
  disableAnimations?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type Star = {
  id: number;
  top: string;
  left: string;
  size: number;
  blur: number;
  delay: number;
};

const DEFAULT_GLOW = "132, 0, 255";

const MagicBento: React.FC<MagicBentoProps> = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = false,
  clickEffect = true,
  spotlightRadius = 400,
  particleCount = 12,
  glowColor = DEFAULT_GLOW,
  disableAnimations = false,
  className = "",
  children,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const starsRef = useRef<HTMLDivElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [stars] = useState<Star[]>(() =>
    Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 2 + Math.random() * 3,
      blur: 1 + Math.random() * 3,
      delay: Math.random() * 2,
    }))
  );

  // Border glow + star twinkle animations
  useEffect(() => {
    if (disableAnimations) return;

    const ctx = gsap.context(() => {
      if (enableBorderGlow && containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          {
            boxShadow: `0 0 0 rgba(${glowColor}, 0.0)`,
          },
          {
            boxShadow: `0 0 45px rgba(${glowColor}, 0.4)`,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }
        );
      }

      if (enableStars && starsRef.current) {
        const starEls = starsRef.current.querySelectorAll<HTMLElement>(".magic-bento-star");
        gsap.to(starEls, {
          opacity: 0.4,
          duration: 1,
          repeat: -1,
          yoyo: true,
          stagger: {
            each: 0.15,
            from: "random",
          },
          ease: "sine.inOut",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [disableAnimations, enableBorderGlow, enableStars, glowColor]);

  // Spotlight & tilt
  useEffect(() => {
    if (!enableSpotlight && !enableTilt) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (!containerRef.current) return;

      setHasInteracted(true);

      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      if (enableSpotlight && spotlightRef.current) {
        const radiusPx = spotlightRadius;
        // Animate the spotlight position quickly for snappier hover response
        gsap.to(spotlightRef.current, {
          duration: 0.2,
          ease: "power2.out",
          // Use an onUpdate to recompute the gradient as it animates
          onUpdate: () => {
            if (!spotlightRef.current) return;
            spotlightRef.current.style.backgroundImage = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(${glowColor}, 0.55) 0, rgba(${glowColor}, 0.2) ${
              radiusPx / 3
            }px, transparent ${radiusPx}px)`;
          },
        });
      }

      if (enableTilt && !disableAnimations && containerRef.current) {
        const rotateX = ((y - rect.height / 2) / rect.height) * -12;
        const rotateY = ((x - rect.width / 2) / rect.width) * 12;

        gsap.to(containerRef.current, {
          rotateX,
          rotateY,
          transformPerspective: 900,
          transformOrigin: "center",
          duration: 0.4,
          ease: "sine.out",
        });
      }
    };

    const handlePointerLeave = () => {
      if (enableTilt && !disableAnimations && containerRef.current) {
        gsap.to(containerRef.current, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [enableSpotlight, enableTilt, spotlightRadius, glowColor, disableAnimations]);

  // Click pulse effect
  useEffect(() => {
    if (!clickEffect || disableAnimations) return;
    if (!containerRef.current) return;

    const handleClick = () => {
      if (!containerRef.current) return;
      gsap.fromTo(
        containerRef.current,
        { scale: 1 },
        {
          scale: 1.02,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power2.out",
        }
      );
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [clickEffect, disableAnimations]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {enableSpotlight && (
        <div
          ref={spotlightRef}
          className="absolute inset-0 transition-opacity duration-300 mix-blend-screen"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(${glowColor}, 0.4) 0, transparent ${spotlightRadius}px)`,
          }}
        />
      )}

      {enableStars && (
        <div ref={starsRef} className="absolute inset-0">
          {stars.map((star) => (
            <span
              key={star.id}
              className="magic-bento-star block rounded-full bg-white"
              style={{
                position: "absolute",
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: 0.6,
                filter: `blur(${star.blur}px)`,
              }}
            />
          ))}
        </div>
      )}

      {!textAutoHide || !hasInteracted ? (
        <div className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs md:text-sm text-white/60">
          {children ?? "Move your cursor to explore the magic ✨"}
        </div>
      ) : null}
    </div>
  );
};

export default MagicBento;

