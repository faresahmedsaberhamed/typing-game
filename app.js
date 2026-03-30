// ================= DICTIONARY LOGIC =================
const baseWords = [
    { ar: "فكرة", en: "idea", de: "idee", ru: "идея", ja: "アイデア", zh: "主意", ko: "아이디어", es: "idea", fr: "idée", it: "idea" },
    { ar: "مجلة", en: "magazine", de: "illustrierte", ru: "журнал", ja: "雑誌", zh: "杂志", ko: "잡지", es: "revista", fr: "magazine", it: "rivista" },
    { ar: "مزاج", en: "mood", de: "lust", ru: "настроение", ja: "気分", zh: "心情", ko: "기분", es: "humor", fr: "humeur", it: "umore" },
    { ar: "رياضيات", en: "math", de: "matheaufgabe", ru: "математика", ja: "数学", zh: "数学", ko: "수학", es: "matemáticas", fr: "mathématiques", it: "matematica" },
    { ar: "مدرس", en: "teacher", de: "lehrer", ru: "учитель", ja: "先生", zh: "老师", ko: "선생님", es: "profesor", fr: "professeur", it: "insegnante" },
    { ar: "مدرسة", en: "school", de: "schule", ru: "школа", ja: "学校", zh: "学校", ko: "학교", es: "escuela", fr: "école", it: "scuola" },
    { ar: "درجة", en: "grade", de: "note", ru: "оценка", ja: "成績", zh: "成绩", ko: "성적", es: "nota", fr: "note", it: "voto" },
    { ar: "شخص", en: "person", de: "person", ru: "человек", ja: "人", zh: "人", ko: "사람", es: "persona", fr: "personne", it: "persona" },
    { ar: "هدوء", en: "quiet", de: "ruhe", ru: "тишина", ja: "静けさ", zh: "安静", ko: "고요", es: "silencio", fr: "silence", it: "silenzio" },
    { ar: "ماء", en: "water", de: "wasser", ru: "вода", ja: "水", zh: "水", ko: "물", es: "agua", fr: "eau", it: "acqua" },
    { ar: "نار", en: "fire", de: "feuer", ru: "огонь", ja: "火", zh: "火", ko: "불", es: "fuego", fr: "feu", it: "fuoco" },
    { ar: "أرض", en: "earth", de: "erde", ru: "земля", ja: "地球", zh: "地球", ko: "지구", es: "tierra", fr: "terre", it: "terra" },
    { ar: "رياح", en: "wind", de: "wind", ru: "ветер", ja: "風", zh: "风", ko: "바람", es: "viento", fr: "vent", it: "vento" },
    { ar: "سماء", en: "sky", de: "himmel", ru: "небо", ja: "空", zh: "天空", ko: "하늘", es: "cielo", fr: "ciel", it: "cielo" },
    { ar: "شمس", en: "sun", de: "sonne", ru: "солнце", ja: "太陽", zh: "太阳", ko: "태양", es: "sol", fr: "soleil", it: "sole" },
    { ar: "قمر", en: "moon", de: "mond", ru: "луна", ja: "月", zh: "月亮", ko: "달", es: "luna", fr: "lune", it: "luna" },
    { ar: "نجم", en: "star", de: "stern", ru: "звезда", ja: "星", zh: "星星", ko: "별", es: "estrella", fr: "étoile", it: "stella" },
    { ar: "صديق", en: "friend", de: "freund", ru: "друг", ja: "友達", zh: "朋友", ko: "친구", es: "amigo", fr: "ami", it: "amico" },
    { ar: "كتاب", en: "book", de: "buch", ru: "книга", ja: "本", zh: "书", ko: "책", es: "libro", fr: "livre", it: "libro" },
    { ar: "سيارة", en: "car", de: "auto", ru: "машина", ja: "車", zh: "车", ko: "자동차", es: "coche", fr: "voiture", it: "macchina" },
    { ar: "مدينة", en: "city", de: "stadt", ru: "город", ja: "都市", zh: "城市", ko: "도시", es: "ciudad", fr: "ville", it: "città" },
    { ar: "عائلة", en: "family", de: "familie", ru: "семья", ja: "家族", zh: "家庭", ko: "가족", es: "familia", fr: "famille", it: "famiglia" },
    { ar: "عمل", en: "job", de: "arbeit", ru: "работа", ja: "仕事", zh: "工作", ko: "직업", es: "trabajo", fr: "travail", it: "lavoro" },
    { ar: "مشكلة", en: "problem", de: "problem", ru: "проблема", ja: "問題", zh: "问题", ko: "문제", es: "problema", fr: "problème", it: "problema" },
    { ar: "حقيبة", en: "bag", de: "tasche", ru: "сумка", ja: "バッグ", zh: "包", ko: "가방", es: "bolsa", fr: "sac", it: "borsa" },
    { ar: "غرفة", en: "room", de: "zimmer", ru: "комната", ja: "部屋", zh: "房间", ko: "방", es: "habitación", fr: "chambre", it: "stanza" },
    { ar: "باب", en: "door", de: "tür", ru: "дверь", ja: "ドア", zh: "门", ko: "문", es: "puerta", fr: "porte", it: "porta" },
    { ar: "نافذة", en: "window", de: "fenster", ru: "окно", ja: "窓", zh: "窗户", ko: "창문", es: "ventana", fr: "fenêtre", it: "finestra" },
    { ar: "طريق", en: "road", de: "straße", ru: "дорога", ja: "道", zh: "路", ko: "길", es: "camino", fr: "route", it: "strada" },
    { ar: "طعام", en: "food", de: "essen", ru: "еда", ja: "食べ物", zh: "食物", ko: "음식", es: "comida", fr: "nourriture", it: "cibo" },
    { ar: "تفاحة", en: "apple", de: "apfel", ru: "яблоко", ja: "りんご", zh: "苹果", ko: "사과", es: "manzana", fr: "pomme", it: "mela" },
    { ar: "خبز", en: "bread", de: "brot", ru: "хлеб", ja: "パン", zh: "面包", ko: "빵", es: "pan", fr: "pain", it: "pane" },
    { ar: "لحم", en: "meat", de: "fleisch", ru: "мясо", ja: "肉", zh: "肉", ko: "고기", es: "carne", fr: "viande", it: "carne" },
    { ar: "مكتب", en: "desk", de: "schreibtisch", ru: "письменный стол", ja: "机", zh: "书桌", ko: "책상", es: "escritorio", fr: "bureau", it: "scrivania" },
    { ar: "حاسوب", en: "computer", de: "computer", ru: "компьютер", ja: "コンピューター", zh: "电脑", ko: "컴퓨터", es: "computadora", fr: "ordinateur", it: "computer" },
    { ar: "هاتف", en: "phone", de: "telefon", ru: "телефон", ja: "電話", zh: "电话", ko: "전화", es: "teléfono", fr: "téléphone", it: "telefono" },
    { ar: "سرير", en: "bed", de: "bett", ru: "кровать", ja: "ベッド", zh: "床", ko: "침대", es: "cama", fr: "lit", it: "letto" },
    { ar: "كرسي", en: "chair", de: "stuhl", ru: "стул", ja: "椅子", zh: "椅子", ko: "의자", es: "silla", fr: "chaise", it: "sedia" },
    { ar: "طاولة", en: "table", de: "tisch", ru: "стол", ja: "テーブル", zh: "桌子", ko: "테이블", es: "mesa", fr: "table", it: "tavolo" },
    { ar: "كلب", en: "dog", de: "hund", ru: "собака", ja: "犬", zh: "狗", ko: "개", es: "perro", fr: "chien", it: "cane" },
    { ar: "قطة", en: "cat", de: "katze", ru: "кошка", ja: "猫", zh: "猫", ko: "고양이", es: "gato", fr: "chat", it: "gatto" },
    { ar: "طائر", en: "bird", de: "vogel", ru: "птица", ja: "鳥", zh: "鸟", ko: "새", es: "pájaro", fr: "oiseau", it: "uccello" },
    { ar: "سمكة", en: "fish", de: "fisch", ru: "рыба", ja: "魚", zh: "鱼", ko: "물고기", es: "pez", fr: "poisson", it: "pesce" },
    { ar: "شجرة", en: "tree", de: "baum", ru: "дерево", ja: "木", zh: "树", ko: "나무", es: "árbol", fr: "arbre", it: "albero" },
    { ar: "زهرة", en: "flower", de: "blume", ru: "цветок", ja: "花", zh: "花", ko: "꽃", es: "flor", fr: "fleur", it: "fiore" },
    { ar: "غابة", en: "forest", de: "wald", ru: "лес", ja: "森", zh: "森林", ko: "숲", es: "bosque", fr: "forêt", it: "foresta" },
    { ar: "بحر", en: "sea", de: "meer", ru: "море", ja: "海", zh: "海", ko: "바다", es: "mar", fr: "mer", it: "mare" },
    { ar: "نهر", en: "river", de: "fluss", ru: "река", ja: "川", zh: "河", ko: "강", es: "río", fr: "rivière", it: "fiume" },
    { ar: "جبل", en: "mountain", de: "berg", ru: "гора", ja: "山", zh: "山", ko: "산", es: "montaña", fr: "montagne", it: "montagna" },
    { ar: "ثلج", en: "snow", de: "schnee", ru: "снег", ja: "雪", zh: "雪", ko: "눈", es: "nieve", fr: "neige", it: "neve" },
    { ar: "مطر", en: "rain", de: "regen", ru: "дождь", ja: "雨", zh: "雨", ko: "비", es: "lluvia", fr: "pluie", it: "pioggia" },
    { ar: "صباح", en: "morning", de: "morgen", ru: "утро", ja: "朝", zh: "早上", ko: "아침", es: "mañana", fr: "matin", it: "mattina" },
    { ar: "ليل", en: "night", de: "nacht", ru: "ночь", ja: "夜", zh: "夜晚", ko: "밤", es: "noche", fr: "nuit", it: "notte" },
    { ar: "اليوم", en: "today", de: "heute", ru: "сегодня", ja: "今日", zh: "今天", ko: "오늘", es: "hoy", fr: "aujourd'hui", it: "oggi" },
    { ar: "وقت", en: "time", de: "zeit", ru: "время", ja: "時間", zh: "时间", ko: "시간", es: "tiempo", fr: "temps", it: "tempo" },
    { ar: "عالم", en: "world", de: "welt", ru: "мир", ja: "世界", zh: "世界", ko: "세계", es: "mundo", fr: "monde", it: "mondo" },
    { ar: "لغة", en: "language", de: "sprache", ru: "язык", ja: "言語", zh: "语言", ko: "언어", es: "idioma", fr: "langue", it: "lingua" },
    { ar: "صورة", en: "picture", de: "bild", ru: "картина", ja: "写真", zh: "照片", ko: "사진", es: "imagen", fr: "image", it: "immagine" },
    { ar: "لعبة", en: "game", de: "spiel", ru: "игра", ja: "ゲーム", zh: "游戏", ko: "게임", es: "juego", fr: "jeu", it: "gioco" },
    // Adjectives and miscs as Words
    { ar: "لون", en: "color", de: "farbe", ru: "цвет", ja: "色", zh: "颜色", ko: "색", es: "color", fr: "couleur", it: "colore" },
    { ar: "ولد", en: "boy", de: "junge", ru: "мальчик", ja: "男の子", zh: "男孩", ko: "소년", es: "niño", fr: "garçon", it: "ragazzo" },
    { ar: "بنت", en: "girl", de: "mädchen", ru: "девочка", ja: "女の子", zh: "女孩", ko: "소녀", es: "niña", fr: "fille", it: "ragazza" },
    { ar: "رجل", en: "man", de: "mann", ru: "мужчина", ja: "男", zh: "男人", ko: "남자", es: "hombre", fr: "homme", it: "uomo" },
    { ar: "امرأة", en: "woman", de: "frau", ru: "женщина", ja: "女", zh: "女人", ko: "여자", es: "mujer", fr: "femme", it: "donna" },
    { ar: "شارع", en: "street", de: "straße", ru: "улица", ja: "通り", zh: "街道", ko: "거리", es: "calle", fr: "rue", it: "strada" }
];

