intern_portal
🧑‍💼 Intern Portal

A full-stack **Intern Donation & Referral Leaderboard Portal** built using node.js, express.js, mongoDB and EJS templating using HTML, CSS and JavaScript. Interns can log in using their name, view total donations raised, referral codes, and track unlockable rewards. A leaderboard ranks all interns by their contribution.

---

## 🚀 Tech Stack

| Layer      | Tech Used                         |
|------------|-----------------------------------|
| Frontend   | HTML, CSS, EJS Templating         |
| Backend    | Node.js, Express.js               |
| Database   | MongoDB                           |
| Others     | GitHub                            |

---

🖼️ Screenshots

> Add your screenshots below inside a `screenshots/` folder in your repo and use these markdown tags:

| Login Page | Dashboard | Leaderboard |
|------------|-----------|-------------|
| ![Login](https://github.com/Sahana-k30/intern_portal/blob/main/dashboard_shecan.PNG) | ![Dashboard](https://github.com/Sahana-k30/intern_portal/blob/main/login_she_can.PNG) | ![Leaderboard](https://github.com/Sahana-k30/intern_portal/blob/main/leaderboard_shecan.PNG)) |

---

 📦 Features

- 🔐 Intern Login via name
- 📊 Dashboard with referral code & donation progress
- 🏆 Rewards Unlocking System
- 📈 Leaderboard sorted by donations
- 🧰 initDB script to preload database with intern data

---

 🛠️ How to Run This Project Locally

 🔧 Prerequisites:

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)

---

🛠 Installation Steps

```bash
1. Clone the repository
git clone https://github.com/Sahana-k30/intern_portal.git

2. Move into the project directory
cd intern_portal

3. Install backend dependencies
npm install

5. Connect and add data to the MongoDB database
node initDB.js

6. Start both frontend and backend in parallel
nodemon index.js
