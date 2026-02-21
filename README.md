# NimbleGravity_LaureanoFurno
# Job Application Portal ⚙️

A mini React application that connects to the Nimble Gravity API, allowing candidates to browse open job positions and submit their applications directly from the UI.

---

## Getting Started 🚀

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

See [Deployment](#deployment-) for notes on how to deploy the project.

---

## Prerequisites 📋

Make sure you have the following installed before proceeding:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

You can verify your versions with:

```bash
node -v
npm -v
```

---

## Installation 🔧

Step-by-step instructions to get your development environment running:

**1. Clone the repository:**

```bash
git clone https://github.com/LaureanoFurnoG/nimblegravity_test.git
cd nimblegravity_test
```

**2. Install dependencies:**

```bash
npm install
```

**3. Create your environment file:**

```bash
cp .env.example .env
```

**4. Set your API base URL in the `.env` file:**

```env
VITE_API_BASE_URL=your_api_base_url
```

**5. Start the development server:**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Usage Demo 🖥️

1. Enter your registered email in the input field and click **Enter** to fetch your candidate information.
2. A list of open positions will be loaded automatically from the API.
3. For the position you want to apply to, paste your GitHub repository URL in the input field.
4. Click **SEND** — the app will submit your application and show a success or error notification.

---

## Deployment 📦

To build the project for production:

```bash
npm run build
```

The output will be in the `dist/` folder. You can then deploy it to any static hosting provider such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

Remember to configure your environment variables (`VITE_API_BASE_URL`) in your hosting provider's settings.
> [!NOTE]
> This project is now deployed in this URL: https://nimblegravity-test.vercel.app/
---

## Built With 🛠️

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [Ant Design](https://ant.design/) - UI component library (notifications, dark theme)
- [Axios](https://axios-http.com/) - HTTP client
- [React Router](https://reactrouter.com/) - Client-side routing

---

## Project Structure 📁

```
src/
├── axios/
│   └── axios.ts              # Centralized Axios instance
├── components/
│   ├── JobCard/
│   │   └── JobCard.tsx       # Individual job position card with apply form
│   └── Notifications/
│       └── Notification.tsx  # Reusable notification component
├── views/
│   └── JobApplication/
│       └── JobApplication.tsx # Main view — email search + job listing
├── App.tsx
├── main.tsx
├── App.css
└── index.css
```

---

## Author ✒️

- Laureano Furno

---
