<!DOCTYPE html>
<html lang="sw">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TARGET SYNC AGENT - STEALTH EDITION</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');

    :root {
      --neon-red: #ff0033;
      --dark-red: #990000;
      --bg: #0a0005;
      --accent: #ff4444;
    }

    body {
      background: var(--bg);
      color: var(--neon-red);
      font-family: 'Share Tech Mono', monospace;
      margin: 0;
      padding: 20px 10px;
      line-height: 1.4;
      overflow-x: hidden;
      background-image: 
        linear-gradient(rgba(255, 0, 51, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 0, 51, 0.03) 1px, transparent 1px);
      background-size: 40px 40px;
    }

    .container {
      max-width: 820px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 25px;
      position: relative;
    }

    .glitch {
      font-family: 'Orbitron', sans-serif;
      font-size: 2.1rem;
      font-weight: 900;
      color: var(--neon-red);
      text-shadow: 
        0 0 10px var(--neon-red),
        0 0 20px var(--neon-red),
        0 0 40px #ff0000;
      position: relative;
      display: inline-block;
      animation: glitch-text 2s infinite linear alternate-reverse;
    }

    .glitch::before,
    .glitch::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }

    .glitch::before {
      left: 2px;
      text-shadow: -2px 0 #00ffcc;
      clip: rect(0, 900px, 0, 0);
      animation: glitch-anim 1.5s infinite linear alternate-reverse;
    }

    .glitch::after {
      left: -2px;
      text-shadow: 2px 0 #ff00ff;
      clip: rect(0, 900px, 0, 0);
      animation: glitch-anim2 2s infinite linear alternate-reverse;
    }

    @keyframes glitch-anim {
      0% { clip: rect(25px, 9999px, 60px, 0); transform: skew(0.8deg); }
      10% { clip: rect(10px, 9999px, 80px, 0); }
      20% { clip: rect(45px, 9999px, 95px, 0); transform: skew(-0.6deg); }
      100% { clip: rect(30px, 9999px, 70px, 0); }
    }

    @keyframes glitch-anim2 {
      0% { clip: rect(65px, 9999px, 120px, 0); }
      15% { clip: rect(5px, 9999px, 45px, 0); }
      100% { clip: rect(80px, 9999px, 110px, 0); }
    }

    .avatar-container {
      display: flex;
      justify-content: center;
      margin: 15px 0 20px;
    }

    .avatar {
      width: 180px;
      height: 180px;
      border: 4px solid var(--neon-red);
      border-radius: 12px;
      box-shadow: 
        0 0 15px var(--neon-red),
        0 0 35px #ff0000,
        inset 0 0 20px rgba(255, 0, 0, 0.6);
      transition: all 0.4s ease;
      image-rendering: crisp-edges;
    }

    .avatar:hover {
      transform: scale(1.05) rotate(2deg);
      box-shadow: 0 0 45px #ff3366;
    }

    .quote {
      font-style: italic;
      color: #ff6666;
      text-shadow: 0 0 8px #ff0000;
      margin: 15px 0;
      font-size: 1.05rem;
    }

    .owner {
      display: inline-block;
      background: #000;
      padding: 6px 18px;
      border: 2px solid var(--neon-red);
      box-shadow: 0 0 15px var(--neon-red);
      font-weight: bold;
      letter-spacing: 2px;
    }

    .section {
      background: rgba(20, 0, 5, 0.85);
      border: 1px solid var(--neon-red);
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 25px;
      box-shadow: 0 0 20px rgba(255, 0, 51, 0.3);
      position: relative;
      overflow: hidden;
    }

    .section::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(255, 0, 51, 0.08) 2px,
        rgba(255, 0, 51, 0.08) 4px
      );
      pointer-events: none;
      animation: scanline 6s linear infinite;
    }

    @keyframes scanline {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(300%); }
    }

    h2 {
      color: #ff3366;
      text-transform: uppercase;
      letter-spacing: 3px;
      border-bottom: 2px solid var(--neon-red);
      padding-bottom: 8px;
      margin-bottom: 18px;
      text-shadow: 0 0 10px #ff0000;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
    }

    th, td {
      padding: 10px 12px;
      border: 1px solid #660000;
      text-align: left;
      font-size: 0.95rem;
    }

    th {
      background: rgba(255, 0, 51, 0.15);
      color: #ff9999;
    }

    .check {
      color: #00ff88;
      font-weight: bold;
    }

    .warning {
      color: #ffaa00;
    }
  </style>