const baseAdjectives = [
    { ar: "جيد", en: "good", de: "gut", ru: "хороший", ja: "良い", zh: "好", ko: "좋은", es: "bueno", fr: "bon", it: "buono" },
    { ar: "سيء", en: "bad", de: "schlecht", ru: "плохой", ja: "悪い", zh: "坏", ko: "나쁜", es: "malo", fr: "mauvais", it: "cattivo" },
    { ar: "كبير", en: "big", de: "groß", ru: "большой", ja: "大きい", zh: "大", ko: "큰", es: "grande", fr: "grand", it: "grande" },
    { ar: "صغير", en: "small", de: "klein", ru: "маленький", ja: "小さい", zh: "小", ko: "작은", es: "pequeño", fr: "petit", it: "piccolo" },
    { ar: "حار", en: "hot", de: "heiß", ru: "горячий", ja: "熱い", zh: "热", ko: "뜨거운", es: "caliente", fr: "chaud", it: "caldo" },
    { ar: "بارد", en: "cold", de: "kalt", ru: "холодный", ja: "冷たい", zh: "冷", ko: "추운", es: "frío", fr: "froid", it: "freddo" },
    { ar: "قديم", en: "old", de: "alt", ru: "старый", ja: "古い", zh: "旧", ko: "오래된", es: "viejo", fr: "vieux", it: "vecchio" },
    { ar: "جديد", en: "new", de: "neu", ru: "новый", ja: "新しい", zh: "新", ko: "새로운", es: "nuevo", fr: "nouveau", it: "nuovo" },
    { ar: "سريع", en: "fast", de: "schnell", ru: "быстрый", ja: "速い", zh: "快", ko: "빠른", es: "rápido", fr: "rapide", it: "veloce" },
    { ar: "بطيء", en: "slow", de: "langsam", ru: "медленный", ja: "遅い", zh: "慢", ko: "느린", es: "lento", fr: "lent", it: "lento" },
    { ar: "طويل", en: "tall", de: "hoch", ru: "высокий", ja: "高い", zh: "高", ko: "키가 큰", es: "alto", fr: "grand", it: "alto" },
    { ar: "قصير", en: "short", de: "kurz", ru: "короткий", ja: "短い", zh: "短", ko: "짧은", es: "corto", fr: "court", it: "corto" },
    { ar: "سعيد", en: "happy", de: "glücklich", ru: "счастливый", ja: "幸せな", zh: "快乐", ko: "행복한", es: "feliz", fr: "heureux", it: "felice" },
    { ar: "حزين", en: "sad", de: "traurig", ru: "грустный", ja: "悲しい", zh: "伤心", ko: "슬픈", es: "triste", fr: "triste", it: "triste" },
    { ar: "جميل", en: "beautiful", de: "schön", ru: "красивый", ja: "美しい", zh: "美丽", ko: "아름다운", es: "hermoso", fr: "beau", it: "bello" },
    { ar: "قوي", en: "strong", de: "stark", ru: "сильный", ja: "強い", zh: "强", ko: "강한", es: "fuerte", fr: "fort", it: "forte" },
    { ar: "ضعيف", en: "weak", de: "schwach", ru: "слабый", ja: "弱い", zh: "弱", ko: "약한", es: "débil", fr: "faible", it: "debole" },
    { ar: "سهل", en: "easy", de: "einfach", ru: "легкий", ja: "簡単な", zh: "容易", ko: "쉬운", es: "fácil", fr: "facile", it: "facile" },
    { ar: "صعب", en: "difficult", de: "schwierig", ru: "трудный", ja: "難しい", zh: "难", ko: "어려운", es: "difícil", fr: "difficile", it: "difficile" },
    { ar: "رخيص", en: "cheap", de: "billig", ru: "дешевый", ja: "安い", zh: "便宜", ko: "싼", es: "barato", fr: "bon marché", it: "economico" },
    { ar: "غالي", en: "expensive", de: "teuer", ru: "дорогой", ja: "高い", zh: "贵", ko: "비싼", es: "caro", fr: "cher", it: "costoso" },
    { ar: "نظيف", en: "clean", de: "sauber", ru: "чистый", ja: "きれいな", zh: "干净", ko: "깨끗한", es: "limpio", fr: "propre", it: "pulito" },
    { ar: "قذر", en: "dirty", de: "schmutzig", ru: "грязный", ja: "汚い", zh: "脏", ko: "더러운", es: "sucio", fr: "sale", it: "sporco" }
];

