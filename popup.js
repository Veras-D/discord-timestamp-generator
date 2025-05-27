class DiscordTimestamp {
    constructor() {
        this.elements = this.initializeElements();
        this.setupEventListeners();
        this.initializeTheme();
        this.setCurrentTime();
        this.updateTimestamp();
    }

    initializeElements() {
        return {
            dateInput: document.getElementById('date'),
            timeInput: document.getElementById('time'),
            typeSelect: document.getElementById('type'),
            outputField: document.getElementById('output'),
            previewDiv: document.getElementById('preview'),
            copyBtn: document.getElementById('copy-btn'),
            currentTimeBtn: document.getElementById('current-time-btn'),
            themeToggle: document.getElementById('theme-toggle')
        };
    }

    setupEventListeners() {
        this.elements.dateInput.addEventListener('change', () => this.updateTimestamp());
        this.elements.timeInput.addEventListener('change', () => this.updateTimestamp());
        this.elements.typeSelect.addEventListener('change', () => this.updateTimestamp());
        this.elements.copyBtn.addEventListener('click', () => this.copyToClipboard());
        this.elements.currentTimeBtn.addEventListener('click', () => this.setCurrentTime());
        this.elements.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    initializeTheme() {
        const savedTheme = localStorage.getItem('discord-timestamp-theme') || 'light';
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }

    toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('discord-timestamp-theme', theme);
    }

    setCurrentTime() {
        const now = new Date();
        const date = now.toISOString().split('T')[0];
        const time = now.toTimeString().split(' ')[0].substring(0, 5);

        this.elements.dateInput.value = date;
        this.elements.timeInput.value = time;
        this.updateTimestamp();
    }

    updateTimestamp() {
        const dateValue = this.elements.dateInput.value;
        const timeValue = this.elements.timeInput.value;

        if (!dateValue || !timeValue) {
            this.elements.outputField.value = '';
            this.elements.previewDiv.textContent = '';
            return;
        }

        const dateTime = new Date(`${dateValue}T${timeValue}`);
        const timestamp = Math.floor(dateTime.getTime() / 1000);
        const format = this.elements.typeSelect.value;

        const discordCode = `<t:${timestamp}:${format}>`;
        this.elements.outputField.value = discordCode;

        this.updatePreview(dateTime, format);
    }

    updatePreview(dateTime, format) {
        const formatOptions = {
            't': { timeStyle: 'short' },
            'T': { timeStyle: 'medium' },
            'd': { dateStyle: 'short' },
            'D': { dateStyle: 'long' },
            'f': { dateStyle: 'long', timeStyle: 'short' },
            'F': { dateStyle: 'full', timeStyle: 'short' },
            'R': null
        };

        let preview;

        if (format === 'R') {
            preview = this.getRelativeTime(dateTime);
        } else {
            const options = formatOptions[format];
            preview = dateTime.toLocaleString('en-US', options);
        }

        this.elements.previewDiv.textContent = preview;
    }

    getRelativeTime(date) {
        const now = new Date();
        const diffMs = date.getTime() - now.getTime();
        const diffSec = Math.round(diffMs / 1000);
        const diffMin = Math.round(diffSec / 60);
        const diffHour = Math.round(diffMin / 60);
        const diffDay = Math.round(diffHour / 24);
        const diffMonth = Math.round(diffDay / 30);
        const diffYear = Math.round(diffMonth / 12);

        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

        if (Math.abs(diffSec) < 60) {
            return rtf.format(diffSec, 'second');
        } else if (Math.abs(diffMin) < 60) {
            return rtf.format(diffMin, 'minute');
        } else if (Math.abs(diffHour) < 24) {
            return rtf.format(diffHour, 'hour');
        } else if (Math.abs(diffDay) < 30) {
            return rtf.format(diffDay, 'day');
        } else if (Math.abs(diffMonth) < 12) {
            return rtf.format(diffMonth, 'month');
        } else {
            return rtf.format(diffYear, 'year');
        }
    }

    async copyToClipboard() {
        const text = this.elements.outputField.value;

        if (!text) return;

        try {
            await navigator.clipboard.writeText(text);
            this.showCopyFeedback();
        } catch (err) {
            this.fallbackCopy(text);
        }
    }

    fallbackCopy(text) {
        this.elements.outputField.select();
        this.elements.outputField.setSelectionRange(0, 99999);

        try {
            document.execCommand('copy');
            this.showCopyFeedback();
        } catch (err) {
            console.error('Copy failed:', err);
        }
    }

    showCopyFeedback() {
        this.elements.copyBtn.classList.add('copied');
        setTimeout(() => {
            this.elements.copyBtn.classList.remove('copied');
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DiscordTimestamp();
});