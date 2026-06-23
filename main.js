// ==========================================================================
// Default Outward Mindset Group Project Data (6 Episodes)
// Constrained to June 1, 2026 - August 31, 2026 (June - August 2569 BE)
// ==========================================================================
window.addEventListener('error', function(e) {
  const errorMsg = `แอปพลิเคชันพบข้อผิดพลาด: ${e.message} (${e.filename.split('/').pop()}:${e.lineno})`;
  console.error(errorMsg, e);
  if (typeof showToast === 'function') {
    showToast(errorMsg, 'warning');
  }
});

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

// ==========================================================================
// Dashboard State Management
// ==========================================================================
// ⚠️ ใส่ URL ของ Google Apps Script ที่ได้จากขั้นตอน Deploy ด้านล่างนี้เพื่อเปิดใช้งานระบบเรียลไทม์
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzlP5NBTTTUgVV1-dxhnAL_Xq8XODfhjl6sv2Rr1UV4hwK7RpSIZiXEtcaKQtlUVZLD/exec"; 

let groups = [];
let activeStatusFilter = 'All';
let activeChannelFilter = 'All'; 
let searchQuery = '';
let selectedProjectId = null;
let syncMode = 'offline'; 

// Metric animation state tracking
const prevCounts = { total: 0, ontrack: 0, preparing: 0, delayed: 0 };

// Constant for SVG Donut Circumference (r = 38)
const CIRCUMFERENCE = 238.76; 

// Calendar Configuration (June 1, 2026 - August 31, 2026)
const CALENDAR_START = "2026-06-01";
const CALENDAR_END = "2026-08-31";
const TOTAL_CALENDAR_DAYS = 92; // 30 (June) + 31 (July) + 31 (August)

// ==========================================================================
// Initialization & Storage Sync (Dual Mode / Google Sheets)
// ==========================================================================
async function init() {
  initTheme();
  setupEventListeners();
  startClock();
  await fetchGroupsData();
  renderDashboard();
  initScrollToTop();
}

async function fetchGroupsData() {
  const syncWidget = document.getElementById('sync-widget');
  const syncStatus = document.getElementById('sync-status');
  const refreshBtn = document.getElementById('btn-sync-refresh');
  
  if (refreshBtn) refreshBtn.classList.add('spinning');
  
  try {
    // 1. ตรวจสอบการใช้งานระบบเรียลไทม์ผ่าน Google Sheets
    if (GOOGLE_SCRIPT_URL) {
      const response = await fetch(GOOGLE_SCRIPT_URL);
      if (!response.ok) throw new Error('API server returned error code');
      const data = await response.json();
      
      if (data && data.length > 0) {
        groups = data;
      } else {
        // หาก Google Sheets ว่าง ให้ใส่ข้อมูลเริ่มต้นและกดบันทึกเพื่อตั้งต้นชีต
        groups = [...initialGroups];
        await saveGroupsData();
      }
      
      syncMode = 'google_sheets';
      if (syncWidget) {
        syncWidget.className = 'sync-widget online';
        syncStatus.innerHTML = `<i class="fa-solid fa-table-list" style="margin-right: 4px; color: var(--color-ontrack);"></i> Google Sheets (เรียลไทม์)`;
      }
      
      try {
        localStorage.setItem('outward_mindset_groups', JSON.stringify(groups));
      } catch(e) {}
      return;
    }
    
    // 2. หากไม่ได้ตั้งค่า Google Sheets จะทำงานผ่าน Local Backend/LocalStorage
    const response = await fetch('/api/data');
    if (!response.ok) throw new Error('API server returned error code');
    const data = await response.json();
    
    groups = data;
    syncMode = 'online';
    
    if (syncWidget) {
      syncWidget.className = 'sync-widget online';
      syncStatus.innerHTML = `<i class="fa-solid fa-cloud-arrow-down" style="margin-right: 4px;"></i> ซิงค์ OneDrive (data.json)`;
    }
    
    try {
      localStorage.setItem('outward_mindset_groups', JSON.stringify(groups));
    } catch(e) {}
    
  } catch (err) {
    console.warn('Backend API not available. Operating in Local Browser Storage mode.', err);
    syncMode = 'offline';
    
    if (syncWidget) {
      syncWidget.className = 'sync-widget offline';
      syncStatus.innerHTML = `<i class="fa-solid fa-circle-info" style="margin-right: 4px;"></i> Local Browser (ออฟไลน์)`;
    }
    
    // ดึงจาก LocalStorage
    try {
      const storedData = localStorage.getItem('outward_mindset_groups');
      if (storedData) {
        groups = JSON.parse(storedData);
        
        let hasUpdates = false;
        initialGroups.forEach(ig => {
          const existingIndex = groups.findIndex(g => g.groupNumber === ig.groupNumber);
          if (existingIndex === -1) {
            groups.push(ig);
            hasUpdates = true;
          } else {
            if (groups[existingIndex].episode !== ig.episode || !groups[existingIndex].timelineStart) {
              groups[existingIndex].episode = ig.episode;
              groups[existingIndex].timelineStart = ig.timelineStart;
              groups[existingIndex].timelineEnd = ig.timelineEnd;
              groups[existingIndex].timeline = ig.timeline;
              hasUpdates = true;
            }
          }
        });
        
        if (hasUpdates) {
          localStorage.setItem('outward_mindset_groups', JSON.stringify(groups));
        }
      } else {
        groups = [...initialGroups];
        localStorage.setItem('outward_mindset_groups', JSON.stringify(groups));
      }
    } catch (e) {
      console.error('LocalStorage is not accessible. Using temporary in-memory data:', e);
      groups = [...initialGroups];
    }
  } finally {
    if (refreshBtn) {
      setTimeout(() => refreshBtn.classList.remove('spinning'), 600);
    }
  }
}