const baseVerbs = [
    { ar: "يلعب", en: "play", de: "spielen", ru: "играть", ja: "遊ぶ", zh: "玩", ko: "놀다", es: "jugar", fr: "jouer", it: "giocare" },
    { ar: "يتعلم", en: "learn", de: "lernen", ru: "учить", ja: "学ぶ", zh: "学习", ko: "배우다", es: "aprender", fr: "apprendre", it: "imparare" },
    { ar: "يقرأ", en: "read", de: "lesen", ru: "читать", ja: "読む", zh: "读", ko: "읽다", es: "leer", fr: "lire", it: "leggere" },
    { ar: "يكتب", en: "write", de: "schreiben", ru: "писать", ja: "書く", zh: "写", ko: "쓰다", es: "escribir", fr: "écrire", it: "scrivere" },
    { ar: "يأكل", en: "eat", de: "essen", ru: "есть", ja: "食べる", zh: "吃", ko: "먹다", es: "comer", fr: "manger", it: "mangiare" },
    { ar: "يشرب", en: "drink", de: "trinken", ru: "пить", ja: "飲む", zh: "喝", ko: "마시다", es: "beber", fr: "boire", it: "bere" },
    { ar: "ينام", en: "sleep", de: "schlafen", ru: "спать", ja: "寝る", zh: "睡觉", ko: "자다", es: "dormir", fr: "dormir", it: "dormire" },
    { ar: "يركض", en: "run", de: "rennen", ru: "бегать", ja: "走る", zh: "跑", ko: "달리다", es: "correr", fr: "courir", it: "correre" },
    { ar: "يتحدث", en: "speak", de: "sprechen", ru: "говорить", ja: "話す", zh: "说", ko: "말하다", es: "hablar", fr: "parler", it: "parlare" },
    { ar: "يذهب", en: "go", de: "gehen", ru: "идти", ja: "行く", zh: "去", ko: "가다", es: "ir", fr: "aller", it: "andare" },
    { ar: "يأتي", en: "come", de: "kommen", ru: "приходить", ja: "来る", zh: "来", ko: "오다", es: "venir", fr: "venir", it: "venire" },
    { ar: "يرى", en: "see", de: "sehen", ru: "видеть", ja: "見る", zh: "看", ko: "보다", es: "ver", fr: "voir", it: "vedere" },
    { ar: "يسمع", en: "hear", de: "hören", ru: "слышать", ja: "聞く", zh: "听", ko: "듣다", es: "oír", fr: "entendre", it: "sentire" },
    { ar: "يفعل", en: "do", de: "tun", ru: "делать", ja: "する", zh: "做", ko: "하다", es: "hacer", fr: "faire", it: "fare" },
    { ar: "يعرف", en: "know", de: "wissen", ru: "знать", ja: "知る", zh: "知道", ko: "알다", es: "saber", fr: "savoir", it: "sapere" },
    { ar: "يعتقد", en: "think", de: "denken", ru: "думать", ja: "考える", zh: "想", ko: "생각하다", es: "pensar", fr: "penser", it: "pensare" },
    { ar: "يأخذ", en: "take", de: "nehmen", ru: "брать", ja: "取る", zh: "拿", ko: "가져가다", es: "tomar", fr: "prendre", it: "prendere" },
    { ar: "يعطي", en: "give", de: "geben", ru: "давать", ja: "与える", zh: "给", ko: "주다", es: "dar", fr: "donner", it: "dare" },
    { ar: "يجد", en: "find", de: "finden", ru: "находить", ja: "見つける", zh: "找", ko: "찾다", es: "encontrar", fr: "trouver", it: "trovare" },
    { ar: "يحب", en: "like", de: "mögen", ru: "нравиться", ja: "好む", zh: "喜欢", ko: "좋아하다", es: "gustar", fr: "aimer", it: "piacere" },
    { ar: "يبكي", en: "cry", de: "weinen", ru: "плакать", ja: "泣く", zh: "哭", ko: "울다", es: "llorar", fr: "pleurer", it: "piangere" },
    { ar: "يضحك", en: "laugh", de: "lachen", ru: "смеяться", ja: "笑う", zh: "笑", ko: "웃다", es: "reír", fr: "rire", it: "ridere" },
    { ar: "يشتري", en: "buy", de: "kaufen", ru: "покупать", ja: "買う", zh: "买", ko: "사다", es: "comprar", fr: "acheter", it: "comprare" },
    { ar: "يبيع", en: "sell", de: "verkaufen", ru: "продавать", ja: "売る", zh: "卖", ko: "팔다", es: "vender", fr: "vendre", it: "vendere" },
    { ar: "يفتح", en: "open", de: "öffnen", ru: "открывать", ja: "開ける", zh: "开", ko: "열다", es: "abrir", fr: "ouvrir", it: "aprire" },
    { ar: "يغلق", en: "close", de: "schließen", ru: "закрывать", ja: "閉める", zh: "关", ko: "닫다", es: "cerrar", fr: "fermer", it: "chiudere" },
    { ar: "يسأل", en: "ask", de: "fragen", ru: "спрашивать", ja: "尋ねる", zh: "问", ko: "묻다", es: "preguntar", fr: "demander", it: "chiedere" },
    { ar: "يجيب", en: "answer", de: "antworten", ru: "отвечать", ja: "答える", zh: "回答", ko: "대답하다", es: "responder", fr: "répondre", it: "rispondere" }
];

