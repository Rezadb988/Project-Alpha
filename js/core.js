/* =========================================================
   PROJECT ALPHA — Core Engine
   i18n • Auth (LocalStorage, Firebase-ready) • Data Store • XP System
   ========================================================= */

/* ---------------------------------------------------------
   1) I18N DICTIONARY
   --------------------------------------------------------- */
const I18N = {
  fa: {
    brand: "پروژه آلفا",
    nav_dashboard: "داشبورد", nav_goals: "اهداف", nav_health: "سلامتی",
    nav_learning: "یادگیری", nav_wealth: "ثروت", nav_profile: "پروفایل", nav_logout: "خروج",
    nav_home: "خانه", nav_login: "ورود", nav_signup: "ثبت‌نام",

    // landing
    hero_eyebrow: "سیستم مدیریت زندگی هوشمند",
    hero_title_1: "زندگی خود را با", hero_title_2: "آلفا", hero_title_3: "ارتقا بده",
    hero_desc: "یک پلتفرم حرفه‌ای برای مدیریت اهداف، سلامتی، یادگیری و ثروت؛ با سیستم امتیاز و سطح‌بندی که هر روزت را هدفمند می‌کند.",
    hero_cta_start: "شروع رایگان", hero_cta_login: "ورود به حساب",
    stat_users: "کاربر فعال", stat_goals: "هدف تکمیل‌شده", stat_rating: "امتیاز کاربران",
    feat_head: "همه‌چیز برای رشد در یک‌جا",
    feat_sub: "چهار حوزه اصلی زندگی، یکپارچه در یک داشبورد حرفه‌ای",
    feat1_t: "مدیریت اهداف", feat1_d: "دسته‌بندی کامل از رشد فردی تا عادت‌ها، با پیگیری پیشرفت و پاداش تجربه.",
    feat2_t: "سلامتی و تناسب اندام", feat2_d: "پیگیری تمرین، آب، خواب، وزن و کالری با نمودارهای زنده.",
    feat3_t: "یادگیری هدفمند", feat3_d: "کتاب، دوره، زبان و مهارت‌های جدید را با آمار پیشرفت دنبال کن.",
    feat4_t: "مدیریت ثروت", feat4_d: "ژورنال معاملات، سرمایه‌گذاری، بودجه و اهداف مالی در یک داشبورد.",
    feat5_t: "سیستم XP و سطح", feat5_d: "هر فعالیت امتیاز تجربه می‌دهد؛ سطح بالا برو و پیشرفتت را ببین.",
    feat6_t: "دوزبانه و ریسپانسیو", feat6_d: "فارسی و انگلیسی با پشتیبانی کامل راست‌به‌چپ، روی هر دستگاهی.",
    footer_rights: "تمامی حقوق محفوظ است.",

    // auth
    login_title: "خوش برگشتی", login_sub: "برای ادامه وارد حساب کاربری شو",
    signup_title: "ساخت حساب کاربری", signup_sub: "رایگان شروع کن و مسیر رشدت را بساز",
    field_name: "نام کامل", field_username: "نام کاربری", field_email: "ایمیل",
    field_password: "رمز عبور", field_confirm: "تکرار رمز عبور",
    remember_me: "مرا به خاطر بسپار", forgot_pass: "رمز عبور را فراموش کردی؟",
    btn_login: "ورود", btn_signup: "ساخت حساب",
    or_continue: "یا ادامه با",
    no_account: "حساب کاربری نداری؟", have_account: "حساب کاربری داری؟",
    signup_link: "ثبت‌نام کن", login_link: "وارد شو",
    err_fill_all: "لطفاً همه فیلدها را پر کن.",
    err_pass_mismatch: "رمز عبور و تکرار آن یکسان نیستند.",
    err_user_exists: "این نام کاربری قبلاً ثبت شده است.",
    err_invalid_login: "نام کاربری یا رمز عبور اشتباه است.",
    ok_signup: "حساب با موفقیت ساخته شد!",
    ok_login: "ورود موفق بود!",

    // dashboard
    dash_title: "داشبورد", dash_welcome: "خوش اومدی",
    dash_desc: "خلاصه پیشرفت امروز خودت رو ببین.",
    xp_points: "امتیاز تجربه", level_label: "سطح", streak_label: "روزهای پیاپی",
    completed_goals: "اهداف تکمیل‌شده", weekly_progress: "پیشرفت هفتگی", monthly_progress: "پیشرفت ماهانه",
    recent_activity: "فعالیت‌های اخیر", quick_actions: "اقدامات سریع",
    daily_quote: "نقل‌قول امروز", today_mission: "ماموریت امروز",
    add_goal: "افزودن هدف", log_workout: "ثبت تمرین", add_expense: "ثبت هزینه", add_note: "افزودن یادداشت",
    no_activity: "هنوز فعالیتی ثبت نشده — از همین امروز شروع کن!",
    view_all: "مشاهده همه",
    to_next_level: "تا سطح بعد",

    // goals
    goals_title: "مدیریت اهداف", goals_desc: "سیستم کامل مدیریت زندگی — بر اساس دسته‌بندی پیش برو.",
    add_new_goal: "هدف جدید", goal_name_ph: "عنوان هدف را بنویس...",
    goal_category: "دسته‌بندی", goal_target: "مقدار هدف", goal_xp: "امتیاز XP",
    all_categories: "همه", empty_goals: "در این دسته هنوز هدفی نیست. یکی اضافه کن!",
    cat_personal_growth: "رشد فردی", cat_confidence: "اعتماد به‌نفس", cat_self_esteem: "عزت‌نفس",
    cat_discipline: "نظم و انضباط", cat_focus: "تمرکز", cat_public_speaking: "سخنرانی",
    cat_mindset: "طرز فکر", cat_time_management: "مدیریت زمان", cat_habits: "عادت‌ها",
    cat_meditation: "مدیتیشن", cat_spirituality: "معنویت", cat_journaling: "یادداشت‌نویسی",
    cat_reading: "کتاب‌خوانی",
    delete_confirm: "مطمئنی می‌خوای حذف کنی؟",

    // health
    health_title: "سلامتی", health_desc: "تمرین، تغذیه، آب و خواب خودت رو پیگیری کن.",
    workout_tracker: "پیگیری تمرین", body_stats: "آمار بدنی", water_intake: "مصرف آب",
    sleep_tracker: "پیگیری خواب", weight: "وزن (kg)", height_cm: "قد (cm)", bmi: "شاخص توده بدنی",
    calories: "کالری", supplements: "مکمل‌ها", body_measurements: "اندازه‌گیری بدن",
    log_entry: "ثبت", workout_name: "نوع تمرین", duration_min: "مدت (دقیقه)",
    glasses_today: "لیوان امروز", hours_slept: "ساعت خواب", history: "تاریخچه",
    calc_bmi: "محاسبه", bmi_result: "نتیجه BMI",

    // learning
    learning_title: "یادگیری", learning_desc: "کتاب، دوره، زبان و مهارت جدید رو دنبال کن.",
    books: "کتاب‌ها", courses: "دوره‌ها", vocabulary: "واژگان", daily_learning: "یادگیری روزانه",
    certificates: "مدارک", learning_stats: "آمار یادگیری", add_book: "کتاب جدید", add_course: "دوره جدید",
    book_title: "عنوان کتاب", pages_total: "تعداد صفحات", pages_read: "صفحات خوانده‌شده",
    course_name: "نام دوره", course_progress: "درصد پیشرفت", add_word: "کلمه جدید", word_meaning: "معنی",

    // wealth
    wealth_title: "ثروت", wealth_desc: "معاملات، سرمایه‌گذاری، درآمد و بودجه در یک‌جا.",
    trading_journal: "ژورنال معاملات", investment_tracker: "پیگیری سرمایه‌گذاری",
    income: "درآمد", expenses: "هزینه‌ها", budget: "بودجه", financial_goals: "اهداف مالی",
    portfolio: "پورتفولیو", capital: "سرمایه", add_trade: "معامله جدید", add_income: "درآمد جدید", add_expense_w: "هزینه جدید",
    trade_symbol: "نماد", trade_result: "نتیجه", trade_amount: "مبلغ", entry_note: "یادداشت",
    total_income: "کل درآمد", total_expenses: "کل هزینه‌ها", net_balance: "مانده خالص",

    // profile
    profile_title: "پروفایل", profile_desc: "اطلاعات حساب و پیشرفت کلی خودت.",
    edit_profile: "ویرایش پروفایل", achievements: "دستاوردها", settings: "تنظیمات",
    account_info: "اطلاعات حساب", save_changes: "ذخیره تغییرات", logout_confirm: "خروج از حساب کاربری",

    // common
    save: "ذخیره", cancel: "انصراف", add: "افزودن", edit: "ویرایش", delete: "حذف", close: "بستن",
    today: "امروز", this_week: "این هفته", this_month: "این ماه", search: "جستجو...",
    coming_soon: "به‌زودی", empty_state: "هنوز چیزی ثبت نشده.",
  },

  en: {
    brand: "Project Alpha",
    nav_dashboard: "Dashboard", nav_goals: "Goals", nav_health: "Health",
    nav_learning: "Learning", nav_wealth: "Wealth", nav_profile: "Profile", nav_logout: "Logout",
    nav_home: "Home", nav_login: "Login", nav_signup: "Sign up",

    hero_eyebrow: "Intelligent Life Management System",
    hero_title_1: "Level up your life with", hero_title_2: "Alpha", hero_title_3: "",
    hero_desc: "A professional platform to manage goals, health, learning and wealth — with an XP and leveling system that makes every day count.",
    hero_cta_start: "Start free", hero_cta_login: "Sign in",
    stat_users: "Active users", stat_goals: "Goals completed", stat_rating: "User rating",
    feat_head: "Everything to grow, in one place",
    feat_sub: "Four core life domains, unified in one professional dashboard",
    feat1_t: "Goal Management", feat1_d: "Full categories from personal growth to habits, with progress tracking and XP rewards.",
    feat2_t: "Health & Fitness", feat2_d: "Track workouts, water, sleep, weight and calories with live charts.",
    feat3_t: "Focused Learning", feat3_d: "Track books, courses, languages and new skills with progress stats.",
    feat4_t: "Wealth Management", feat4_d: "Trading journal, investments, budget and financial goals in one dashboard.",
    feat5_t: "XP & Level System", feat5_d: "Every activity earns experience — level up and watch your growth.",
    feat6_t: "Bilingual & Responsive", feat6_d: "Persian and English with full RTL support, on any device.",
    footer_rights: "All rights reserved.",

    login_title: "Welcome back", login_sub: "Sign in to continue your journey",
    signup_title: "Create your account", signup_sub: "Start free and build your growth path",
    field_name: "Full name", field_username: "Username", field_email: "Email",
    field_password: "Password", field_confirm: "Confirm password",
    remember_me: "Remember me", forgot_pass: "Forgot password?",
    btn_login: "Sign in", btn_signup: "Create account",
    or_continue: "or continue with",
    no_account: "Don't have an account?", have_account: "Already have an account?",
    signup_link: "Sign up", login_link: "Sign in",
    err_fill_all: "Please fill in all fields.",
    err_pass_mismatch: "Passwords do not match.",
    err_user_exists: "This username is already taken.",
    err_invalid_login: "Incorrect username or password.",
    ok_signup: "Account created successfully!",
    ok_login: "Signed in successfully!",

    dash_title: "Dashboard", dash_welcome: "Welcome back",
    dash_desc: "Here's a summary of your progress today.",
    xp_points: "XP Points", level_label: "Level", streak_label: "Day streak",
    completed_goals: "Completed goals", weekly_progress: "Weekly progress", monthly_progress: "Monthly progress",
    recent_activity: "Recent activity", quick_actions: "Quick actions",
    daily_quote: "Quote of the day", today_mission: "Today's mission",
    add_goal: "Add goal", log_workout: "Log workout", add_expense: "Add expense", add_note: "Add note",
    no_activity: "No activity yet — start today!",
    view_all: "View all",
    to_next_level: "to next level",

    goals_title: "Goal Management", goals_desc: "A complete life management system — organized by category.",
    add_new_goal: "New goal", goal_name_ph: "Write a goal title...",
    goal_category: "Category", goal_target: "Target amount", goal_xp: "XP reward",
    all_categories: "All", empty_goals: "No goals in this category yet. Add one!",
    cat_personal_growth: "Personal Growth", cat_confidence: "Confidence", cat_self_esteem: "Self Esteem",
    cat_discipline: "Discipline", cat_focus: "Focus", cat_public_speaking: "Public Speaking",
    cat_mindset: "Mindset", cat_time_management: "Time Management", cat_habits: "Habits",
    cat_meditation: "Meditation", cat_spirituality: "Spirituality", cat_journaling: "Journaling",
    cat_reading: "Reading",
    delete_confirm: "Are you sure you want to delete this?",

    health_title: "Health", health_desc: "Track workouts, nutrition, water and sleep.",
    workout_tracker: "Workout Tracker", body_stats: "Body Stats", water_intake: "Water Intake",
    sleep_tracker: "Sleep Tracker", weight: "Weight (kg)", height_cm: "Height (cm)", bmi: "BMI",
    calories: "Calories", supplements: "Supplements", body_measurements: "Body Measurements",
    log_entry: "Log", workout_name: "Workout type", duration_min: "Duration (min)",
    glasses_today: "Glasses today", hours_slept: "Hours slept", history: "History",
    calc_bmi: "Calculate", bmi_result: "BMI Result",

    learning_title: "Learning", learning_desc: "Track books, courses, languages and new skills.",
    books: "Books", courses: "Courses", vocabulary: "Vocabulary", daily_learning: "Daily learning",
    certificates: "Certificates", learning_stats: "Learning stats", add_book: "Add book", add_course: "Add course",
    book_title: "Book title", pages_total: "Total pages", pages_read: "Pages read",
    course_name: "Course name", course_progress: "Progress %", add_word: "Add word", word_meaning: "Meaning",

    wealth_title: "Wealth", wealth_desc: "Trading, investments, income and budget in one place.",
    trading_journal: "Trading Journal", investment_tracker: "Investment Tracker",
    income: "Income", expenses: "Expenses", budget: "Budget", financial_goals: "Financial Goals",
    portfolio: "Portfolio", capital: "Capital", add_trade: "New trade", add_income: "New income", add_expense_w: "New expense",
    trade_symbol: "Symbol", trade_result: "Result", trade_amount: "Amount", entry_note: "Note",
    total_income: "Total income", total_expenses: "Total expenses", net_balance: "Net balance",

    profile_title: "Profile", profile_desc: "Your account info and overall progress.",
    edit_profile: "Edit profile", achievements: "Achievements", settings: "Settings",
    account_info: "Account info", save_changes: "Save changes", logout_confirm: "Log out of your account",

    save: "Save", cancel: "Cancel", add: "Add", edit: "Edit", delete: "Delete", close: "Close",
    today: "Today", this_week: "This week", this_month: "This month", search: "Search...",
    coming_soon: "Coming soon", empty_state: "Nothing logged yet.",
  }
};

