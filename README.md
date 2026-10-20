# OTP Timer – React

A simple and responsive OTP timer UI built with **React.js** and CSS. This project demonstrates the use of React Hooks to create a countdown timer with a resend OTP button.

## 🚀 Features

- ⏱️ 2-minute countdown timer (02:00).
- 🔄 Automatically decreases the timer every second.
- 🛑 Stops the countdown when the timer reaches 00:00.
- 📩 OTP input field.
- 🔁 Resend OTP button to reset the timer to 02:00.
- ⚛️ Uses React `useState` and `useEffect` hooks.
- 🎨 Custom styling with CSS.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- CSS3
- Vite

## 📂 Project Structure

```text
src/
├── OtpPage.jsx
├── OtpPage.css
├── App.jsx
└── main.jsx
```

## ⚙️ Installation and Setup

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project folder:

   ```bash
   cd YOUR_PROJECT_FOLDER
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## 🧠 React Concepts Practiced

- **useState:** Stores and updates the remaining countdown time.
- **useEffect:** Runs the timer logic and manages the interval.
- **setInterval():** Decreases the countdown every second.
- **clearInterval():** Stops the timer when it reaches zero and cleans up the interval.
- **Math.floor() and modulo (`%`):** Convert total seconds into minutes and seconds.
- **Functional state updates:** Updates the countdown using the previous state.

## 📌 Future Improvements

- Generate and verify a real OTP.
- Disable the resend button while the timer is running.
- Add OTP validation and error messages.
- Connect the UI to a backend API.

## 👨‍💻 Author

**Jay Barot**

Frontend Development Practice Project

---

⭐ If you like this project, consider giving it a star!