// Load Custom AI Words from LocalStorage
let aiGeneratedWords = JSON.parse(localStorage.getItem('linguaAiWords') || '[]');

let dictionary = {
    words: baseWords,
    verbs: baseVerbs,
    adjectives: baseAdjectives,
    ai: aiGeneratedWords
};

const langCodes = {
    ar: 'ar-SA', en: 'en-GB', de: 'de-DE', ru: 'ru-RU', ja: 'ja-JP',
    zh: 'zh-CN', ko: 'ko-KR', es: 'es-ES', fr: 'fr-FR', it: 'it-IT'
};

// ================= PLAYER STATE & SYSTEM =================
let playerStats = JSON.parse(localStorage.getItem('linguaStats') || JSON.stringify({
    coins: 0,
    exp: 0,
    totalCorrect: 0,
    totalWrong: 0,
    gamesPlayed: 0,
    flawlessGames: 0,
    streak: 0,
    lastPlayedDate: null,
    masteredWords: {}, // { "word_en": 5 } -> answered 5 times correctly
    unlockedAchievements: []
}));

// Daily Streak Logic
function updateStreak() {
    const today = new Date().toDateString();
    if (playerStats.lastPlayedDate !== today) {
        if (playerStats.lastPlayedDate) {
            const lastDate = new Date(playerStats.lastPlayedDate);
            const diffTime = Math.abs(new Date() - lastDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                playerStats.streak++;
            } else if (diffDays > 1) {
                playerStats.streak = 1; // reset streak
            }
        } else {
            playerStats.streak = 1; // first time playing
        }
        playerStats.lastPlayedDate = today;
        saveStats();
    }
}
updateStreak();

// Ranks based on total Level
function getRank(level) {
    if (level < 5) return "Noob";
    if (level < 10) return "Bronze";
    if (level < 20) return "Silver";
    if (level < 30) return "Gold";
    if (level < 40) return "Platinum";
    if (level < 50) return "Diamond";
    if (level < 70) return "Master";
    if (level < 100) return "Grandmaster";
    return "Lingua God";
}

function getLevelThreshold(level) {
    return level * 100 * 1.5; // Level 1 -> 150 exp, Level 2 -> 300 exp 
}

function updateHUD() {
    let currentExp = playerStats.exp;
    let level = 1;
    let expForNext = getLevelThreshold(level);
    
    while(currentExp >= expForNext) {
        currentExp -= expForNext;
        level++;
        expForNext = getLevelThreshold(level);
    }
    
    document.getElementById('player-level').textContent = level;
    document.getElementById('player-rank').textContent = getRank(level);
    document.getElementById('coins').textContent = playerStats.coins;
    
    const streakDisplay = document.getElementById('streak-display');
    if (streakDisplay) streakDisplay.textContent = playerStats.streak;
    
    const expPercentage = (currentExp / expForNext) * 100;
    document.getElementById('exp-bar').style.width = `${expPercentage}%`;
    
    return { level, currentExp, expForNext };
}

function addExpAndCoins(expGain, coinGain) {
    const oldStats = updateHUD();
    playerStats.exp += expGain;
    playerStats.coins += coinGain;
    const newStats = updateHUD();
    
    if (newStats.level > oldStats.level) {
        const levelMsg = document.getElementById('level-up-msg');
        levelMsg.style.display = 'block';
        levelMsg.textContent = `LEVEL UP! You are now Level ${newStats.level}! Rank: ${getRank(newStats.level)}`;
        playSound('levelup');
    }
    
    saveStats();
}

function addMastery(wordObj) {
    const key = wordObj.en || wordObj.source; // fallback mapping key
    if (!playerStats.masteredWords[key]) playerStats.masteredWords[key] = 0;
    playerStats.masteredWords[key]++;
    saveStats();
}

function saveStats() {
    localStorage.setItem('linguaStats', JSON.stringify(playerStats));
}

// ================= ACHIEVEMENTS SYSTEM =================
// 50 Achievements generated dynamically to save space
const achievementsData = [];

// Generate Basic Quantity Achievements
[1, 10, 50, 100, 500].forEach(num => {
    achievementsData.push({ id: `correct_${num}`, title: `Sharp Mind ${num}`, desc: `Answer ${num} words correctly`, icon: "🎯", check: (s) => s.totalCorrect >= num });
    achievementsData.push({ id: `games_${num}`, title: `Dedicated ${num}`, desc: `Play ${num} games`, icon: "🎮", check: (s) => s.gamesPlayed >= num });
});
[1, 5, 10, 50].forEach(num => {
    achievementsData.push({ id: `flawless_${num}`, title: `Perfectionist ${num}`, desc: `Get ${num} flawless games`, icon: "⭐", check: (s) => s.flawlessGames >= num });
});
[5, 15, 30, 50, 100].forEach(lvl => {
    achievementsData.push({ id: `level_${lvl}`, title: `Level ${lvl} Boss`, desc: `Reach Level ${lvl}`, icon: "🔥", check: () => updateHUD().level >= lvl });
});
[100, 500, 1000, 5000].forEach(coins => {
    achievementsData.push({ id: `coins_${coins}`, title: `Rich ${coins}`, desc: `Accumulate ${coins} coins total`, icon: "💰", check: (s) => s.coins >= coins });
});

// Pad remaining to hit 50 with random themed challenges
for (let i = achievementsData.length; i < 50; i++) {
    const req = i * 20;
    achievementsData.push({ id: `grind_${i}`, title: `Polyglot Grind ${i}`, desc: `Reach a total score of ${req}`, icon: "🌍", check: (s) => s.totalCorrect >= req });
}

function checkAchievements() {
    const newlyUnlocked = [];
    achievementsData.forEach(ach => {
        if (!playerStats.unlockedAchievements.includes(ach.id)) {
            if (ach.check(playerStats)) {
                playerStats.unlockedAchievements.push(ach.id);
                newlyUnlocked.push(ach);
            }
        }
    });
    
    if (newlyUnlocked.length > 0) {
        saveStats();
        // Show in game over screen tray
        const tray = document.getElementById('achievement-unlock-tray');
        newlyUnlocked.forEach(ach => {
            const el = document.createElement('div');
            el.className = 'unlock-notif';
            el.innerHTML = `🏆 Achievement Unlocked: <b>${ach.title}</b><br><small>${ach.desc}</small>`;
            tray.appendChild(el);
            playSound('achievement');
        });
    }
}

function renderAchievements() {
    const grid = document.getElementById('achievements-grid');
    grid.innerHTML = '';
    
    // Sort so unlocked are first
    const sorted = [...achievementsData].sort((a,b) => {
        let isA = playerStats.unlockedAchievements.includes(a.id) ? -1 : 1;
        let isB = playerStats.unlockedAchievements.includes(b.id) ? -1 : 1;
        return isA - isB;
    });

    sorted.forEach(ach => {
        const isUnlocked = playerStats.unlockedAchievements.includes(ach.id);
        const card = document.createElement('div');
        card.className = `achievement-card ${isUnlocked ? 'unlocked' : ''}`;
        card.innerHTML = `
            <div class="ach-icon">${ach.icon}</div>
            <div class="ach-title">${ach.title}</div>
            <div class="ach-desc">${ach.desc}</div>
        `;
        grid.appendChild(card);
    });

    const header = document.querySelector('#achievements-overlay h2');
    header.textContent = `🏆 Achievements (${playerStats.unlockedAchievements.length}/50)`;
}