async function saveGroupsData() {
  try {
    localStorage.setItem('outward_mindset_groups', JSON.stringify(groups));
  } catch (e) {
    console.error('Failed to save data locally:', e);
  }
  
  // 1. บันทึกลง Google Sheets หากตั้งค่า URL ไว้
  if (GOOGLE_SCRIPT_URL) {
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(groups)
      });
      const res = await response.json();
      if (res.status !== 'success') throw new Error(res.message || 'Apps Script returned error');
      console.log('Successfully saved to Google Sheets');
    } catch (error) {
      console.error('Error writing to Google Sheets:', error);
      showToast('บันทึกในเครื่องแล้ว แต่ไม่สามารถอัปเดต Google Sheet ได้ในขณะนี้', 'warning');
    }
    return;
  }
  
  // 2. บันทึกลง OneDrive API หากไม่ใช่โหมด Google Sheets
  if (syncMode === 'online') {
    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(groups)
      });
      if (!response.ok) throw new Error('API server save failed');
      console.log('Successfully saved to data.json');
    } catch (error) {
      console.error('Error writing to data.json server:', error);
      showToast('บันทึกในเบราว์เซอร์แล้ว แต่ไม่สามารถอัปเดต data.json ได้ในขณะนี้', 'warning');
    }
  }
}

// ==========================================================================
// Live Time Clock Widget
// ==========================================================================
function startClock() {
  const clockElement = document.getElementById('live-time');
  if (!clockElement) return;
  
  const updateTime = () => {
    const now = new Date();
    const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    
    const formattedDate = now.toLocaleDateString('th-TH', dateOptions);
    const formattedTime = now.toLocaleTimeString('th-TH', timeOptions);
    
    clockElement.innerHTML = `<span class="date-part">${formattedDate}</span> <span class="time-part">${formattedTime} น.</span>`;
  };
  
  updateTime();
  setInterval(updateTime, 1000);
}

// ==========================================================================
// Event Listeners
// ==========================================================================
function setupEventListeners() {
  // Search Input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderGroupGrid();
    });
  }

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeStatusFilter = btn.getAttribute('data-status');
      activeChannelFilter = 'All'; 
      renderGroupGrid();
    });
  });

  // Manual OneDrive Refresh Trigger
  const refreshBtn = document.getElementById('btn-sync-refresh');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', async () => {
      await fetchGroupsData();
      renderDashboard();
      showToast('รีเฟรชข้อมูลล่าสุดจาก OneDrive เรียบร้อยแล้ว', 'success');
    });
  }

  // Add Project Button
  const addProjBtn = document.getElementById('btn-add-project');
  if (addProjBtn) {
    addProjBtn.addEventListener('click', () => {
      openEditModal();
    });
  }

  // Close Modals
  const closeViewBtn = document.getElementById('btn-close-view');
  if (closeViewBtn) closeViewBtn.addEventListener('click', () => closeModal('modal-view-detail'));
  
  const closeEditBtn = document.getElementById('btn-close-edit');
  if (closeEditBtn) closeEditBtn.addEventListener('click', () => closeModal('modal-edit-project'));
  
  const cancelEditBtn = document.getElementById('btn-cancel-edit');
  if (cancelEditBtn) cancelEditBtn.addEventListener('click', () => closeModal('modal-edit-project'));

  // Close modals clicking outside
  window.addEventListener('click', (e) => {
    const viewModal = document.getElementById('modal-view-detail');
    const editModal = document.getElementById('modal-edit-project');
    if (e.target === viewModal) closeModal('modal-view-detail');
    if (e.target === editModal) closeModal('modal-edit-project');
  });

  // Form Submit
  const projForm = document.getElementById('project-form');
  if (projForm) projForm.addEventListener('submit', handleFormSubmit);

  // Edit from View Modal
  const editFromViewBtn = document.getElementById('btn-edit-from-view');
  if (editFromViewBtn) {
    editFromViewBtn.addEventListener('click', () => {
      if (selectedProjectId) {
        closeModal('modal-view-detail');
        openEditModal(selectedProjectId);
      }
    });
  }

  // Copy Markdown Template from View Modal
  const copyTemplateBtn = document.getElementById('btn-copy-template');
  if (copyTemplateBtn) copyTemplateBtn.addEventListener('click', copyMarkdownTemplate);

  // Theme Toggle Button
  const themeToggleBtn = document.getElementById('btn-theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Scroll to Top Button
  const scrollTopBtn = document.getElementById('btn-scroll-top');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Auto pre-fill on group number change
  const formGroupNumInput = document.getElementById('form-group-num');
  if (formGroupNumInput) {
    formGroupNumInput.addEventListener('input', (e) => {
      updateFormDefaults(e.target.value.trim());
    });
  }
}

// ==========================================================================
// Dashboard Render Coordinator
// ==========================================================================
function renderDashboard() {
  renderMetrics();
  renderCharts();
  renderTimeline();
  renderGanttChart();
  renderGroupGrid();
}

// ==========================================================================
// Metric Count-Up Animation & Render
// ==========================================================================
function animateMetric(elementId, startValue, endValue, duration = 800) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  if (startValue === endValue) {
    element.textContent = endValue;
    return;
  }
  
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = progress * (2 - progress);
    const currentValue = Math.floor(startValue + (endValue - startValue) * easeProgress);
    element.textContent = currentValue;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = endValue;
    }
  }
  
  requestAnimationFrame(update);
}

function renderMetrics() {
  const total = groups.length;
  const onTrack = groups.filter(g => g.status === 'On Track').length;
  const preparing = groups.filter(g => g.status === 'Preparing').length;
  const delayed = groups.filter(g => g.status === 'Delayed').length;

  animateMetric('count-total', prevCounts.total, total);
  animateMetric('count-ontrack', prevCounts.ontrack, onTrack);
  animateMetric('count-preparing', prevCounts.preparing, preparing);
  animateMetric('count-delayed', prevCounts.delayed, delayed);
  
  prevCounts.total = total;
  prevCounts.ontrack = onTrack;
  prevCounts.preparing = preparing;
  prevCounts.delayed = delayed;
}

// ==========================================================================
// Thai Date Formatting Helpers
// ==========================================================================
function formatThaiDate(dateString) {
  if (!dateString) return "";
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return dateString;
  
  const day = d.getDate();
  const monthIndex = d.getMonth();
  const thaiMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  
  // Year in BE format (e.g. 2026 + 543 = 2569 % 100 = 69)
  const BEYearShort = (d.getFullYear() + 543) % 100;
  
  return `${day} ${thaiMonths[monthIndex]} ${BEYearShort}`;
}

function formatThaiDateRange(startDateString, endDateString) {
  if (!startDateString || !endDateString) return "";
  return `${formatThaiDate(startDateString)} - ${formatThaiDate(endDateString)}`;
}

