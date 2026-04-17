/**
 * Utility Functions - الدوال المساعدة
 * Al-Odain Health Magazine
 */

// DOM Ready
const ready = (callback) => {
    if (document.readyState !== 'loading') callback();
    else document.addEventListener('DOMContentLoaded', callback);
};

// Local Storage Helpers
const storage = {
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    get: (key) => JSON.parse(localStorage.getItem(key)),
    remove: (key) => localStorage.removeItem(key),
    clear: () => localStorage.clear()
};

// API Simulation (for demo purposes)
const api = {
    get: async (endpoint) => {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => resolve({ success: true, data: [] }), 500);
        });
    },
    
    post: async (endpoint, data) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve({ success: true, data }), 500);
        });
    }
};

// Form Validation
const validators = {
    email: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    
    phone: (phone) => /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(phone),
    
    required: (value) => value.trim().length > 0,
    
    minLength: (value, length) => value.trim().length >= length,
    
    maxLength: (value, length) => value.trim().length <= length
};

// Debounce Function
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Throttle Function
const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Format Date
const formatDate = (date, options = {}) => {
    const d = new Date(date);
    return d.toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        ...options
    });
};

// Number Formatter
const formatNumber = (num) => {
    return new Intl.NumberFormat('ar-SA').format(num);
};

// Intersection Observer Helper
const observeElement = (element, callback, options = {}) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, ...options });
    
    observer.observe(element);
    return observer;
};

// Toast Notifications
const toast = {
    container: null,
    
    init() {
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.className = 'toast-container';
            this.container.style.cssText = `
                position: fixed;
                top: 20px;
                left: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
            `;
            document.body.appendChild(this.container);
        }
    },
    
    show(message, type = 'info', duration = 3000) {
        this.init();
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.style.cssText = `
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            animation: slideIn 0.3s ease;
        `;
        
        const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle';
        toast.innerHTML = `<i class="fas fa-${icon}"></i> ${message}`;
        
        this.container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
};

// Loading State
const loading = {
    show(element) {
        element.classList.add('loading');
        element.style.pointerEvents = 'none';
    },
    
    hide(element) {
        element.classList.remove('loading');
        element.style.pointerEvents = '';
    }
};

// Export for use in other files
window.Utils = {
    ready,
    storage,
    api,
    validators,
    debounce,
    throttle,
    formatDate,
    formatNumber,
    observeElement,
    toast,
    loading
};
