import { dayLabels, restaurant } from "@/data/restaurant";
import type { DayKey, DayHours } from "@/types";

const dayKeys: DayKey[] = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function getZonedNow(timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  const weekday = get("weekday");
  const map: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  return {
    dayIndex: map[weekday] ?? 0,
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

function spansMidnight(hours: DayHours) {
  if (hours.closed) return false;
  const close = timeToMinutes(hours.close);
  return close === 0 || close < timeToMinutes(hours.open);
}

export function formatClock(time: string) {
  const [h, m] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(h, m, 0, 0);
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

export function formatDayHours(hours: DayHours) {
  if (hours.closed) return "Closed";
  return `${formatClock(hours.open)} – ${formatClock(hours.close)}`;
}

export function getTodayKey(timeZone = restaurant.timezone): DayKey {
  const { dayIndex } = getZonedNow(timeZone);
  return dayKeys[dayIndex];
}

export function getOpenStatus(timeZone = restaurant.timezone) {
  const now = getZonedNow(timeZone);
  const todayKey = dayKeys[now.dayIndex];
  const yesterdayKey = dayKeys[(now.dayIndex + 6) % 7];
  const today = restaurant.hours[todayKey];
  const yesterday = restaurant.hours[yesterdayKey];

  const isWithin = (hours: DayHours, minutes: number, overnightFromYesterday = false) => {
    if (hours.closed) return false;
    const open = timeToMinutes(hours.open);
    const close = timeToMinutes(hours.close);

    if (overnightFromYesterday) {
      if (close === 0) return false;
      return minutes < close;
    }

    if (spansMidnight(hours)) {
      return minutes >= open;
    }

    return minutes >= open && minutes < close;
  };

  const openNow =
    isWithin(today, now.minutes) || isWithin(yesterday, now.minutes, true);

  return {
    isOpen: openNow,
    todayKey,
    todayLabel: dayLabels[todayKey],
    todayHours: today,
    label: openNow ? "Open Now" : "Closed",
    hoursLabel: formatDayHours(today),
  };
}
