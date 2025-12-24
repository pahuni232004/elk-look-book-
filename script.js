// Palette definitions
const palettes = {
    'brand-original': { name: 'Brand Original', primary: '#1e3a8a', secondary: '#ef4444', accent: '#4d4d4d', background: '#ffffff', text: '#1e3a8a', textLight: '#4d4d4d' },
    'deep-navy': { name: 'Deep Navy', primary: '#0f172a', secondary: '#1e40af', accent: '#dc2626', background: '#f8fafc', text: '#0f172a', textLight: '#475569' },
    'electric-storm': { name: 'Electric Storm', primary: '#0ea5e9', secondary: '#f97316', accent: '#1e293b', background: '#f1f5f9', text: '#1e293b', textLight: '#64748b' },
    'midnight-audio': { name: 'Midnight Audio', primary: '#6366f1', secondary: '#ec4899', accent: '#0d0d0d', background: '#fafafa', text: '#0d0d0d', textLight: '#525252' },
    'forest-reserve': { name: 'Forest Reserve', primary: '#14532d', secondary: '#22c55e', accent: '#d97706', background: '#fef3c7', text: '#14532d', textLight: '#4d7c0f' },
    'royal-gold': { name: 'Royal Gold', primary: '#1c1917', secondary: '#ca8a04', accent: '#b91c1c', background: '#fef9c3', text: '#1c1917', textLight: '#57534e' },
    'arctic-tech': { name: 'Arctic Tech', primary: '#0c4a6e', secondary: '#06b6d4', accent: '#64748b', background: '#e0f2fe', text: '#0c4a6e', textLight: '#475569' },
    'copper-studio': { name: 'Copper Studio', primary: '#292524', secondary: '#c2410c', accent: '#78350f', background: '#fff7ed', text: '#292524', textLight: '#78716c' },
    'neon-nights': { name: 'Neon Nights', primary: '#a855f7', secondary: '#22d3ee', accent: '#18181b', background: '#fdf4ff', text: '#18181b', textLight: '#52525b' },
    'monochrome-pro': { name: 'Monochrome Pro', primary: '#09090b', secondary: '#3f3f46', accent: '#71717a', background: '#fafafa', text: '#09090b', textLight: '#52525b' },
    'sunset-sound': { name: 'Sunset Sound', primary: '#431407', secondary: '#ea580c', accent: '#fbbf24', background: '#fffbeb', text: '#431407', textLight: '#78350f' },
    'ocean-depth': { name: 'Ocean Depth', primary: '#082f49', secondary: '#0369a1', accent: '#38bdf8', background: '#f0f9ff', text: '#082f49', textLight: '#0c4a6e' },
    'crimson-noir': { name: 'Crimson Noir', primary: '#1a1a1a', secondary: '#b91c1c', accent: '#fca5a5', background: '#fef2f2', text: '#1a1a1a', textLight: '#525252' },
    'emerald-luxe': { name: 'Emerald Luxe', primary: '#064e3b', secondary: '#10b981', accent: '#d4af37', background: '#ecfdf5', text: '#064e3b', textLight: '#047857' },
    'violet-haze': { name: 'Violet Haze', primary: '#4c1d95', secondary: '#8b5cf6', accent: '#c4b5fd', background: '#f5f3ff', text: '#4c1d95', textLight: '#6d28d9' },
    'rust-industrial': { name: 'Rust Industrial', primary: '#451a03', secondary: '#d97706', accent: '#78716c', background: '#fefce8', text: '#451a03', textLight: '#713f12' },
    'ice-minimal': { name: 'Ice Minimal', primary: '#334155', secondary: '#94a3b8', accent: '#e2e8f0', background: '#f8fafc', text: '#0f172a', textLight: '#64748b' },
    'cherry-pop': { name: 'Cherry Pop', primary: '#be123c', secondary: '#fb7185', accent: '#1e1e1e', background: '#fff1f2', text: '#1e1e1e', textLight: '#881337' },
    'forest-night': { name: 'Forest Night', primary: '#1a2e1a', secondary: '#4ade80', accent: '#86efac', background: '#f0fdf4', text: '#1a2e1a', textLight: '#166534' },
    'pacific-blue': { name: 'Pacific Blue', primary: '#0c4a6e', secondary: '#0891b2', accent: '#67e8f9', background: '#ecfeff', text: '#0c4a6e', textLight: '#155e75' }
};