// Helper to calculate days between dates
function getDaysBetween(date1Str, date2Str) {
  const d1 = new Date(date1Str);
  const d2 = new Date(date2Str);
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);
  
  const diffTime = d2.getTime() - d1.getTime();
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
}

// ==========================================================================
// Dynamic Timeline Roadmap Rendering & Scroll Navigation
// ==========================================================================
function renderTimeline() {
  const container = document.getElementById('timeline-steps-container');
  if (!container) return;
  container.innerHTML = '';
  
  const staticEpisodes = [
    { step: 1, title: "Open to self" },
    { step: 2, title: "Open to change" },
    { step: 3, title: "Open to Others" },
    { step: 4, title: "Open to adjust" },
    { step: 5, title: "Open to feedback" },
    { step: 6, title: "Open to Success" }
  ];
  
  staticEpisodes.forEach(se => {
    const group = groups.find(g => parseInt(g.groupNumber) === se.step);
    
    let statusClass = 'node-preparing';
    let displayTitle = `Episode ${se.step}: ${se.title}`;
    let displayChannel = 'ยังไม่ระบุการดำเนินการ';
    
    if (group) {
      if (group.status === 'On Track') {
        statusClass = 'node-ontrack';
      } else if (group.status === 'Delayed') {
        statusClass = 'node-delayed';
      } else {
        statusClass = 'node-preparing';
      }
      displayTitle = group.episode;
      displayChannel = group.mediaChannel;
    }
    
    const stepEl = document.createElement('div');
    stepEl.className = `timeline-step ${statusClass}`;
    stepEl.setAttribute('data-step', se.step);
    
    stepEl.innerHTML = `
      <div class="timeline-step-node">${se.step}</div>
      <div class="timeline-step-info">
        <span class="timeline-step-title" title="${displayTitle}">${displayTitle}</span>
        <span class="timeline-step-desc" title="${displayChannel}">${displayChannel}</span>
      </div>
    `;
    
    stepEl.addEventListener('click', () => {
      scrollToGroupCard(se.step);
    });
    
    container.appendChild(stepEl);
  });
}

function scrollToGroupCard(stepNumber) {
  // Clear search and active filters to ensure target card renders
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  
  activeStatusFilter = 'All';
  activeChannelFilter = 'All';
  
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-status') === 'All') {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  renderGroupGrid();
  
  const group = groups.find(g => parseInt(g.groupNumber) === stepNumber);
  if (!group) {
    showToast(`ยังไม่มีการบันทึกข้อมูลของ กลุ่มที่ ${stepNumber} (Episode ${stepNumber})`, 'warning');
    openEditModal(null, stepNumber);
    return;
  }
  
  const cardId = `project-card-${group.id}`;
  const cardEl = document.getElementById(cardId);
  if (cardEl) {
    cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    cardEl.classList.remove('flash-highlight');
    void cardEl.offsetWidth; // Reflow reset
    cardEl.classList.add('flash-highlight');
    
    showToast(`เลื่อนไปดูความคืบหน้ากลุ่มที่ ${stepNumber} (${group.episode})`, 'info');
  }
}

// ==========================================================================
// Dynamic Gantt Chart Timeline (preventing overlaps)
// ==========================================================================
function renderGanttChart() {
  const container = document.getElementById('gantt-rows-container');
  if (!container) return;
  container.innerHTML = '';
  
  // Sort groups numerically by Group Number for Gantt rows
  const sortedGroups = [...groups].sort((a, b) => {
    const numA = parseInt(a.groupNumber) || 0;
    const numB = parseInt(b.groupNumber) || 0;
    return numA - numB;
  });

  if (sortedGroups.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 1.5rem; color: var(--text-muted); font-size: 0.8rem;">ไม่มีข้อมูลตารางเวลาโครงการ</div>`;
    return;
  }

  sortedGroups.forEach(g => {
    // Skip if dates are missing or invalid
    if (!g.timelineStart || !g.timelineEnd) return;
    
    // Constrain dates within CALENDAR_START and CALENDAR_END for visualization
    let startVal = g.timelineStart;
    if (startVal < CALENDAR_START) startVal = CALENDAR_START;
    
    let endVal = g.timelineEnd;
    if (endVal > CALENDAR_END) endVal = CALENDAR_END;
    if (endVal < CALENDAR_START) return; // Out of bounds
    
    // Calculate offsets
    const offsetDays = getDaysBetween(CALENDAR_START, startVal);
    const durationDays = getDaysBetween(startVal, endVal) + 1; // inclusive
    
    // Convert to percentages
    const leftPercent = (offsetDays / TOTAL_CALENDAR_DAYS) * 100;
    const widthPercent = (durationDays / TOTAL_CALENDAR_DAYS) * 100;
    
    // Gantt row element
    const rowEl = document.createElement('div');
    rowEl.className = 'gantt-row';
    
    // Style class by status
    let statusClass = 'bg-preparing';
    if (g.status === 'On Track') {
      statusClass = 'bg-ontrack';
    } else if (g.status === 'Delayed') {
      statusClass = 'bg-delayed';
    }
    
    rowEl.innerHTML = `
      <div class="gantt-row-label" title="${g.episode}">กลุ่มที่ ${g.groupNumber}: ${g.episode.split(':')[1]?.trim() || g.episode}</div>
      <div class="gantt-timeline-track">
        <div class="gantt-bar ${statusClass}" 
             style="left: ${leftPercent}%; width: ${widthPercent}%;"
             title="${g.episode}\nระยะเวลา: ${g.timeline}\nสถานะ: ${g.status}\n(คลิกเพื่อเลื่อนไปยังการ์ดโครงการ)"
             data-step="${g.groupNumber}">
          <span class="gantt-bar-label">${g.timeline}</span>
        </div>
      </div>
    `;
    
    // Navigate to card on timeline bar click
    rowEl.querySelector('.gantt-bar').addEventListener('click', () => {
      scrollToGroupCard(parseInt(g.groupNumber));
    });
    
    container.appendChild(rowEl);
  });

  // Calculate track positioning matching style.css (280px label + 1.25rem left/right padding)
  const getTrackLeftStyle = (pct) => {
    return `calc(280px + 1.25rem + (${pct}% - (280px + 2.5rem) * ${pct / 100}))`;
  };

  // Render Month separator grid lines
  const monthLines = [
    { name: 'July', pct: (30 / 92) * 100 },
    { name: 'August', pct: (61 / 92) * 100 }
  ];
  
  monthLines.forEach(line => {
    const lineEl = document.createElement('div');
    lineEl.className = 'gantt-grid-line';
    lineEl.style.left = getTrackLeftStyle(line.pct);
    container.appendChild(lineEl);
  });

  // Render Today line if within the calendar range
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const todayStr = `${yyyy}-${mm}-${dd}`;
  
  if (todayStr >= CALENDAR_START && todayStr <= CALENDAR_END) {
    const offsetDays = getDaysBetween(CALENDAR_START, todayStr);
    const pct = (offsetDays / TOTAL_CALENDAR_DAYS) * 100;
    
    const todayLineEl = document.createElement('div');
    todayLineEl.className = 'gantt-today-line';
    todayLineEl.style.left = getTrackLeftStyle(pct);
    
    todayLineEl.innerHTML = `
      <div class="gantt-today-badge">วันนี้</div>
    `;
    container.appendChild(todayLineEl);
  }
}

