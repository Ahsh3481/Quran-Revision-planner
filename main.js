const surahs = [
  { name: "Al-Fatiha", page: 1 },
  { name: "Al-Baqarah", page: 2 },
  { name: "Aal-E-Imran", page: 50 },
  { name: "An-Nisa", page: 77 },
  { name: "Al-Maidah", page: 106 },
  { name: "Al-An'am", page: 128 },
  { name: "Al-A'raf", page: 151 },
  { name: "Al-Anfal", page: 177 },
  { name: "At-Tawbah", page: 187 },
  { name: "Yunus", page: 208 },
  { name: "Hud", page: 221 },
  { name: "Yusuf", page: 235 },
  { name: "Ar-Ra'd", page: 249 },
  { name: "Ibrahim", page: 255 },
  { name: "Al-Hijr", page: 262 },
  { name: "An-Nahl", page: 267 },
  { name: "Al-Isra", page: 282 },
  { name: "Al-Kahf", page: 293 },
  { name: "Maryam", page: 305 },
  { name: "Ta-Ha", page: 312 },
  { name: "Al-Anbiya", page: 322 },
  { name: "Al-Hajj", page: 332 },
  { name: "Al-Mu'minun", page: 342 },
  { name: "An-Nur", page: 350 },
  { name: "Al-Furqan", page: 359 },
  { name: "Ash-Shu'ara", page: 367 },
  { name: "An-Naml", page: 377 },
  { name: "Al-Qasas", page: 385 },
  { name: "Al-Ankabut", page: 396 },
  { name: "Ar-Rum", page: 404 },
  { name: "Luqman", page: 411 },
  { name: "As-Sajda", page: 415 },
  { name: "Al-Ahzab", page: 418 },
  { name: "Saba", page: 428 },
  { name: "Fatir", page: 434 },
  { name: "Ya-Sin", page: 440 },
  { name: "As-Saffat", page: 446 },
  { name: "Sad", page: 453 },
  { name: "Az-Zumar", page: 458 },
  { name: "Ghafir", page: 467 },
  { name: "Fussilat", page: 477 },
  { name: "Ash-Shura", page: 483 },
  { name: "Az-Zukhruf", page: 489 },
  { name: "Ad-Dukhan", page: 496 },
  { name: "Al-Jathiya", page: 499 },
  { name: "Al-Ahqaf", page: 502 },
  { name: "Muhammad", page: 507 },
  { name: "Al-Fath", page: 511 },
  { name: "Al-Hujurat", page: 515 },
  { name: "Qaf", page: 518 },
  { name: "Adh-Dhariyat", page: 520 },
  { name: "At-Tur", page: 523 },
  { name: "An-Najm", page: 526 },
  { name: "Al-Qamar", page: 528 },
  { name: "Ar-Rahman", page: 531 },
  { name: "Al-Waqia", page: 534 },
  { name: "Al-Hadid", page: 537 },
  { name: "Al-Mujadila", page: 542 },
  { name: "Al-Hashr", page: 545 },
  { name: "Al-Mumtahina", page: 549 },
  { name: "As-Saff", page: 551 },
  { name: "Al-Jumu'a", page: 553 },
  { name: "Al-Munafiqun", page: 554 },
  { name: "At-Taghabun", page: 556 },
  { name: "At-Talaq", page: 558 },
  { name: "At-Tahrim", page: 560 },
  { name: "Al-Mulk", page: 562 },
  { name: "Al-Qalam", page: 564 },
  { name: "Al-Haqqa", page: 566 },
  { name: "Al-Ma'arij", page: 568 },
  { name: "Nuh", page: 570 },
  { name: "Al-Jinn", page: 572 },
  { name: "Al-Muzzammil", page: 574 },
  { name: "Al-Muddaththir", page: 575 },
  { name: "Al-Qiyama", page: 577 },
  { name: "Al-Insan", page: 578 },
  { name: "Al-Mursalat", page: 580 },
  { name: "An-Naba", page: 582 },
  { name: "An-Nazi'at", page: 583 },
  { name: "Abasa", page: 585 },
  { name: "At-Takwir", page: 586 },
  { name: "Al-Infitar", page: 587 },
  { name: "Al-Mutaffifin", page: 587 },
  { name: "Al-Inshiqaq", page: 589 },
  { name: "Al-Buruj", page: 590 },
  { name: "At-Tariq", page: 591 },
  { name: "Al-Ala", page: 591 },
  { name: "Al-Ghashiya", page: 592 },
  { name: "Al-Fajr", page: 593 },
  { name: "Al-Balad", page: 594 },
  { name: "Ash-Shams", page: 595 },
  { name: "Al-Lail", page: 595 },
  { name: "Ad-Duhaa", page: 596 },
  { name: "Ash-Sharh", page: 596 },
  { name: "At-Tin", page: 597 },
  { name: "Al-Alaq", page: 597 },
  { name: "Al-Qadr", page: 598 },
  { name: "Al-Bayyina", page: 598 },
  { name: "Az-Zalzala", page: 599 },
  { name: "Al-Adiyat", page: 599 },
  { name: "Al-Qaria", page: 600 },
  { name: "At-Takathur", page: 600 },
  { name: "Al-Asr", page: 601 },
  { name: "Al-Humaza", page: 601 },
  { name: "Al-Fil", page: 601 },
  { name: "Quraysh", page: 602 },
  { name: "Al-Ma'un", page: 602 },
  { name: "Al-Kawthar", page: 602 },
  { name: "Al-Kafiroon", page: 603 },
  { name: "An-Nasr", page: 603 },
  { name: "Al-Masad", page: 603 },
  { name: "Al-Ikhlas", page: 604 },
  { name: "Al-Falaq", page: 604 },
  { name: "An-Nas", page: 604 }
];