// ================= LEARNING TREE =================
function renderTree() {
    const container = document.getElementById('tree-container');
    container.innerHTML = '';
    
    const masteredObj = playerStats.masteredWords;
    if (Object.keys(masteredObj).length === 0) {
        container.innerHTML = '<p style="color:var(--text);">No words learned yet. Play some games!</p>';
        return;
    }

    Object.keys(masteredObj).sort((a,b) => masteredObj[b] - masteredObj[a]).forEach(word => {
        const ansCount = masteredObj[word];
        const node = document.createElement('div');
        node.className = 'tree-node ' + (ansCount > 5 ? 'mastered' : 'learning');
        node.textContent = word;
        
        const badge = document.createElement('div');
        badge.className = 'mastery-count';
        badge.textContent = ansCount;
        
        node.appendChild(badge);
        container.appendChild(node);
    });
}

// ================= THEME EFFECTS & LIFETIME SOUND =================
const bgEffects = document.getElementById('bg-effects');
let ambientOscillator = null;
let bgmEnabled = localStorage.getItem('linguaBgm') === 'true';

function setBackgroundEffects(theme) {
    bgEffects.innerHTML = '';
    
    if (theme === 'space' || theme === 'planet') {
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = `${Math.random() * 3}px`;
            star.style.height = star.style.width;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDuration = `${Math.random() * 3 + 1}s`;
            bgEffects.appendChild(star);
        }
    } else if (theme === 'hacker' || theme === 'starship') {
        const chars = '0123456789ABCDEF!@#$%^&*';
        for (let i = 0; i < 100; i++) {
            const drp = document.createElement('div');
            drp.className = 'hacker-rain';
            drp.textContent = chars[Math.floor(Math.random() * chars.length)];
            drp.style.color = theme === 'hacker' ? '#00FF41' : '#00A8FF';
            drp.style.left = `${Math.random() * 100}%`;
            drp.style.top = `${Math.random() * 100}%`;
            drp.style.opacity = Math.random();
            drp.style.fontSize = `${Math.random() * 20 + 10}px`;
            bgEffects.appendChild(drp);
        }
    } else if (theme === 'eid' || theme === 'egypt') {
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = `${Math.random() * 4}px`;
            star.style.height = star.style.width;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.backgroundColor = i % 3 === 0 ? 'gold' : 'white';
            star.style.boxShadow = `0 0 5px ${star.style.backgroundColor}`;
            star.style.animationDuration = `${Math.random() * 5 + 3}s`;
            bgEffects.appendChild(star);
        }
    }
}

function startAmbientSound(theme) {
    if (!audioCtx) return;
    stopAmbientSound();
    
    ambientOscillator = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    ambientOscillator.connect(gain);
    gain.connect(audioCtx.destination);
    
    // Low hum for space/robot, white noise equivalent via rapid freq shift for beach/sky
    if (['space', 'planet', 'starship', 'robot', 'cyberspace', 'neon'].includes(theme)) {
        ambientOscillator.type = 'sine';
        ambientOscillator.frequency.setValueAtTime(60, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime); // very quiet hum
    } else if (['retro8bit', 'minecraft', 'amongus'].includes(theme)) {
        ambientOscillator.type = 'square';
        ambientOscillator.frequency.setValueAtTime(120, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.01, audioCtx.currentTime); // quiet drone
    } else {
        // Natural themes (beach, paris, egypt, classroom)
        ambientOscillator.type = 'triangle';
        ambientOscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
    }
    
    ambientOscillator.start();
}

function stopAmbientSound() {
    if (ambientOscillator) {
        try { ambientOscillator.stop(); } catch(e){}
        ambientOscillator = null;
    }
}

// BGM Toggle UI
const bgmToggleBtn = document.getElementById('bgm-toggle-btn');
if (bgmToggleBtn) {
    bgmToggleBtn.textContent = bgmEnabled ? '🎵 Music: ON' : '🎵 Music: OFF';
    bgmToggleBtn.addEventListener('click', () => {
        bgmEnabled = !bgmEnabled;
        localStorage.setItem('linguaBgm', bgmEnabled);
        bgmToggleBtn.textContent = bgmEnabled ? '🎵 Music: ON' : '🎵 Music: OFF';
        initAudio();
        if (bgmEnabled && !document.getElementById('menu-overlay').style.display) {
            startAmbientSound(document.body.getAttribute('data-theme'));
        } else {
            stopAmbientSound();
        }
    });
}

const themeSelector = document.getElementById('theme-selector');
const savedTheme = localStorage.getItem('linguaTheme') || 'space';
document.body.setAttribute('data-theme', savedTheme);
if (themeSelector) themeSelector.value = savedTheme;

themeSelector.addEventListener('change', (e) => {
    const newTheme = e.target.value;
    document.body.setAttribute('data-theme', newTheme);
    setBackgroundEffects(newTheme);
    localStorage.setItem('linguaTheme', newTheme);
});
setBackgroundEffects(savedTheme);


// ================= AI GENERATOR =================
document.getElementById('generate-ai-btn').addEventListener('click', async () => {
    const key = document.getElementById('api-key-input').value.trim();
    const url = document.getElementById('api-url-input').value.trim();
    const topic = document.getElementById('ai-topic').value;
    const statusDiv = document.getElementById('ai-status');
    
    if (!key) {
        statusDiv.textContent = "Error: API key required!";
        statusDiv.style.color = "var(--wrong)";
        return;
    }
    
    statusDiv.textContent = `Requesting AI for topic: ${topic}... Please wait.`;
    statusDiv.style.color = "var(--primary)";
    
    const prompt = `Generate a JSON array of 5 words related to '${topic}'. Each object in the array MUST have exact keys: "en", "de", "ar", "ru", "ja", "zh", "ko", "es", "fr", "it". Provide ONLY valid JSON array. Example: [{"en":"cat","de":"katze","ar":"قط"}]`;
    
    try {
        const req = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${key}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "llama3-8b-8192", // Groq default fallback, adjust if using OpenAI
                messages: [{role: "user", content: prompt}],
                temperature: 0.7
            })
        });
        
        const data = await req.json();
        const content = data.choices[0].message.content;
        // Parse JSON from markdown if exists
        const jsonMatch = content.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            const newWords = JSON.parse(jsonMatch[0]);
            aiGeneratedWords.push(...newWords);
            dictionary.ai = aiGeneratedWords;
            localStorage.setItem('linguaAiWords', JSON.stringify(aiGeneratedWords));
            
            statusDiv.textContent = `Success! Added ${newWords.length} new words. They are saved in the 'AI Generated Words' category!`;
            statusDiv.style.color = "var(--correct)";
        } else {
            throw new Error("Could not parse JSON from AI response.");
        }
    } catch(err) {
        // Fallback Mock generator if API fails
        statusDiv.textContent = `API failed/CORS error. Generating 2 Mock AI words instead...`;
        const mock = [
            { ar: "روبوت", en: `bot_${Math.floor(Math.random()*100)}`, de: "roboter", ru: "робот", ja: "ロボット", zh: "机器人", ko: "로봇", es: "robot", fr: "robot", it: "robot" },
            { ar: "حاسوب", en: `pc_${Math.floor(Math.random()*100)}`, de: "computer", ru: "компьютер", ja: "コンピュータ", zh: "电脑", ko: "컴퓨터", es: "ordenador", fr: "ordinateur", it: "computer" }
        ];
        aiGeneratedWords.push(...mock);
        dictionary.ai = aiGeneratedWords;
        localStorage.setItem('linguaAiWords', JSON.stringify(aiGeneratedWords));
        setTimeout(() => {
            statusDiv.textContent = `Added 2 mock words to AI category!`;
            statusDiv.style.color = "var(--correct)";
        }, 1500);
    }
});


