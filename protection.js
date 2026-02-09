// 🔒 МАКСИМАЛЬНАЯ ЗАЩИТА ОТ ПРОСМОТРА КОДА
(function() {
    'use strict';
    
    // ==========================================
    // 1. БЛОКИРОВКА DEVTOOLS (F12, Ctrl+Shift+I)
    // ==========================================
    
    // Блокировка горячих клавиш
    document.addEventListener('keydown', function(e) {
        // F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            e.stopPropagation();
            showWarning();
            return false;
        }
        
        // Ctrl+Shift+I (Инспектор)
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.keyCode === 73)) {
            e.preventDefault();
            e.stopPropagation();
            showWarning();
            return false;
        }
        /*
        // Ctrl+Shift+J (Консоль)
        if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.keyCode === 74)) {
            e.preventDefault();
            e.stopPropagation();
            showWarning();
            return false;
        }
        
        // Ctrl+Shift+C (Выбор элемента)
        if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.keyCode === 67)) {
            e.preventDefault();
            e.stopPropagation();
            showWarning();
            return false;
        }
        */
        // Ctrl+U (Просмотр исходного кода)
        if (e.ctrlKey && (e.key === 'U' || e.keyCode === 85)) {
            e.preventDefault();
            e.stopPropagation();
            showWarning();
            return false;
        }
        /*
        // Ctrl+S (Сохранить страницу)
        if (e.ctrlKey && (e.key === 'S' || e.keyCode === 83)) {
            e.preventDefault();
            e.stopPropagation();
            showWarning();
            return false;
        }
        
        // Ctrl+P (Печать - можно увидеть код)
        if (e.ctrlKey && (e.key === 'P' || e.keyCode === 80)) {
            e.preventDefault();
            e.stopPropagation();
            showWarning();
            return false;
        }
        
        // Ctrl+Shift+K (Консоль в Firefox)
        if (e.ctrlKey && e.shiftKey && (e.key === 'K' || e.keyCode === 75)) {
            e.preventDefault();
            e.stopPropagation();
            showWarning();
            return false;
        }
        
        // F1-F11 дополнительно
        if (e.keyCode >= 112 && e.keyCode <= 123) {
            if (e.keyCode !== 116) { // Кроме F5 (обновить)
                e.preventDefault();
                showWarning();
                return false;
            }
        }
    }, true); // true = capture phase
    
    // ==========================================
    // 2. БЛОКИРОВКА КОНТЕКСТНОГО МЕНЮ
    // ==========================================
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        e.stopPropagation();
        showWarning();
        return false;
    }, true);
    
    // ==========================================
    // 3. БЛОКИРОВКА ВЫДЕЛЕНИЯ ТЕКСТА
    // ==========================================
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    document.addEventListener('mousedown', function(e) {
        if (e.detail > 1) { // Двойной/тройной клик
            e.preventDefault();
            return false;
        }
    });
    
    // ==========================================
    // 4. ДЕТЕКТ DEVTOOLS (проверка размера окна)
    // ==========================================
    let devtoolsOpen = false;
    const threshold = 160;
    
    const detectDevTools = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        if (widthThreshold || heightThreshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                handleDevToolsOpen();
            }
        } else {
            devtoolsOpen = false;
        }
    };
    
    // Проверка каждые 500ms
    setInterval(detectDevTools, 500);
    
    // ==========================================
    // 5. БЛОКИРОВКА ЧЕРЕЗ DEBUGGER
    // ==========================================
    const antiDebugger = () => {
        const before = new Date();
        debugger;
        const after = new Date();
        const diff = after - before;
        
        if (diff > 100) { // DevTools открыты
            handleDevToolsOpen();
        }
    };
    
    // Запускаем анти-отладку каждые 2 секунды
    setInterval(antiDebugger, 2000);
    
    // ==========================================
    // 6. ДЕТЕКТ ЧЕРЕЗ CONSOLE
    // ==========================================
    const consoleDetect = () => {
        const element = new Image();
        Object.defineProperty(element, 'id', {
            get: function() {
                handleDevToolsOpen();
                throw new Error('DevTools detected');
            }
        });
        console.log(element);
    };
    
    try {
        setInterval(consoleDetect, 3000);
    } catch(e) {}
    
    // ==========================================
    // 7. БЛОКИРОВКА ПЕРЕТАСКИВАНИЯ
    // ==========================================
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    // ==========================================
    // 8. ЗАЩИТА ОТ КОПИРОВАНИЯ
    // ==========================================
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        showWarning();
        return false;
    });
    
    document.addEventListener('cut', function(e) {
        e.preventDefault();
        return false;
    });
    
    // ==========================================
    // 9. ПЕРЕОПРЕДЕЛЕНИЕ CONSOLE
    // ==========================================
    if (window.console) {
        const methods = ['log', 'debug', 'info', 'warn', 'error', 'dir', 'dirxml', 
                        'table', 'trace', 'assert', 'count', 'clear', 'profile', 
                        'profileEnd', 'time', 'timeEnd', 'timeStamp', 'group', 
                        'groupCollapsed', 'groupEnd'];
        
        methods.forEach(method => {
            if (console[method]) {
                console[method] = function() {};
            }
        });
    }
    
    // ==========================================
    // 10. ЗАЩИТА ОТ toString()
    // ==========================================
    Object.defineProperty(Function.prototype, 'toString', {
        value: function() {
            return 'function () { [native code] }';
        },
        writable: false,
        configurable: false
    });
    
    // ==========================================
    // ОБРАБОТЧИКИ НАРУШЕНИЙ
    // ==========================================
    function showWarning() {
        const warning = document.createElement('div');
        warning.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #dc3545;
            color: white;
            padding: 30px 50px;
            border-radius: 10px;
            font-size: 18px;
            font-weight: bold;
            z-index: 999999;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            text-align: center;
        `;
        warning.innerHTML = '⚠️ Попытка просмотра кода запрещена!<br>Это нарушение правил тестирования.';
        document.body.appendChild(warning);
        
        setTimeout(() => {
            warning.remove();
        }, 3000);
    }
    
    function handleDevToolsOpen() {
        // Вариант 1: Редирект
        // window.location.href = 'index.html';
        
        // Вариант 2: Показать предупреждение
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.95);
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        overlay.innerHTML = `
            <div style="text-align: center; color: white;">
                <h1 style="font-size: 48px; margin-bottom: 20px;">⚠️</h1>
                <h2 style="font-size: 32px; margin-bottom: 20px;">Доступ запрещен!</h2>
                <p style="font-size: 18px; margin-bottom: 30px;">Обнаружена попытка открытия инструментов разработчика.<br>Это является нарушением правил тестирования.</p>
                <button onclick="window.location.reload()" style="
                    background: #dc3545;
                    color: white;
                    border: none;
                    padding: 15px 40px;
                    font-size: 16px;
                    border-radius: 5px;
                    cursor: pointer;
                ">Закрыть DevTools и обновить страницу</button>
            </div>
        `;
        document.body.appendChild(overlay);
    }
    
    // ==========================================
    // ДОПОЛНИТЕЛЬНАЯ ЗАЩИТА ПРИ ЗАГРУЗКЕ
    // ==========================================
    window.addEventListener('load', function() {
        // Блокируем через CSS
        const style = document.createElement('style');
        style.textContent = `
            * {
                -webkit-user-select: none !important;
                -moz-user-select: none !important;
                -ms-user-select: none !important;
                user-select: none !important;
            }
            input, textarea {
                -webkit-user-select: text !important;
                -moz-user-select: text !important;
                -ms-user-select: text !important;
                user-select: text !important;
            }
        `;
        document.head.appendChild(style);
    });
    
    // Блокировка через iframe
    if (window.top !== window.self) {
        window.top.location = window.self.location;
    }
    
    // Защита от изменения HTML
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(node => {
                    if (node.tagName === 'SCRIPT' || node.tagName === 'IFRAME') {
                        if (!node.src || !node.src.includes(window.location.hostname)) {
                            node.remove();
                        }
                    }
                });
            }
        });
    });
    
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
    */
    
    console.log('%c🔒 ЗАЩИТА АКТИВИРОВАНА', 'color: red; font-size: 20px; font-weight: bold;');
    console.log('%cПопытка просмотра кода = нарушение правил тестирования!', 'color: orange; font-size: 14px;');
    
})();
