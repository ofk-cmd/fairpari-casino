# ТЗ на контент FairPari · fairpari-casino-uz.com

**Версия:** 2026-06-16  
**Проект:** `fairpari-casino-uz-com`  
**Роль сайта:** независимый информационный портал о казино FairPari (не оператор, депозиты не принимает)  
**Языки:** UZ (корень `/`) + RU (`/ru/`)  
**Официал оператора:** `fairpari.com/uz`  
**Промокод:** `fa_1635`

Машиночитаемая карта страниц: [`content-tz-pages.json`](content-tz-pages.json)

---

## 1. Анализ референсов: как описан бренд

### 1.1 fairpari-betting.com (betting-профиль)

**Позиционирование:** «FairPari bukmeker O'zbekiston» — спорт + казино в одном приложении.

**Сильные стороны:**
- Понятная структура: о бренде → преимущества → регистрация → APK/iOS → бонусы → платежи → спорт → казино → FAQ.
- Пошаговые инструкции по APK и PWA (Android 6+, RAM 2 GB, Safari «Uy ekraniga»).
- Таблица сравнения «приложение vs мобильный сайт».
- Честные дисклеймеры: 18+, «ma'lumot xususiy», «oyinlar moliyaviy xavf».

**Слабые стороны (что не копировать):**
- Keyword stuffing: «fairpari bet», «fairpari casino», «fairpari registration» в каждом абзаце.
- Размытые цифры: «yuzlab slotlar» вместо проверяемых 12 000+.
- Нет номера лицензии, нет wagering ×35, нет max bet при отыгрыше.
- Нет блока «плюсы / минусы» и редакционной позиции «не реклама».
- Спорт занимает ~40% контента — для **fairpari-casino-uz.com** это лишний интент.

**Тон:** SEO-лендинг под ключи, не редакционный гид.

---

### 1.2 fairpari-uzbek.com (эталон affiliate-обзора)

**Позиционирование:** «O'zbekiston o'yinchilari uchun kazino va bukmeker qo'llanmasi» — полный справочник.

**Сильные стороны (брать за основу):**
- **Паспорт бренда** — таблица с fairpari.com/uz, языками, UZS, 12 000+ игр, 53 спорта, лицензией OGL/2024/1143/0865, welcome 19.5M+150 FS / sport 1.3M.
- Конкретные таблицы бонусов: 4 депозита, wagering ×35, 7 kun, max bet.
- Локальные платежи: Humo, Uzcard, Click, Payme, Piastrix, kripto — с сроками.
- Регистрация 4 способами (bir klik, telefon, email, ijtimoiy).
- Блок «Yaxshi / E'tibor berish kerak» — баланс, не «5/5 рейтинг».
- FAQ с ответами, а не ключами.
- Явный disclaimer: «mustaqil axborot portali», «depozit qabul qilmaydi».

**Слабые стороны (улучшить у нас):**
- Hero дублирует «kazino va bukmeker» — на **fairpari-casino-uz.com** только казино.
- Welcome 19.5M vs актуальные 20.2M на официале — нужна единая fact-sheet.
- Спорт-блоки (53 sport, sport welcome) не нужны на casino-only домене.
- Ticker с выигрышами — допустим, но без ощущения «гарантированного дохода».
- Местами переспам «авиатор + бренд» / внутренние SEO-формулировки.

**Тон:** ближе к журналу/гиду для игрока, чем у betting.com.

---

### 1.3 fairpari-casino-uz.com (наш текущий контент)

**Позиционирование:** casino-only multipage — 16 URL × 2 языка.

**Что уже лучше референсов:**
- Глубина: отдельные страницы slotlar, live, crash, KYC, zerkalo, yechish.
- SEO-expansion с таблицами, баннерами, step-flow.
- Явное «sport bo'limi qamrab olinmaydi» в seo-block-7.
- Лицензия и KYC вынесены в отдельные URL.

**Что хуже / исправить по этому ТЗ:**
- Наследие one-pager: в `landing-content-pack.json` остались sport nav, «kazino va bukmeker qo'llanmasi», stats «53 sport».
- Механический тон seo-block («Fairpari kazino ekotizimi», «seo-block-N» в якорях для людей).
- Дубли `<strong><strong>`, повтор wagering в каждом блоке.
- Расхождение 19.5M / 20.2M между слоями контента.
- RU-версия частично калькирует UZ без адаптации синтаксиса.

---

## 2. Сравнительная таблица описания бренда