// Individual colors
const individualColors = {
    reds: [
        { name: 'Scarlet', hex: '#ef4444' },
        { name: 'Crimson', hex: '#dc2626' },
        { name: 'Rose', hex: '#f43f5e' },
        { name: 'Ruby', hex: '#be123c' },
        { name: 'Coral', hex: '#f97171' },
        { name: 'Cherry', hex: '#e11d48' },
        { name: 'Burgundy', hex: '#881337' },
        { name: 'Tomato', hex: '#ef4444' },
        { name: 'Vermillion', hex: '#d64541' },
        { name: 'Carmine', hex: '#960018' }
    ],
    blues: [
        { name: 'Royal Blue', hex: '#1e3a8a' },
        { name: 'Navy', hex: '#1e40af' },
        { name: 'Sky', hex: '#0ea5e9' },
        { name: 'Cobalt', hex: '#2563eb' },
        { name: 'Sapphire', hex: '#1d4ed8' },
        { name: 'Ocean', hex: '#0369a1' },
        { name: 'Azure', hex: '#0284c7' },
        { name: 'Teal', hex: '#0d9488' },
        { name: 'Cyan', hex: '#06b6d4' },
        { name: 'Indigo', hex: '#4f46e5' }
    ],
    greens: [
        { name: 'Emerald', hex: '#10b981' },
        { name: 'Forest', hex: '#14532d' },
        { name: 'Lime', hex: '#84cc16' },
        { name: 'Mint', hex: '#34d399' },
        { name: 'Sage', hex: '#6b8e6b' },
        { name: 'Olive', hex: '#6b7f3c' },
        { name: 'Jade', hex: '#00a86b' },
        { name: 'Pine', hex: '#1d4a32' },
        { name: 'Seafoam', hex: '#71d6b7' },
        { name: 'Hunter', hex: '#3f5c3c' }
    ],
    oranges: [
        { name: 'Tangerine', hex: '#f97316' },
        { name: 'Amber', hex: '#f59e0b' },
        { name: 'Burnt', hex: '#ea580c' },
        { name: 'Copper', hex: '#c2410c' },
        { name: 'Peach', hex: '#fb923c' },
        { name: 'Apricot', hex: '#fdba74' },
        { name: 'Rust', hex: '#9a3412' },
        { name: 'Bronze', hex: '#cd7f32' },
        { name: 'Marigold', hex: '#fbbf24' },
        { name: 'Pumpkin', hex: '#ff7518' }
    ],
    purples: [
        { name: 'Violet', hex: '#8b5cf6' },
        { name: 'Purple', hex: '#a855f7' },
        { name: 'Plum', hex: '#9333ea' },
        { name: 'Lavender', hex: '#c4b5fd' },
        { name: 'Orchid', hex: '#d946ef' },
        { name: 'Grape', hex: '#7c3aed' },
        { name: 'Amethyst', hex: '#9966cc' },
        { name: 'Mauve', hex: '#c084fc' },
        { name: 'Fuchsia', hex: '#d946ef' },
        { name: 'Mulberry', hex: '#c54b8c' }
    ],
    pinks: [
        { name: 'Hot Pink', hex: '#ec4899' },
        { name: 'Blush', hex: '#fda4af' },
        { name: 'Rose', hex: '#fb7185' },
        { name: 'Magenta', hex: '#db2777' },
        { name: 'Salmon', hex: '#fca5a5' },
        { name: 'Flamingo', hex: '#f472b6' },
        { name: 'Bubblegum', hex: '#f9a8d4' },
        { name: 'Carnation', hex: '#ffa6c9' },
        { name: 'Cerise', hex: '#de3163' },
        { name: 'Dusty Rose', hex: '#dcae96' }
    ],
    yellows: [
        { name: 'Gold', hex: '#ca8a04' },
        { name: 'Sunflower', hex: '#facc15' },
        { name: 'Lemon', hex: '#fde047' },
        { name: 'Canary', hex: '#fef08a' },
        { name: 'Mustard', hex: '#ca8a04' },
        { name: 'Honey', hex: '#fbbf24' },
        { name: 'Butter', hex: '#fef3c7' },
        { name: 'Saffron', hex: '#f4c430' },
        { name: 'Citrine', hex: '#e4d00a' },
        { name: 'Champagne', hex: '#f7e7ce' }
    ],
    neutrals: [
        { name: 'Charcoal', hex: '#1f1f1f' },
        { name: 'Slate', hex: '#475569' },
        { name: 'Graphite', hex: '#374151' },
        { name: 'Steel', hex: '#64748b' },
        { name: 'Silver', hex: '#94a3b8' },
        { name: 'Ash', hex: '#a1a1aa' },
        { name: 'Stone', hex: '#78716c' },
        { name: 'Taupe', hex: '#87826e' },
        { name: 'Ivory', hex: '#fffff0' },
        { name: 'Cream', hex: '#fffdd0' }
    ]
};