// ================= AUDIO & PARTICLES =================
let audioCtx;
function initAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function playSound(type) {
    if (!audioCtx) return;
    
    const playOsc = (freq, wType, duration, vol, delay=0, slideTo=null) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.type = wType;
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
        if (slideTo) {
            osc.frequency.exponentialRampToValueAtTime(slideTo, audioCtx.currentTime + delay + duration);
        }
        gainNode.gain.setValueAtTime(vol, audioCtx.currentTime + delay);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + delay + duration);
        
        osc.start(audioCtx.currentTime + delay);
        osc.stop(audioCtx.currentTime + delay + duration);
    };

    const theme = document.body.getAttribute('data-theme');
    const isRetro = ['minecraft', 'retro8bit', 'amongus'].includes(theme);
    
    if (type === 'correct') {
        playOsc(600, isRetro ? 'square' : 'sine', 0.15, 0.3, 0, 1400);
        playOsc(800, isRetro ? 'square' : 'triangle', 0.2, 0.2, 0.05, 1600);
    } else if (type === 'wrong') {
        playOsc(150, isRetro ? 'sawtooth' : 'square', 0.3, 0.3, 0, 60);
        playOsc(200, isRetro ? 'sawtooth' : 'triangle', 0.3, 0.3, 0, 50);
    } else if (type === 'levelup') {
        ['triangle', 'sine'].forEach((t, i) => {
            playOsc(400 * (i+1), t, 0.2, 0.2, 0, 800 * (i+1));
            playOsc(600 * (i+1), t, 0.2, 0.2, 0.2, 1200 * (i+1));
            playOsc(800 * (i+1), t, 0.4, 0.2, 0.4, 1600 * (i+1));
        });
    } else if (type === 'achievement') {
        playOsc(800, 'sine', 0.1, 0.2, 0, 1000);
        playOsc(1200, 'sine', 0.2, 0.2, 0.1, 1500);
    } else if (type === 'click') {
        playOsc(isRetro ? 800 : 1200, isRetro ? 'square' : 'sine', 0.05, 0.1, 0, 600);
    } else if (type === 'hover') {
        playOsc(400, 'sine', 0.05, 0.05);
    }
}

function speakWord(word, langVal) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance(word);
        msg.lang = langCodes[langVal] || 'en-US';
        msg.rate = 0.85;
        window.speechSynthesis.speak(msg);
    }
}

function createExplosion(x, y) {
    const gameArea = document.getElementById('game-area');
    const colors = ['#39ff14', '#00f0ff', '#ffffff', '#ffd700', '#ff007f'];
    const theme = document.body.getAttribute('data-theme');
    const isRetro = ['minecraft', 'retro8bit', 'amongus'].includes(theme);
    
    for (let i = 0; i < (isRetro ? 20 : 50); i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = isRetro ? 12 : Math.random() * 8 + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        if (!isRetro) particle.style.borderRadius = '50%';
        if (!isRetro) particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
        gameArea.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 200 + 50;
        const dx = Math.cos(angle) * velocity;
        const dy = Math.sin(angle) * velocity + 100; // gravity
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
            { transform: `translate(${dx}px, ${dy}px) scale(0) rotate(${Math.random()*360}deg)`, opacity: 0 }
        ], {
            duration: 800 + Math.random() * 500,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
        }).onfinish = () => particle.remove();
    }
}


// ================= GAME ENGINE =================
let currentWords = [];
let currentWordIndex = 0;
let matchScore = 0;
let matchExp = 0;
let matchCoins = 0;
let gameLoopId;
let wordPos = 0;
let wordSpeed = 0.05;
let baseSpeed = 0.05;
let isPaused = false;
let allowInput = false;

let sourceLang = 'en', targetLang = 'de', currentCategory = 'words';

const wordDisplay = document.getElementById('word-display');
const wordInput = document.getElementById('word-input');
const inputForm = document.getElementById('input-form');
const scoreDisplay = document.getElementById('score');
const totalScoreDisplay = document.getElementById('target-score');
const progressBar = document.getElementById('progress-bar');
const messageBox = document.getElementById('message-box');
const gameArea = document.getElementById('game-area');

// TABS Logic
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(e.target.id === "open-achievements-btn") {
            renderAchievements();
            document.getElementById('achievements-overlay').style.display = 'flex';
            document.getElementById('menu-overlay').style.display = 'none';
            return;
        }
        if(e.target.id === "open-tree-btn") {
            renderTree();
            document.getElementById('tree-overlay').style.display = 'flex';
            document.getElementById('menu-overlay').style.display = 'none';
            return;
        }

        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        document.getElementById(e.target.getAttribute('data-tab')).classList.add('active');
    });
});

document.getElementById('close-achievements-btn').addEventListener('click', () => {
    document.getElementById('achievements-overlay').style.display = 'none';
    document.getElementById('menu-overlay').style.display = 'flex';
});
document.getElementById('close-tree-btn').addEventListener('click', () => {
    document.getElementById('tree-overlay').style.display = 'none';
    document.getElementById('menu-overlay').style.display = 'flex';
});

// Dictionary logic
document.getElementById('open-learn-btn').addEventListener('click', () => {
    sourceLang = document.getElementById('source-lang').value;
    targetLang = document.getElementById('target-lang').value;
    currentCategory = document.getElementById('category').value;
    
    if(dictionary[currentCategory].length === 0 && currentCategory === 'ai') {
        alert("No AI words generated yet!");
        return;
    }

    const srcText = document.querySelector(`#source-lang option[value="${sourceLang}"]`).text;
    const tgtText = document.querySelector(`#target-lang option[value="${targetLang}"]`).text;

    document.getElementById('th-source').textContent = srcText;
    document.getElementById('th-target').textContent = tgtText;

    const tbody = document.querySelector('#learn-table tbody');
    tbody.innerHTML = '';

    dictionary[currentCategory].forEach(item => {
        const tr = document.createElement('tr');
        tr.className = 'learn-row';
        tr.title = "Click to study spelling and pronunciation!";
        
        const tdSrc = document.createElement('td');
        const tdTgt = document.createElement('td');
        
        tdSrc.textContent = item[sourceLang] || 'N/A';
        tdTgt.textContent = item[targetLang] || 'N/A';
        
        tr.appendChild(tdSrc); 
        tr.appendChild(tdTgt);
        
        // Add click listener to open Study Viewer
        tr.addEventListener('click', () => {
            openStudyViewer(tdSrc.textContent, tdTgt.textContent, sourceLang, targetLang);
        });
        
        tbody.appendChild(tr);
    });

    document.getElementById('menu-overlay').style.display = 'none';
    document.getElementById('learn-overlay').style.display = 'flex';
});

document.getElementById('close-learn-btn').addEventListener('click', () => {
    document.getElementById('learn-overlay').style.display = 'none';
    document.getElementById('menu-overlay').style.display = 'flex';
});

