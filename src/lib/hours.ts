import { BUSINESS_HOURS } from "./constants";

export type OpenStatus = {
  isOpen: boolean;
  label: string;
};

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

/** 表示用に "09:00" → "9:00" に整える */
function formatTime(hhmm: string) {
  return hhmm.replace(/^0/, "");
}

/** 現在時刻から営業中かどうかと表示文言を返す(祝日は考慮しない簡易版) */
export function getOpenStatus(now: Date): OpenStatus {
  const rule = BUSINESS_HOURS.find((r) =>
    (r.days as readonly number[]).includes(now.getDay()),
  );

  if (!rule) {
    return { isOpen: false, label: "本日は定休日です" };
  }

  const minutes = now.getHours() * 60 + now.getMinutes();
  const open = formatTime(rule.open);
  const close = formatTime(rule.close);

  if (minutes < toMinutes(rule.open)) {
    return { isOpen: false, label: `本日は ${open} から営業します` };
  }
  if (minutes < toMinutes(rule.close)) {
    return { isOpen: true, label: `本日営業中(〜${close})` };
  }
  return { isOpen: false, label: `本日の営業は終了しました(〜${close})` };
}
