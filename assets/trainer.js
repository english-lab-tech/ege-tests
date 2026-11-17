/* Тренажёр ЕГЭ по английскому: письменная часть с автопроверкой заданий 1–36,
   самооценка письма 37–38 и устной части по критериям.
   Данные варианта — window.VARIANT из data.js рядом со страницей. Ответы хранятся в localStorage. */
(() => {
'use strict';
const V = window.VARIANT;
const KEY = 'ege-trainer:' + V.id;
const W_MIN = 190;                 // письменная часть ЕГЭ: 3 ч 10 мин
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = s => { s = Math.max(0, Math.round(s)); const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = String(s % 60).padStart(2, '0');
  return h ? `${h}:${String(m).padStart(2, '0')}:${x}` : `${m}:${x}`; };
const words = t => (t.trim().match(/[A-Za-zА-Яа-яЁё0-9]+(?:['’-][A-Za-zА-Яа-яЁё0-9]+)*/g) || []).length;
const norm = s => String(s || '').toLowerCase().replace(/[’`]/g, "'").replace(/[^a-z']/g, '');

const fresh = () => ({ ans: {}, checked: false, wStart: null, sec: 1, listenPos: 0, self: {}, oralSelf: {} });
let S;
try { S = Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY)) || {}); } catch { S = fresh(); }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} };

const app = document.getElementById('app');
document.title = V.title + ' · тренажёр ЕГЭ';

/* ===================== Подсчёт баллов ===================== */
const allItems = () => V.written.flatMap(s => s.items.map(it => Object.assign({ section: s.section }, it)));
function scoreList() {
  const out = [];
  for (const it of allItems()) {
    if (it.type === 'mc') {
      const u = S.ans[it.id] || '';
      out.push({ id: it.id, sec: it.section, user: u, key: it.key, pts: u === it.key ? 1 : 0, max: 1 });
    } else if (it.type === 'word') {
      const u = S.ans[it.id] || '';
      const ok = it.key.some(k => norm(k) === norm(u)) && norm(u) !== '';
      out.push({ id: it.id, sec: it.section, user: u, key: it.key.join(' / '), pts: ok ? 1 : 0, max: 1 });
    } else if (it.type === 'cloze') {
      for (const t of it.tasks) {
        const u = S.ans[t.id] || '';
        out.push({ id: t.id, sec: it.section, user: u, key: t.key, pts: u === t.key ? 1 : 0, max: 1 });
      }
    } else if (['match', 'tf', 'gaps'].includes(it.type)) {
      const rows = it.type === 'tf' ? it.statements.map(s => s[0]) : it.rows;
      const u = rows.map(r => S.ans[it.id + '.' + r] || '·').join('');
      let errors = 0; rows.forEach((r, i) => { if ((S.ans[it.id + '.' + r] || '') !== it.key[i]) errors++; });
      out.push({ id: it.id, sec: it.section, user: u, key: it.key, pts: Math.max(0, it.points - errors), max: it.points });
    }
  }
  return out.sort((a, b) => a.id - b.id);
}
const CRIT = {
  37: [
    ['K1', 'Решение коммуникативной задачи', 2, ['ответ на все три вопроса друга', 'три вопроса о том, что указано в задании', 'обращение, благодарность за письмо, ссылка на прошлые/будущие контакты, завершающая фраза и подпись', 'неофициальный стиль']],
    ['K2', 'Организация текста', 2, ['логичное деление на абзацы', 'средства логической связи', 'формат письма соблюдён']],
    ['K3', 'Языковое оформление', 2, ['разнообразная лексика и грамматика по теме', 'не больше 2–3 негрубых ошибок для высшего балла']]
  ],
  38: [
    ['K1', 'Решение коммуникативной задачи', 3, ['вступление по теме проекта', '2–3 факта из таблицы или диаграммы', '1–2 сравнения с комментарием', 'проблема и способ её решения', 'вывод с аргументированным мнением', 'нейтральный стиль']],
    ['K2', 'Организация текста', 2, ['текст разделён на абзацы по плану', 'средства логической связи использованы уместно']],
    ['K3', 'Лексика', 3, ['словарный запас соответствует задаче', 'нет ошибок, мешающих пониманию']],
    ['K4', 'Грамматика', 3, ['разнообразные структуры', 'не больше 1–2 негрубых ошибок для высшего балла']],
    ['K5', 'Орфография и пунктуация', 2, ['не больше 1–2 негрубых ошибок']]
  ],
  t4: [
    ['K1', 'Решение коммуникативной задачи', 4, ['вступление и обращение к другу', 'выбор фото описан и объяснён, названы различия', 'преимущества и недостатки обоих мест', 'своё мнение с объяснением', 'завершение сообщения']],
    ['K2', 'Организация высказывания', 2, ['логичность, средства связи', 'вступление и заключение']],
    ['K3', 'Языковое оформление', 4, ['лексика и грамматика по теме', 'произношение и беглость речи']]
  ]
};
const selfPts = (pref, crit) => crit.reduce((a, c) => a + (+S.self[pref + c[0]] || 0), 0);
const writingPts = () => selfPts('37.', CRIT[37]) + selfPts('38.', CRIT[38]);
const oralPts = () => {
  const o = S.oralSelf; let p = +o.t1 || 0;
  for (let i = 1; i <= 4; i++) p += +o['t2.' + i] || 0;
  for (let i = 1; i <= 5; i++) p += +o['t3.' + i] || 0;
  return p + CRIT.t4.reduce((a, c) => a + (+o['t4.' + c[0]] || 0), 0);
};

/* ===================== Роутинг ===================== */
let view = 'start';
let cleanup = () => {};
function go(v) {
  cleanup(); cleanup = () => {};
  view = v; window.scrollTo(0, 0);
  if (v !== 'start') history.replaceState(null, '', '#' + v); else history.replaceState(null, '', location.pathname);
  ({ start: renderStart, written: renderWritten, results: renderResults, oral: renderOral, oralReview: renderOralReview }[v])();
}
function modal(html, buttons) {
  return new Promise(res => {
    const m = document.createElement('div');
    m.className = 'modal';
    m.innerHTML = `<div class="box" role="dialog" aria-modal="true">${html}<div class="row">${buttons.map((b, i) =>
      `<button class="btn ${b.ghost ? 'ghost' : ''}" data-i="${i}" type="button">${b.label}</button>`).join('')}</div></div>`;
    document.body.append(m);
    m.addEventListener('click', e => { const b = e.target.closest('[data-i]'); if (b) { m.remove(); res(+b.dataset.i); } });
    $('[data-i]', m).focus();
  });
}

/* ===================== Старт ===================== */
let recs = {};          // записи устной части живут, пока открыта вкладка
function renderStart() {
  const sc = scoreList(); const got = sc.reduce((a, x) => a + x.pts, 0); const max = sc.reduce((a, x) => a + x.max, 0);
  const wStatus = S.checked ? `<span class="status done">Проверена: ${got} из ${max}</span>`
    : S.wStart ? '<span class="status go">В процессе</span>' : '<span class="status">Не начата</span>';
  const oStatus = Object.keys(recs).length ? '<span class="status done">Записана</span>' : '<span class="status">Не начата</span>';
  app.innerHTML = `<div class="wrap">
    <a class="back" href="../../">← Все варианты</a>
    <div class="sheet hero">
      <p class="kicker">Тренажёр ЕГЭ по английскому · ${esc(V.source)}</p>
      <h1>${esc(V.title)}</h1>
      <p class="sub">Решайте как на экзамене, а потом проверьте себя: задания 1–36 проверяются автоматически, письмо и устную часть вы оцениваете сами по критериям ЕГЭ. Ответы сохраняются в этом браузере.</p>
    </div>
    <div class="parts">
      <div class="sheet part">${wStatus}<h2>Письменная часть</h2>
        <ul><li>3 ч 10 мин, задания 1–38</li><li>аудирование, чтение, грамматика и лексика, письмо</li><li>после проверки видны ошибки и правильные ответы</li></ul>
        <div class="row"><button class="btn" id="goW" type="button">${S.checked ? 'Посмотреть результаты' : S.wStart ? 'Продолжить' : 'Начать письменную часть'}</button></div>
      </div>
      <div class="sheet part">${oStatus}<h2>Устная часть</h2>
        <ul><li>около 17 минут, задания 1–4</li><li>нужен микрофон, ответы записываются</li><li>в конце прослушаете себя и оцените по критериям</li></ul>
        <div class="row"><button class="btn" id="goO" type="button">${Object.keys(recs).length ? 'Прослушать ответы' : 'Начать устную часть'}</button>
        <a class="btn ghost" href="../../mic-test.html">Проверить микрофон</a></div>
      </div>
    </div>
    <div class="sheet"><h2 style="font-size:1.1rem">Как работать с тренажёром</h2>
      <ul class="checklist">
        <li>Откройте вариант в Google Chrome или Яндекс Браузере на компьютере, наденьте наушники.</li>
        <li>Аудиозапись к заданиям 1–9 идёт одним файлом с паузами, как на экзамене. Каждый текст звучит дважды.</li>
        <li>Когда закончите письменную часть, нажмите «Завершить и проверить».</li>
        <li>Если закроете вкладку, ответы письменной части сохранятся. Записи устной части хранятся только пока вкладка открыта, их можно скачать.</li>
      </ul>
      <p class="small"><button class="btn ghost small" id="reset" type="button">Стереть ответы и начать заново</button></p>
    </div>
  </div>`;
  $('#goW').onclick = () => {
    if (S.checked) return go('results');
    if (!S.wStart) { S.wStart = Date.now(); save(); }
    go('written');
  };
  $('#goO').onclick = () => go(Object.keys(recs).length ? 'oralReview' : 'oral');
  $('#reset').onclick = async () => {
    if (await modal('<h2>Стереть все ответы?</h2><p class="muted">Ответы, баллы самооценки и записи устной части будут удалены.</p>',
      [{ label: 'Стереть' }, { label: 'Отмена', ghost: true }]) === 0) { S = fresh(); recs = {}; save(); go('start'); }
  };
}

/* ===================== Письменная часть: разметка заданий ===================== */
const isOn = (k, v) => S.ans[k] === v;
function radios(k, opts) {
  return `<div class="opts" role="radiogroup">${opts.map((o, i) => {
    const v = String(i + 1);
    return `<label class="opt" data-k="${k}" data-v="${v}"><input type="radio" name="r${k}" value="${v}" data-k="${k}" ${isOn(k, v) ? 'checked' : ''}><span>${i + 1}) ${o}</span></label>`;
  }).join('')}</div>`;
}
function pickRow(id, rows, n, head) {
  const sel = r => `<select class="pick" data-k="${id}.${r}" aria-label="${head} ${r}"><option value=""></option>${
    Array.from({ length: n }, (_, i) => `<option ${isOn(id + '.' + r, String(i + 1)) ? 'selected' : ''}>${i + 1}</option>`).join('')}</select>`;
  return `<div class="grid-ans"><table><tr><th class="rowhead">${head}</th>${rows.map(r => `<th>${r}</th>`).join('')}</tr>
    <tr><th class="rowhead">Ответ</th>${rows.map(r => `<td data-cell="${id}.${r}">${sel(r)}</td>`).join('')}</tr></table></div>`;
}
const gapify = (t, cls = '') => t.replace(/\{(\w+)\}/g, (_, g) => `<span class="gap ${cls}">${g}</span>`);
function pie(rows) {
  const fills = ['#ffffff', '#cdd6e1', '#93a1b3', '#5d6c80', '#26303c'];
  let a = -Math.PI / 2; const R = 90, cx = 130, cy = 115; let paths = '', labels = '';
  rows.forEach(([name, v], i) => {
    const b = a + v / 100 * Math.PI * 2, large = b - a > Math.PI ? 1 : 0;
    const p = (ang, r) => [cx + r * Math.cos(ang), cy + r * Math.sin(ang)].map(n => n.toFixed(1)).join(' ');
    paths += `<path d="M${cx} ${cy} L${p(a, R)} A${R} ${R} 0 ${large} 1 ${p(b, R)} Z" fill="${fills[i % 5]}" stroke="currentColor" stroke-width="1.2"/>`;
    const m = (a + b) / 2; const [lx, ly] = p(m, R + 20).split(' ');
    labels += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" font-size="14" fill="currentColor">${v}%</text>`;
    a = b;
  });
  return `<div class="body"><svg viewBox="0 0 260 230" width="260" height="230" role="img" aria-label="${esc(rows.map(r => r[0] + ' ' + r[1] + '%').join(', '))}">${paths}${labels}</svg>
    <ul class="legend">${rows.map((r, i) => `<li><i style="background:${fills[i % 5]}"></i>${esc(r[0])}</li>`).join('')}</ul></div>`;
}
function itemHTML(it) {
  const blk = it.block ? ` data-block="${it.block}"` : '';
  switch (it.type) {
    case 'intro': return `<p class="instr"${blk}>${it.text}</p>`;
    case 'heading': return `<h3 class="heading">${esc(it.text)}</h3>`;
    case 'match': return `<div class="block"${blk} id="t${it.id}"><div class="task"><span class="num">${it.id}</span><p class="instr">${it.instr}</p></div>
        <ul class="list ${it.texts ? 'two' : ''}">${it.options.map((o, i) => `<li><span>${i + 1}.</span><span>${o}</span></li>`).join('')}</ul>
        ${it.texts ? `<div class="mini-texts">${it.texts.map((t, i) => `<p><b>${it.rows[i]}.</b><span>${t}</span></p>`).join('')}</div>` : ''}
        ${pickRow(it.id, it.rows, it.options.length, it.rowLabel)}</div>`;
    case 'tf': return `<div class="block"${blk} id="t${it.id}"><div class="task"><span class="num">${it.id}</span><p class="instr">${it.instr}</p></div>
        <ul class="list">${it.statements.map(([l, s]) => `<li><span>${l}.</span><span>${s}</span></li>`).join('')}</ul>
        ${pickRow(it.id, it.statements.map(s => s[0]), 3, 'Утверждение')}
        <p class="small muted">1 — True, 2 — False, 3 — Not stated</p></div>`;
    case 'gaps': return `<div class="block" id="t${it.id}"><div class="task"><span class="num">${it.id}</span><p class="instr">${it.instr}</p></div>
        <div class="reading"><h3>${esc(it.title)}</h3>${it.paras.map(p => `<p>${gapify(p)}</p>`).join('')}</div>
        <ul class="list">${it.options.map((o, i) => `<li><span>${i + 1}.</span><span>${o}</span></li>`).join('')}</ul>
        ${pickRow(it.id, it.rows, it.options.length, 'Пропуск')}</div>`;
    case 'text': return `<p class="instr">${it.instr}</p><div class="reading"><h3>${esc(it.title)}</h3>${it.paras.map(p => `<p>${p}</p>`).join('')}</div>`;
    case 'mc': return `<div class="task"${blk} id="t${it.id}"><span class="num">${it.id}</span><p class="q">${it.q}</p>${radios(it.id, it.opts)}<p class="verdict" data-verdict="${it.id}"></p></div>`;
    case 'word': return `<div class="word-item" id="t${it.id}"><span class="num">${it.id}</span>
        <p class="s">${it.s.replace('___', `<input class="cell" data-k="${it.id}" value="${esc(S.ans[it.id] || '')}" autocomplete="off" spellcheck="false" autocapitalize="off" aria-label="Задание ${it.id}">`)}</p>
        <span class="key">${it.word}</span><p class="verdict" data-verdict="${it.id}"></p></div>`;
    case 'cloze': return `<p class="instr">${it.instr}</p><div class="cloze-text"><h3 class="heading">${esc(it.title)}</h3>${it.paras.map(p => `<p>${gapify(p)}</p>`).join('')}</div>
        <div class="cloze-tasks">${it.tasks.map(t => `<div class="task" id="t${t.id}"><span class="num">${t.id}</span><span></span>${radios(t.id, t.opts)}<p class="verdict" data-verdict="${t.id}"></p></div>`).join('')}</div>`;
    case 'email': return `<div class="block" id="t37"><div class="task"><span class="num">37</span>
        <p class="instr">Вы получили письмо от зарубежного друга по переписке. Напишите ответное электронное письмо.</p></div>
        <div class="email"><div class="hdr">From: ${esc(it.from)}<br>To: ${esc(it.to)}<br>Subject: ${esc(it.subject)}</div><div class="body">${it.body}</div></div>
        <p class="taskbox">${it.task}</p>
        <textarea class="letter" data-k="t37" spellcheck="false" autocorrect="off" aria-label="Письмо, задание 37">${esc(S.ans.t37 || '')}</textarea>
        <p class="counter" data-count="t37" data-min="${it.min}" data-max="${it.max}"></p></div>`;
    case 'project': {
      const cur = S.ans.c38 || it.choices[0].n;
      return `<div class="block" id="t38"><div class="task"><span class="num">38</span>
        <p class="instr">Выберите только одно из двух заданий (38.1 или 38.2) и выполните его согласно плану. Числительные пишите цифрами.</p></div>
        <div class="choice" role="radiogroup">${it.choices.map(c => `<label><input type="radio" name="c38" value="${c.n}" data-k="c38" ${cur === c.n ? 'checked' : ''}>${c.n} · ${esc(c.topic)}</label>`).join('')}</div>
        ${it.choices.map(c => `<div class="taskbox" data-choice="${c.n}" ${cur === c.n ? '' : 'hidden'} style="display:grid;gap:14px">
          <p><b>${c.n}.</b> ${c.lead}</p><p><b>Comment on the survey data and give your opinion on the subject of the project.</b></p>
          <div class="chart">${c.chart.kind === 'table'
            ? `<table class="data-table"><caption>The survey question:<br>${esc(c.question)}<br><i>Choose one option</i></caption>
               <tr><th>${c.chart.head[0]}</th><th>${c.chart.head[1]}</th></tr>${c.chart.rows.map(r => `<tr><td>${esc(r[0])}</td><td>${r[1]}</td></tr>`).join('')}</table>`
            : `<p><b>The survey question:<br>${esc(c.question)}</b><br><i>Choose one option</i></p>${pie(c.chart.rows)}`}</div>
          <p><b>Write 200–250 words.</b></p>
          <p>Use the following plan:</p>
          <ul class="plan"><li>make an opening statement on the subject of the project;</li><li>select and report 2–3 facts;</li>
          <li>make 1–2 comparisons where relevant and give your comments;</li><li>${c.problem}</li><li>${c.conclude}</li></ul></div>`).join('')}
        <textarea class="letter" data-k="t38" spellcheck="false" autocorrect="off" aria-label="Текст, задание 38">${esc(S.ans.t38 || '')}</textarea>
        <p class="counter" data-count="t38" data-min="${it.min}" data-max="${it.max}"></p></div>`;
    }
  }
  return '';
}
function countWords(el) {
  const n = words(S.ans[el.dataset.count] || ''); const min = +el.dataset.min, max = +el.dataset.max;
  const zero = Math.round(min * 0.9), over = Math.round(max * 1.1);
  let cls = 'ok', msg = 'в пределах объёма';
  if (n < zero) { cls = 'bad'; msg = n ? `меньше ${zero} слов — на экзамене работа получит 0 баллов` : ''; }
  else if (n < min) { cls = 'warn'; msg = `меньше ${min}, но допустимо (от ${zero})`; }
  else if (n > over) { cls = 'bad'; msg = `больше ${over} — проверят только первые ${max} слов`; }
  else if (n > max) { cls = 'warn'; msg = `больше ${max}, но допустимо (до ${over})`; }
  el.className = 'counter ' + (n ? cls : '');
  el.textContent = `Слов: ${n} · нужно ${min}–${max}${msg ? ' · ' + msg : ''}`;
}

/* ===================== Письменная часть: экран ===================== */
function renderWritten() {
  const tabs = V.written.map(s => `<button class="tab" role="tab" data-sec="${s.section}" aria-selected="${S.sec === s.section}">${s.section} · ${esc(s.title)}</button>`).join('');
  app.innerHTML = `<header class="bar"><div class="bar-in">
      <div class="tabs" role="tablist">${tabs}</div>
      <div class="row" style="gap:10px"><span id="clock" class="clock" title="Осталось времени"></span>
      <button id="finish" class="btn small" type="button">${S.checked ? 'К результатам' : 'Завершить и проверить'}</button></div>
    </div></header>
    <div class="wrap">
      <button class="back" id="toStart" type="button">← К началу варианта</button>
      ${V.written.map(s => `<div class="sheet" data-panel="${s.section}" ${S.sec === s.section ? '' : 'hidden'}>
        <div class="section-head"><p class="kicker">Раздел ${s.section}</p><h2>${esc(s.title)}</h2></div>
        ${s.section === 1 ? playerHTML() : ''}
        ${s.items.map(itemHTML).join('')}
        <div class="row" style="justify-content:space-between">
          ${s.section > 1 ? `<button class="btn ghost" data-goto="${s.section - 1}" type="button">← Раздел ${s.section - 1}</button>` : '<span></span>'}
          ${s.section < V.written.length ? `<button class="btn" data-goto="${s.section + 1}" type="button">Раздел ${s.section + 1} →</button>`
            : `<button class="btn" id="finish2" type="button">${S.checked ? 'К результатам' : 'Завершить и проверить'}</button>`}
        </div></div>`).join('')}
    </div>`;

  const showSec = n => {
    S.sec = n; save();
    $$('[data-panel]').forEach(p => p.hidden = +p.dataset.panel !== n);
    $$('.tab').forEach(t => t.setAttribute('aria-selected', +t.dataset.sec === n));
    window.scrollTo(0, 0);
  };
  $$('.tab').forEach(t => t.onclick = () => showSec(+t.dataset.sec));
  $$('[data-goto]').forEach(b => b.onclick = () => showSec(+b.dataset.goto));
  $('#toStart').onclick = () => go('start');

  // ввод ответов
  app.addEventListener('input', onInput);
  app.addEventListener('change', onInput);
  function onInput(e) {
    const el = e.target; const k = el.dataset.k; if (!k || S.checked) return;
    if (el.type === 'radio') { if (!el.checked) return; S.ans[k] = el.value; }
    else S.ans[k] = el.value;
    if (k === 'c38') $$('[data-choice]').forEach(d => d.hidden = d.dataset.choice !== el.value);
    const c = $(`[data-count="${k}"]`); if (c) countWords(c);
    save();
  }
  $$('[data-count]').forEach(countWords);

  // часы
  const tick = () => {
    const left = W_MIN * 60 - (Date.now() - S.wStart) / 1000;
    const c = $('#clock'); if (!c) return;
    if (S.checked) { c.textContent = 'Проверено'; c.className = 'clock'; return; }
    c.textContent = left >= 0 ? fmt(left) : '+' + fmt(-left);
    c.className = 'clock' + (left < 600 ? ' warn' : '');
    c.title = left >= 0 ? 'Осталось времени' : 'Время экзамена вышло';
  };
  tick(); const iv = setInterval(tick, 1000);

  const finish = async () => {
    if (S.checked) return go('results');
    const empty = scoreList().filter(x => !String(x.user).replace(/·/g, '')).length;
    const r = await modal(`<h2>Завершить письменную часть?</h2><p class="muted">${empty ? `Без ответа заданий: ${empty}. ` : ''}После проверки ответы 1–36 изменить нельзя, но вариант можно пройти заново.</p>`,
      [{ label: 'Проверить' }, { label: 'Вернуться к заданиям', ghost: true }]);
    if (r === 0) { S.checked = true; save(); go('results'); }
  };
  $('#finish').onclick = finish; $('#finish2').onclick = finish;

  const stopPlayer = initPlayer();
  if (S.checked) markAnswers();
  cleanup = () => { clearInterval(iv); stopPlayer(); app.removeEventListener('input', onInput); app.removeEventListener('change', onInput); };
}

function markAnswers() {
  $$('input[data-k], select[data-k]').forEach(el => { if (!['t37', 't38', 'c38'].includes(el.dataset.k)) el.disabled = true; });
  for (const x of scoreList()) {
    const it = allItems().find(i => i.id === x.id) || {};
    const v = $(`[data-verdict="${x.id}"]`);
    if (v) {
      v.className = 'verdict ' + (x.pts ? 'ok' : 'bad');
      v.innerHTML = x.pts ? 'Верно' : `Неверно · правильный ответ: <code>${esc(x.key)}</code>`;
    }
    $$(`label.opt[data-k="${x.id}"]`).forEach(l => {
      if (l.dataset.v === x.key) l.classList.add('right');
      else if (l.dataset.v === S.ans[x.id]) l.classList.add('wrong');
    });
    const inp = $(`input.cell[data-k="${x.id}"]`); if (inp) inp.classList.add(x.pts ? 'right' : 'wrong');
    if (['match', 'tf', 'gaps'].includes(it.type)) {
      const rows = it.type === 'tf' ? it.statements.map(s => s[0]) : it.rows;
      rows.forEach((r, i) => {
        const td = $(`[data-cell="${x.id}.${r}"]`); if (!td) return;
        const ok = (S.ans[x.id + '.' + r] || '') === it.key[i];
        td.classList.add(ok ? 'right' : 'wrong');
        if (!ok) td.insertAdjacentHTML('beforeend', `<span class="fix">${it.key[i]}</span>`);
      });
    }
  }
}

/* ===================== Плеер аудирования ===================== */
function playerHTML() {
  return `<div class="player" id="player">
    <div class="top"><button class="btn" id="pPlay" type="button">▶ Слушать</button>
      <span class="phase" id="pPhase">Задания 1–9 · одна запись на весь раздел</span>
      <span class="time" id="pTime">0:00</span></div>
    <div class="track" id="pTrack" title="Перемотка"><i></i></div>
    <div class="row" style="justify-content:space-between"><label>Громкость <input type="range" id="pVol" min="0" max="1" step="0.05" value="1"></label>
      <span class="small muted">На экзамене запись идёт без остановок. Для тренировки можно ставить на паузу.</span></div>
  </div>`;
}
function initPlayer() {
  const btn = $('#pPlay'); if (!btn) return () => {};
  const a = new Audio(V.listening.audio); a.preload = 'metadata';
  let started = false;
  const names = { b1: 'Задание 1', b2: 'Задание 2', b3: 'Задания 3–9' };
  const upd = () => {
    const d = a.duration || 0, t = a.currentTime;
    $('#pTrack i').style.width = d ? (t / d * 100) + '%' : '0';
    $('#pTime').textContent = fmt(t) + (d ? ' / ' + fmt(d) : '');
    let cur = null; for (const [s, b] of V.listening.marks) if (t >= s) cur = b;
    if (started) {
      $$('[data-block]').forEach(el => el.classList.toggle('now', el.dataset.block === cur && !a.paused));
      $('#pPhase').textContent = 'Сейчас: ' + (names[cur] || '');
    }
    if (Math.abs((S.listenPos || 0) - t) > 3) { S.listenPos = t; save(); }
  };
  a.addEventListener('loadedmetadata', () => { if (S.listenPos && S.listenPos < a.duration - 2) a.currentTime = S.listenPos; upd(); });
  a.addEventListener('timeupdate', upd);
  a.addEventListener('play', () => { started = true; btn.textContent = '❚❚ Пауза'; upd(); });
  a.addEventListener('pause', () => { btn.textContent = '▶ Продолжить'; upd(); });
  a.addEventListener('ended', () => { btn.textContent = '↺ Сначала'; S.listenPos = 0; save(); $$('.block.now').forEach(b => b.classList.remove('now')); });
  btn.onclick = () => { if (a.ended) a.currentTime = 0; a.paused ? a.play() : a.pause(); };
  $('#pTrack').onclick = e => { if (!a.duration) return; const r = e.currentTarget.getBoundingClientRect(); a.currentTime = (e.clientX - r.left) / r.width * a.duration; };
  $('#pVol').oninput = e => a.volume = +e.target.value;
  if (S.listenPos) btn.textContent = '▶ Продолжить';
  return () => { a.pause(); a.src = ''; };
}

/* ===================== Итоги ===================== */
function selfBlock(pref, crit, store, title) {
  return `<div class="selfcheck"><h3>${title}</h3>${crit.map(([k, name, max, hints]) => `<div class="crit">
      <h4>${k} · ${name}</h4>
      <select data-self="${pref}${k}" aria-label="${name}">${Array.from({ length: max + 1 }, (_, i) => `<option ${String(store[pref + k] ?? '') === String(i) ? 'selected' : ''} value="${i}">${i} из ${max}</option>`).join('')}
        <option value="" ${store[pref + k] == null || store[pref + k] === '' ? 'selected' : ''}>—</option></select>
      <ul>${hints.map(h => `<li>${h}</li>`).join('')}</ul></div>`).join('')}</div>`;
}
function renderResults() {
  const sc = scoreList();
  const sec = n => sc.filter(x => x.sec === n);
  const sum = a => a.reduce((s, x) => s + x.pts, 0), mx = a => a.reduce((s, x) => s + x.max, 0);
  const auto = sum(sc), autoMax = mx(sc);
  const bars = V.written.slice(0, 3).map(s => { const a = sec(s.section); return `<div class="b"><span>${s.section} · ${esc(s.title)}</span><span class="t"><i style="width:${mx(a) ? sum(a) / mx(a) * 100 : 0}%"></i></span><span class="v">${sum(a)} / ${mx(a)}</span></div>`; }).join('');
  const t37 = S.ans.t37 || '', t38 = S.ans.t38 || '', c38 = S.ans.c38 || '38.1';
  app.innerHTML = `<div class="wrap">
    <button class="back" id="toStart" type="button">← К началу варианта</button>
    <div class="sheet"><p class="kicker">${esc(V.title)} · результаты</p>
      <div class="row" style="align-items:flex-end;gap:24px">
        <div><p class="muted small">Задания 1–36</p><p class="score-big">${auto}<span class="muted" style="font-size:.5em"> / ${autoMax}</span></p></div>
        <div><p class="muted small">Письменная часть с самооценкой письма</p><p class="score-big" id="wTotal"></p></div>
        <div><p class="muted small">Весь экзамен с устной частью</p><p class="score-big" id="allTotal"></p></div>
      </div>
      <div class="bars">${bars}<div class="b"><span>4 · Письмо (самооценка)</span><span class="t"><i id="wBar"></i></span><span class="v" id="wVal"></span></div></div>
      <div class="row"><button class="btn" id="review" type="button">Посмотреть ошибки в заданиях</button><button class="btn ghost" id="again" type="button">Пройти письменную часть заново</button></div>
    </div>
    <div class="sheet"><h2 style="font-size:1.15rem">Ответы по заданиям</h2>
      <div style="overflow-x:auto"><table class="res-table"><tr><th>№</th><th>Ваш ответ</th><th>Правильный</th><th style="text-align:right">Баллы</th></tr>
      ${sc.map(x => `<tr class="${x.pts === x.max ? 'ok' : x.pts ? 'part' : 'bad'}"><td class="n">${x.id}</td><td class="a">${esc(x.user || '—')}</td><td class="a">${esc(x.key)}</td><td class="pt">${x.pts} / ${x.max}</td></tr>`).join('')}
      </table></div>
      <p class="small muted">В заданиях 1, 2, 10 и 11 за каждую ошибку снимается 1 балл.</p>
    </div>
    <div class="sheet"><h2 style="font-size:1.15rem">Письмо: оцените себя</h2>
      <p class="muted">Перечитайте свои тексты и выставьте баллы по критериям ЕГЭ. Если текст короче минимума (90 слов в письме, 180 в эссе), ставьте 0 по всем критериям.</p>
      <h3>Задание 37 · ${words(t37)} слов</h3>
      <div class="email"><div class="body" style="white-space:pre-wrap">${esc(t37) || '<span class="muted">Текст не написан</span>'}</div></div>
      ${selfBlock('37.', CRIT[37], S.self, 'Критерии задания 37 · максимум 6')}
      <h3>Задание ${esc(c38)} · ${words(t38)} слов</h3>
      <div class="email"><div class="body" style="white-space:pre-wrap">${esc(t38) || '<span class="muted">Текст не написан</span>'}</div></div>
      ${selfBlock('38.', CRIT[38], S.self, 'Критерии задания 38 · максимум 14')}
    </div>
  </div>`;
  const totals = () => {
    const w = writingPts(); const o = oralPts();
    $('#wTotal').innerHTML = `${auto + w}<span class="muted" style="font-size:.5em"> / ${autoMax + 20}</span>`;
    $('#allTotal').innerHTML = `${auto + w + o}<span class="muted" style="font-size:.5em"> / ${autoMax + 40}</span>`;
    $('#wBar').style.width = (w / 20 * 100) + '%'; $('#wVal').textContent = `${w} / 20`;
  };
  totals();
  app.addEventListener('change', onSelf);
  function onSelf(e) { const k = e.target.dataset.self; if (!k) return; S.self[k] = e.target.value; save(); totals(); }
  cleanup = () => app.removeEventListener('change', onSelf);
  $('#toStart').onclick = () => go('start');
  $('#review').onclick = () => { S.sec = 1; save(); go('written'); };
  $('#again').onclick = async () => {
    if (await modal('<h2>Пройти письменную часть заново?</h2><p class="muted">Ответы 1–38 и самооценка письма будут стёрты.</p>',
      [{ label: 'Начать заново' }, { label: 'Отмена', ghost: true }]) === 0) {
      Object.assign(S, { ans: {}, checked: false, wStart: Date.now(), sec: 1, listenPos: 0, self: {} }); save(); go('written');
    }
  };
}

/* ===================== Устная часть ===================== */
let stream = null, actx = null;
function renderOral() {
  const O = V.oral; let alive = true;
  const steps = ['Задание 1', 'Задание 2', 'Задание 3', 'Задание 4'];
  app.innerHTML = `<header class="bar"><div class="bar-in"><div class="stepper">${steps.map((s, i) => `<span class="step" data-step="${i + 1}">${s}</span>`).join('')}</div>
    <button class="btn ghost small" id="abort" type="button">Прервать</button></div></header>
    <div class="wrap"><div class="sheet stage" id="stage"></div></div>`;
  const stage = h => { $('#stage').innerHTML = h; };
  const setStep = n => $$('.step').forEach(s => { const k = +s.dataset.step; s.className = 'step' + (k === n ? ' cur' : k < n ? ' done' : ''); });
  let skip = null;
  const wait = (sec, label, cls) => new Promise(res => {
    const end = Date.now() + sec * 1000;
    const c = $('#cd'), p = $('#pill');
    if (p) { p.className = 'pill ' + cls; p.textContent = label; }
    const t = () => {
      if (!alive) return clearInterval(iv);
      const left = (end - Date.now()) / 1000; if (c) c.textContent = fmt(Math.ceil(left));
      if (left <= 0) { clearInterval(iv); res(); }
    };
    const iv = setInterval(t, 200); t();
    skip = () => { clearInterval(iv); res(); };
  });
  const beep = () => { try { const o = actx.createOscillator(), g = actx.createGain(); o.frequency.value = 880; g.gain.value = .12; o.connect(g).connect(actx.destination); o.start(); o.stop(actx.currentTime + .25); } catch {} };
  let meterRaf = 0;
  const meter = () => {
    const an = actx.createAnalyser(); an.fftSize = 512; actx.createMediaStreamSource(stream).connect(an);
    const buf = new Uint8Array(an.fftSize);
    const loop = () => { an.getByteTimeDomainData(buf); let m = 0; for (const v of buf) m = Math.max(m, Math.abs(v - 128)); const i = $('#meter i'); if (i) i.style.width = Math.min(100, m / 60 * 100) + '%'; meterRaf = requestAnimationFrame(loop); };
    loop();
  };
  const record = async (key, sec, label) => {
    beep();
    const types = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus'];
    const type = types.find(t => window.MediaRecorder && MediaRecorder.isTypeSupported(t)) || '';
    const rec = new MediaRecorder(stream, type ? { mimeType: type } : {});
    const chunks = []; rec.ondataavailable = e => e.data.size && chunks.push(e.data);
    const done = new Promise(r => rec.onstop = r);
    const t0 = Date.now(); rec.start(250);
    await wait(sec, label || 'Идёт запись', 'rec');
    rec.stop(); await done;
    if (!alive) return;
    recs[key] = { url: URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || type || 'audio/webm' })), sec: (Date.now() - t0) / 1000, ext: (rec.mimeType || type).includes('mp4') ? 'm4a' : 'webm' };
  };
  const play = src => new Promise(res => { const a = new Audio(src); a.onended = res; a.onerror = res; a.play().catch(res); skip = () => { a.pause(); res(); }; cleanupAudio.push(a); });
  const cleanupAudio = [];
  const timerUI = (extra = '') => `<div class="row" style="justify-content:space-between;align-items:center"><span id="pill" class="pill"></span><span id="cd" class="clockbig"></span></div>
    <div class="meter" id="meter" title="Уровень звука"><i></i></div>${extra}
    <div class="row"><button class="btn" id="skip" type="button">Дальше</button></div>`;
  const bindSkip = () => { $('#skip').onclick = () => skip && skip(); };

  $('#abort').onclick = async () => {
    if (await modal('<h2>Прервать устную часть?</h2><p class="muted">Уже сделанные записи пропадут.</p>', [{ label: 'Прервать' }, { label: 'Продолжить', ghost: true }]) === 0) { recs = {}; go('start'); }
  };
  cleanup = () => { alive = false; skip && skip(); cancelAnimationFrame(meterRaf); cleanupAudio.forEach(a => a.pause()); };

  (async () => {
    stage(`<h2>Устная часть</h2><p>Четыре задания подряд, как на экзамене: время подготовки и ответа отсчитывается автоматически, запись начинается после короткого сигнала. Кнопка «Дальше» пропускает оставшееся время.</p>
      <ul class="checklist"><li>Наденьте наушники: в задании 3 вопросы звучат в записи.</li><li>Разрешите браузеру доступ к микрофону.</li></ul>
      <div class="row"><button class="btn" id="startO" type="button">Начать</button></div><p id="err" class="small" style="color:var(--bad)"></p>`);
    await new Promise(r => $('#startO').onclick = r);
    try {
      stream = stream && stream.active ? stream : await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
      actx = actx || new (window.AudioContext || window.webkitAudioContext)(); await actx.resume();
    } catch (e) {
      stage(`<h2>Нет доступа к микрофону</h2><p>Разрешите доступ к микрофону в настройках сайта (значок слева от адреса) и обновите страницу. Проверить микрофон можно <a href="../../mic-test.html">на этой странице</a>.</p>
        <div class="row"><button class="btn" type="button" onclick="location.reload()">Обновить страницу</button></div>`);
      return;
    }
    recs = {};
    // Задание 1
    setStep(1);
    stage(`<h2>Task 1</h2><p class="qa">${O.t1.lead}</p><div class="reading" style="border:1px solid var(--line);border-radius:10px;padding:16px"><p style="text-indent:0">${O.t1.text}</p></div>${timerUI()}`);
    meter(); bindSkip();
    await wait(90, 'Подготовка', 'prep'); if (!alive) return;
    $('#skip').textContent = 'Закончить ответ';
    await record('t1', 90, 'Читайте вслух'); if (!alive) return;
    // Задание 2
    setStep(2);
    stage(`<h2>Task 2</h2><div class="ad"><h3>${esc(O.t2.title)}</h3><img src="${O.t2.img}" alt="Рекламное объявление"></div>
      <p class="qa">${O.t2.lead}</p><ol class="plan">${O.t2.points.map(p => `<li>${p}</li>`).join('')}</ol><p class="qa"><b>You have 20 seconds to ask each question.</b></p>
      <p id="qnow" class="card-note"></p>${timerUI()}`);
    meter(); bindSkip();
    await wait(90, 'Подготовка', 'prep'); if (!alive) return;
    for (let i = 1; i <= 4; i++) {
      $('#qnow').innerHTML = `<b>Вопрос ${i} из 4:</b> ${O.t2.points[i - 1]}`; $('#skip').textContent = i < 4 ? 'Следующий вопрос' : 'Закончить';
      await record('t2.' + i, 20, 'Задайте вопрос ' + i); if (!alive) return;
    }
    // Задание 3
    setStep(3);
    stage(`<h2>Task 3</h2><p class="qa">You are going to give an interview. You have to answer five questions. Give full answers to the questions (2–3 sentences). Remember that you have 40 seconds to answer each question.</p>
      <p id="qnow" class="card-note"></p>${timerUI()}`);
    meter(); bindSkip();
    for (let i = 1; i <= 5; i++) {
      $('#qnow').innerHTML = `<b>Вопрос ${i} из 5</b>`;
      $('#pill').className = 'pill prep'; $('#pill').textContent = 'Слушайте вопрос'; $('#cd').textContent = '';
      $('#skip').textContent = 'Пропустить';
      await play(O.t3.clips[i - 1]); if (!alive) return;
      $('#skip').textContent = i < 5 ? 'Следующий вопрос' : 'Закончить';
      await record('t3.' + i, 40, 'Отвечайте'); if (!alive) return;
    }
    $('#pill').className = 'pill'; $('#pill').textContent = ''; $('#cd').textContent = '';
    await play(O.t3.outro); if (!alive) return;
    // Задание 4
    setStep(4);
    stage(`<h2>Task 4</h2><p class="qa">${O.t4.lead}</p><ul class="plan">${O.t4.plan.map(p => `<li>${p}</li>`).join('')}</ul>
      <p class="qa"><b>You will speak for not more than 3 minutes (12–15 sentences). You have to talk continuously.</b></p>
      <div class="photos">${O.t4.photos.map((p, i) => `<figure><img src="${p}" alt="Фото ${i + 1}"><figcaption>Photo ${i + 1}</figcaption></figure>`).join('')}</div>${timerUI()}`);
    meter(); bindSkip();
    await wait(150, 'Подготовка', 'prep'); if (!alive) return;
    $('#skip').textContent = 'Закончить ответ';
    await record('t4', 180, 'Идёт запись'); if (!alive) return;
    go('oralReview');
  })();
}

function renderOralReview() {
  const O = V.oral;
  const audio = (k, title) => recs[k]
    ? `<div class="rec"><h4>${title}</h4><audio controls preload="metadata" src="${recs[k].url}"></audio>
       <p class="small muted">${fmt(recs[k].sec)} · <a href="${recs[k].url}" download="${V.id}-${k}.${recs[k].ext}">скачать запись</a></p></div>`
    : `<div class="rec"><h4>${title}</h4><p class="muted small">Записи нет</p></div>`;
  const yn = (k, label) => `<div class="crit"><h4>${label}</h4><select data-oself="${k}"><option value="">—</option>${[0, 1].map(v => `<option value="${v}" ${String(S.oralSelf[k] ?? '') === String(v) ? 'selected' : ''}>${v} из 1</option>`).join('')}</select></div>`;
  app.innerHTML = `<div class="wrap">
    <button class="back" id="toStart" type="button">← К началу варианта</button>
    <div class="sheet"><p class="kicker">${esc(V.title)} · устная часть</p>
      <h2>Прослушайте себя и оцените</h2>
      <p class="muted">Записи хранятся, пока открыта эта вкладка. Если хотите сохранить их или отправить учителю, скачайте.</p>
      <p class="score-big" id="oTotal"></p>
      <div class="row"><button class="btn ghost" id="again" type="button">Записать устную часть заново</button></div>
    </div>
    <div class="sheet"><h2 style="font-size:1.15rem">Задание 1 · чтение вслух</h2>
      ${audio('t1', 'Ваша запись')}
      <details><summary>Текст задания</summary><p class="qa" style="margin-top:8px">${O.t1.text}</p></details>
      <div class="selfcheck"><h3>Максимум 1 балл</h3>${yn('t1', 'Не больше 5 фонетических ошибок, интонация и паузы не мешают пониманию')}</div>
    </div>
    <div class="sheet"><h2 style="font-size:1.15rem">Задание 2 · условный диалог-расспрос</h2>
      ${[1, 2, 3, 4].map(i => audio('t2.' + i, `Вопрос ${i}: ${O.t2.points[i - 1]}`)).join('')}
      <div class="selfcheck"><h3>1 балл за каждый прямой вопрос без ошибок, которые мешают пониманию</h3>${[1, 2, 3, 4].map(i => yn('t2.' + i, `Вопрос ${i}: ${O.t2.points[i - 1]}`)).join('')}</div>
    </div>
    <div class="sheet"><h2 style="font-size:1.15rem">Задание 3 · интервью</h2>
      ${O.t3.questions.map((q, i) => audio('t3.' + (i + 1), `${i + 1}. ${esc(q)}`)).join('')}
      <div class="selfcheck"><h3>1 балл за полный ответ (2–3 предложения) на каждый вопрос</h3>${O.t3.questions.map((q, i) => yn('t3.' + (i + 1), `Ответ ${i + 1}`)).join('')}</div>
    </div>
    <div class="sheet"><h2 style="font-size:1.15rem">Задание 4 · голосовое сообщение по фотографиям</h2>
      ${audio('t4', 'Ваша запись')}
      ${selfBlock('t4.', CRIT.t4, S.oralSelf, 'Критерии задания 4 · максимум 10').replace(/data-self=/g, 'data-oself=')}
    </div>
  </div>`;
  // у записей webm браузер не знает длительность, пока не перемотать в конец
  $$('audio').forEach(a => a.addEventListener('loadedmetadata', () => {
    if (a.duration === Infinity || isNaN(a.duration)) { a.currentTime = 1e101; a.addEventListener('timeupdate', function g() { a.removeEventListener('timeupdate', g); a.currentTime = 0; }); }
  }));
  const tot = () => { $('#oTotal').innerHTML = `${oralPts()}<span class="muted" style="font-size:.5em"> / 20</span>`; };
  tot();
  app.addEventListener('change', on);
  function on(e) { const k = e.target.dataset.oself; if (!k) return; S.oralSelf[k] = e.target.value; save(); tot(); }
  cleanup = () => app.removeEventListener('change', on);
  $('#toStart').onclick = () => go('start');
  $('#again').onclick = () => { S.oralSelf = {}; save(); go('oral'); };
}

/* ===================== Запуск ===================== */
const h = location.hash.slice(1);
if (h === 'results' && S.checked) go('results');
else if (h === 'written' && S.wStart) go('written');
else go('start');
})();