// ================= STUDY VIEWER LOGIC =================
const studyOverlay = document.getElementById('study-overlay');
const studyTitle = document.getElementById('study-title');
const studyTranslation = document.getElementById('study-translation');
const spellingContainer = document.getElementById('spelling-container');

let currentStudyWord = "";
let currentStudyLang = "en";
let isSpellingActive = false;

function openStudyViewer(sourceWord, targetWord, srcLang, tgtLang) {
    document.getElementById('learn-overlay').style.display = 'none';
    studyOverlay.style.display = 'flex';
    
    // For Arabic or languages requiring specific fonts, we pull from the row CSS
    studyTitle.textContent = sourceWord;
    studyTranslation.textContent = `Means: ${targetWord}`;
    spellingContainer.innerHTML = '';
    
    currentStudyWord = sourceWord;
    currentStudyLang = srcLang;
    
    playStudySequence(sourceWord, srcLang);
}

document.getElementById('close-study-btn').addEventListener('click', () => {
    isSpellingActive = false; // abort sequence
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    studyOverlay.style.display = 'none';
    document.getElementById('learn-overlay').style.display = 'flex';
});

document.getElementById('replay-study-btn').addEventListener('click', () => {
    if (isSpellingActive) return; // prevent spam
    spellingContainer.innerHTML = '';
    playStudySequence(currentStudyWord, currentStudyLang);
});

async function playStudySequence(word, lang) {
    isSpellingActive = true;
    const letters = Array.from(word); // Handles Unicode & Emojis correctly
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#00f0ff', '#4b0082', '#ff00ff'];
    
    // 1. Announce full word
    speakWord(word, lang);
    await sleep(1000);
    if (!isSpellingActive) return;
    
    // 2. Spell out
    for (let i = 0; i < letters.length; i++) {
        if (!isSpellingActive) return; // Exit if user closed modal
        
        const char = letters[i];
        
        const box = document.createElement('div');
        box.className = 'spelling-letter';
        box.textContent = char;
        
        // If not a space, apply rainbow coloring
        if (char.trim() !== '') {
            const color = colors[i % colors.length];
            box.style.borderColor = color;
            box.style.color = color;
            box.style.textShadow = `0 0 20px ${color}`;
            box.style.boxShadow = `inset 0 0 25px ${color}, 0 0 20px ${color}`;
            
            // Speak the individual letter using TTS
            // (Note: TTS for single letters works best by just passing the letter
            // Some languages like Arabic require the letter to be read out naturally)
            speakWord(char, lang);
        } else {
            box.style.border = 'none';
            box.style.background = 'transparent';
            box.style.boxShadow = 'none';
        }
        
        spellingContainer.appendChild(box);
        
        // Force reflow to pop animation
        void box.offsetWidth; 
        box.classList.add('show');
        
        // Wait between letters
        await sleep(650);
    }
    
    if (!isSpellingActive) return;
    await sleep(600);
    
    // 3. Repeat full word to conclude
    speakWord(word, lang);
    isSpellingActive = false;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function shuffle(array) {
    let curr = array.length, rnd;
    while (curr > 0) {
        rnd = Math.floor(Math.random() * curr); curr--;
        [array[curr], array[rnd]] = [array[rnd], array[curr]];
    }
    return array;
}

let timeAttackTimer = 60;
let timeAttackInterval = null;

function startGame() {
    initAudio();
    sourceLang = document.getElementById('source-lang').value;
    targetLang = document.getElementById('target-lang').value;
    currentCategory = document.getElementById('category').value;
    
    const diff = document.getElementById('difficulty').value;
    if (diff === 'easy') baseSpeed = 0.02;
    if (diff === 'normal') baseSpeed = 0.055;
    if (diff === 'hard') baseSpeed = 0.12;

    if (sourceLang === targetLang) {
        alert("Select different languages for Show and Type!");
        return;
    }
    
    if (dictionary[currentCategory].length === 0) {
        alert("This category has no words! Generate some AI words first.");
        return;
    }

    if (bgmEnabled) {
        startAmbientSound(document.body.getAttribute('data-theme'));
    }

    const countVal = document.getElementById('word-count').value;
    const gameMode = document.getElementById('game-mode').value;
    
    let maxWords = dictionary[currentCategory].length;
    if (gameMode === 'timeattack' || gameMode === 'flashcards') {
        maxWords = dictionary[currentCategory].length; // Use all
    } else if (countVal !== 'all') {
        maxWords = parseInt(countVal);
    }

    const rawDict = shuffle([...dictionary[currentCategory]]).slice(0, maxWords);
    currentWords = rawDict.map(item => ({
        sourceObj: item, 
        sourceText: item[sourceLang],
        targetText: item[targetLang]
    })).filter(w => w.sourceText && w.targetText);

    if (currentWords.length === 0) {
        alert("Selected languages are missing from the dictionary in this category!");
        return;
    }

    totalScoreDisplay.textContent = gameMode === 'timeattack' ? '∞' : currentWords.length;
    
    currentWordIndex = 0;
    matchScore = 0;
    matchExp = 0;
    matchCoins = 0;
    timeAttackTimer = 60;
    scoreDisplay.textContent = matchScore;
    messageBox.style.opacity = 0;
    progressBar.style.width = '0%';
    document.getElementById('level-up-msg').style.display = 'none';
    document.getElementById('achievement-unlock-tray').innerHTML = '';
    
    const timeDisplay = document.getElementById('time-display');
    if (timeDisplay) {
        timeDisplay.style.display = (gameMode === 'timeattack') ? 'block' : 'none';
        timeDisplay.textContent = '01:00';
        if (timeAttackInterval) clearInterval(timeAttackInterval);
        
        if (gameMode === 'timeattack') {
            timeAttackInterval = setInterval(() => {
                if (isPaused) return;
                timeAttackTimer--;
                let sec = timeAttackTimer < 10 ? '0' + timeAttackTimer : timeAttackTimer;
                timeDisplay.textContent = `00:${sec}`;
                if (timeAttackTimer <= 0) {
                    clearInterval(timeAttackInterval);
                    endGame(true);
                }
            }, 1000);
        }
    }
    
    document.getElementById('menu-overlay').style.display = 'none';
    document.getElementById('game-over-overlay').style.display = 'none';
    
    playerStats.gamesPlayed++;
    saveStats();
    
    cancelAnimationFrame(gameLoopId);
    spawnWord();
    gameLoop();
}

function spawnWord() {
    const gameMode = document.getElementById('game-mode') ? document.getElementById('game-mode').value : 'typing';
    if (currentWordIndex >= currentWords.length) {
        endGame(true);
        return;
    }
    
    wordPos = gameMode === 'flashcards' ? 40 : 0;
    const currentObj = currentWords[currentWordIndex];
    document.getElementById('input-form').style.display = 'none';
    document.getElementById('mc-options-container').style.display = 'none';
    if (document.getElementById('flashcard-container')) document.getElementById('flashcard-container').style.display = 'none';
    
    if (gameMode === 'mcq') {
        document.getElementById('mc-options-container').style.display = 'flex';
    } else if (gameMode === 'flashcards') {
        document.getElementById('flashcard-container').style.display = 'flex';
        document.getElementById('fc-reveal-btn').style.display = 'block';
        document.getElementById('fc-answer-actions').style.display = 'none';
    } else {
        document.getElementById('input-form').style.display = 'flex';
    }

    if (gameMode === 'listening') {
        wordDisplay.textContent = '🔊 Listen...';
        wordDisplay.style.fontSize = '32px';
    } else {
        wordDisplay.textContent = currentObj.sourceText;
        wordDisplay.style.fontSize = '40px';
    }

    wordDisplay.className = 'floating-word';
    wordDisplay.style.bottom = `${wordPos}%`;
    
    wordSpeed = gameMode === 'timeattack' ? baseSpeed + 0.05 : baseSpeed + (currentWordIndex * 0.003);
    
    if (gameMode !== 'flashcards') speakWord(currentObj.sourceText, sourceLang);
    isPaused = false;
    allowInput = true;

    wordDisplay.onclick = null; 
    if (gameMode === 'listening' || gameMode === 'flashcards') {
        wordDisplay.onclick = () => speakWord(currentObj.sourceText, sourceLang);
        wordDisplay.style.cursor = 'pointer';
    } else {
        wordDisplay.style.cursor = 'default';
    }

    if (gameMode === 'mcq') {
        generateMCOptions(currentObj.targetText);
    } else if (gameMode !== 'flashcards') {
        wordInput.value = '';
        setTimeout(() => { wordInput.focus(); }, 10);
    }
    
    const displayLen = gameMode === 'timeattack' ? currentWordIndex : currentWords.length;
    progressBar.style.width = gameMode === 'timeattack' ? '100%' : `${(currentWordIndex / currentWords.length) * 100}%`;
}

function generateMCOptions(correctAnswer) {
    const rawDict = dictionary[document.getElementById('category').value];
    let pool = rawDict.map(item => item[targetLang]).filter(v => v !== correctAnswer && v);
    pool = shuffle(pool).slice(0, 3);
    pool.push(correctAnswer);
    pool = shuffle(pool);

    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`mc-btn-${i}`);
        btn.textContent = pool[i];
        btn.onclick = () => {
            if (!allowInput || isPaused) return;
            if (pool[i] === correctAnswer) {
                handleCorrectAnswer();
            } else {
                handleWrongAnswer("Missed!");
            }
        };
    }
}

