'use client';

import { useEffect } from 'react';

export default function DevToolsBlocker() {
  useEffect(() => {
    // DevTools blocker - only block F12 and related shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only block DevTools related shortcuts
      // Block F12
      if (e.key === 'F12') {
        e.preventDefault();
        e.stopPropagation();
        showWarning('Không được phép mở Developer Tools!');
        return false;
      }

      // Block Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        e.stopPropagation();
        showWarning('Không được phép mở Developer Tools!');
        return false;
      }

      // Block Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        e.stopPropagation();
        showWarning('Không được phép mở Console!');
        return false;
      }

      // Block Ctrl+Shift+C (Element Inspector)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        e.stopPropagation();
        showWarning('Không được phép mở Element Inspector!');
        return false;
      }

      // Block Ctrl+Shift+K (Console in Firefox)
      if (e.ctrlKey && e.shiftKey && e.key === 'K') {
        e.preventDefault();
        e.stopPropagation();
        showWarning('Không được phép mở Console!');
        return false;
      }

      // Block Alt+Shift+I (DevTools in some browsers)
      if (e.altKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        e.stopPropagation();
        showWarning('Không được phép mở Developer Tools!');
        return false;
      }
    };

    // Show warning function
    const showWarning = (message: string) => {
      // Remove existing warning
      const existingWarning = document.getElementById('devtools-warning');
      if (existingWarning) {
        existingWarning.remove();
      }

      // Create warning element
      const warning = document.createElement('div');
      warning.id = 'devtools-warning';
      warning.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #ff6b6b, #ee5a24);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
        z-index: 999999;
        font-family: Arial, sans-serif;
        font-size: 14px;
        font-weight: bold;
        max-width: 300px;
        animation: slideIn 0.3s ease;
      `;

      warning.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 20px;">⚠️</span>
          <span>${message}</span>
        </div>
      `;

      // Add animation
      const style = document.createElement('style');
      style.textContent = `
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `;
      document.head.appendChild(style);

      document.body.appendChild(warning);

      // Auto remove after 3 seconds
      setTimeout(() => {
        if (warning.parentNode) {
          warning.style.animation = 'slideIn 0.3s ease reverse';
          setTimeout(() => {
            warning.remove();
          }, 300);
        }
      }, 3000);
    };

    // Add event listeners - only for DevTools shortcuts
    document.addEventListener('keydown', handleKeyDown, true);

    // Only block console when DevTools is detected

    // Detect DevTools opening - only show warning
    let devtools = { open: false };
    const threshold = 160;

    const checkDevTools = () => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          devtools.open = true;
          showWarning('Phát hiện Developer Tools đang mở! Vui lòng đóng lại.');
        }
      } else {
        devtools.open = false;
      }
    };

    const interval = setInterval(checkDevTools, 1000);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      clearInterval(interval);
    };
  }, []);

  return null; // This component doesn't render anything
}