const GOAL_CATEGORIES = [
  "personal_growth","confidence","self_esteem","discipline","focus","public_speaking",
  "mindset","time_management","habits","meditation","spirituality","journaling","reading"
];

/* ---------------------------------------------------------
   2) LANGUAGE ENGINE
   --------------------------------------------------------- */
const Lang = {
  get(){ return localStorage.getItem("alpha_lang") || "fa"; },
  set(lang){
    localStorage.setItem("alpha_lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  },
  t(key){
    const lang = this.get();
    return (I18N[lang] && I18N[lang][key]) || I18N.fa[key] || key;
  },
  apply(){
    const lang = this.get();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      el.textContent = this.t(key);
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
      const key = el.getAttribute("data-i18n-ph");
      el.setAttribute("placeholder", this.t(key));
    });
    document.querySelectorAll(".lang-switch button").forEach(btn=>{
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  },
  toggleWire(){
    document.querySelectorAll(".lang-switch button").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        this.set(btn.dataset.lang);
        this.apply();
      });
    });
  }
};

/* ---------------------------------------------------------
   3) AUTH ENGINE (LocalStorage now — Firebase-ready interface)
   --------------------------------------------------------- */
const Auth = {
  _usersKey: "alpha_users",
  _sessionKey: "alpha_session",

  _getUsers(){ return JSON.parse(localStorage.getItem(this._usersKey) || "{}"); },
  _saveUsers(u){ localStorage.setItem(this._usersKey, JSON.stringify(u)); },

  // Future: swap body of these functions with Firebase Auth SDK calls
  // without changing any calling code across the app.
  signup({name, username, email, password}){
    const users = this._getUsers();
    if(users[username]) return {ok:false, error:"exists"};
    users[username] = {
      name, username, email, password, // NOTE: demo-only plaintext storage; replace with Firebase Auth in production
      createdAt: Date.now(),
      xp: 0, level: 1, streak: 0, lastActive: null,
      avatarSeed: Math.floor(Math.random()*9999)
    };
    this._saveUsers(users);
    Store.initUserData(username);
    this.login({username, password});
    return {ok:true};
  },

  login({username, password}){
    const users = this._getUsers();
    const u = users[username];
    if(!u || u.password !== password) return {ok:false, error:"invalid"};
    localStorage.setItem(this._sessionKey, username);
    this._touchStreak(username);
    return {ok:true};
  },

  logout(){
    localStorage.removeItem(this._sessionKey);
  },

  currentUsername(){ return localStorage.getItem(this._sessionKey); },

  currentUser(){
    const uname = this.currentUsername();
    if(!uname) return null;
    const users = this._getUsers();
    return users[uname] || null;
  },

  updateCurrentUser(patch){
    const uname = this.currentUsername();
    if(!uname) return;
    const users = this._getUsers();
    users[uname] = {...users[uname], ...patch};
    this._saveUsers(users);
  },

  requireAuth(){
    if(!this.currentUsername()){
      window.location.href = this._pathTo("login.html");
    }
  },

  redirectIfAuthed(){
    if(this.currentUsername()){
      window.location.href = this._pathTo("pages/dashboard.html");
    }
  },

  _pathTo(target){
    // works whether we're at root or inside /pages/
    const inPages = window.location.pathname.includes("/pages/");
    if(target.startsWith("pages/")) return inPages ? target.replace("pages/","") : target;
    return inPages ? "../" + target : target;
  },

  _touchStreak(username){
    const users = this._getUsers();
    const u = users[username];
    if(!u) return;
    const today = new Date().toDateString();
    if(u.lastActive !== today){
      const yesterday = new Date(Date.now()-86400000).toDateString();
      u.streak = (u.lastActive === yesterday) ? (u.streak||0)+1 : 1;
      u.lastActive = today;
      users[username] = u;
      this._saveUsers(users);
    }
  },

  addXP(amount){
    const uname = this.currentUsername();
    if(!uname) return;
    const users = this._getUsers();
    const u = users[uname];
    u.xp = (u.xp||0) + amount;
    const needed = u.level * 100;
    if(u.xp >= needed){ u.xp -= needed; u.level += 1; }
    users[uname] = u;
    this._saveUsers(users);
  }
};