function gameLoop() {
    const gameMode = document.getElementById('game-mode') ? document.getElementById('game-mode').value : 'typing';
    if (!isPaused && gameMode !== 'flashcards') {
        wordPos += wordSpeed;
        wordDisplay.style.bottom = `${wordPos}%`;
        
        if (wordPos >= 90) {
            handleWrongAnswer("Time's up!");
        }
    }
    gameLoopId = requestAnimationFrame(gameLoop);
}

function handleWrongAnswer(reason) {
    isPaused = true;
    allowInput = false;
    playSound('wrong');
    wordDisplay.classList.add('wrong');
    playerStats.totalWrong++;
    
    const target = currentWords[currentWordIndex].targetText;
    messageBox.textContent = `${reason} Solution: ${target}`;
    messageBox.style.opacity = 1;

    setTimeout(() => {
        wordDisplay.classList.remove('wrong');
        messageBox.style.opacity = 0;
        
        wordPos = 0;
        isPaused = false;
        allowInput = true;
        wordInput.value = '';
        wordInput.focus();
    }, 2500); 
}

function handleCorrectAnswer() {
    isPaused = true;
    allowInput = false;
    playSound('correct');
    wordDisplay.classList.add('correct');
    
    matchScore++;
    playerStats.totalCorrect++;
    scoreDisplay.textContent = matchScore;
    
    addMastery(currentWords[currentWordIndex].sourceObj);

    // Calc Match rewards
    const diff = document.getElementById('difficulty').value;
    const coinAmt = { 'easy': 2, 'normal': 5, 'hard': 10 }[diff];
    const expAmt = { 'easy': 10, 'normal': 20, 'hard': 40 }[diff];
    matchCoins += coinAmt;
    matchExp += expAmt;

    const rect = wordDisplay.getBoundingClientRect();
    const areaRect = gameArea.getBoundingClientRect();
    createExplosion(rect.left - areaRect.left + rect.width / 2, rect.top - areaRect.top + rect.height / 2);

    setTimeout(() => {
        wordDisplay.classList.remove('correct');
        currentWordIndex++;
        spawnWord();
    }, 800);
}

// Flashcard buttons
if (document.getElementById('fc-reveal-btn')) {
    document.getElementById('fc-reveal-btn').addEventListener('click', () => {
        if (!allowInput || isPaused) return;
        const currentObj = currentWords[currentWordIndex];
        wordDisplay.textContent = currentObj.targetText;
        speakWord(currentObj.targetText, targetLang);
        document.getElementById('fc-reveal-btn').style.display = 'none';
        document.getElementById('fc-answer-actions').style.display = 'flex';
    });

    document.getElementById('fc-wrong-btn').addEventListener('click', () => {
        handleWrongAnswer("Missed!");
    });

    document.getElementById('fc-correct-btn').addEventListener('click', () => {
        handleCorrectAnswer();
    });
}

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!allowInput || isPaused) return;

    const typed = wordInput.value.trim().toLowerCase();
    const correctTarget = currentWords[currentWordIndex].targetText.toLowerCase();

    if (typed === correctTarget) {
        handleCorrectAnswer();
    } else {
        handleWrongAnswer("Missed!");
    }
});

function endGame(won) {
    cancelAnimationFrame(gameLoopId);
    stopAmbientSound();
    isPaused = true;
    allowInput = false;
    progressBar.style.width = '100%';
    
    if (won && matchScore === currentWords.length) {
        matchCoins += 50; 
        matchExp += 200;
        playerStats.flawlessGames++;
    }
    
    addExpAndCoins(matchExp, matchCoins);
    checkAchievements();
    
    document.getElementById('game-over-overlay').style.display = 'flex';
    const title = document.getElementById('game-over-title');
    
    if (won && matchScore === currentWords.length) {
        title.textContent = "FLAWLESS VICTORY!";
        title.style.color = "var(--correct)";
    } else if (won) {
        title.textContent = "Mission Accomplished!";
        title.style.color = "var(--primary)";
    } else {
        title.textContent = "Game Over";
        title.style.color = "var(--wrong)";
    }
    
    document.getElementById('game-over-msg').textContent = `Final Score: ${matchScore} / ${currentWords.length}`;
    document.getElementById('game-over-exp').textContent = `+${matchExp} EXP`;
    document.getElementById('game-over-coins').textContent = `+${matchCoins} Coins Earned!`;
}

function openMainMenu() {
    cancelAnimationFrame(gameLoopId);
    stopAmbientSound();
    isPaused = true;
    allowInput = false;
    document.getElementById('game-over-overlay').style.display = 'none';
    document.getElementById('menu-overlay').style.display = 'flex';
}

// Binds
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('restart-btn').addEventListener('click', startGame);
document.getElementById('play-again-btn').addEventListener('click', startGame);
document.getElementById('header-menu-btn').addEventListener('click', openMainMenu);
document.getElementById('go-menu-btn').addEventListener('click', openMainMenu);

document.body.addEventListener('click', () => {
    if (allowInput && document.getElementById('menu-overlay').style.display === 'none') {
        wordInput.focus();
    }
});

// Init on load
updateHUD();

// Attach UI hover/click sounds
document.querySelectorAll('button, .tab-btn, .mc-btn, select').forEach(el => {
    el.addEventListener('mouseenter', () => { if(bgmEnabled) playSound('hover'); });
    el.addEventListener('click', () => { if(bgmEnabled) playSound('click'); });
});