// ==========================================================================
// SVG Donut and Bar Chart Rendering
// ==========================================================================
function renderCharts() {
  const total = groups.length;
  const onTrack = groups.filter(g => g.status === 'On Track').length;
  const preparing = groups.filter(g => g.status === 'Preparing').length;
  const delayed = groups.filter(g => g.status === 'Delayed').length;

  const donutCenterVal = document.getElementById('donut-center-num');
  if (donutCenterVal) donutCenterVal.textContent = total;

  const segmentsContainer = document.getElementById('donut-segments');
  const legendContainer = document.getElementById('donut-legend');
  
  if (segmentsContainer && legendContainer) {
    segmentsContainer.innerHTML = '';
    legendContainer.innerHTML = '';

    if (total === 0) {
      segmentsContainer.innerHTML = `
        <circle cx="50" cy="50" r="38" fill="transparent" stroke="rgba(255,255,255,0.05)" stroke-width="12" class="donut-segment"></circle>
      `;
      legendContainer.innerHTML = '<div class="legend-item"><span class="legend-color" style="background-color: var(--text-muted)"></span> <span class="legend-label">ไม่มีข้อมูล</span></div>';
    } else {
      const statuses = [
        { label: 'On Track', count: onTrack, color: 'var(--color-ontrack)', class: 'status-color-ontrack' },
        { label: 'Preparing', count: preparing, color: 'var(--color-preparing)', class: 'status-color-preparing' },
        { label: 'Delayed', count: delayed, color: 'var(--color-delayed)', class: 'status-color-delayed' }
      ];

      let accumulatedOffset = 0;

      statuses.forEach(status => {
        if (status.count > 0) {
          const percentage = status.count / total;
          const strokeLength = percentage * CIRCUMFERENCE;
          const strokeOffset = CIRCUMFERENCE - strokeLength + accumulatedOffset;

          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          circle.setAttribute('cx', '50');
          circle.setAttribute('cy', '50');
          circle.setAttribute('r', '38');
          circle.setAttribute('fill', 'transparent');
          circle.setAttribute('stroke', status.color);
          circle.setAttribute('stroke-width', '12');
          circle.setAttribute('stroke-dasharray', `${strokeLength} ${CIRCUMFERENCE}`);
          circle.setAttribute('stroke-dashoffset', strokeOffset.toString());
          circle.classList.add('donut-segment');
          circle.setAttribute('title', `กรองเฉพาะสถานะ: ${status.label}`);
          
          circle.addEventListener('click', () => {
            triggerStatusFilter(status.label);
          });
          
          segmentsContainer.appendChild(circle);
          accumulatedOffset += strokeLength;

          const pctString = Math.round(percentage * 100) + '%';
          const legendItem = document.createElement('div');
          legendItem.className = 'legend-item';
          legendItem.innerHTML = `
            <span class="legend-color" style="background-color: ${status.color}"></span>
            <span class="legend-label">${status.label}: <strong class="${status.class}">${status.count} กลุ่ม</strong> (${pctString})</span>
          `;
          
          legendItem.addEventListener('click', () => {
            triggerStatusFilter(status.label);
          });
          
          legendContainer.appendChild(legendItem);
        }
      });
    }
  }

  // Media Channels Bar Chart
  const channelBarsContainer = document.getElementById('channel-bars');
  if (channelBarsContainer) {
    channelBarsContainer.innerHTML = '';

    const channelsMap = {};
    groups.forEach(g => {
      let key = 'อื่น ๆ';
      const rawChan = g.mediaChannel.toLowerCase();
      
      if (rawChan.includes('คลิป') || rawChan.includes('video') || rawChan.includes('tiktok') || rawChan.includes('reels')) {
        key = 'คลิปวิดีโอสั้น / TikTok / Reels';
      } else if (rawChan.includes('บอร์ด') || rawChan.includes('นิทรรศการ')) {
        key = 'บอร์ดประชาสัมพันธ์ / นิทรรศการ';
      } else if (rawChan.includes('โปสเตอร์') || rawChan.includes('poster') || rawChan.includes('signage')) {
        key = 'โปสเตอร์ / Digital Signage';
      } else if (rawChan.includes('แชท') || rawChan.includes('chat') || rawChan.includes('meeting') || rawChan.includes('session') || rawChan.includes('เสวนา')) {
        key = 'สนทนา / Share Session';
      } else if (rawChan.includes('newsletter') || rawChan.includes('อีเมล') || rawChan.includes('email') || rawChan.includes('ข่าว')) {
        key = 'E-Newsletter / ประชาสัมพันธ์อีเมล';
      } else {
        key = g.mediaChannel.split('+')[0].split('/')[0].trim();
        if (key.length > 30) key = key.substring(0, 30) + '...';
      }

      channelsMap[key] = (channelsMap[key] || 0) + 1;
    });

    const sortedChannels = Object.keys(channelsMap).map(key => ({
      name: key,
      count: channelsMap[key]
    })).sort((a, b) => b.count - a.count).slice(0, 4);

    if (sortedChannels.length === 0) {
      channelBarsContainer.innerHTML = '<div style="text-align: center; color: var(--text-muted); font-size: 0.85rem; padding: 2rem 0;">ไม่มีข้อมูลวิธีการสื่อสาร</div>';
      return;
    }

    const maxCount = Math.max(...sortedChannels.map(c => c.count));

    sortedChannels.forEach(c => {
      const pct = maxCount > 0 ? (c.count / maxCount) * 100 : 0;
      const barRow = document.createElement('div');
      barRow.className = 'chart-bar-row';
      barRow.setAttribute('title', `กรองช่องทาง: ${c.name}`);
      
      barRow.innerHTML = `
        <div class="bar-header">
          <span class="bar-label" title="${c.name}">${c.name}</span>
          <span class="bar-value">${c.count} กลุ่ม</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill" style="width: 0%"></div>
        </div>
      `;
      
      barRow.addEventListener('click', () => {
        triggerChannelFilter(c.name);
      });
      
      channelBarsContainer.appendChild(barRow);
      
      requestAnimationFrame(() => {
        setTimeout(() => {
          const fill = barRow.querySelector('.bar-fill');
          if (fill) fill.style.width = `${pct}%`;
        }, 50);
      });
    });
  }
}