| Критерий | fairpari-betting.com | fairpari-uzbek.com | fairpari-casino-uz.com (цель) |
|----------|---------------------|-------------------|--------------------------------|
| Фокус | Спорт + казино | Спорт + казино | **Только казино** |
| Цифры каталога | «Yuzlab» | 12 000+, 80+ provayder | 12 000+, 80+ — **единый fact-sheet** |
| Welcome казино | 19.5M + 150 FS | 19.5M + 150 FS | **20 200 000 UZS + 150 FS** |
| Wagering | Нет деталей | ×35, 7 kun | ×35, 7 kun, max stavka ~65 000 UZS |
| Лицenziya | Нет | OGL/2024/1143/0865 | OGL/2024/1143/0865 + ссылка `/litsenziya/` |
| Платежи UZ | Список | Таблица + сроки | Таблица + min dep ~130k + KYC |
| Регистрация | 4 usul, кратко | 4 usul, скрин + шаги | 4 usul + скрин, без sport welcome |
| Мобилка | APK/PWA детально | APK/PWA + fairpari.com/uz/mobile | APK 2.4.18 + PWA, только rasmiy manba |
| Редакция | Нет pros/cons | Pros/cons + «reklama emas» | **Обязательно** на home + sharhlar |
| Keyword spam | Высокий | Средний | **Низкий** — ключ в title/H1/1 раз в lead |
| Disclaimer | Есть | Полный | Полный на каждой money-странице |

---

## 3. Единый fact-sheet (не нарушать)

Источник правды для копирайтера и генератора:

