// Admin Functions
function login() {
    const username = document.getElementById('username')?.value;
    const password = document.getElementById('password')?.value;
    
    if(username === 'admin' && password === 'admin123') {
        localStorage.setItem('adminLoggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('بيانات الدخول غير صحيحة');
    }
}

function checkAdminAuth() {
    if(!localStorage.getItem('adminLoggedIn') && !window.location.pathname.includes('login.html')) {
        window.location.href = 'login.html';
    }
}

function loadArticlesManager() {
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    const tbody = document.querySelector('#articlesTable tbody');
    if(tbody) {
        tbody.innerHTML = articles.map(article => `
            <tr>
                <td>${article.id}</td>
                <td>${article.title}</td>
                <td>${article.category}</td>
                <td>${article.author}</td>
                <td>
                    <button onclick="editArticle(${article.id})">✏️</button>
                    <button onclick="deleteArticle(${article.id})">🗑️</button>
                </td>
            </tr>
        `).join('');
    }
}

function deleteArticle(id) {
    let articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles = articles.filter(a => a.id !== id);
    localStorage.setItem('articles', JSON.stringify(articles));
    loadArticlesManager();
}

function editArticle(id) {
    const newTitle = prompt('العنوان الجديد:');
    if(newTitle) {
        let articles = JSON.parse(localStorage.getItem('articles')) || [];
        const article = articles.find(a => a.id === id);
        if(article) article.title = newTitle;
        localStorage.setItem('articles', JSON.stringify(articles));
        loadArticlesManager();
    }
}

function addArticle() {
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    const newId = articles.length + 1;
    articles.push({
        id: newId,
        title: 'مقال جديد',
        category: 'صحة',
        excerpt: 'هذا مقال تجريبي...',
        author: 'الكاتب',
        date: new Date().toISOString().split('T')[0],
        image: '📰'
    });
    localStorage.setItem('articles', JSON.stringify(articles));
    loadArticlesManager();
}
