export function generatePromptedFloat() {
    const prompts = [
        { prompt: "เงิน: ", value: (Math.random() * 100000).toFixed(2) + " บาท" },
        { prompt: "น้ำหนัก: ", value: (Math.random() * 100).toFixed(2) + " กิโลกรัม" },
        { prompt: "ส่วนสูง: ", value: (Math.random() * 200).toFixed(2) + " เซนติเมตร" },
        { prompt: "ระยะทางเดินทาง: ", value: (Math.random() * 1000).toFixed(2) + " กิโลเมตร" },
        { prompt: "พื้นที่: ", value: (Math.random() * 100).toFixed(2) + " ตารางเมตร" },
        { prompt: "เวลาที่ใช้เดินทาง: ", value: (Math.random() * 24).toFixed(2) + " ชั่วโมง" },
        { prompt: "อุณหภูมิห้อง: ", value: (Math.random() * 40).toFixed(2) + " องศาเซลเซียส" },
        { prompt: "ปริมาณน้ำ: ", value: (Math.random() * 10).toFixed(2) + " ลิตร" },
        { prompt: "ความเร็วเฉลี่ย: ", value: (Math.random() * 100).toFixed(2) + " กิโลเมตรต่อชั่วโมง" },
        { prompt: "อัตราดอกเบี้ย: ", value: (Math.random() * 10).toFixed(2) + " เปอร์เซ็นต์" },
        { prompt: "น้ำหนักสัมภาระ: ", value: (Math.random() * 50).toFixed(2) + " กิโลกรัม" },
        { prompt: "ค่าใช้จ่ายต่อเดือน: ", value: (Math.random() * 50000).toFixed(2) + " บาท" },
        { prompt: "ระดับน้ำทะเล: ", value: (Math.random() * 10).toFixed(2) + " เมตร" },
        { prompt: "อัตราแลกเปลี่ยน: ", value: (Math.random() * 50).toFixed(2) + " บาทต่อดอลลาร์" },
        { prompt: "คะแนนสอบ: ", value: (Math.random() * 100).toFixed(2) + " คะแนน" },
        { prompt: "อัตราการเต้นของหัวใจ: ", value: (Math.random() * 200).toFixed(2) + " ครั้งต่อนาที" },
        { prompt: "ระดับความสูง: ", value: (Math.random() * 3000).toFixed(2) + " เมตรเหนือระดับน้ำทะเล" },
        { prompt: "ความชันของถนน: ", value: (Math.random() * 20).toFixed(2) + " องศา" },
        { prompt: "การใช้พลังงานต่อวัน: ", value: (Math.random() * 3000).toFixed(2) + " กิโลแคลอรี" },
        { prompt: "อัตราเติบโตทางเศรษฐกิจ: ", value: (Math.random() * 10).toFixed(2) + " เปอร์เซ็นต์" }
    ];
    const selectedPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    return `${selectedPrompt.prompt}${selectedPrompt.value}`;
}