| Поле | Значение |
|------|----------|
| Brend | FairPari |
| Rasmiy domen | fairpari.com/uz |
| Bizning domen | fairpari-casino-uz.com |
| Rol | Mustaqil kazino yo'riqnomasi, depozit qabul qilmaydi |
| Valyuta | UZS (so'm) |
| O'yinlar | 12 000+ slot, live, crash/instant |
| Provayderlar | 80+ (Pragmatic, Evolution, EGT, Play'n GO, Spribe…) |
| Kazino welcome | 20 200 000 UZS + 150 FS — 4 ta depozit |
| 1-depozit | 100% + 30 FS (4.0M UZS gacha) |
| 2-depozit | 50% + 35 FS |
| 3-depozit | 25% + 40 FS |
| 4-depozit | 25% + 45 FS |
| Wagering | ×35, 7 kun, faqat slotlar |
| Max stavka (bonus) | ~65 000 UZS |
| Min depozit | ~130 000 UZS |
| Promo kod | fa_1635 |
| Litsenziya | Curacao OGL/2024/1143/0865 |
| To'lovlar | Humo, Uzcard, Click, Payme, Piastrix, USDT/kripto |
| Yechish | Birinchi marta KYC; keyin odatda 1–24 soat (usulga bog'liq) |
| APK | Android 2.4.18, fairpari.com/uz/mobile |
| **Sport** | Saytda **yozilmaydi** (faqat kazino profili) |

---

## 4. Голос бренда (voice & tone)

### Пишем как
- Независимый гид для игрока из UZ: «что проверить перед депозитом».
- Короткие предложения, таблицы, numbered steps.
- Конкретика: суммы в UZS, сроки, лимиты.

### Не пишем
- GSC, SERP, LSI, «кластер запросов», «перелинковка», «редакция prometey…».
- «Fairpari bet», «fairpari registration» через запятую в каждом абзаце.
- «Лучший казино №1», «гарантированный выигрыш», fake 5/5.
- Sport welcome, 53 sport, APL/UCL — **на этом домене**.
- «Мы оператор» / «депозит на этом сайте».

### Язык
- **UZ:** литературный узбекский, термины crash, wagering, KYC, APK без перевода.
- **RU:** нейтральный русский для UZ-аудитории; «сум», Humo, Click — без кальки с UZ.

### SEO (без воды)
- Primary key в: title → H1 → первый абзац → один H2.
- Secondary — в FAQ и таблицах, не в каждом предложении.
- Внутренние ссылки — по смыслу («bonus shartlari» → `/kazino-bonuslari/`), не «перелинковка на TOP-10».

---

## 5. Стандарты блоков (превосходить референсы)

### 5.1 Hero (все страницы)
- H1: intent страницы + FairPari + UZ/kazino где уместно.
- Subtitle: 1–2 предложения, **одна** цифра (welcome или каталог).
- CTA: «Bonusni faollashtirish» / «Ro'yxatdan o'tish» — не «Boshlash» без контекста на money-страницах.

### 5.2 Паспорт бренда (только home)
Таблица минимум 10 строк — как у fairpari-uzbek.com, но:
- убрать sport welcome и 53 sport;
- welcome = 20.2M + 150 FS;
- footer строки: «fairpari-casino-uz.com — mustaqil yo'riqnoma».

### 5.3 Таблицы (обязательны где указано в JSON)
- Bonus, to'lov, APK talablari, provayderlar, KYC — **не prose-only**.
- После таблицы — 1 абзац «что это значит для игрока».

### 5.4 Pros / cons (home + sharhlar)
Минимум 4 + 3 пункта. Формулировка: «E'tibor berish kerak» — wagering, KYC, qonuniy noaniqlik.

### 5.5 FAQ
6–10 вопросов на home; 4–6 на cluster-страницах. Ответ 2–4 предложения, без keyword lists.

### 5.6 SEO-expansion (home)
- 8–12 блоков, **800–1200 слов** на cluster-страницах, **2500–3500** на home.
- Каждый H2 — человеческий («Welcome qanday ishlaydi»), не «seo-block-3».
- Баннер каждые 2–3 блока с уникальным alt (уже в билде — сохранять).

### 5.7 Disclaimer (footer + money pages)
> 18+. fairpari-casino-uz.com — FairPari haqida mustaqil axborot. Rasmiy operator emas, depozit qabul qilmaydi.

---

## 6. Карта страниц

Полные брифы по каждой странице (H1, объём, таблицы, FAQ, ключи) — в [`content-tz-pages.json`](content-tz-pages.json).

| # | UZ slug | RU slug | Intent |
|---|---------|---------|--------|
| 1 | `/` | `/ru/` | Kazino hub — обзор бренда |
| 2 | `kazino/` | `kazino/` | Структура лobby |
| 3 | `slotlar/` | `sloty/` | Каталог слотов |
| 4 | `live-kazino/` | `live-kazino/` | Live-дилеры |
| 5 | `crash/` | `crash/` | Aviator и crash |
| 6 | `kazino-bonuslari/` | `bonusy-kazino/` | Welcome + cashback |
| 7 | `promo-kod/` | `promokod/` | fa_1635 |
| 8 | `mobil/` | `skachat/` | APK + PWA |
| 9 | `royxatdan-otish/` | `registratsiya/` | 4 способа |
| 10 | `kirish/` | `vhod/` | Login + 2FA |
| 11 | `tolov/` | `oplata/` | Depozit UZ |
| 12 | `pul-yechish/` | `vyvod/` | Withdraw |
| 13 | `verifikatsiya/` | `verifikatsiya/` | KYC |
| 14 | `sharhlar/` | `otzyvy/` | Отзывы паттерны |
| 15 | `zerkalo/` | `zerkalo/` | Безопасный доступ |
| 16 | `litsenziya/` | `litsenziya/` | License + RNG |

Legal (4 URL) — юридический шаблон, контент не SEO-кластер.

---

## 7. Acceptance criteria (приёмка текста)

- [ ] Нет sport-контента на casino-only домене.
- [ ] Welcome везде **20 200 000 UZS + 150 FS** (не 19.5M).
- [ ] Wagering ×35, 7 kun, max stavka ~65k — на bonus-страницах и в home FAQ.
- [ ] Лицenziya OGL/2024/1143/0865 — минимум home + litsenziya + security blocks.
- [ ] Disclaimer 18+ на каждой commercial page.
- [ ] Нет строк «GSC», «SERP», «LSI», «перелинковка», «кластер».
- [ ] Title ≤ 60 символов, description ≤ 155, уникальны в паре UZ/RU.
- [ ] Минимум 1 таблица на страницах из раздела 6 (кроме zerkalo FAQ-only).
- [ ] RU не дословный Google Translate UZ — отдельная редактура.

---

## 8. Порядок производства

1. Обновить `landing-content-pack.json` / `-ru.json` — hero, block2–11 под casino-only + fact-sheet.
2. Переписать SEO-blocks generator input по `content-tz-pages.json`.
3. Прогнать `render_multipage.py fairpari-casino-uz-com`.
4. QA: grep на sport, 19.5M, seo-block-N в видимом тексте.
5. Deploy → fairpari-casino-uz.com.

---

## 9. Ответственный шаблон абзаца (пример)

**Плохо (как betting.com):**  
«Fairpari casino va fairpari bet bir platformada — fairpari registration qiling va fairpari promo code 2026 oling.»

**Хорошо (целевой тон):**  
«FairPari bitta akkauntda slot, live va crash ochadi — ro'yxatdan o'tgach UZS balansda Gates of Olympus yoki Aviator ni sinab ko'ring. Welcome 20.2 mln UZS + 150 FS faqat kazino uchun; shartlarni bonus bo'limida o'qing.»

---

*Документ опубликован в репозитории проекта: `projects/fairpari-casino-uz-com/03-copy/`.*