</head>
<body>
  <div class="container">

    <div class="header">
      <h1 class="glitch" data-text="TARGET SYNC AGENT – STEALTH EDITION">TARGET SYNC AGENT – STEALTH EDITION</h1>
      
      <div class="avatar-container">
        <img src="/file_00000000339c71fd897e55b6a45eb0b2.png" 
             alt="MR-AUTHOR" 
             class="avatar"
             width="180">
      </div>

      <pre style="color: #ff2222; font-size: 13px; line-height: 1.1; margin: 10px 0; text-align: center; opacity: 0.9;">
███╗   ███╗██████╗     █████╗ ██╗   ██╗████████╗██╗  ██╗ ██████╗ ██████╗   
████╗ ████║██╔══██╗   ██╔══██╗██║   ██║╚══██╔══╝██║  ██║██╔═══██╗██╔══██╗  
██╔████╔██║██████╔╝   ███████║██║   ██║   ██║   ███████║██║   ██║██████╔╝  
██║╚██╔╝██║██╔══██╗   ██╔══██║██║   ██║   ██║   ██╔══██║██║   ██║██╔══██╗  
██║ ╚═╝ ██║██║  ██║   ██║  ██║╚██████╔╝   ██║   ██║  ██║╚██████╔╝██║  ██║  
╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝  
      </pre>

      <p class="quote">"Silence is the best weapon. Your data, my command." — MR-AUTHOR</p>
      
      <p style="font-size: 1.1rem; margin: 15px 0;">
        ⚡ OWNER: <span class="owner">MR-AUTHOR</span> ⚡
      </p>
    </div>

    <div class="section">
      <h2>🔥 KAZI YA PROGRAMU – STEALTH MODE</h2>
      <p><strong>Programu inafanya kazi bila icon yoyote</strong> kwenye simu ya target. Inazinduliwa kwa siri kupitia <span style="color:#ffaa00;">*#12345#</span> kwenye dialer.</p>
      
      <p>Inakusanya data ifuatayo na kupeleka moja kwa moja kwenye <strong>Supabase</strong> yako:</p>
      
      <ul style="padding-left: 20px;">
        <li><span class="check">✅</span> SMS zote (sender, body, timestamp)</li>
        <li><span class="check">✅</span> Call logs kamili (namba, type: incoming/outgoing/missed, duration, timestamp)</li>
      </ul>
      
      <p>Data inapatikana realtime kupitia dashboard yako (login/signup form).</p>
    </div>

    <div class="section">
      <h2>🧠 MANTIKI YA UFANYAKAZI</h2>
      <table>
        <tr>
          <th>Kipengele</th>
          <th>Maelezo</th>
        </tr>
        <tr>
          <td><strong>Stealth Mode</strong></td>
          <td>Haina icon. Inazinduliwa kwa *#12345# kwenye dialer.</td>
        </tr>
        <tr>
          <td><strong>Ruhusa</strong></td>
          <td>Inaomba SMS na Call Logs permissions mara moja tu.</td>
        </tr>
        <tr>
          <td><strong>Initial Sync</strong></td>
          <td>Inasoma data yote iliyopo na kupeleka Supabase mara tu inapoanza.</td>
        </tr>
        <tr>
          <td><strong>Auto-Sync</strong></td>
          <td>Kila baada ya dakika 15 au unapobonyeza SYNC button.</td>
        </tr>
        <tr>
          <td><strong>Offline Handling</strong></td>
          <td>Inahifadhi data na kuisawazisha mara mtandao unaporudi.</td>
        </tr>
        <tr>
          <td><strong>Realtime Events</strong></td>
          <td>Inasikiliza SMS mpya au simu na kusync mara moja.</td>
        </tr>
      </table>
    </div>

    <div class="section">
      <h2>🗃️ SUPABASE SETUP (LAZIMA KABLA YA BUILD)</h2>
      <p>Kabla ya kujenga APK, tengeneza meza hizi kwenye Supabase yako:</p>
      
      <pre style="background:#110000; padding:15px; border:1px solid #660000; overflow-x:auto; font-size:0.9rem;">
-- Jedwali la SMS
CREATE TABLE sms (
  id SERIAL PRIMARY KEY,
  sender TEXT,
  body TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Jedwali la Call Logs
CREATE TABLE call_logs (
  id SERIAL PRIMARY KEY,
  number TEXT,
  type TEXT CHECK (type IN ('incoming', 'outgoing', 'missed')),
  duration INT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Zima RLS kwa majaribio (baadaye unaweza kuweka security)
ALTER TABLE sms DISABLE ROW LEVEL SECURITY;
ALTER TABLE call_logs DISABLE ROW LEVEL SECURITY;
      </pre>
      
      <p class="warning">⚠️ Baada ya majaribio, weka RLS na Row Level Security ili data iwe salama.</p>
    </div>

  </div>
</body>
</html>