// Font pairings
const pairings = {
    'unbounded-dm': { heading: 'Unbounded', body: 'DM Sans' },
    'bebas-outfit': { heading: 'Bebas Neue', body: 'Outfit' },
    'syne-jakarta': { heading: 'Syne', body: 'Plus Jakarta Sans' },
    'playfair-source': { heading: 'Playfair Display', body: 'Source Sans 3' },
    'oswald-urbanist': { heading: 'Oswald', body: 'Urbanist' },
    'bricolage-work': { heading: 'Bricolage Grotesque', body: 'Work Sans' },
    'archivo-instrument': { heading: 'Archivo Black', body: 'Instrument Sans' },
    'cinzel-libre': { heading: 'Cinzel', body: 'Libre Baskerville' },
    'abril-lato': { heading: 'Abril Fatface', body: 'Lato' },
    'fjalla-rubik': { heading: 'Fjalla One', body: 'Rubik' },
    'space-mono': { heading: 'Space Mono', body: 'Space Mono' },
    'darker-poppins': { heading: 'Darker Grotesque', body: 'Poppins' }
};

// State
let currentPalette = 'brand-original';
let currentHeading = 'Unbounded';
let currentBody = 'DM Sans';
let isDarkMode = false;
let customColors = [];
let currentHue = 0;
let currentSaturation = 100;
let currentLightness = 50;
let selectedIndividualColors = {primary: null, secondary: null, accent: null};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateMockup();
    showSelectionSummary();
    initColorWheel();
    initTabs();

    // Palette selection
    document.querySelectorAll('.palette-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.palette-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            currentPalette = card.dataset.palette;
            document.getElementById('selected-palette').textContent = palettes[currentPalette].name;
            updateMockup();
        });
    });

    // Heading font selection
    document.querySelectorAll('.font-card[data-heading]').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.font-card[data-heading]').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            currentHeading = card.dataset.heading;
            document.getElementById('selected-heading').textContent = currentHeading;
            updateMockup();
        });
    });

    // Body font selection
    document.querySelectorAll('.font-card[data-body]').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.font-card[data-body]').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            currentBody = card.dataset.body;
            document.getElementById('selected-body').textContent = currentBody;
            updateMockup();
        });
    });

    // Pairing selection
    document.querySelectorAll('.pairing-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.pairing-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            const pairing = pairings[card.dataset.pairing];
            currentHeading = pairing.heading;
            currentBody = pairing.body;
            document.getElementById('selected-heading').textContent = currentHeading;
            document.getElementById('selected-body').textContent = currentBody;
            
            document.querySelectorAll('.font-card[data-heading]').forEach(c => {
                c.classList.toggle('selected', c.dataset.heading === currentHeading);
            });
            document.querySelectorAll('.font-card[data-body]').forEach(c => {
                c.classList.toggle('selected', c.dataset.body === currentBody);
            });
            
            updateMockup();
        });
    });

    // Theme toggle
    document.querySelectorAll('.preview-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.preview-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            isDarkMode = btn.dataset.theme === 'dark';
            updateMockup();
        });
    });

    // Individual color selection
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('click', () => {
            const role = document.querySelector('input[name="color-role"]:checked')?.value || 'primary';
            selectedIndividualColors[role] = swatch.dataset.hex;
            
            document.querySelectorAll(`.color-swatch[data-role="${role}"]`).forEach(s => s.classList.remove('selected'));
            swatch.classList.add('selected');
            swatch.dataset.role = role;
        });
    });

    // Smooth scroll
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});

