import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initial groups data matching the 6 episodes with start and end dates in June - August 2026 (2569 BE)
const initialGroups = [
  {
    id: 1,
    groupNumber: "1",
    episode: "Episode 1: Open to self",
    mediaChannel: "คลิปวิดีโอสั้น (TikTok/Reels) + สติกเกอร์ไลน์ในกลุ่มงาน",
    targetAudience: "พนักงานออฟฟิศ และพนักงานปฏิบัติงานหน้างาน (Frontline Staff)",
    timeline: "1 มิ.ย. - 12 มิ.ย. 69",
    timelineStart: "2026-06-01",
    timelineEnd: "2026-06-12",
    status: "On Track",
    progressUpdate: "1. จัดทำบทสคริปต์สำหรับคลิปวิดีโอสั้นความยาว 2 นาที (ธีม Outward Mindset ในที่ทำงาน) เสร็จสิ้นแล้ว\n2. ออกแบบคีย์วิชวล (Key Visual) สำหรับทำสติกเกอร์ไลน์เวอร์ชันทดสอบแรก 8 ลาย\n3. แผนงานต่อไป: ถ่ายทำคลิปวิดีโอนอกสถานที่ ณ อาคารสำนักงานใหญ่ในสัปดาห์หน้า",
    updatedBy: "คุณกิตติศักดิ์ (ตัวแทนกลุ่ม)",
    updatedAt: "2026-06-22T10:30:00+07:00"
  },
  {
    id: 2,
    groupNumber: "2",
    episode: "Episode 2: Open to change",
    mediaChannel: "บอร์ดนิทรรศการเคลื่อนที่ + จดหมายข่าวอิเล็กทรอนิกส์ (E-Newsletter)",
    targetAudience: "พนักงานทุกระดับ รวมถึงผู้บริหารระดับต้นและกลาง",
    timeline: "15 มิ.ย. - 26 มิ.ย. 69",
    timelineStart: "2026-06-15",
    timelineEnd: "2026-06-26",
    status: "Preparing",
    progressUpdate: "1. รวบรวมคำสัมภาษณ์และบทเรียนสั้นๆ เรื่องการเอาใจใส่ลูกค้าและเพื่อนร่วมงานเสร็จสิ้น\n2. ประสานงานขออนุญาตจัดตั้งบอร์ดนิทรรศการตามจุดพักเบรกของแผนกต่างๆ แล้ว\n3. แผนงานต่อไป: ส่งเนื้อหา E-Newsletter รอบตรวจทานแรกให้ฝ่ายสื่อสารองค์กรปรับธีมสี",
    updatedBy: "คุณณิชาภา (ตัวแทนกลุ่ม)",
    updatedAt: "2026-06-22T11:15:00+07:00"
  },
  {
    id: 3,
    groupNumber: "3",
    episode: "Episode 3: Open to Others",
    mediaChannel: "การจัดเซสชันแบ่งปันประสบการณ์สั้น (Micro-learning Session 15 นาที)",
    targetAudience: "ทีมพัฒนาซอฟต์แวร์ และฝ่ายสนับสนุนไอที (IT Support)",
    timeline: "29 มิ.ย. - 10 ก.ค. 69",
    timelineStart: "2026-06-29",
    timelineEnd: "2026-07-10",
    status: "Delayed",
    progressUpdate: "1. โครงสร้างหลักสูตรและหัวข้อการแลกเปลี่ยนเรียนรู้เตรียมไว้ครบถ้วนแล้ว\n2. ปัญหาที่พบ: เนื่องจากตารางงานโปรเจกต์ด่วนของทีมสนับสนุนเกิดการชนกัน จึงยังไม่สามารถสรุปวันจัดเซสชันที่ทุกคนสะดวกได้\n3. แผนงานต่อไป: อยู่ระหว่างการประสานงานผู้จัดการแผนกเพื่อแบ่งกลุ่มย่อยออกเป็น 2 รอบย่อย เพื่อเลี่ยงปัญหากำลังพลไม่พอ",
    updatedBy: "คุณอัครพล (ตัวแทนกลุ่ม)",
    updatedAt: "2026-06-22T09:45:00+07:00"
  },
  {
    id: 4,
    groupNumber: "4",
    episode: "Episode 4: Open to adjust",
    mediaChannel: "โปสเตอร์ดิจิทัลบนจออินทราเน็ต (Digital Signage) + แบบสำรวจออนไลน์",
    targetAudience: "พนักงานออฟฟิศทั้งหมดของกลุ่มบริษัท BAFS",
    timeline: "13 ก.ค. - 24 ก.ค. 69",
    timelineStart: "2026-07-13",
    timelineEnd: "2026-07-24",
    status: "Preparing",
    progressUpdate: "1. ออกแบบโครงร่างคำถามแบบสำรวจเพื่อประเมินระดับการทำ Outward Mindset เรียบร้อยแล้ว\n2. ร่างภาพกราฟิกโปสเตอร์ดิจิทัลชุดแรกจำนวน 3 สไตล์\n3. แผนงานต่อไป: เตรียมส่งข้อเสนอดิจิทัลโปสเตอร์ให้ผู้จัดการโครงการพิจารณาความเหมาะสมของข้อความ",
    updatedBy: "คุณอรพินท์ (ตัวแทนกลุ่ม)",
    updatedAt: "2026-06-22T15:20:00+07:00"
  },
  {
    id: 5,
    groupNumber: "5",
    episode: "Episode 5: Open to feedback",
    mediaChannel: "กิจกรรมสนทนากลุ่มย่อย (Focus Group Coffee Chat) + แผ่นพับพกพา",
    targetAudience: "พนักงานระดับหน้างาน (Operational Staff)",
    timeline: "27 ก.ค. - 7 ส.ค. 69",
    timelineStart: "2026-07-27",
    timelineEnd: "2026-08-07",
    status: "On Track",
    progressUpdate: "1. กำหนดการจัดกิจกรรมอบอุ่นร่างกายและ Coffee Chat สำเร็จเรียบร้อย\n2. จัดซื้อเครื่องดื่มและของว่างรองรับผู้เข้าร่วมเสร็จสิ้นแล้ว\n3. แผนงานต่อไป: จัดส่งคำเชิญเข้าร่วมกิจกรรมผ่านปฏิทินกลาง และเริ่มจัดเตรียมพื้นที่ห้องประชุมชั้น 5",
    updatedBy: "คุณวิรุฬห์ (ตัวแทนกลุ่ม)",
    updatedAt: "2026-06-22T13:00:00+07:00"
  },
  {
    id: 6,
    groupNumber: "6",
    episode: "Episode 6: Open to Success",
    mediaChannel: "สัมมนาทบทวนหลังการปฏิบัติงาน (After Action Review - AAR) + คู่มือสรุปแบบดิจิทัล",
    targetAudience: "หัวหน้างานและตัวแทนกลุ่มผู้ร่วมเรียนรู้ทั้งหมด",
    timeline: "10 ส.ค. - 28 ส.ค. 69",
    timelineStart: "2026-08-10",
    timelineEnd: "2026-08-28",
    status: "Preparing",
    progressUpdate: "1. ร่างเนื้อหาหลักเกณฑ์การทบทวนถอดบทเรียนความสำเร็จเรียบร้อย\n2. จัดเตรียมหน้าเลย์เอาต์สำหรับคู่มือสรุปบทเรียนดิจิทัลเบื้องต้น\n3. แผนงานต่อไป: กำหนดนัดหมายวันประชุมผู้ประสานงานหลักทั้งหมดเพื่อระดมไอเดียแนวทางการสรุปภาพรวมโปรเจกต์",
    updatedBy: "คุณศรุต (ตัวแทนกลุ่ม)",
    updatedAt: "2026-06-22T16:10:00+07:00"
  }
];

export default defineConfig({
  server: {
    port: 5173,
    host: true, // Allow external device access
    configureServer: (server) => {
      server.middlewares.use((req, res, next) => {
        const filePath = path.resolve(__dirname, 'data.json');

        if (req.url === '/api/data' && req.method === 'GET') {
          try {
            if (!fs.existsSync(filePath)) {
              fs.writeFileSync(filePath, JSON.stringify(initialGroups, null, 2), 'utf-8');
            }
            const data = fs.readFileSync(filePath, 'utf-8');
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(data);
          } catch (error) {
            console.error('Error handling GET /api/data:', error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to read data.json' }));
          }
        } else if (req.url === '/api/data' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              const parsed = JSON.parse(body);
              if (!Array.isArray(parsed)) {
                throw new Error('Data must be an array of groups');
              }
              fs.writeFileSync(filePath, JSON.stringify(parsed, null, 2), 'utf-8');
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
              console.error('Error handling POST /api/data:', error);
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Invalid JSON payload or write error' }));
            }
          });
        } else {
          next();
        }
      });
    }
  }
});
