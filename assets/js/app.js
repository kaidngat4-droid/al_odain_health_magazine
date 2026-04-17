// ==========================================
// Articles Database (localStorage)
// ==========================================

const defaultArticles = [
    {
        id: 1,
        title: "دليلك الشامل للقسطرة القلبية",
        category: "صحة",
        excerpt: "معلومات صحيه تتعلق في تحسين الصحة الجسديه ...",
        content: "تؤكد الأبحاث العلمية أن تحسين البيئة المحيطة يقلل من انتشار الأمراض بنسبة تصل إلى 40%. تشمل النظافة البيئية معالجة مياه الصرف الصحي، التخلص الآمن من النفايات، ومكافحة نواقل الأمراض مثل البعوض والقوارض. في مديرية العدين، تم تنفيذ 15 مشروعاً بيئياً خلال العام الماضي ساهمت في خفض حالات الملاريا والحميات المعوية.",
        author: "د. صلاح الأهدل",
        date: "2026-01-15",
        image: "🌿",
        views: 0
    },
    {
        id: 2,
        title: "التطعيمات الوقائية: حماية للمجتمع",
        category: "صحة",
        excerpt: "أهمية الالتزام بجدول التطعيمات للحد من انتشار الأمراض المعدية...",
        content: "التطعيمات أنقذت ملايين الأرواح حول العالم. توفر وزارة الصحة 11 لقاحاً أساسياً للأطفال مجاناً. التطعيم لا يحمي الفرد فقط بل يحقق مناعة القطيع التي تحمي غير القادرين على التطعيم. حملات التطعيم في العدين حققت تغطية تجاوزت 95% للأمراض المستهدفة.",
        author: "د. منى الشرعبي",
        date: "2026-01-20",
        image: "💉",
        views: 0
    },
    {
        id: 3,
        title: "مكافحة التلوث في مديرية العدين",
        category: "بيئة",
        excerpt: "جهود مكتب الصحة والبيئة في الحد من مصادر التلوث...",
        content: "أطلق مكتب الصحة والبيئة مبادرة 'عدين نظيفة' التي أسفرت عن زراعة 500 شجرة، تركيب حاويات نفايات في 10 قرى، وتدريب 30 متطوعاً بيئياً. كما تم إنشاء نظام لرصد جودة الهواء في المناطق الصناعية.",
        author: "مهندس علي الحمادي",
        date: "2026-01-25",
        image: "🏭",
        views: 0
    },
    {
        id: 4,
        title: "التغذية السليمة للأطفال",
        category: "صحة",
        excerpt: "نصائح غذائية لتعزيز مناعة الأطفال في مراحل النمو...",
        content: "ينصح خبراء التغذية بتنويع الأطعمة المقدمة للطفل لتشمل الخضروات والفواكه والبروتينات والحبوب الكاملة. شرب الماء بدلاً من المشروبات السكرية يقلل خطر السمنة والتسوس. الرضاعة الطبيعية وحدها كافية للأطفال في أول 6 أشهر.",
        author: "أ. فاطمة عباس",
        date: "2026-02-01",
        image: "🍎",
        views: 0
    },
    {
        id: 5,
        title: "الوعي البيئي في المدارس",
        category: "بيئة",
        excerpt: "برامج توعوية لتعزيز الثقافة البيئية لدى الطلاب...",
        content: "تم دمج مفاهيم البيئة في مناهج 15 مدرسة بعدين. تشمل الأنشطة: فرق النظافة المدرسية، مسابقات إعادة التدوير، وحدائق مدرسية صغيرة. الهدف هو بناء جيل واعٍ بيئياً قادر على حماية موارده الطبيعية.",
        author: "أ. خالد النهاري",
        date: "2026-02-10",
        image: "📚",
        views: 0
    },
    {
        id: 6,
        title: "أمراض الجهاز التنفسي الموسمية",
        category: "صحة",
        excerpt: "كيفية الوقاية من نزلات البرد والإنفلونزا في الشتاء...",
        content: "غسل اليدين بانتظام، التهوية الجيدة للمنازل، وتلقي لقاح الإنفلونزا السنوي أهم سبل الوقاية. تجنب الاقتراب من المرضى وتغطية الفم عند العطس يقلل انتشار العدوى بنسبة 60%.",
        author: "د. سميرة عبدالله",
        date: "2026-02-15",
        image: "🤧",
        views: 0
    },
    {
        id: 7,
        title: "دليلك الشامل للقسطرة القلبية",
        category: "قلب وأوعية دموية",
        excerpt: "دليل شامل للقسطرة القلبية: أنواعها، دواعي إجرائها، خطوات الإجراء، المخاطر، وما بعد القسطرة...",
        content: "القسطرة القلبية هي إجراء طبي يستخدم لتشخيص وعلاج أمراض القلب والأوعية الدموية. يتم إدخال أنبوب رفيع عبر الأوعية الدموية (من الفخذ أو الرسغ) وتوجيهه إلى القلب أو الشرايين التاجية. تستغرق مدة الإجراء بين 30 دقيقة إلى ساعتين، ونسبة نجاحها تصل إلى 95%.",
        author: "د. صلاح الأهدل",
        date: "2026-04-15",
        image: "🫀",
        views: 0
    },
    {
        id: 8,
        title: "الدعامات القلبية: أنواعها وفوائدها",
        category: "قلب وأوعية دموية",
        excerpt: "تعرف على الدعامات القلبية وأنواعها وكيف تعمل على فتح الشرايين المسدودة...",
        content: "الدعامة القلبية عبارة عن أنبوب معدني صغير شبكي الشكل يتم تركيبه داخل الشريان التاجي بعد توسيعه بالبالون، لإبقائه مفتوحاً. أنواعها: الدعامات المعدنية العادية، الدعامات المطلية بالأدوية (المعيار الذهبي)، والدعامات القابلة للامتصاص. نسبة نجاح تركيب الدعامات تتجاوز 95%.",
        author: "د. خالد المنصوري",
        date: "2026-04-16",
        image: "🩺",
        views: 0
    },
    {
        id: 9,
        title: "انسداد الشرايين: الأسباب والعلاج",
        category: "قلب وأوعية دموية",
        excerpt: "تعرف على أسباب انسداد الشرايين وأعراضه وطرق علاجه الحديثة...",
        content: "يحدث انسداد الشرايين عندما تتراكم الدهون والكوليسترول والكالسيوم على جدران الشرايين مكونة 'تصلب الشرايين'. الأعراض تشمل ألم الصدر وضيق التنفس والتعب. العلاج يشمل تغيير نمط الحياة، الأدوية، القسطرة والدعامات، أو جراحة تحويل مسار الشرايين.",
        author: "د. ياسر القحطاني",
        date: "2026-04-17",
        image: "⚠️",
        views: 0
    }
];

