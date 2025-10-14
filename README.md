# WoW Classic Randomizer (Turtle WoW edition)

Генератор персонажей для World of Warcraft Classic с добавленными особенностями **Turtle WoW** (новые расы/профессии и иконки).

🔗 **Demo (GitHub Pages):** [https://rombas.github.io/twow-classic-randomizer/](https://rombas.github.io/twow-classic-randomizer/)

---

## 📦 Основные возможности

* Случайный выбор **расы**, **класса** и **профессий**.
* Учёт кастомных правил/ограничений Turtle WoW (если заданы в коде).
* Обновлённые **иконки** и визуальные элементы.
* Лёгкий запуск локально и деплой на **GitHub Pages** через Actions.

## 🧰 Технологии

* **Next.js 14** (App Router)
* **React 18**
* **Tailwind CSS**
* **Headless UI** / **Heroicons**
* TypeScript

---

## 🚀 Быстрый старт (локально)

Требования: Node.js 18+ (рекомендуется 20).

```bash
# Клонировать
git clone https://github.com/Rombas/twow-classic-randomizer
cd twow-classic-randomizer

# Установить зависимости
npm ci

# Запустить dev-сервер
npm run dev
# Открой http://localhost:3000
```

### Production-сборка (локально)

```bash
npm run build
npm start
# Открой http://localhost:3000
```

---

## 🏗️ Конфигурация для GitHub Pages

Для работы на поддомене вида `https://<username>.github.io/<repo>/` проект собран как **статический экспорт**.

Файл `next.config.mjs`:

```js
const repo = 'twow-classic-randomizer';

/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: { unoptimized: true },
  trailingSlash: true,
};
```

> Если используешь абсолютные пути к ассетам (например, иконкам), учитывай `basePath`/`assetPrefix`.

### Скрипты в package.json

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## 🔄 Деплой на GitHub Pages (через Actions)

Pages настроены на **GitHub Actions**. Рабочий workflow лежит в `.github/workflows/` и:

1. Собирает проект (`next build`).
2. Делает **static export** (`next export`) в папку `out/`.
3. Публикует артефакт в GitHub Pages.

Минимально нужные шаги экспорта в workflow:

```yaml
- name: Build with Next.js
  run: ${{ steps.detect-package-manager.outputs.runner }} next build

- name: Export static site
  run: ${{ steps.detect-package-manager.outputs.runner }} next export

- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: ./out
```

> В триггере стоит ветка **master**. Убедись, что дефолтная ветка репозитория совпадает с триггером workflow.

После успешного ранa сайт доступен по адресу репозитория GitHub Pages (см. ссылку вверху).

---

## 🧩 Структура проекта (упрощённо)

```
src/
  app/              # страницы/роуты Next.js (App Router)
  components/       # UI-компоненты
  lib/              # утилиты/логика
public/
  icons/            # иконки рас/классов/профессий
styles/             # tailwind.css и пр.
```

---

## 🐢 Что добавлено для Turtle WoW

* Новые **расы** и **профессии** (см. исходники/данные).
* Подключены соответствующие **иконки** (в `public/icons/...`).
* При необходимости — кастомные ограничения комбинаций раса/класс/профессии.

> Конкретный список и логика зависят от текущей реализации в коде (см. коммиты). При желании можно вынести данные/правила в отдельный модуль.

---

## 🧪 Проверка

* Открой демо и попробуй несколько генераций.
* Проверь загрузку иконок в DevTools → Network (404 укажет на неверный путь).
* Сверь, что генерятся только валидные комбинации (при наличии правил).

---

## 🛠️ Трюки и подсказки

* **404 на Pages**: проверь, что workflow выполняет `next export` и загружает `./out`.
* **Иконки/стили не грузятся**: смотри `basePath`/`assetPrefix` и пути к файлам.
* **next/image**: на Pages лучше `images.unoptimized: true`.

---

## 🤝 Благодарности

* Основано на идее/структуре проекта: [ebaynissen/wow-classic-randomizer](https://github.com/ebaynissen/wow-classic-randomizer)

---

## 📜 License

MIT.