function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const group = btn.closest('.tabs');
            const content = btn.closest('section').querySelectorAll('.tab-content');
            
            group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            content.forEach(c => {
                c.style.display = c.dataset.tab === btn.dataset.tab ? 'block' : 'none';
            });
        });
    });
}

function initColorWheel() {
    const wheel = document.getElementById('color-wheel');
    const picker = document.getElementById('wheel-picker');
    const satSlider = document.getElementById('saturation-slider');
    const lightSlider = document.getElementById('lightness-slider');
    
    if (!wheel) return;

    function updateFromWheel(e) {
        const rect = wheel.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const x = e.clientX - rect.left - centerX;
        const y = e.clientY - rect.top - centerY;
        
        currentHue = Math.round((Math.atan2(y, x) * 180 / Math.PI + 180));
        
        const dist = Math.min(Math.sqrt(x*x + y*y), centerX);
        currentSaturation = Math.round((dist / centerX) * 100);
        
        updateColorPreview();
        updatePickerPosition(e.clientX - rect.left, e.clientY - rect.top);
    }

    function updatePickerPosition(x, y) {
        picker.style.left = x + 'px';
        picker.style.top = y + 'px';
    }

    let isDragging = false;
    wheel.addEventListener('mousedown', (e) => { isDragging = true; updateFromWheel(e); });
    wheel.addEventListener('mousemove', (e) => { if (isDragging) updateFromWheel(e); });
    document.addEventListener('mouseup', () => { isDragging = false; });

    if (satSlider) {
        satSlider.addEventListener('input', (e) => {
            currentSaturation = e.target.value;
            updateColorPreview();
        });
    }

    if (lightSlider) {
        lightSlider.addEventListener('input', (e) => {
            currentLightness = e.target.value;
            updateColorPreview();
        });
    }

    updateColorPreview();
}

function updateColorPreview() {
    const preview = document.getElementById('preview-swatch');
    const hexValue = document.getElementById('hex-value');
    const hslValue = document.getElementById('hsl-value');
    const rgbValue = document.getElementById('rgb-value');
    
    const hsl = `hsl(${currentHue}, ${currentSaturation}%, ${currentLightness}%)`;
    const hex = hslToHex(currentHue, currentSaturation, currentLightness);
    const rgb = hslToRgb(currentHue, currentSaturation, currentLightness);
    
    if (preview) {
        preview.style.background = hsl;
        preview.textContent = hex;
        preview.style.color = currentLightness > 50 ? '#000' : '#fff';
    }
    if (hexValue) hexValue.textContent = hex;
    if (hslValue) hslValue.textContent = `${currentHue}°, ${currentSaturation}%, ${currentLightness}%`;
    if (rgbValue) rgbValue.textContent = rgb;

    // Update slider backgrounds
    const satSlider = document.getElementById('saturation-slider');
    const lightSlider = document.getElementById('lightness-slider');
    if (satSlider) satSlider.style.background = `linear-gradient(to right, hsl(${currentHue}, 0%, ${currentLightness}%), hsl(${currentHue}, 100%, ${currentLightness}%))`;
    if (lightSlider) lightSlider.style.background = `linear-gradient(to right, hsl(${currentHue}, ${currentSaturation}%, 0%), hsl(${currentHue}, ${currentSaturation}%, 50%), hsl(${currentHue}, ${currentSaturation}%, 100%))`;
}

function hslToHex(h, s, l) {
    s /= 100; l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function hslToRgb(h, s, l) {
    s /= 100; l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = n => {
        const k = (n + h / 30) % 12;
        return Math.round(255 * (l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)));
    };
    return `${f(0)}, ${f(8)}, ${f(4)}`;
}

function addCustomColor() {
    const hex = hslToHex(currentHue, currentSaturation, currentLightness);
    if (!customColors.includes(hex)) {
        customColors.push(hex);
        renderCustomColors();
    }
}