// ==========================================
// تحميل المقالات
// ==========================================
function loadArticles() {
    let articles = [];
    
    try {
        let stored = localStorage.getItem('articles');
        if (!stored || stored === '[]' || stored === 'null') {
            // إذا لم تكن هناك بيانات، استخدم الافتراضية
            articles = [...defaultArticles];
            localStorage.setItem('articles', JSON.stringify(articles));
            console.log('✅ تم تهيئة المقالات الافتراضية:', articles.length, 'مقال');
        } else {
            articles = JSON.parse(stored);
            console.log('✅ تم تحميل', articles.length, 'مقال من localStorage');
        }
    } catch (e) {
        console.error('❌ خطأ في تحميل المقالات:', e);
        articles = [...defaultArticles];
    }
    
    // عرض جميع المقالات (بدون تقييد)
    displayArticles(articles);
    
    return articles;
}

// ==========================================
// عرض المقالات
// ==========================================
function displayArticles(articles) {
    const grid = document.getElementById('articlesGrid');
    if (!grid) {
        console.error('❌ عنصر articlesGrid غير موجود');
        return;
    }
    
    // التأكد من أن articles مصفوفة
    if (!Array.isArray(articles) || articles.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <div style="font-size: 4rem; margin-bottom: 15px;">📭</div>
                <h3>لا توجد مقالات متاحة</h3>
            </div>
        `;
        return;
    }
    
    // ترتيب المقالات حسب التاريخ (الأحدث أولاً)
    articles.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    
    console.log('🎨 جاري عرض', articles.length, 'مقال');
    
    grid.innerHTML = articles.map(article => {
        // التأكد من وجود قيم افتراضية
        const id = article.id || 0;
        const title = article.title || 'بدون عنوان';
        const category = article.category || 'غير مصنف';
        const excerpt = (article.excerpt || 'لا يوجد ملخص').substring(0, 100) + '...';
        const author = article.author || 'مجهول';
        const date = article.date || '-';
        const image = article.image || '📰';
        const views = article.views || 0;
        
        // تنسيق رقم المقال للرابط
        const articleNum = String(id).padStart(3, '0');
        
        return `
            <div class="article-card" data-id="${id}">
                <div class="article-image" style="height: 180px; background: linear-gradient(135deg, #1b5e20, #2e7d32); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
                    ${image.startsWith('data:') ? `<img src="${image}" style="width: 100%; height: 100%; object-fit: cover;">` : image}
                </div>
                <div class="article-content" style="padding: 20px;">
                    <span class="article-category" style="background: #e8f5e9; color: #1b5e20; padding: 5px 15px; border-radius: 20px; font-size: 0.85rem; display: inline-block; margin-bottom: 10px;">${category}</span>
                    <h3 class="article-title" style="font-size: 1.2rem; color: #333; margin-bottom: 10px; line-height: 1.4;">${title}</h3>
                    <div class="article-meta" style="color: #999; font-size: 0.85rem; margin-bottom: 10px;">
                        ✍️ ${author} | 📅 ${date} | 👁️ ${views}
                    </div>
                    <p class="article-excerpt" style="color: #666; font-size: 0.9rem; line-height: 1.6; margin-bottom: 15px;">${excerpt}</p>
                    <a href="content/articles/article-${articleNum}.html" class="read-more" style="background: linear-gradient(135deg, #2e7d32, #1b5e20); color: white; text-decoration: none; padding: 10px 25px; border-radius: 25px; display: inline-block; text-align: center;">اقرأ المزيد →</a>
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================
// البحث في المقالات
// ==========================================
function searchArticles() {
    const query = document.getElementById('searchInput')?.value.toLowerCase().trim();
    
    let articles = [];
    try {
        articles = JSON.parse(localStorage.getItem('articles')) || [];
    } catch (e) {
        articles = [];
    }
    
    if (!query) {
        displayArticles(articles);
        return;
    }
    
    const results = articles.filter(a => 
        (a.title || '').toLowerCase().includes(query) || 
        (a.excerpt || '').toLowerCase().includes(query) ||
        (a.category || '').toLowerCase().includes(query) ||
        (a.author || '').toLowerCase().includes(query)
    );
    
    displayArticles(results);
    
    if(results.length === 0) {
        document.getElementById('articlesGrid').innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <div style="font-size: 4rem; margin-bottom: 15px;">🔍</div>
                <h3>لا توجد نتائج للبحث</h3>
                <p>جرب كلمات مختلفة</p>
            </div>
        `;
    }
}

// ==========================================
// التهيئة
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 app.js محمل');
    
    if (document.getElementById('articlesGrid')) {
        loadArticles();
    }
});

