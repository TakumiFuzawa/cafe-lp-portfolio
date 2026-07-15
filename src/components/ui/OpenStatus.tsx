"use client";

import { useSyncExternalStore } from "react";
import { getOpenStatus } from "@/lib/hours";

/** 開店・閉店をまたいで開きっぱなしでも表示が古くならないよう毎分更新 */
function subscribe(onChange: () => void) {
  const timer = setInterval(onChange, 60_000);
  return () => clearInterval(timer);
}

/** スナップショットは安定比較できるようプリミティブ(文字列)で返す */
function getSnapshot() {
  const status = getOpenStatus(new Date());
  return `${status.isOpen ? "1" : "0"}${status.label}`;
}

/** サーバー(SSG)では時刻が確定しないため描画しない */
function getServerSnapshot() {
  return "";
}

/**
 * 「本日営業中(〜18:00)」などの営業ステータスバッジ。
 * 時刻依存のためSSGのHTMLには含めず、クライアントでのみ判定・表示する。
 */
export default function OpenStatus() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!snapshot) return null;

  const isOpen = snapshot.startsWith("1");
  const label = snapshot.slice(1);

  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium ${
        isOpen ? "bg-pine/10 text-pine-dark" : "bg-cream-dark text-muted"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-2 w-2 rounded-full ${isOpen ? "bg-pine" : "bg-muted/60"}`}
      />
      {label}
    </p>
  );
}
