/**
 * MYNTRA CLONE - Main JavaScript
 * Version: 2.0 (Optimized & Modular)
 * ------------------------------------------
 * Modules:
 *  1. Page Loader
 *  2. Wishlist Toggle
 *  3. Quantity Controls
 *  4. Thumbnail Image Switcher
 *  5. Search Filter
 *  6. Size Selector
 *  7. Scroll Fade Animation
 *  8. Toast Notifications
 */

/* ============================
   1. PAGE LOADER
============================ */
/**
 * Hides the loader overlay and reveals the main content
 * after a short delay to allow assets to settle.
 */
document.addEventListener('DOMContentLoaded', function () {

    // Delay 1.8 s then show main content
    setTimeout(function () {
        const loader = document.getElementById('loader');
        const main   = document.getElementById('main-content');

        if (loader) {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.4s ease';
            setTimeout(() => { loader.style.display = 'none'; }, 400);
        }

        if (main) {
            main.style.display = 'block';
            main.style.opacity = '0';
            main.style.transition = 'opacity 0.4s ease';
            setTimeout(() => { main.style.opacity = '1'; }, 50);
        }
    }, 1800);

    /* ============================
       2. WISHLIST TOGGLE
    ============================ */
    /**
     * Delegates click events for all `.wish-btn` elements.
     * Toggles active class and changes icon between heart
     * outline and filled.
     */
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.wish-btn');
        if (!btn) return;

        btn.classList.toggle('active');
        const icon = btn.querySelector('i');

        if (btn.classList.contains('active')) {
            icon.classList.replace('bi-heart', 'bi-heart-fill');
            showToast('Added to Wishlist ❤️', 'success');
        } else {
            icon.classList.replace('bi-heart-fill', 'bi-heart');
            showToast('Removed from Wishlist', 'info');
        }
    });

    /* ============================
       3. QUANTITY CONTROLS
    ============================ */
    /**
     * Handles + / - quantity buttons.
     * Prevents value going below 1.
     */
    document.addEventListener('click', function (e) {

        // Decrease
        if (e.target.matches('.qty-decrease')) {
            const input = e.target.closest('.quantity-box').querySelector('input');
            const val   = parseInt(input.value, 10);
            if (val > 1) input.value = val - 1;
        }

        // Increase
        if (e.target.matches('.qty-increase')) {
            const input = e.target.closest('.quantity-box').querySelector('input');
            const val   = parseInt(input.value, 10);
            if (val < 99) input.value = val + 1;
        }
    });

    /* ============================
       4. SIZE SELECTOR
    ============================ */
    /**
     * Highlights selected size button and removes
     * selection from siblings.
     */
    document.querySelectorAll('.size-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const siblings = this.closest('.size-group').querySelectorAll('.size-btn');
            siblings.forEach(s => s.classList.remove('selected', 'btn-danger', 'text-white'));
            this.classList.add('selected', 'btn-danger', 'text-white');
        });
    });

    /* ============================
       5. SEARCH FILTER (Product Grid)
    ============================ */
    /**
     * Live-filters product cards in the grid based on
     * the brand / product name text content.
     */
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase().trim();
            document.querySelectorAll('.product-card-wrapper').forEach(function (wrapper) {
                const text = wrapper.textContent.toLowerCase();
                wrapper.style.display = text.includes(query) ? '' : 'none';
            });
        });
    }

    /* ============================
       6. THUMBNAIL IMAGE SWITCHER
    ============================ */
    /**
     * Switches the main product image when a thumbnail
     * is clicked. Adds an active border to selected thumb.
     */
    document.querySelectorAll('.thumbnail-img').forEach(function (thumb) {
        thumb.addEventListener('click', function () {
            const mainImg = document.getElementById('mainImage');
            if (mainImg) {
                mainImg.src = this.src;
                // Update active state
                document.querySelectorAll('.thumbnail-img').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    /* ============================
       7. SCROLL FADE-IN ANIMATION
    ============================ */
    /**
     * Uses IntersectionObserver to add `.visible` class
     * to elements with `.fade-in-up` once they enter the viewport.
     */
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    /* ============================
       8. COUPON CODE (Cart Page)
    ============================ */
    const couponBtn = document.getElementById('applyCoupon');
    if (couponBtn) {
        couponBtn.addEventListener('click', function () {
            const code = document.getElementById('couponInput')?.value.trim().toUpperCase();
            if (code === 'SAVE10') {
                showToast('Coupon SAVE10 applied! ₹200 off 🎉', 'success');
            } else if (code === '') {
                showToast('Please enter a coupon code.', 'warning');
            } else {
                showToast('Invalid coupon code.', 'danger');
            }
        });
    }

});  /* END DOMContentLoaded */


/* ============================
   UTILITY: Toast Notification
============================ */
/**
 * Shows a temporary Bootstrap-style toast message.
 * @param {string} message - The message to display.
 * @param {string} type    - Bootstrap color variant (success|danger|info|warning).
 */
function showToast(message, type = 'success') {
    // Create container if not present
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px;';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `alert alert-${type} shadow-lg mb-0 py-2 px-3`;
    toast.style.cssText = 'min-width:220px;font-size:14px;font-weight:500;border-radius:8px;animation:slideIn .3s ease;';
    toast.textContent = message;
    container.appendChild(toast);

    // Auto remove after 2.5 s
    setTimeout(function () {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}