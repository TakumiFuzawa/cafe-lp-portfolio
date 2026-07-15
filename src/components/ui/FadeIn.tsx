"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** 表示開始の遅延(秒)。カードを順番に出したいときに使う */
  delay?: number;
  className?: string;
};

/**
 * スクロールして画面内に入ったら子要素をフェードインさせる。
 * prefers-reduced-motion 時は CSS 側で即時表示にフォールバックする。
 */
export default function FadeIn({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in ${visible ? "is-visible" : ""} ${className}`}
      style={delay > 0 ? { "--fade-delay": `${delay}s` } as React.CSSProperties : undefined}
    >
      {children}
    </div>
  );
}
