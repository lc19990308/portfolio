<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { projects, projectTypes } from './data/projects.js'
import { skillCategories } from './data/skills.js'
import { experience } from './data/experience.js'

const zh = value => value && typeof value === 'object' && !Array.isArray(value) ? value.zh : value
const professionalProjects = projects.filter(project => project.group !== 'personal')
const personalProjects = projects.filter(project => project.group === 'personal')
const query = ref('')
const searchDialog = ref(null)
const openSearch = () => searchDialog.value.showModal()
const closeSearch = () => searchDialog.value.close()
const closeOnBackdrop = event => { if (event.target === searchDialog.value) closeSearch() }
const searchIndex = [
  ...projects.map(project => ({ key: project.id, title: zh(project.name), text: zh(project.summary) + ' ' + project.techStack.join(' '), section: project.group === 'personal' ? 'independent' : 'projects', kind: '项目' })),
  ...skillCategories.map(category => ({ key: zh(category.name), title: zh(category.name), text: category.skills.join(' '), section: 'skills', kind: '技术' })),
  ...experience.map(job => ({ key: zh(job.company), title: zh(job.company), text: zh(job.highlights).join(' '), section: 'career', kind: '经历' })),
]
const searchResults = computed(() => {
  const term = query.value.trim().toLowerCase()
  return term ? searchIndex.filter(item => (item.title + ' ' + item.text).toLowerCase().includes(term)).slice(0, 15) : []
})
let dispose = () => {}
onUnmounted(() => dispose())

