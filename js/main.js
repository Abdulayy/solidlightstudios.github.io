(function () {
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  var yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* i18n */
  var dict = {
    en: {
      'nav.home': 'Home',
      'nav.collection': 'Collection',
      'nav.philosophy': 'Philosophy',
      'nav.prints': 'Prints',
      'nav.waitlist': 'Waitlist',
      'nav.contact': 'Contact',
      'hero.title': 'One moment of light, held in place',
      'hero.lead': 'Landscape photography by SolidLightStudios. Each frame keeps a single stretch of light exactly as it stood.',
      'hero.meta': 'High Country Series',
      'hero.cta1': 'View the collection',
      'hero.cta2': 'Join the waitlist',
      'gallery.title': 'Featured collection',
      'gallery.sub': 'Three frames from the high country. Select one to view it full size.',
      'shot1.title': 'Mountain Sentinel',
      'shot1.sub': 'Mountain peak',
      'shot2.title': 'Valley Mist',
      'shot2.sub': 'Morning valley',
      'shot3.title': 'First Light',
      'shot3.sub': 'Sunrise ridge',
      'about.title': 'The philosophy',
      'about.p1': 'A xenolith is a fragment of rock caught inside a different rock and carried up, unchanged, from deep below. We photograph in the same spirit: one piece of light, kept exactly as it was.',
      'about.p2': 'Every frame is shot on location and edited with restraint, so what you see is what stood in front of the lens.',
      'about.p3': 'The work is not about spectacle. It is about presence. Standing in a place long enough for the light to settle, then keeping that exact moment without forcing it into something louder.',
      'prints.title': 'Prints',
      'prints.lead': 'Each photograph is available as a museum-quality archival print. Editions are limited. Materials and sizes are chosen to serve the image, not the other way around.',
      'prints.how': 'How to acquire',
      'prints.howText': 'Write to us with the work you are interested in. We will reply with available sizes, papers, and pricing. No automated cart. Every print is handled individually.',
      'prints.cta': 'Inquire about a print',
      'waitlist.title': 'Get early access',
      'waitlist.sub': 'Xenolith tools for desktop and mobile are in development. Leave your email and we will write when the first build is ready.',
      'waitlist.label': 'Email address',
      'waitlist.cta': 'Join the waitlist',
      'waitlist.ok': 'You are on the list. We will email you when early access opens.',
      'waitlist.err': 'Enter a valid email address, for example name@example.com.',
      'contact.title': 'Contact',
      'contact.email': 'Email',
      'contact.social': 'Social',
      'contact.studio': 'Studio',
      'contact.location': 'Location to be announced',
      'contact.note': 'For print inquiries, collaborations, or questions about the work, write directly. We read every message.',
      'footer.rights': 'All rights reserved.',
      'page.collection.title': 'Collection',
      'page.collection.sub': 'Selected frames from the high country and surrounding ranges.',
      'page.philosophy.title': 'Philosophy',
      'page.prints.title': 'Prints',
      'page.waitlist.title': 'Waitlist',
      'page.contact.title': 'Contact'
    },
    uk: {
      'nav.home': 'Головна',
      'nav.collection': 'Колекція',
      'nav.philosophy': 'Філософія',
      'nav.prints': 'Принти',
      'nav.waitlist': 'Список очікування',
      'nav.contact': 'Контакти',
      'hero.title': 'Один момент світла, збережений на місці',
      'hero.lead': 'Пейзажна фотографія від SolidLightStudios. Кожен кадр тримає один відрізок світла саме таким, яким він був.',
      'hero.meta': 'Серія High Country',
      'hero.cta1': 'Переглянути колекцію',
      'hero.cta2': 'Приєднатися до списку',
      'gallery.title': 'Вибрана колекція',
      'gallery.sub': 'Три кадри з високогір\'я. Оберіть один, щоб переглянути в повному розмірі.',
      'shot1.title': 'Гірський вартовий',
      'shot1.sub': 'Гірська вершина',
      'shot2.title': 'Туман у долині',
      'shot2.sub': 'Ранкова долина',
      'shot3.title': 'Перше світло',
      'shot3.sub': 'Схід на хребті',
      'about.title': 'Філософія',
      'about.p1': 'Ксеноліт - це уламок породи, схоплений всередині іншої породи і винесений нагору без змін із глибини. Ми фотографуємо в тому ж дусі: один уламок світла, збережений саме таким, яким він був.',
      'about.p2': 'Кожен кадр знятий на локації і відредагований стримано, тож те, що ви бачите, - це те, що стояло перед об\'єктивом.',
      'about.p3': 'Робота не про видовищність. Вона про присутність. Стояти в місці достатньо довго, щоб світло вляглося, і зберегти саме цей момент, не змушуючи його бути голоснішим.',
      'prints.title': 'Принти',
      'prints.lead': 'Кожна фотографія доступна як музейний архівний принт. Тиражі обмежені. Матеріали та розміри обираються під зображення, а не навпаки.',
      'prints.how': 'Як придбати',
      'prints.howText': 'Напишіть нам, якою роботою цікавитеся. Ми відповімо з доступними розмірами, паперами та цінами. Без автоматичного кошика. Кожен принт обробляється індивідуально.',
      'prints.cta': 'Запитати про принт',
      'waitlist.title': 'Ранній доступ',
      'waitlist.sub': 'Інструменти Xenolith для десктопу та мобільних у розробці. Залиште email, і ми напишемо, коли з\'явиться перша збірка.',
      'waitlist.label': 'Електронна адреса',
      'waitlist.cta': 'Приєднатися до списку',
      'waitlist.ok': 'Ви у списку. Ми напишемо, коли відкриється ранній доступ.',
      'waitlist.err': 'Введіть коректну електронну адресу, наприклад name@example.com.',
      'contact.title': 'Контакти',
      'contact.email': 'Email',
      'contact.social': 'Соцмережі',
      'contact.studio': 'Студія',
      'contact.location': 'Локацію буде оголошено',
      'contact.note': 'Щодо принтів, співпраці чи питань про роботи пишіть напряму. Ми читаємо кожне повідомлення.',
      'footer.rights': 'Усі права захищено.',
      'page.collection.title': 'Колекція',
      'page.collection.sub': 'Вибрані кадри з високогір\'я та навколишніх хребтів.',
      'page.philosophy.title': 'Філософія',
      'page.prints.title': 'Принти',
      'page.waitlist.title': 'Список очікування',
      'page.contact.title': 'Контакти'
    }
  };

  var lang = 'en';
  try {
    var saved = localStorage.getItem('xenolith-lang');
    if (saved === 'uk' || saved === 'en') lang = saved;
  } catch (e) {}

  function applyLang(code) {
    lang = code;
    document.documentElement.lang = code === 'uk' ? 'uk' : 'en';
    var pack = dict[code] || dict.en;
    $$('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (pack[key] != null) el.textContent = pack[key];
    });
    $$('.lang button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === code);
    });
    try { localStorage.setItem('xenolith-lang', code); } catch (e) {}
  }

  applyLang(lang);

  var langSwitch = $('#langSwitch');
  if (langSwitch) {
    $$('button', langSwitch).forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  }

  /* scroll reveal */
  var reveals = $$('.reveal');
  if (reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* header: hide on scroll down, show on scroll up */
  var header = $('#header');
  if (header) {
    var last = 0;
    window.addEventListener('scroll', function () {
      var y = window.pageYOffset;
      if (y > 120 && y > last + 4) header.classList.add('hidden');
      else if (y < last - 4 || y <= 120) header.classList.remove('hidden');
      last = y;
    }, { passive: true });
  }

  /* mobile menu */
  var menuBtn = $('#menuBtn'), nav = $('#nav');
  if (menuBtn && nav) {
    function setMenu(open) { nav.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', open); }
    menuBtn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
    $$('a', nav).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  }

  /* lightbox (only if shots exist) */
  var lb = $('#lb'), shots = $$('.shot');
  if (lb && shots.length) {
    var lbImg = $('#lbImg'), lbCap = $('#lbCap');
    var idx = 0;
    function show(i) {
      idx = (i + shots.length) % shots.length;
      var s = shots[idx], img = $('img', s);
      if (!img) return;
      lbImg.src = img.src; lbImg.alt = img.alt;
      var title = lang === 'uk' && s.dataset.titleUk ? s.dataset.titleUk : s.dataset.title;
      var sub = lang === 'uk' && s.dataset.subUk ? s.dataset.subUk : s.dataset.sub;
      lbCap.textContent = (title || '') + (sub ? ' - ' + sub : '');
    }
    shots.forEach(function (s, i) {
      s.addEventListener('click', function () { show(i); lb.showModal(); });
    });
    var lbClose = $('#lbClose'), lbPrev = $('#lbPrev'), lbNext = $('#lbNext');
    if (lbClose) lbClose.addEventListener('click', function () { lb.close(); });
    if (lbPrev) lbPrev.addEventListener('click', function () { show(idx - 1); });
    if (lbNext) lbNext.addEventListener('click', function () { show(idx + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lb')) lb.close(); });
    lb.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });
  }

  /* waitlist form */
  var form = $('#waitForm');
  if (form) {
    var email = $('#email'), msg = $('#formMsg');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!email || !msg) return;
      var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      email.setAttribute('aria-invalid', ok ? 'false' : 'true');
      msg.className = 'msg ' + (ok ? 'ok' : 'err');
      var pack = dict[lang] || dict.en;
      msg.textContent = ok ? pack['waitlist.ok'] : pack['waitlist.err'];
      if (ok) form.reset();
    });
  }
})();