/* ---------------------------------------------------------
   4) DATA STORE — per-user namespaced localStorage
   --------------------------------------------------------- */
const Store = {
  _key(username, bucket){ return `alpha_data_${username}_${bucket}`; },

  initUserData(username){
    ["goals","health","learning","wealth","activity"].forEach(bucket=>{
      if(!localStorage.getItem(this._key(username,bucket))){
        localStorage.setItem(this._key(username,bucket), JSON.stringify(bucket==="health"?{
          workouts:[], water:[], sleep:[], weight:[], bmi:null, supplements:[], measurements:[]
        }: bucket==="learning"?{
          books:[], courses:[], vocabulary:[], notes:[]
        }: bucket==="wealth"?{
          trades:[], investments:[], income:[], expenses:[]
        }: []));
      }
    });
  },

  get(bucket){
    const uname = Auth.currentUsername();
    if(!uname) return null;
    return JSON.parse(localStorage.getItem(this._key(uname,bucket)) || "null");
  },

  set(bucket, data){
    const uname = Auth.currentUsername();
    if(!uname) return;
    localStorage.setItem(this._key(uname,bucket), JSON.stringify(data));
  },

  logActivity(text, xp){
    const uname = Auth.currentUsername();
    if(!uname) return;
    const list = this.get("activity") || [];
    list.unshift({text, xp, time: Date.now()});
    this.set("activity", list.slice(0,30));
    if(xp) Auth.addXP(xp);
  },

  // ---- Goals ----
  addGoal(goal){
    const goals = this.get("goals") || [];
    goals.unshift({
      id: "g"+Date.now(), title: goal.title, category: goal.category,
      target: goal.target||1, progress:0, xp: goal.xp||10, done:false, createdAt: Date.now()
    });
    this.set("goals", goals);
  },
  toggleGoal(id){
    const goals = this.get("goals") || [];
    const g = goals.find(x=>x.id===id);
    if(!g) return;
    g.done = !g.done;
    g.progress = g.done ? g.target : g.progress;
    this.set("goals", goals);
    const lang = Lang.get();
    this.logActivity(`${g.done? (lang==="fa"?"تکمیل شد":"Completed"):(lang==="fa"?"لغو شد":"Unchecked")}: ${g.title}`, g.done? g.xp : 0);
  },
  deleteGoal(id){
    const goals = (this.get("goals")||[]).filter(x=>x.id!==id);
    this.set("goals", goals);
  }
};