function triggerStatusFilter(statusLabel) {
  activeStatusFilter = statusLabel;
  activeChannelFilter = 'All';
  
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-status') === statusLabel) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  renderGroupGrid();
  showToast(`กรองเฉพาะสถานะ: ${statusLabel}`, 'info');
}

function triggerChannelFilter(channelName) {
  activeChannelFilter = channelName;
  activeStatusFilter = 'All';
  
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-status') === 'All') {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  renderGroupGrid();
  showToast(`กรองเฉพาะช่องทางสื่อสาร: ${channelName}`, 'info');
}

// ==========================================================================
// Group Cards Grid Rendering & Filtering
// ==========================================================================
function renderGroupGrid() {
  const container = document.getElementById('projects-grid-container');
  if (!container) return;
  container.innerHTML = '';

  // Filter groups
  const filtered = groups.filter(g => {
    // 1. Status Filter
    const matchesStatus = (activeStatusFilter === 'All' || g.status === activeStatusFilter);

    // 2. Channel Filter
    let matchesChannel = true;
    if (activeChannelFilter !== 'All') {
      const rawChan = g.mediaChannel.toLowerCase();
      if (activeChannelFilter === 'คลิปวิดีโอสั้น / TikTok / Reels') {
        matchesChannel = rawChan.includes('คลิป') || rawChan.includes('video') || rawChan.includes('tiktok') || rawChan.includes('reels');
      } else if (activeChannelFilter === 'บอร์ดประชาสัมพันธ์ / นิทรรศการ') {
        matchesChannel = rawChan.includes('บอร์ด') || rawChan.includes('นิทรรศการ');
      } else if (activeChannelFilter === 'โปสเตอร์ / Digital Signage') {
        matchesChannel = rawChan.includes('โปสเตอร์') || rawChan.includes('poster') || rawChan.includes('signage');
      } else if (activeChannelFilter === 'สนทนา / Share Session') {
        matchesChannel = rawChan.includes('แชท') || rawChan.includes('chat') || rawChan.includes('meeting') || rawChan.includes('session') || rawChan.includes('เสวนา');
      } else if (activeChannelFilter === 'E-Newsletter / ประชาสัมพันธ์อีเมล') {
        matchesChannel = rawChan.includes('newsletter') || rawChan.includes('อีเมล') || rawChan.includes('email') || rawChan.includes('ข่าว');
      } else {
        matchesChannel = g.mediaChannel.toLowerCase().includes(activeChannelFilter.toLowerCase());
      }
    }

    // 3. Search query filter
    const searchTerms = [
      `กลุ่มที่ ${g.groupNumber}`,
      g.groupNumber.toString(),
      g.episode,
      g.mediaChannel,
      g.targetAudience,
      g.timeline,
      g.status,
      g.progressUpdate
    ].join(' ').toLowerCase();
    
    const matchesSearch = !searchQuery || searchTerms.includes(searchQuery);

    return matchesStatus && matchesChannel && matchesSearch;
  });

  // Sort groups numerically by Group Number
  filtered.sort((a, b) => {
    const numA = parseInt(a.groupNumber) || 0;
    const numB = parseInt(b.groupNumber) || 0;
    return numA - numB;
  });

  const countLabel = document.getElementById('results-count');
  if (countLabel) {
    let filterDescription = '';
    if (activeChannelFilter !== 'All') {
      filterDescription = ` (${activeChannelFilter})`;
    } else if (activeStatusFilter !== 'All') {
      filterDescription = ` (${activeStatusFilter})`;
    }
    countLabel.textContent = `พบ ${filtered.length} โครงการ${filterDescription}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-data-card" style="width: 100%; grid-column: 1 / -1;">
        <i class="fa-solid fa-folder-open no-data-icon"></i>
        <p>ไม่พบข้อมูลโครงการตามคำค้นหาหรือตัวกรองที่เลือก</p>
      </div>
    `;
    return;
  }

  filtered.forEach((g, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.id = `project-card-${g.id}`;
    card.style.setProperty('--card-index', index);
    
    let statusClass = 'status-preparing';
    let statusIcon = 'fa-hourglass-half';
    if (g.status === 'On Track') {
      statusClass = 'status-ontrack';
      statusIcon = 'fa-circle-check';
    } else if (g.status === 'Delayed') {
      statusClass = 'status-delayed';
      statusIcon = 'fa-triangle-exclamation';
    }

    let dateFormatted = 'N/A';
    if (g.updatedAt) {
      try {
        const d = new Date(g.updatedAt);
        if (!isNaN(d.getTime())) {
          dateFormatted = d.toLocaleDateString('th-TH', {
            day: '2-digit',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
          }) + ' น.';
        }
      } catch (e) {
        console.warn('Date formatting error in card:', e);
      }
    }

    const progressText = g.progressUpdate || '';
    const progressLines = progressText.split('\n').filter(line => line.trim().length > 0);
    const summaryLines = progressLines.slice(0, 2).map(line => {
      const cleanLine = line.replace(/^\d+[\.\-\s]*/, '').trim();
      return cleanLine.length > 45 ? cleanLine.substring(0, 45) + '...' : cleanLine;
    });

    let progressSummaryHTML = '';
    if (summaryLines.length > 0) {
      progressSummaryHTML = `
        <div class="attribute-row">
          <i class="fa-solid fa-list-check text-green"></i>
          <span class="attribute-val" style="white-space: normal; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
            ${summaryLines.join(' | ')}
          </span>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="card-header-row">
        <span class="card-group-tag">กลุ่มที่ ${g.groupNumber}</span>
        <span class="status-badge ${statusClass}">
          <i class="fa-solid ${statusIcon}"></i> ${g.status === 'On Track' ? 'On Track' : g.status === 'Preparing' ? 'Preparing' : 'Delayed'}
        </span>
      </div>
      <div class="card-body">
        <h3 class="card-title" title="${g.episode}">${g.episode}</h3>
        
        <div class="card-attributes">
          <div class="attribute-row">
            <i class="fa-solid fa-paper-plane text-cyan"></i>
            <span class="attribute-val" title="${g.mediaChannel}">${g.mediaChannel}</span>
          </div>
          <div class="attribute-row">
            <i class="fa-solid fa-users-viewfinder text-purple"></i>
            <span class="attribute-val" title="${g.targetAudience}">${g.targetAudience}</span>
          </div>
          <div class="attribute-row">
            <i class="fa-regular fa-calendar-days text-amber"></i>
            <span class="attribute-val" title="${g.timeline}">${g.timeline}</span>
          </div>
          ${progressSummaryHTML}
        </div>
      </div>
      <div class="card-footer">
        <div class="card-meta">
          <span>อัปเดตโดย: <strong>${g.updatedBy || 'ไม่ระบุ'}</strong></span>
          <span>${dateFormatted}</span>
        </div>
        <div class="card-actions-wrapper">
          <button class="icon-btn btn-view" title="ดูรายละเอียดเต็ม" data-id="${g.id}">
            <i class="fa-regular fa-eye"></i>
          </button>
          <button class="icon-btn primary btn-edit" title="แก้ไขข้อมูล" data-id="${g.id}">
            <i class="fa-regular fa-pen-to-square"></i>
          </button>
        </div>
      </div>
    `;

    // Intercept edit button click and eye icon click
    card.querySelector('.btn-view').addEventListener('click', (e) => {
      e.stopPropagation();
      openViewModal(g.id);
    });
    
    card.querySelector('.btn-edit').addEventListener('click', (e) => {
      e.stopPropagation();
      openEditModal(g.id);
    });

    // Entire Card Click View Details Trigger (excluding footer buttons)
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-actions-wrapper') || e.target.closest('.icon-btn')) {
        return;
      }
      openViewModal(g.id);
    });

    container.appendChild(card);
  });
}

