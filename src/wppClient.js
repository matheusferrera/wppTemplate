import pkg from "whatsapp-web.js";
const { Client, LocalAuth } = pkg;


console.log("[Client wpp] => Initializing");

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        // args: ['--proxy-server=proxy-server-that-requires-authentication.example.com'],
        headless: true,
    },
});

client.on("qr", qr => {
    qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
    console.log("[Client wpp] => Is ready!");
});

client.initialize();


export default client