/* ---------------------------------------------------------
   5) UTIL — toasts, level ring render, mobile nav
   --------------------------------------------------------- */
const UI = {
  toast(msg, type="success"){
    let el = document.getElementById("alpha-toast");
    if(!el){
      el = document.createElement("div");
      el.id = "alpha-toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.className = `toast show ${type}`;
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(()=> el.classList.remove("show"), 2600);
  },

  mountAurora(){
    if(document.querySelector(".aurora")) return;
    const div = document.createElement("div");
    div.className = "aurora";
    div.innerHTML = "<span></span><span></span><span></span>";
    document.body.prepend(div);
  },

  renderLevelRing(container, xp, level){
    const needed = level*100;
    const pct = Math.min(100, Math.round((xp/needed)*100));
    const r = 40, c = 2*Math.PI*r;
    const offset = c - (pct/100)*c;
    container.innerHTML = `
      <svg viewBox="0 0 96 96">
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8b5cf6"/>
            <stop offset="100%" stop-color="#3b82f6"/>
          </linearGradient>
        </defs>
        <circle class="bg-ring" cx="48" cy="48" r="${r}"></circle>
        <circle class="fg-ring" cx="48" cy="48" r="${r}" stroke-dasharray="${c}" stroke-dashoffset="${offset}"></circle>
      </svg>
      <div class="ring-label"><b>${level}</b><span>${Lang.t("level_label")}</span></div>
    `;
  },

  wireMobileNav(){
    const toggle = document.querySelector(".nav-toggle");
    const sidebar = document.querySelector(".sidebar");
    if(!toggle || !sidebar) return;
    toggle.addEventListener("click", ()=> sidebar.classList.toggle("open"));
    document.addEventListener("click",(e)=>{
      if(sidebar.classList.contains("open") && !sidebar.contains(e.target) && !toggle.contains(e.target)){
        sidebar.classList.remove("open");
      }
    });
  },

  timeAgo(ts){
    const diff = Math.floor((Date.now()-ts)/1000);
    const lang = Lang.get();
    if(diff<60) return lang==="fa" ? "چند لحظه پیش" : "just now";
    if(diff<3600) return `${Math.floor(diff/60)} ${lang==="fa"?"دقیقه پیش":"min ago"}`;
    if(diff<86400) return `${Math.floor(diff/3600)} ${lang==="fa"?"ساعت پیش":"hr ago"}`;
    return `${Math.floor(diff/86400)} ${lang==="fa"?"روز پیش":"d ago"}`;
  }
};

document.addEventListener("DOMContentLoaded", ()=>{
  UI.mountAurora();
  Lang.apply();
  Lang.toggleWire();
  UI.wireMobileNav();
});