onMounted(() => {
  const status = document.getElementById('status');
  let statusTimer;
  const announce = (message) => {
    status.textContent = message;
    clearTimeout(statusTimer);
    statusTimer = setTimeout(() => { status.textContent = ''; }, 3500);
  };
  const copy = async (value, success) => {
    try {
      if (!navigator.clipboard) throw new Error('clipboard-unavailable');
      await navigator.clipboard.writeText(value);
      announce(success);
    } catch {
      announce('浏览器未允许复制，请选中页面文字手动复制。');
    }
  };
  const emailButton = document.getElementById('copy-email');
  const linkButton = document.getElementById('copy-link');
  const printButton = document.getElementById('print-page');
  const copyEmail = () => copy('jarridaddison4@gmail.com', '邮箱已复制。');
  const copyLink = () => {
    if (location.protocol === 'file:') { announce('这是本地文件，请直接分享 HTML 文件。'); return; }
    copy(location.href.split('#')[0], '页面链接已复制。');
  };
  const print = () => window.print();
  emailButton.addEventListener('click', copyEmail);
  linkButton.addEventListener('click', copyLink);
  printButton.addEventListener('click', print);
  let printState = null;
  const beforePrint = () => {
    if (printState) return;
    printState = [...document.querySelectorAll('details')].map(element => ({ element, open: element.open }));
    printState.forEach(({ element }) => { element.open = true; });
  };
  const afterPrint = () => {
    if (!printState) return;
    printState.forEach(({ element, open }) => { element.open = open; });
    printState = null;
  };
  window.addEventListener('beforeprint', beforePrint);
  window.addEventListener('afterprint', afterPrint);
  const sections = [...document.querySelectorAll('.article > section')];
  const links = [...document.querySelectorAll('.toc a')];
  const updateCurrent = () => {
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    const current = atBottom ? sections.at(-1) : (sections.filter(section => section.getBoundingClientRect().top <= 150).at(-1) || sections[0]);
    links.forEach(link => {
      if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  let scheduled = false;
  const onScroll = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { updateCurrent(); scheduled = false; });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('hashchange', updateCurrent);
  const onKeydown = event => {
    if (event.key === 'Escape') { status.textContent = ''; clearTimeout(statusTimer); }
  };
  document.addEventListener('keydown', onKeydown);
  updateCurrent();
  dispose = () => {
    clearTimeout(statusTimer);
    emailButton.removeEventListener('click', copyEmail);
    linkButton.removeEventListener('click', copyLink);
    printButton.removeEventListener('click', print);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('hashchange', updateCurrent);
    window.removeEventListener('beforeprint', beforePrint);
    window.removeEventListener('afterprint', afterPrint);
    document.removeEventListener('keydown', onKeydown);
  };
});

</script>

<template>

<a class="skip" href="#about" data-od-id="skip-content">跳至正文</a>
<div class="wrap">
<header class="masthead" data-od-id="masthead"><a class="wordmark" href="#hero" data-od-id="home-link">LewChaw<span>个人履历与作品</span></a><nav class="toplinks" aria-label="主导航"><button class="copy" @click="openSearch" data-od-id="search-open">搜索</button><a href="#projects" data-od-id="nav-projects">项目精选</a><a class="blog-nav" href="https://lc19990308.github.io/web-blog/" target="_blank" rel="noopener noreferrer" data-od-id="nav-blog">技术博客 ↗</a><a class="contact-link" href="#contact" data-od-id="nav-contact">与我联系 ↗</a></nav></header>
<main>
<section id="hero" class="hero" data-od-id="hero">
<div><p class="eyebrow">人物专题 · 前端开发与实践</p><h1 data-od-id="hero-title"><span>把复杂业务，</span><span>做成清晰体验。</span></h1><p class="intro">我是刘超，也叫 LewChaw。一名前端开发工程师，专注业务前端与组件工程，在跨端集成、自动化与 AI 应用中持续探索。</p><div class="byline"><b>刘超 / LewChaw</b><span>·</span><span>郑州</span><span>·</span><span>工作始于 2020 年</span></div></div>
<aside class="hero-aside" data-od-id="hero-note"><p class="aside-label">这份作品集，关于</p><p>业务里的工程思考<br>屏幕之外的系统连接<br>从想法到作品的实践</p><p class="aside-note">履历、项目与个人探索<br>一篇慢慢展开的自我介绍</p></aside>
</section>
<div class="edition-line"><span>个人档案 / 项目与实践</span><span>内容整理自个人网站</span><span>持续记录，持续构建</span></div>
<div class="layout">
<aside class="toc" aria-label="文章目录" data-od-id="article-toc"><p class="toc-label">本篇目录</p><a href="#about" aria-current="location" data-od-id="toc-about"><span>01</span>关于我</a><a href="#projects" data-od-id="toc-projects"><span>02</span>商业项目</a><a href="#independent" data-od-id="toc-independent"><span>03</span>独立探索</a><a href="#skills" data-od-id="toc-skills"><span>04</span>技术能力</a><a href="#career" data-od-id="toc-career"><span>05</span>工作经历</a><a href="#contact" data-od-id="toc-contact"><span>06</span>保持联系</a><a class="print resume-link" href="/portfolio/resume.pdf" target="_blank" rel="noopener noreferrer">下载 PDF 简历 ↗</a><button class="print" id="print-page" data-od-id="print-page">打印 / 存为 PDF ↗</button></aside>
<article class="article" data-od-id="profile-article">
<section tabindex="-1" id="about" data-od-id="about-section"><div class="section-head"><span class="section-num">01</span><h2 data-od-id="about-title">从页面，走向完整体验</h2></div><p class="opening"><span class="dropcap">前</span>端工作让我接触到许多不同的业务：金融投研、客户管理、工业测试、智慧农业，以及与真实设备连接的移动应用。它们的界面各不相同，却都需要把复杂流程转化为可理解、可操作的体验。</p><p class="body-copy">我的日常从 Vue、TypeScript 和组件工程出发，也延伸到图表性能、实时通信、原生插件与 GUI 自动化。除了商业交付，我也持续构建个人作品，尝试用新的工具把想法做出来。</p><blockquote class="quote">宁为代码累弯腰，不为 bug 点提交。<cite>—— 我的个人网站签名</cite></blockquote></section>
<div class="ornament" role="separator"><span>· · ·</span></div>
<section id="projects" data-od-id="projects-section"><div class="section-head"><span class="section-num">02</span><h2 data-od-id="projects-title">在真实业务中，把事情做成</h2></div><p class="section-deck">精选商业项目，记录具体职责、工程处理与交付成果。</p>
<article v-for="project in professionalProjects" :key="project.id" class="project" :data-od-id="'project-' + project.id">
<div class="project-meta"><span>{{ zh(projectTypes[project.type]) }}</span><span>{{ project.period }}</span></div>
<h3>{{ zh(project.name) }}</h3><p>{{ zh(project.summary) }}</p>
<div class="tech"><span v-for="tech in project.techStack" :key="tech">{{ tech }}</span></div>
<details :data-od-id="'details-' + project.id"><summary>阅读项目细节</summary><div class="detail"><h4>核心挑战</h4><p>{{ zh(project.challenge) }}</p><h4>技术方案</h4><p>{{ zh(project.approach) }}</p><h4>成果与交付</h4><ul class="dash"><li v-for="result in zh(project.results)" :key="result">{{ result }}</li></ul></div></details>
<a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer" class="copy">查看作品 ↗</a>
</article>
</section>
<div class="ornament" role="separator"><span>· · ·</span></div>
<section id="independent" data-od-id="independent-section"><div class="section-head"><span class="section-num">03</span><h2 data-od-id="independent-title">保持好奇，继续构建</h2></div><p class="section-deck">商业项目之外，把兴趣转化为可以使用、可以体验的作品。</p><div class="work-list"><article v-for="project in personalProjects" :key="project.id" class="work" :data-od-id="'work-' + project.id"><div class="work-header"><h3>{{ zh(project.name) }}</h3><a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer">查看作品 ↗</a></div><p>{{ zh(project.summary) }}</p><div class="tech"><span v-for="tech in project.techStack" :key="tech">{{ tech }}</span></div><details><summary>阅读实践细节</summary><div class="detail"><p>{{ zh(project.approach) }}</p><ul class="dash"><li v-for="result in zh(project.results)" :key="result">{{ result }}</li></ul></div></details></article></div></section>
<div class="ornament" role="separator"><span>· · ·</span></div>
<section id="skills" data-od-id="skills-section"><div class="section-head"><span class="section-num">04</span><h2 data-od-id="skills-title">技术，围绕问题组织</h2></div><div class="capabilities"><div v-for="category in skillCategories" :key="zh(category.name)" class="cap-row"><h3>{{ zh(category.name) }}</h3><p>{{ category.skills.join(' · ') }}</p></div></div></section>
<div class="ornament" role="separator"><span>· · ·</span></div>
<section id="career" data-od-id="career-section"><div class="section-head"><span class="section-num">05</span><h2 data-od-id="career-title">一路走来的积累</h2></div><div v-for="job in experience" :key="zh(job.company)" class="career"><div class="career-date">{{ job.period }} / {{ zh(job.role) }}</div><h3>{{ zh(job.company) }}</h3><ul class="dash"><li v-for="highlight in zh(job.highlights)" :key="highlight">{{ highlight }}</li></ul></div><div class="education" data-od-id="education"><div>郑州航空工业管理学院</div><span>工商企业管理 · 大专</span></div></section>
<div class="ornament" role="separator"><span>· · ·</span></div>
<section id="contact" data-od-id="contact-section"><div class="section-head"><span class="section-num">06</span><h2 data-od-id="contact-title">下一段故事，保持联系</h2></div><p class="afterword">工作之外，我喜欢游戏、旅行和阅读，也享受从零构建产品的过程。技术、历史与科幻带来的输入，常常会变成下一个想尝试的方向。</p><div class="contact-box" data-od-id="contact-card"><h3>有合适的机会，欢迎聊聊。</h3><p>前端开发、跨端集成，或者一个值得一起做的产品。</p><div class="contact-actions"><a class="btn-primary" href="mailto:jarridaddison4@gmail.com" data-od-id="email-cta">发邮件给我 ↗</a><button class="copy" id="copy-email" data-od-id="copy-email">复制邮箱</button><a class="copy" href="tel:19139771157" data-od-id="phone-link">电话联系</a></div><p class="contact-meta">jarridaddison4@gmail.com · 191 3977 1157 · 郑州</p></div><div class="share-row" data-od-id="share-row"><span>如果这份作品集对你有用，欢迎转发。</span><button id="copy-link" data-od-id="copy-link">复制页面链接 ↗</button></div></section>
<p class="article-end">感谢读到这里</p>
</article>
</div>
</main>
<footer class="footer" data-od-id="footer"><span>© 2026 刘超 · LewChaw</span><a href="https://github.com/lc19990308" target="_blank" rel="noopener noreferrer" data-od-id="github-link">在 GitHub 继续阅读 ↗</a></footer>
</div><div class="status" role="status" aria-live="polite" id="status"></div>
<dialog ref="searchDialog" class="search-dialog" aria-labelledby="search-heading" @click="closeOnBackdrop"><div class="search-top"><h2 id="search-heading">搜索作品与经历</h2><button class="copy" @click="closeSearch" aria-label="关闭搜索">关闭</button></div><label for="profile-search">项目、技术或公司名称</label><input id="profile-search" v-model="query" type="search" placeholder="例如：Vue、金融、自动化"><div class="search-results"><p v-if="!query.trim()">输入关键词，查找项目、技能与工作经历。</p><p v-else-if="!searchResults.length" role="status">没有找到匹配内容，请换一个关键词。</p><a v-for="result in searchResults" :key="result.key" :href="'#' + result.section" @click="closeSearch"><span>{{ result.title }}</span><small>{{ result.kind }}</small></a></div></dialog>
</template>

<style>

:root {
  /* ─── Surface (3 levels — #Gap 2) ────────────────────────────────
   * Warm parchment canvas; cards lift one half-shade brighter to
   * ivory; secondary interactive surfaces drop to warm-sand. Never
   * #ffffff anywhere — the cream tone *is* kami's identity.
   * `--surface-warm` is new in the shared schema; brands without a
   * tertiary surface tier should alias it to var(--surface). */
  --bg: #f5f4ed;            /* parchment — page background */
  --surface: #faf9f5;       /* ivory — cards, lifted containers */
  --surface-warm: #e8e6dc;  /* warm sand — default button bg, secondary surfaces */

  /* ─── Foreground ramp (4 levels — #Gap 1) ───────────────────────
   * kami's text uses four named levels — primary / secondary /
   * subtext / metadata. Cool blue-grays are forbidden everywhere;
   * each token below has the warm yellow-brown undertone (R ≈ G > B)
   * the brand requires.
   *
   * `--fg-2` and `--meta` are new in the shared schema; brands that
   * only differentiate two levels should alias these to var(--fg)
   * and var(--muted). */
  --fg: #141413;            /* near-black — primary text, slight olive warmth */
  --fg-2: #3d3d3a;          /* dark warm — secondary text, table headers */
  --muted: #504e49;         /* olive — subtext, captions */
  --meta: #6b6a64;          /* stone — tertiary, dates, metadata */

  /* ─── Border (2 levels — #Gap 3) ────────────────────────────────
   * Primary border for card edges and section dividers; soft border
   * for inner row separators that should not visually compete.
   * `--border-soft` is new in the shared schema; brands with one
   * border tier should alias it to var(--border). */
  --border: #e8e6dc;
  --border-soft: #e5e3d8;

  /* ─── Accent ─────────────────────────────────────────────────────
   * The single chromatic move. CTAs, section numbers, link text,
   * the left rule of a quote, the W500 weight in a metric. Hard
   * cap of ≤5% of any surface area (DESIGN.md §2). */
  --accent: #1b365d;        /* ink blue */
  --accent-on: #faf9f5;     /* ivory — fg when accent is the bg (NOT pure white) */
  --accent-light: #2d5a8a;  /* brighter variant — links on dark surfaces only */

  /* ─── Accent states (#Gap 4) ────────────────────────────────────
   * kami treats --accent-hover and --accent-active as VALUE
   * bindings, not formula derivations. Ink blue is already deep;
   * mixing further black makes hover invisible. The brand instead
   * expresses hover through elevation (whisper shadow) and keeps
   * the color identical. Active darkens slightly via a hand-picked
   * value, not a formula.
   *
   * Schema rule: every brand provides --accent-hover and
   * --accent-active. Default's brand uses a black-mix formula;
   * kami uses identity / hand-picked. Both satisfy the contract. */
  --accent-hover: var(--accent);                /* color-stable; hover via elevation */
  --accent-active: #142a48;                     /* hand-picked, ~12% darker ink */

  /* ─── Semantic ───────────────────────────────────────────────────
   * kami's DESIGN.md doesn't specify success/warn/danger because the
   * system is print-first and rarely renders status. We bind them to
   * desaturated warm hues that survive parchment without breaking
   * the "single chromatic move" rule. Use sparingly; kami artifacts
   * almost never need these. */
  --success: #4a6b3a;       /* warm forest — toned down for parchment */
  --warn: #8a6b1f;          /* burnt sienna */
  --danger: #8a3a30;        /* warm terracotta — never tailwind red */

  /* ─── Typography ─────────────────────────────────────────────────
   * Default to English Charter stack on :root. The `:root[lang]`
   * blocks below override for CN and JA. `--font-body` and
   * `--font-display` are equal — kami uses a single serif weight
   * (500) and lets size carry hierarchy.
   *
   * Sans is reserved for eyebrows, switchers, small labels — it
   * literally equals the serif stack, so there is no separate
   * sans token. */
  --font-display:
    Charter, Georgia, Palatino, "Times New Roman", serif;
  --font-body:
    Charter, Georgia, Palatino, "Times New Roman", serif;
  --font-mono:
    "JetBrains Mono", "SF Mono", "Fira Code", Consolas, Monaco,
    "TsangerJinKai02", "Source Han Serif SC", monospace;

  /* Type scale (px) — derived from DESIGN.md §3 hierarchy table.
   * kami runs lighter on the small end and heavier on the display
   * end than default's 12–64 — print rhythm needs both 11px captions
   * and 96px hero display.
   *
   * `--text-md` (15px) is a brand-specific extension — kami needs an
   * in-between size for ledes that the schema's --text-base (body)
   * and --text-lg (H3) ramp doesn't supply. Generic cross-brand
   * components must NOT reference --text-md; only kami's own
   * components.html consumes it. Promote to schema if a second
   * brand reports the same need. */
  --text-xs: 11px;
  --text-sm: 12px;
  --text-base: 14px;        /* body — print-dense */
  --text-md: 15px;          /* brand-specific — lede / large body */
  --text-lg: 17px;          /* H3 */
  --text-xl: 22px;          /* H2 */
  --text-2xl: 32px;         /* section title */
  --text-3xl: 48px;         /* CJK display ceiling */
  --text-4xl: 96px;         /* EN hero / cover slide title */

  /* kami's line-height envelope is 1.10–1.55, narrower than default's */
  --leading-display: 1.1;   /* hero, H1, H2 */
  --leading-tight: 1.25;    /* section title */
  --leading-body: 1.55;     /* reading body */
  --leading-dense: 1.4;     /* resume / one-pager */

  /* Letter-spacing rules from DESIGN.md §3. EN body is 0; CN/JA
   * override below. Display tracking is negative (compresses
   * 96px hero); eyebrow tracking is positive (uppercase labels). */
  --tracking-display: -1.2px;   /* applied to 96px hero only */
  --tracking-eyebrow: 1.2px;    /* uppercase eyebrow / overline */
  --tracking-label: 0.4px;      /* small uppercase labels */

  /* ─── Spacing ────────────────────────────────────────────────────
   * kami is print-rooted; section gaps and card paddings come from
   * the layout grid in DESIGN.md §5, not the 4px web-grid that
   * default uses. We keep the same token names but rebind values
   * to kami's actual rhythm. */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 28px;          /* card interior */
  --space-8: 32px;
  --space-12: 48px;
  --space-18: 72px;         /* section gap (web) */
  --space-22: 88px;         /* page top padding (web) */

  /* Web page geometry (DESIGN.md §5) */
  --section-y-desktop: 72px;
  --section-y-tablet: 48px;
  --section-y-phone: 32px;

  /* ─── Radius ─────────────────────────────────────────────────────
   * `2px → 4px → 6px → 8px → 12px → 16px` per DESIGN.md §6. Tags
   * sit at 2–4px; buttons and cards at 8px; featured at 12–16px. */
  --radius-xs: 2px;         /* tags */
  --radius-sm: 4px;         /* small chips */
  --radius-md: 8px;         /* default — buttons, cards */
  --radius-lg: 12px;        /* featured cards */
  --radius-xl: 16px;        /* hero containers */
  --radius-pill: 9999px;    /* avatars (rare) */

  /* ─── Elevation (3 levels — #Gap 5) ─────────────────────────────
   * kami forbids hard drop shadows. Three sanctioned levels:
   * flat / ring (1px hairline OR 1px brand ring) / whisper. The
   * shared schema gains `--elev-ring` so brands using ring shadows
   * as primary elevation (kami, paper, editorial) don't have to
   * rebind --elev-raised away from blur shadow.
   *
   * `--elev-ring-accent` is brand-specific — kami uses it as the
   * edge for primary buttons (`box-shadow: var(--elev-ring-accent)`
   * instead of border, to keep the rectangle perfectly aligned
   * with the fill). */
  --elev-flat: none;
  --elev-ring: 0 0 0 1px var(--border);
  --elev-ring-accent: 0 0 0 1px var(--accent); /* brand-specific */
  --elev-raised: 0 4px 24px rgba(0, 0, 0, 0.05);  /* whisper */

  /* ─── Focus ring ─────────────────────────────────────────────────
   * kami's focus is more restrained than default's — the brand
   * forbids cool-blue glows. We use a smaller ring with the active
   * variant of accent. */
  --focus-ring: 0 0 0 2px var(--accent-active);

  /* ─── Motion ─────────────────────────────────────────────────────
   * kami's hover is a 200ms whisper-shadow lift only — no transform,
   * no brightness shift. Two durations, one easing. */
  --motion-fast: 150ms;
  --motion-base: 200ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);

  /* ─── Layout ─────────────────────────────────────────────────────
   * Web container: 1120px max, 64px gutter desktop. Print pages
   * have margin tokens specific to document type (resume / one-pager
   * / long-doc / letter / portfolio) — those live in the print
   * skill, not in this shared token block. */
  --container-max: 1120px;
  --container-gutter-desktop: 64px;
  --container-gutter-tablet: 32px;
  --container-gutter-phone: 16px;

  /* ─── Brand-specific: tag tint scale (#Gap 6) ────────────────────
   * Print renderers double-paint alpha fills. kami pre-blends ink
   * blue over parchment as solid hex at 5 effective alphas. These
   * tokens are NOT part of the shared schema; they live here only
   * because kami's rendering target needs them. Other brands tint
   * with `color-mix(... transparent N%)` inline. */
  --tag-bg-faint: #eef2f7;     /* ≈ ink at 0.08 */
  --tag-bg-soft: #e4ecf5;      /* ≈ ink at 0.18 — DEFAULT tag */
  --tag-bg-base: #d6e1ee;      /* ≈ ink at 0.30 */
  --tag-bg-strong: #d0dce9;    /* ≈ ink at 0.22, denser */
}

/* ─── i18n font overrides (#Gap 7) ──────────────────────────────────
 * Switch the dominant font stack based on the artifact's lang.
 * Apply ONLY ONE of these blocks — the one matching <html lang="...">
 * — and keep --font-mono on the EN stack since code labels stay Latin
 * regardless of the document language.
 *
 * For multi-language artifacts (e.g. a deck with one Japanese chapter),
 * keep the dominant stack on :root and scope the override on a
 * wrapper element instead:
 *
 *   section[lang="ja"] { --font-display: <JA stack>; ... }
 *
 * Do NOT chain all three font families inside a single font-family
 * declaration — that dilutes the visual character of every page.
 * ─────────────────────────────────────────────────────────────────── */

:root[lang="zh-CN"],
:root[lang="zh"] {
  --font-display:
    "TsangerJinKai02", "Source Han Serif SC", "Noto Serif CJK SC",
    "Songti SC", "STSong", Georgia, serif;
  --font-body:
    "TsangerJinKai02", "Source Han Serif SC", "Noto Serif CJK SC",
    "Songti SC", "STSong", Georgia, serif;
}

*{box-sizing:border-box}
html{scroll-padding-top:96px}
body{margin:0;background:var(--bg);color:var(--fg);font:400 16px/1.55 var(--font-body);letter-spacing:.35px;-webkit-font-smoothing:antialiased}
h1,h2,h3,h4,p{margin:0}
h1,h2,h3,h4,strong{font-weight:500}
a{color:inherit;text-underline-offset:5px;text-decoration-thickness:1px}
button{font:inherit;cursor:pointer}
a,button,summary{touch-action:manipulation}
a:focus-visible,button:focus-visible,summary:focus-visible{outline:2px solid var(--accent-active);outline-offset:5px}
a:hover{color:var(--fg);text-decoration:underline}
button,summary,a{transition:box-shadow var(--motion-base),background var(--motion-base)}
::selection{background:var(--tag-bg-base);color:var(--fg)}
.wrap{width:min(1120px,calc(100% - 96px));margin:auto}
.masthead{height:88px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--fg)}
.wordmark{text-decoration:none;font-size:22px;letter-spacing:1px}
.wordmark span{font-size:12px;color:var(--meta);margin-left:16px;letter-spacing:2px}
.toplinks{display:flex;gap:28px;align-items:center;font-size:13px}
.toplinks a{min-height:44px;display:flex;align-items:center;text-decoration:none}
.toplinks a:hover{text-decoration:underline}
.toplinks .contact-link{border-bottom:1px solid var(--fg)}
.folio{font-size:12px;letter-spacing:1px;color:var(--meta);font-variant-numeric:tabular-nums}
.hero{padding:60px 0 48px;display:grid;grid-template-columns:1fr 224px;gap:48px}
.eyebrow{font-size:12px;letter-spacing:2px;color:var(--muted);margin-bottom:28px}
.hero h1{font-size:clamp(40px,4.3vw,60px);line-height:1.22;letter-spacing:1px;text-wrap:balance}
.hero h1 span{display:block}
.hero .intro{font-size:17px;color:var(--muted);max-width:620px;margin-top:26px;line-height:1.55;text-wrap:pretty}
.byline{display:flex;gap:14px;align-items:center;margin-top:32px;font-size:12px;color:var(--meta)}
.byline b{color:var(--fg);font-weight:500;font-size:14px}
.hero-aside{align-self:end;border-top:1px solid var(--fg);padding-top:17px;padding-bottom:2px}
.hero-aside .aside-label{font-size:12px;color:var(--meta);margin-bottom:15px}
.hero-aside p{font-size:14px;line-height:1.55;margin:8px 0}
.hero-aside .aside-note{font-size:12px;color:var(--meta);border-top:1px solid var(--border);padding-top:16px;margin-top:22px}
.edition-line{display:flex;justify-content:space-between;padding:13px 0;border-block:1px solid var(--border);font-size:12px;color:var(--meta)}
.layout{display:grid;grid-template-columns:160px minmax(0,700px) 1fr;gap:48px;align-items:start;margin-top:56px}
.toc{position:sticky;top:32px;font-size:12px}
.toc-label{color:var(--meta);letter-spacing:1px;margin-bottom:16px}
.toc a{display:flex;align-items:center;gap:14px;text-decoration:none;min-height:44px;color:var(--muted);border-bottom:1px solid transparent}
.toc a span{font-variant-numeric:tabular-nums;color:var(--meta);font-size:11px}
.toc a[aria-current="location"]{color:var(--fg);border-bottom-color:var(--fg)}
.toc a:hover{color:var(--fg);background:var(--surface-warm)}
.toc .print{margin-top:25px;background:none;color:var(--fg-2);border:1px solid var(--border);border-radius:var(--radius-md);min-height:44px;padding:8px 14px;font-size:12px;width:100%}
.toc .print:hover{box-shadow:var(--elev-raised);background:var(--surface)}
.article{min-width:0;padding-bottom:100px}
.section-head{display:flex;align-items:baseline;gap:16px;margin-bottom:26px}
.section-num{font-size:13px;color:var(--accent);font-variant-numeric:tabular-nums}
.section-head h2{font-size:30px;line-height:1.25;letter-spacing:.6px}
.article p{color:var(--fg-2);text-wrap:pretty}
.opening{font-size:18px;line-height:1.55}
.opening .dropcap{float:left;font-size:56px;line-height:1.1;margin:0 12px 0 0;color:var(--fg)}
.article .body-copy{margin-top:20px;font-size:16px}
.quote{border-left:2px solid var(--accent);padding-left:20px;margin:32px 0 0;font-size:21px;line-height:1.5;color:var(--fg)}
.quote cite{display:block;font-size:12px;font-style:normal;color:var(--meta);margin-top:10px}
.ornament{display:flex;align-items:center;justify-content:center;gap:14px;margin:48px 0;color:var(--meta);height:12px;border:0}
.ornament:before,.ornament:after{content:"";width:42px;height:1px;background:var(--border-soft)}
.ornament span{font-size:14px;letter-spacing:4px}
.section-deck{font-size:15px;color:var(--muted);margin-top:-12px;margin-bottom:30px}
.project{border-top:1px solid var(--border);padding:26px 0 30px}
.project:first-of-type{border-top-color:var(--fg)}
.project-meta{display:flex;justify-content:space-between;gap:16px;font-size:12px;color:var(--meta);margin-bottom:14px;font-variant-numeric:tabular-nums}
.project h3{font-size:25px;line-height:1.3;margin-bottom:15px;letter-spacing:.4px}
.project p{font-size:15px;line-height:1.55}
.tech{display:flex;flex-wrap:wrap;gap:7px 14px;margin:18px 0;color:var(--muted);font-size:12px}
.tech span+span:before{content:"/";color:var(--meta);margin-right:14px}
.project-note{font-size:13px!important;padding:14px 0;border-block:1px solid var(--border-soft)}
.project-note strong{color:var(--fg)}
details{margin-top:12px}
summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;min-height:44px;font-size:13px;color:var(--fg-2)}
summary::-webkit-details-marker{display:none}
summary:after{content:"＋";font-size:19px}
details[open] summary:after{content:"−"}
summary:hover{background:var(--surface-warm);color:var(--fg)}
.detail{padding:16px 20px 20px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-md)}
.detail h4{font-size:14px;margin-bottom:8px}
.detail p{font-size:14px}
.detail p+h4{margin-top:20px}
.dash{list-style:none;padding:0;margin:12px 0 0}
.dash li{position:relative;padding-left:18px;font-size:14px;color:var(--fg-2);margin-top:9px}
.dash li:before{content:"–";position:absolute;left:0;color:var(--accent)}
.work-list{border-top:1px solid var(--fg)}
.work{padding:25px 0;border-bottom:1px solid var(--border)}
.work-header{display:flex;justify-content:space-between;align-items:baseline;gap:16px}
.work h3{font-size:20px;line-height:1.3}
.work p{font-size:14px;margin-top:12px}
.work a{font-size:12px;white-space:nowrap;min-height:44px;display:flex;align-items:center}
.work .tech{margin-bottom:0}
.capabilities{border-top:1px solid var(--fg)}
.cap-row{display:grid;grid-template-columns:126px 1fr;gap:24px;padding:20px 0;border-bottom:1px solid var(--border);font-size:14px}
.cap-row h3{font-size:15px}
.cap-row p{font-size:14px}
.cap-row small{display:block;color:var(--meta);font-size:12px;margin-top:7px}
.career{padding:23px 0;border-top:1px solid var(--border)}
.career:first-of-type{border-top-color:var(--fg)}
.career-date{font-size:12px;color:var(--meta);font-variant-numeric:tabular-nums;margin-bottom:10px}
.career h3{font-size:19px;line-height:1.4}
.career p{font-size:14px;margin-top:10px}
.education{display:flex;justify-content:space-between;gap:24px;font-size:13px;margin-top:18px;padding:18px 0;border-block:1px solid var(--border)}
.education span{color:var(--meta)}
.afterword{font-size:15px;line-height:1.55}
.contact-box{margin-top:30px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-md);padding:28px}
.contact-box h3{font-size:23px;margin-bottom:12px}
.contact-box p{font-size:14px}
.contact-actions{display:flex;align-items:center;gap:20px;margin-top:22px;flex-wrap:wrap}
.btn-primary{display:inline-flex;align-items:center;justify-content:center;background:var(--accent);color:var(--accent-on);box-shadow:var(--elev-ring-accent);padding:10px 18px;border:0;border-radius:var(--radius-md);font-size:14px;text-decoration:none;min-height:44px}
.btn-primary:hover{background:var(--accent-hover);color:var(--accent-on);box-shadow:var(--elev-raised);text-decoration:none}
.btn-primary:active{background:var(--accent-active);color:var(--accent-on)}
.copy{display:inline-flex;align-items:center;justify-content:center;border:0;background:none;color:var(--fg-2);font-size:13px;min-height:44px;padding:8px}
.copy:hover{background:var(--surface-warm);color:var(--fg)}
.contact-meta{font-size:12px!important;color:var(--meta)!important;margin-top:20px;overflow-wrap:anywhere}
.share-row{display:flex;align-items:center;justify-content:space-between;gap:20px;border-top:1px solid var(--border);margin-top:32px;padding-top:20px;font-size:12px;color:var(--meta)}
.share-row button{background:none;border:0;min-height:44px;color:var(--fg-2);font-size:12px}
.share-row button:hover{background:var(--surface-warm)}
.article-end{text-align:center;font-size:12px;letter-spacing:3px;color:var(--meta);margin-top:48px}
.footer{border-top:1px solid var(--fg);padding:23px 0 32px;display:flex;justify-content:space-between;font-size:12px;color:var(--meta)}
.footer a{text-decoration:none}
.status{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);max-width:calc(100% - 32px);padding:12px 20px;background:var(--fg);color:var(--surface);border-radius:var(--radius-md);font-size:13px;z-index:5}
.status:empty{width:1px;height:1px;padding:0;clip-path:inset(50%);overflow:hidden}
.skip{position:fixed;top:-100px;left:16px;background:var(--surface);padding:12px;z-index:10}
.skip:focus{top:12px}
@media(min-width:1500px){.hero h1{font-size:60px}
}
@media(max-width:1100px){.layout{grid-template-columns:140px minmax(0,700px);gap:36px}
.hero{grid-template-columns:1fr 192px;gap:32px}
.wrap{width:calc(100% - 64px)}
}
@media(max-width:767px){.wrap{width:calc(100% - 40px)}
.masthead{height:72px}
.wordmark{font-size:20px}
.wordmark span{display:none}
.toplinks{gap:16px;font-size:12px}
.toplinks .blog-nav{display:none}
.hero{grid-template-columns:1fr;padding:40px 0 28px;gap:28px}
.hero h1{font-size:clamp(34px,7.8vw,46px);line-height:1.25;letter-spacing:0}
.eyebrow{margin-bottom:20px;font-size:11px}
.hero .intro{font-size:15px;margin-top:22px}
.hero-aside{display:none}
.byline{gap:9px;font-size:11px;flex-wrap:wrap;margin-top:24px}
.edition-line{font-size:10px;gap:12px}
.edition-line span:last-child{display:none}
.layout{display:block;margin-top:0}
.toc{position:static;display:flex;align-items:center;gap:4px;flex-wrap:wrap;border-bottom:1px solid var(--border);padding:12px 0 16px;margin-bottom:36px}
.toc-label{width:100%;font-size:11px;margin:0}
.toc a{padding:0 8px;font-size:12px;gap:6px}
.toc a span{display:none}
.toc .print{width:auto;margin:0 0 0 auto;border:0;padding:0 8px}
.section-head h2{font-size:26px}
.opening{font-size:17px}
.opening .dropcap{font-size:48px}
.quote{font-size:19px}
.ornament{margin:36px 0}
.project h3{font-size:23px}
.project-meta{font-size:11px;gap:8px}
.project{padding:24px 0}
.work-header{align-items:start}
.work h3{font-size:19px}
.cap-row{grid-template-columns:1fr;gap:8px;padding:18px 0}
.education{flex-direction:column;gap:5px}
.contact-box{padding:22px 18px}
.contact-actions{gap:10px}
.share-row{align-items:start}
.footer{gap:16px;font-size:11px}
.article{padding-bottom:64px}
.tech{gap:7px 10px}
.tech span+span:before{margin-right:10px}
.detail{padding:16px}
.work p,.project p{overflow-wrap:anywhere}
}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{transition:none!important;scroll-behavior:auto!important}
}
@page{size:A4;margin:14mm 16mm}
@media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact;font-size:12pt}
.wrap{width:100%}
.masthead{height:50px}
.toplinks,.toc,.edition-line,.contact-actions,.share-row,.status{display:none}
.hero{padding:28px 0;grid-template-columns:1fr}
.hero h1{font-size:32pt}
.hero-aside{display:none}
.layout{display:block;margin-top:24px}
.article{padding-bottom:20px}
.article p,.project p,.career p,.work p,.cap-row p,.dash li,.detail p{font-size:12pt}
.project,.work,.career,.contact-box,.cap-row,.education,blockquote{break-inside:avoid}
h2,h3{break-after:avoid}
.ornament{margin:24px 0}
.contact-meta,.project-note{font-size:12pt!important}
details{break-inside:avoid}
.footer{padding-bottom:0}
}

.resume-link{display:flex;align-items:center;justify-content:center;text-decoration:none}
.search-dialog{width:min(620px,calc(100% - 32px));max-height:80vh;margin:auto;border:1px solid var(--border);border-radius:var(--radius-md);padding:24px;background:var(--surface);color:var(--fg);font-family:var(--font-body)}
.search-dialog::backdrop{background:oklch(0.2 0 0 / .45)}
.search-top{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:20px}
.search-top h2{font-size:22px}
.search-dialog label{display:block;font-size:13px;margin-bottom:10px}
.search-dialog input{width:100%;min-height:44px;border:1px solid var(--meta);border-radius:var(--radius-md);padding:10px;background:var(--bg);color:var(--fg);font:inherit}
.search-dialog input:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
.search-results{margin-top:20px}
.search-results a{min-height:48px;display:flex;align-items:center;justify-content:space-between;gap:12px;border-bottom:1px solid var(--border);text-decoration:none}
.search-results a:hover{background:var(--surface-warm)}
.search-results small{flex-shrink:0;color:var(--muted)}
@media print{.resume-link,.search-dialog{display:none}
}

</style>