// ==========================================================================
// Modal Operations
// ==========================================================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    if (modalId === 'modal-edit-project') {
      const form = document.getElementById('project-form');
      if (form) form.reset();
      document.getElementById('form-project-id').value = '';
    }
  }
}

// Open View Detail Modal
function openViewModal(id) {
  try {
    const g = groups.find(item => item.id === id);
    if (!g) {
      showToast('ไม่พบข้อมูลกลุ่มที่ต้องการแสดงรายละเอียด', 'warning');
      return;
    }
    
    selectedProjectId = id;

    const groupNumEl = document.getElementById('view-modal-group-num');
    if (groupNumEl) groupNumEl.textContent = `กลุ่มที่ ${g.groupNumber}`;
    
    const episodeEl = document.getElementById('view-modal-episode');
    if (episodeEl) episodeEl.textContent = g.episode || '';
    
    const channelEl = document.getElementById('view-modal-channel');
    if (channelEl) channelEl.textContent = g.mediaChannel || '';
    
    const targetEl = document.getElementById('view-modal-target');
    if (targetEl) targetEl.textContent = g.targetAudience || '';
    
    const timelineEl = document.getElementById('view-modal-timeline');
    if (timelineEl) timelineEl.textContent = g.timeline || '';
    
    const statusTextEl = document.getElementById('view-modal-status-text');
    if (statusTextEl) statusTextEl.textContent = g.status || '';
    
    const authorEl = document.getElementById('view-modal-author');
    if (authorEl) authorEl.textContent = g.updatedBy || 'ไม่ระบุ';
    
    let dateFormatted = 'N/A';
    if (g.updatedAt) {
      try {
        const d = new Date(g.updatedAt);
        if (!isNaN(d.getTime())) {
          dateFormatted = d.toLocaleString('th-TH', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          }) + ' น.';
        }
      } catch (dateErr) {
        console.warn('Date parsing error in modal:', dateErr);
      }
    }
    const timeEl = document.getElementById('view-modal-time');
    if (timeEl) timeEl.textContent = dateFormatted;

    const banner = document.getElementById('view-modal-status-banner');
    if (banner) {
      banner.className = 'view-status-banner';
      if (g.status === 'On Track') {
        banner.classList.add('status-ontrack');
        banner.innerHTML = `<i class="fa-solid fa-circle-check"></i> สถานะการดำเนินงานปัจจุบัน: <strong>🟢 ${g.status} (ตามแผน)</strong>`;
      } else if (g.status === 'Preparing') {
        banner.classList.add('status-preparing');
        banner.innerHTML = `<i class="fa-solid fa-hourglass-half"></i> สถานะการดำเนินงานปัจจุบัน: <strong>🟡 ${g.status} (กำลังเตรียมงาน)</strong>`;
      } else if (g.status === 'Delayed') {
        banner.classList.add('status-delayed');
        banner.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> สถานะการดำเนินงานปัจจุบัน: <strong>🔴 ${g.status} (ติดขัด)</strong>`;
      }
    }

    const progressBox = document.getElementById('view-modal-progress');
    if (progressBox) {
      const progressText = g.progressUpdate || '';
      const lines = progressText.split('\n').filter(l => l.trim().length > 0);
      if (lines.length > 0) {
        const ul = document.createElement('ul');
        lines.forEach(line => {
          const li = document.createElement('li');
          li.textContent = line;
          ul.appendChild(li);
        });
        progressBox.innerHTML = '';
        progressBox.appendChild(ul);
      } else {
        progressBox.innerHTML = `<p style="color: var(--text-muted); font-style: italic;">ไม่มีข้อมูลรายละเอียด</p>`;
      }
    }

    openModal('modal-view-detail');
  } catch (err) {
    console.error('Error in openViewModal:', err);
    showToast(`ไม่สามารถแสดงรายละเอียดได้: ${err.message}`, 'warning');
  }
}

// Open Edit / Add Modal (Supports autofilling default group number and episode name)
function openEditModal(id = null, defaultGroupNumber = null) {
  try {
    const modalTitle = document.getElementById('form-modal-title');
    const saveBtn = document.getElementById('btn-save-project');
    const form = document.getElementById('project-form');
    
    if (form) form.reset();
    
    if (id) {
      const g = groups.find(item => item.id === id);
      if (!g) return;
      
      if (modalTitle) modalTitle.textContent = `แก้ไขข้อมูลความคืบหน้าโครงการ - กลุ่มที่ ${g.groupNumber}`;
      if (saveBtn) saveBtn.textContent = 'บันทึกการเปลี่ยนแปลง';

      const projectIdEl = document.getElementById('form-project-id');
      if (projectIdEl) projectIdEl.value = g.id;

      const groupNumEl = document.getElementById('form-group-num');
      if (groupNumEl) groupNumEl.value = g.groupNumber;

      const statusEl = document.getElementById('form-status');
      if (statusEl) statusEl.value = g.status;

      const episodeEl = document.getElementById('form-episode');
      if (episodeEl) episodeEl.value = g.episode;

      const channelEl = document.getElementById('form-channel');
      if (channelEl) channelEl.value = g.mediaChannel;

      const targetEl = document.getElementById('form-target');
      if (targetEl) targetEl.value = g.targetAudience;

      const progressEl = document.getElementById('form-progress');
      if (progressEl) progressEl.value = g.progressUpdate || '';

      const authorEl = document.getElementById('form-author');
      if (authorEl) authorEl.value = g.updatedBy || '';
      
      // Set Calendar values
      const startEl = document.getElementById('form-timeline-start');
      const endEl = document.getElementById('form-timeline-end');
      if (startEl && endEl) {
        if (g.timelineStart && g.timelineEnd) {
          startEl.value = g.timelineStart;
          endEl.value = g.timelineEnd;
        } else {
          startEl.value = '';
          endEl.value = '';
        }
      }
    } else {
      if (modalTitle) modalTitle.textContent = 'อัปเดตข้อมูลความคืบหน้าโครงการใหม่';
      if (saveBtn) saveBtn.textContent = 'บันทึกข้อมูลกลุ่ม';
      
      const projectIdEl = document.getElementById('form-project-id');
      if (projectIdEl) projectIdEl.value = '';
      
      const groupNumEl = document.getElementById('form-group-num');
      if (groupNumEl) {
        groupNumEl.value = defaultGroupNumber || '';
        // If pre-filled, trigger episode auto-name
        if (defaultGroupNumber) {
          setTimeout(handleGroupNumberChange, 50);
        }
      }
      
      const statusEl = document.getElementById('form-status');
      if (statusEl) statusEl.value = 'Preparing';
      
      const startEl = document.getElementById('form-timeline-start');
      const endEl = document.getElementById('form-timeline-end');
      if (startEl && endEl) {
        startEl.value = '';
        endEl.value = '';
      }
    }
    
    openModal('modal-edit-project');
  } catch (err) {
    console.error('Error in openEditModal:', err);
    showToast(`ไม่สามารถเปิดฟอร์มแก้ไขได้: ${err.message}`, 'warning');
  }
}
// Auto pre-fill correct episode name & default dates
function updateFormDefaults(groupNumVal) {
  try {
    const groupNum = parseInt(groupNumVal);
    if (isNaN(groupNum)) return;

    const episodeList = {
      1: "Episode 1: Open to self",
      2: "Episode 2: Open to change",
      3: "Episode 3: Open to Others",
      4: "Episode 4: Open to adjust",
      5: "Episode 5: Open to feedback",
      6: "Episode 6: Open to Success"
    };

    const defaultDatesList = {
      1: { start: "2026-06-01", end: "2026-06-12" },
      2: { start: "2026-06-15", end: "2026-06-26" },
      3: { start: "2026-06-29", end: "2026-07-10" },
      4: { start: "2026-07-13", end: "2026-07-24" },
      5: { start: "2026-07-27", end: "2026-08-07" },
      6: { start: "2026-08-10", end: "2026-08-28" }
    };

    const episodeEl = document.getElementById('form-episode');
    if (episodeEl) {
      episodeEl.value = episodeList[groupNum] || '';
    }

    const startEl = document.getElementById('form-timeline-start');
    const endEl = document.getElementById('form-timeline-end');
    if (startEl && endEl) {
      if (defaultDatesList[groupNum]) {
        startEl.value = defaultDatesList[groupNum].start;
        endEl.value = defaultDatesList[groupNum].end;
      } else {
        startEl.value = '';
        endEl.value = '';
      }
    }
  } catch (e) {
    console.error('Error updating form defaults:', e);
  }
}

// Handle Form Submission
async function handleFormSubmit(e) {
  e.preventDefault();

  const idVal = document.getElementById('form-project-id').value;
  const groupNum = document.getElementById('form-group-num').value.trim();
  const status = document.getElementById('form-status').value;
  const episode = document.getElementById('form-episode').value.trim();
  const channel = document.getElementById('form-channel').value.trim();
  const target = document.getElementById('form-target').value.trim();
  const startVal = document.getElementById('form-timeline-start').value;
  const endVal = document.getElementById('form-timeline-end').value;
  const progress = document.getElementById('form-progress').value.trim();
  const author = document.getElementById('form-author').value.trim();

  if (!groupNum || !episode || !channel || !target || !startVal || !endVal || !progress || !author) {
    showToast('กรุณากรอกข้อมูลที่จำเป็น (*) ให้ครบถ้วน', 'warning');
    return;
  }

  // Date Range validation
  if (endVal < startVal) {
    showToast('วันสิ้นสุดต้องอยู่หลังวันเริ่มต้นสื่อสาร', 'warning');
    return;
  }

  // Format timeline text
  const timelineText = formatThaiDateRange(startVal, endVal);
  const nowString = new Date().toISOString();

  if (idVal) {
    // Edit existing project
    const id = parseInt(idVal);
    const index = groups.findIndex(g => g.id === id);
    if (index !== -1) {
      groups[index] = {
        ...groups[index],
        groupNumber: groupNum,
        status: status,
        episode: episode,
        mediaChannel: channel,
        targetAudience: target,
        timeline: timelineText,
        timelineStart: startVal,
        timelineEnd: endVal,
        progressUpdate: progress,
        updatedBy: author,
        updatedAt: nowString
      };
      showToast(`อัปเดตข้อมูลความคืบหน้า กลุ่มที่ ${groupNum} สำเร็จ!`, 'success');
    }
  } else {
    // Add new project
    const newId = groups.length > 0 ? Math.max(...groups.map(g => g.id)) + 1 : 1;
    
    // Validate uniqueness of groupNumber
    const exists = groups.some(g => g.groupNumber === groupNum);
    if (exists) {
      showToast(`กลุ่มที่ ${groupNum} มีข้อมูลอยู่แล้ว หากต้องการแก้ไขกรุณาคลิกแก้ไขบนการ์ดโดยตรง`, 'warning');
      return;
    }

    const newGroup = {
      id: newId,
      groupNumber: groupNum,
      status: status,
      episode: episode,
      mediaChannel: channel,
      targetAudience: target,
      timeline: timelineText,
      timelineStart: startVal,
      timelineEnd: endVal,
      progressUpdate: progress,
      updatedBy: author,
      updatedAt: nowString
    };

    groups.push(newGroup);
    showToast(`เพิ่มข้อมูลความคืบหน้า กลุ่มที่ ${groupNum} เรียบร้อยแล้ว!`, 'success');
  }

  await saveGroupsData();
  closeModal('modal-edit-project');
  renderDashboard();
}

// ==========================================================================
// Copy to Clipboard (Markdown Template Generator)
// ==========================================================================
function copyMarkdownTemplate() {
  if (!selectedProjectId) return;
  const g = groups.find(item => item.id === selectedProjectId);
  if (!g) return;

  const templateText = 
`📝 ข้อมูลการอัปเดตโครงการ Outward Mindset Group Project
กลุ่มที่: ${g.groupNumber}
Episode: ${g.episode}
   1. วิธีการสื่อสารที่เลือก (Media Channel):
        ${g.mediaChannel}
   2. กลุ่มเป้าหมายที่จะสื่อสาร (Target Audience):
        ${g.targetAudience}
   3. ระยะเวลาการสื่อสาร (Timeline):
        ${g.timeline}
   4. สถานะการดำเนินการปัจจุบัน (Current Status):
       ${g.status === 'On Track' ? 'On Track (ตามแผน)' : g.status === 'Preparing' ? 'Preparing (กำลังเตรียมงาน)' : 'Delayed (ติดขัด)'}
   5. รายละเอียดความคืบหน้าล่าสุด (Progress Update):
${g.progressUpdate.split('\n').map(line => `       ${line.trim()}`).join('\n')}`;

  navigator.clipboard.writeText(templateText)
    .then(() => {
      showToast(`คัดลอกรายงานกลุ่มที่ ${g.groupNumber} ไปยังคลิปบอร์ดแล้ว!`, 'success');
    })
    .catch(err => {
      console.error('Failed to copy template to clipboard:', err);
      showToast('ไม่สามารถคัดลอกไปยังคลิปบอร์ดได้โดยอัตโนมัติ', 'warning');
    });
}

// ==========================================================================
// Floating Toast Notification System
// ==========================================================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = 'fa-info-circle';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'warning') icon = 'fa-triangle-exclamation';

  toast.innerHTML = `
    <i class="fa-solid ${icon} toast-icon"></i>
    <div class="toast-msg">${message}</div>
    <button class="toast-close"><i class="fa-solid fa-xmark"></i></button>
  `;

  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 300);
  });

  container.appendChild(toast);

  requestAnimationFrame(() => {
    setTimeout(() => {
      toast.classList.add('active');
    }, 10);
  });

  setTimeout(() => {
    if (toast.parentNode) {
      toast.classList.remove('active');
      setTimeout(() => toast.remove(), 300);
    }
  }, 3800);
}

// ==========================================================================
// Theme Toggle System (Light/Dark Mode)
// ==========================================================================
function initTheme() {
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem('outward_mindset_theme');
  } catch (e) {
    console.warn('LocalStorage is not accessible:', e);
  }
  const body = document.body;
  
  if (savedTheme) {
    body.className = savedTheme;
  } else {
    // Default to dark theme
    body.className = 'dark-theme';
  }
  
  updateThemeToggleVisual();
}

function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.contains('dark-theme');
  
  // Add transitioning class for smooth CSS transitions
  body.classList.add('theme-transitioning');
  
  if (isDark) {
    body.className = 'light-theme theme-transitioning';
  } else {
    body.className = 'dark-theme theme-transitioning';
  }
  
  // Save preference
  try {
    localStorage.setItem('outward_mindset_theme', isDark ? 'light-theme' : 'dark-theme');
  } catch (e) {
    console.warn('Failed to save theme to LocalStorage:', e);
  }
  
  updateThemeToggleVisual();
  
  // Remove transitioning class after animation completes
  setTimeout(() => {
    body.classList.remove('theme-transitioning');
  }, 500);
  
  // Show toast
  showToast(isDark ? '☀️ เปลี่ยนเป็นโหมดสว่าง' : '🌙 เปลี่ยนเป็นโหมดมืด', 'info');
}

function updateThemeToggleVisual() {
  const isDark = document.body.classList.contains('dark-theme');
  const moonIcon = document.getElementById('theme-icon-moon');
  const sunIcon = document.getElementById('theme-icon-sun');
  const toggleBtn = document.getElementById('btn-theme-toggle');
  
  if (moonIcon && sunIcon && toggleBtn) {
    if (isDark) {
      toggleBtn.classList.add('is-dark');
      toggleBtn.classList.remove('is-light');
    } else {
      toggleBtn.classList.add('is-light');
      toggleBtn.classList.remove('is-dark');
    }
  }
}

// ==========================================================================
// Scroll to Top Button
// ==========================================================================
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('btn-scroll-top');
  if (!scrollTopBtn) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
}

// Initialize Application
document.addEventListener('DOMContentLoaded', init);