const startSurahEl = document.getElementById("startSurah");
const endSurahEl = document.getElementById("endSurah");
const planEl = document.getElementById("plan");
const downloadBtn = document.getElementById("downloadCalendar");

surahs.forEach((s, idx) => {
  const option = document.createElement('option');
  option.value = idx;
  option.textContent = s.name;
  startSurahEl.append(option.cloneNode(true));
  endSurahEl.append(option);
});

startSurahEl.value = 0;
endSurahEl.value = surahs.length - 1;
document.getElementById("startDate").valueAsDate = new Date();

function findStartSurah(page) {
  const candidates = surahs.filter(s => s.page <= page);
  if (candidates.length === 0) return surahs[0];
  const exact = candidates.filter(s => s.page === page);
  if (exact.length > 0) return exact[0];
  return candidates[candidates.length - 1];
}

function findEndSurah(page) {
  const candidates = surahs.filter(s => s.page <= page);
  if (candidates.length === 0) return surahs[0];
  return candidates[candidates.length - 1];
}

let currentPlan = [];

document.getElementById("plannerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  planEl.innerHTML = "";
  currentPlan = [];

  const startDateValue = document.getElementById("startDate").value;
  const endDateValue = document.getElementById("endDate").value;
  if (!startDateValue || !endDateValue) return;

  const startDate = new Date(startDateValue);
  const endDate = new Date(endDateValue);
  if (endDate < startDate) {
    planEl.innerHTML = `<div class="alert alert-danger">End date must be on or after start date.</div>`;
    return;
  }

  const msPerDay = 1000 * 60 * 60 * 24;
  const days = Math.floor((endDate - startDate) / msPerDay) + 1;

  const startIdx = +startSurahEl.value;
  const endIdx = +endSurahEl.value;
  if (endIdx < startIdx) {
    planEl.innerHTML = `<div class="alert alert-danger">End Surah must come after (or be) Start Surah.</div>`;
    return;
  }

  const startPage = surahs[startIdx].page;
  const endPage = surahs[endIdx].page;
  const totalPages = endPage - startPage + 1;
  const pagesPerDay = Math.ceil(totalPages / days);

  let currentPage = startPage;
  let planHTML = "";

  for (let i = 0; i < days && currentPage <= endPage; i++) {
    const thisDate = new Date(startDate);
    thisDate.setDate(startDate.getDate() + i);
    const dayStr = thisDate.toDateString();

    const fromPage = currentPage;
    const toPage = Math.min(currentPage + pagesPerDay - 1, endPage);

    const fromSurah = findStartSurah(fromPage);
    const toSurah = findEndSurah(toPage);

    planHTML += `
      <div class="plan-day">
        <strong>${dayStr}</strong><br>
        Pages ${fromPage}–${toPage}<br>
        <small class="text-muted">Surah: ${fromSurah.name} → ${toSurah.name}</small>
      </div>
    `;

    currentPlan.push({
      date: thisDate,
      fromPage,
      toPage,
      fromSurahName: fromSurah.name,
      toSurahName: toSurah.name
    });

    currentPage = toPage + 1;
  }

  planEl.innerHTML = `
    <div class="plan-container">${planHTML}</div>
    <div class="mt-3 text-center alert alert-info">
      Total pages: <strong>${totalPages}</strong> | Days: <strong>${days}</strong><br>
      <strong>${pagesPerDay}</strong> page(s)/day
    </div>
  `;
});

function formatDateICS(date) {
  return date.toISOString().slice(0, 10).replace(/-/g, "");
}

downloadBtn.addEventListener("click", () => {
  if (currentPlan.length === 0) {
    alert("Please generate the plan first.");
    return;
  }

  let icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Quran Reading Planner//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
`;

  currentPlan.forEach((day, index) => {
    const startDate = new Date(day.date);
    const endDate = new Date(day.date);
    endDate.setDate(endDate.getDate() + 1); // ✅ FIX

    const dtStart = formatDateICS(startDate);
    const dtEnd = formatDateICS(endDate);

    icsContent += `BEGIN:VEVENT
UID:${Date.now()}-${index}@quran-plan
SUMMARY:Read pages ${day.fromPage}–${day.toPage} (${day.fromSurahName} → ${day.toSurahName})
DTSTART;VALUE=DATE:${dtStart}
DTEND;VALUE=DATE:${dtEnd}
DESCRIPTION:Quran reading plan for the day
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Reminder to read Quran
END:VALARM
END:VEVENT
`;
  });

  icsContent += "END:VCALENDAR";

  const blob = new Blob([icsContent], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "quran_reading_plan.ics";
  a.click();

  URL.revokeObjectURL(url);
});