function renderCustomColors() {
    const list = document.getElementById('custom-colors-list');
    if (!list) return;
    
    list.innerHTML = customColors.map((hex, i) => 
        `<div class="selected-color-item" style="background: ${hex}" onclick="removeCustomColor(${i})" title="${hex}"></div>`
    ).join('');
}

function removeCustomColor(index) {
    customColors.splice(index, 1);
    renderCustomColors();
}

function updateMockup() {
    const mockup = document.getElementById('mockup');
    if (!mockup) return;
    
    const palette = palettes[currentPalette];

    if (isDarkMode) {
        mockup.style.background = palette.primary;
        mockup.style.color = '#ffffff';
        mockup.querySelector('.mockup-nav').style.background = 'rgba(0,0,0,0.3)';
        mockup.querySelector('.mockup-nav').style.borderColor = 'rgba(255,255,255,0.1)';
        mockup.querySelector('.mockup-logo').style.color = '#ffffff';
        mockup.querySelector('.mockup-hero p').style.color = 'rgba(255,255,255,0.7)';
        mockup.querySelector('.mockup-btn').style.background = palette.secondary;
        mockup.querySelector('.mockup-btn').style.color = '#ffffff';
        mockup.querySelectorAll('.mockup-feature-icon').forEach(icon => {
            icon.style.background = palette.secondary;
        });
        mockup.querySelectorAll('.mockup-feature p').forEach(p => {
            p.style.color = 'rgba(255,255,255,0.6)';
        });
    } else {
        mockup.style.background = palette.background;
        mockup.style.color = palette.text;
        mockup.querySelector('.mockup-nav').style.background = 'transparent';
        mockup.querySelector('.mockup-nav').style.borderColor = 'rgba(0,0,0,0.1)';
        mockup.querySelector('.mockup-logo').style.color = palette.primary;
        mockup.querySelector('.mockup-hero p').style.color = palette.textLight;
        mockup.querySelector('.mockup-btn').style.background = palette.primary;
        mockup.querySelector('.mockup-btn').style.color = '#ffffff';
        mockup.querySelectorAll('.mockup-feature-icon').forEach(icon => {
            icon.style.background = `${palette.secondary}20`;
        });
        mockup.querySelectorAll('.mockup-feature p').forEach(p => {
            p.style.color = palette.textLight;
        });
    }

    mockup.querySelector('.mockup-logo').style.fontFamily = `'${currentHeading}', sans-serif`;
    mockup.querySelector('.mockup-hero h1').style.fontFamily = `'${currentHeading}', sans-serif`;
    mockup.querySelectorAll('.mockup-feature h3').forEach(h3 => {
        h3.style.fontFamily = `'${currentHeading}', sans-serif`;
    });
    
    mockup.querySelector('.mockup-hero p').style.fontFamily = `'${currentBody}', sans-serif`;
    mockup.querySelectorAll('.mockup-menu span').forEach(span => {
        span.style.fontFamily = `'${currentBody}', sans-serif`;
    });
    mockup.querySelector('.mockup-btn').style.fontFamily = `'${currentBody}', sans-serif`;
    mockup.querySelectorAll('.mockup-feature p').forEach(p => {
        p.style.fontFamily = `'${currentBody}', sans-serif`;
    });
}

function showSelectionSummary() {
    setTimeout(() => {
        document.getElementById('selection-summary')?.classList.add('visible');
    }, 1500);
}

function exportSelection() {
    const palette = palettes[currentPalette];
    const selection = {
        palette: {
            name: palette.name,
            colors: {
                primary: palette.primary,
                secondary: palette.secondary,
                accent: palette.accent,
                background: palette.background,
                text: palette.text
            }
        },
        typography: { heading: currentHeading, body: currentBody },
        customColors: customColors,
        individualSelections: selectedIndividualColors,
        exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(selection, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `elk-audios-brand-selection-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert(`Selection exported!\n\nPalette: ${palette.name}\nHeading: ${currentHeading}\nBody: ${currentBody}\nCustom Colors: ${customColors.length}`);
}

