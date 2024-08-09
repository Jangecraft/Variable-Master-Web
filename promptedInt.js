export function generatePromptedInt() {
    const prompts = [
        { prompt: "อายุ: ", value: Math.floor(Math.random() * 100) + " ปี" },
        { prompt: "จำนวนลูก: ", value: Math.floor(Math.random() * 10) + " คน" },
        { prompt: "จำนวนพี่น้อง: ", value: Math.floor(Math.random() * 10) + " คน" },
        { prompt: "วันที่: ", value: Math.floor(Math.random() * 31) + 1 },
        { prompt: "เดือน: ", value: Math.floor(Math.random() * 12) + 1 },
        { prompt: "ปี: ", value: Math.floor(Math.random() * 2024) },
        { prompt: "จำนวนหนังสือที่มี: ", value: Math.floor(Math.random() * 500) + " เล่ม" },
        { prompt: "คะแนนสอบ: ", value: Math.floor(Math.random() * 100) + " คะแนน" },
        { prompt: "ชั่วโมงทำงานต่อสัปดาห์: ", value: Math.floor(Math.random() * 60) + " ชั่วโมง" },
        { prompt: "น้ำหนักสัมภาระ: ", value: Math.floor(Math.random() * 50) + " กิโลกรัม" },
        { prompt: "จำนวนเพื่อนในกลุ่ม: ", value: Math.floor(Math.random() * 20) + " คน" },
        { prompt: "จำนวนสมาชิกในครอบครัว: ", value: Math.floor(Math.random() * 10) + " คน" },
        { prompt: "จำนวนรถในบ้าน: ", value: Math.floor(Math.random() * 5) + " คัน" },
        { prompt: "จำนวนบทเรียนที่เรียนในวันหนึ่ง: ", value: Math.floor(Math.random() * 8) + " บท" },
        { prompt: "จำนวนห้องในบ้าน: ", value: Math.floor(Math.random() * 10) + " ห้อง" },
        { prompt: "จำนวนอาหารที่กินในมื้อหนึ่ง: ", value: Math.floor(Math.random() * 5) + " จาน" },
        { prompt: "จำนวนบทเพลงที่ฟังในวันหนึ่ง: ", value: Math.floor(Math.random() * 20) + " เพลง" },
        { prompt: "จำนวนรูปภาพที่ถ่ายในทริปหนึ่ง: ", value: Math.floor(Math.random() * 200) + " รูป" },
        { prompt: "จำนวนชั่วโมงที่นอนต่อคืน: ", value: Math.floor(Math.random() * 12) + " ชั่วโมง" },
        { prompt: "จำนวนครั้งที่ออกกำลังกายในสัปดาห์: ", value: Math.floor(Math.random() * 7) + " ครั้ง" }
    ];
    const selectedPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    return `${selectedPrompt.prompt}${selectedPrompt.value}`;
}
