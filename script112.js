    // App State
        let currentLang = 'ar';
        let currentCategory = 'all';
        let activeModalItemId = null;
        let modalQuantity = 1;
        let cart = [];
        let selectedOrderType = null; // 'dinein' or 'takeaway'
        let currentOrderCode = '';
        let lastReceiptData = null;

        // Dictionary
        const i18n = {
            ar: {
                tagline: "مطعم ومقهى فاخر",
                cartTitle: "الطلبات",
                heroBadge: "✨ تجربة طعام لا تُنسى",
                heroTitle: "استمتع بأرقى النكهات العالمية والمحلية",
                heroDesc: "نقدم لكم مجموعة ممتازة من الأطباق المحضرة بأعلى معايير الجودة وعلى أيدي أفضل الطهاة.",
                searchPlaceholder: "ابحث عن طبقك المفضل...",
                noResults: "لم يتم العثور على أطباق",
                noResultsDesc: "جرب البحث بكلمات أخرى أو اختر قسماً آخر",
                ingredientsTitle: "المكونات الرئيسية",
                allergensTitle: "معلومات الحساسية",
                addToCart: "إضافة للطلب",
                subtotal: "المجموع الفرعي",
                tax: "الضريبة والخدمة (14%)",
                total: "الإجمالي النهائي",
                checkout: "تأكيد الطلب",
                emptyCart: "سلة الطلبات فارغة حالياً",
                addedToast: "تمت إضافة العنصر لطلبك بنجاح!",
                checkoutToast: "شكراً لطلبك! سيتم تجهيزه الآن.",
                // New keys
                checkoutDetailsTitle: "تفاصيل الطلب",
                orderTypeLabel: "نوع الطلب",
                dineIn: "طلب صالة",
                takeaway: "تيك أواي",
                customerNameLabel: "الاسم",
                customerPhoneLabel: "رقم التواصل",
                namePlaceholder: "أدخل اسمك الكامل",
                phonePlaceholder: "01xxxxxxxxx",
                generateReceiptBtn: "إنشاء الإيصال",
                orderCodeLabel: "كود الطلب",
                receiptName: "الاسم:",
                receiptPhone: "الهاتف:",
                receiptType: "نوع الطلب:",
                receiptDate: "التاريخ:",
                receiptItems: "الأصناف",
                receiptThankYou: "شكراً لزيارتكم FIKRA\nنتمنى لكم تجربة رائعة",
                receiptTagline: "مطعم ومقهى فاخر",
                copyReceipt: "نسخ الإيصال",
                doneBtn: "تم",
                copySuccess: "تم نسخ الإيصال بنجاح!",
                fillAllFields: "يرجى اختيار نوع الطلب وإدخال الاسم ورقم الهاتف",
                qtyLabel: "الكمية"
            },
            en: {
                tagline: "Gourmet Restaurant & Lounge",
                cartTitle: "Orders",
                heroBadge: "✨ Unforgettable Culinary Experience",
                heroTitle: "Savor the Finest Local & Global Flavors",
                heroDesc: "Exquisite culinary creations crafted with raw precision, premium ingredients, and master craftsmanship.",
                searchPlaceholder: "Search for your favorite dish...",
                noResults: "No dishes found",
                noResultsDesc: "Try searching for something else or pick a different category",
                ingredientsTitle: "Key Ingredients",
                allergensTitle: "Allergen Information",
                addToCart: "Add to Order",
                subtotal: "Subtotal",
                tax: "Tax & Service (14%)",
                total: "Grand Total",
                checkout: "Confirm Order",
                emptyCart: "Your order list is currently empty",
                addedToast: "Item added to your order successfully!",
                checkoutToast: "Thank you! Your order has been placed.",
                // New keys
                checkoutDetailsTitle: "Order Details",
                orderTypeLabel: "Order Type",
                dineIn: "Dine-in",
                takeaway: "Takeaway",
                customerNameLabel: "Full Name",
                customerPhoneLabel: "Phone Number",
                namePlaceholder: "Enter your full name",
                phonePlaceholder: "01xxxxxxxxx",
                generateReceiptBtn: "Generate Receipt",
                orderCodeLabel: "Order Code",
                receiptName: "Name:",
                receiptPhone: "Phone:",
                receiptType: "Order Type:",
                receiptDate: "Date:",
                receiptItems: "Items",
                receiptThankYou: "Thank you for dining at FIKRA\nWe hope you had a wonderful experience",
                receiptTagline: "Gourmet Restaurant & Lounge",
                copyReceipt: "Copy Receipt",
                doneBtn: "Done",
                copySuccess: "Receipt copied successfully!",
                fillAllFields: "Please select order type and enter name & phone number",
                qtyLabel: "Qty"
            }
        };

        // Categories Data
        const categories = [
            { id: 'all', ar: 'الكل', en: 'All' },
            { id: 'starters', ar: 'المقبلات', en: 'Starters' },
            { id: 'mains', ar: 'الأطباق الرئيسية', en: 'Main Courses' },
            { id: 'desserts', ar: 'الحلويات', en: 'Desserts' },
            { id: 'drinks', ar: 'المشروبات', en: 'Drinks' },
            { id: 'specials', ar: 'المميزة', en: 'Specials' }
        ];

        // Menu Items Data
        const menuItems = [
            {
                id: 1,
                category: 'starters',
                price: 18.00,
                isSpecial: true,
                img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=800&q=80',
                title: { ar: 'شوربة الترفل والفطر', en: 'Truffle Mushroom Soup' },
                desc: { ar: 'شوربة كريمة الفطر الطازجة مع لمسة ناعمة من زيت الترفل الأسود وزهر الأعشاب.', en: 'Creamy fresh mushroom soup finished with a delicate drizzle of black truffle oil.' },
                ingredients: { ar: ['فطر طازج', 'زيت ترفل', 'كريمة ثقيلة', 'أعشاب'], en: ['Fresh Mushroom', 'Truffle Oil', 'Heavy Cream', 'Herbs'] },
                allergens: { ar: ['منتجات الألبان'], en: ['Dairy'] }
            },
            {
                id: 2,
                category: 'starters',
                price: 15.50,
                isSpecial: false,
                img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
                title: { ar: 'سلطة بوراتا إيطالية', en: 'Italian Burrata Salad' },
                desc: { ar: 'جبنة البوراتا الطازجة مع طماطم الكرز المتبلة بخل البلساميك المعتق وصلصة البيستو.', en: 'Fresh Burrata cheese with heirloom tomatoes, aged balsamic glaze, and basil pesto.' },
                ingredients: { ar: ['جبن بوراتا', 'طماطم كرزية', 'بيستو حبق', 'بلساميك'], en: ['Burrata Cheese', 'Cherry Tomatoes', 'Basil Pesto', 'Balsamic'] },
                allergens: { ar: ['منتجات الألبان', 'مكسرات'], en: ['Dairy', 'Nuts'] }
            },
            {
                id: 3,
                category: 'mains',
                price: 42.00,
                isSpecial: true,
                img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
                title: { ar: 'ستيك ريب آي بلاك أنغوس', en: 'Black Angus Ribeye Steak' },
                desc: { ar: 'قطعة ستيك مشوية على الحطب، تقدم مع بطاطس مهروسة بالكمأة وصلصة الفلفل الأسود.', en: 'Wood-grilled prime ribeye served with truffle mashed potatoes and peppercorn jus.' },
                ingredients: { ar: ['لحم أنغوس 300غ', 'زبدة بالأعشاب', 'بطاطس كمأة'], en: ['300g Angus Beef', 'Herbed Butter', 'Truffle Potatoes'] },
                allergens: { ar: ['منتجات الألبان'], en: ['Dairy'] }
            },
            {
                id: 4,
                category: 'mains',
                price: 34.00,
                isSpecial: false,
                img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
                title: { ar: 'سلمون نرويجي مشوي', en: 'Grilled Norwegian Salmon' },
                desc: { ar: 'فيليه السلمون المشوي بصلصة الليمون والأعشاب الطازجة يقدم مع هليون مشوي.', en: 'Pan-seared Norwegian salmon fillet with lemon herb butter sauce and asparagus.' },
                ingredients: { ar: ['سلمون طازج', 'هليون', 'صلصة الليمون والأعشاب'], en: ['Fresh Salmon', 'Asparagus', 'Lemon Herb Sauce'] },
                allergens: { ar: ['أسماك', 'منتجات الألبان'], en: ['Fish', 'Dairy'] }
            },
            {
                id: 5,
                category: 'desserts',
                price: 14.00,
                isSpecial: true,
                img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
                title: { ar: 'فوندان الشوكولاتة الداكنة', en: 'Dark Chocolate Lava Cake' },
                desc: { ar: 'كيك الشوكولاتة الفاخرة مع قلب شوكولاتة ذائب، يقدم مع فانيليا المادغشقر.', en: 'Warm dark chocolate cake with a molten center, served with Madagascar vanilla gelati.' },
                ingredients: { ar: ['شوكولاتة بلجيكية 70%', 'آيس كريم فانيليا', 'توت طازج'], en: ['70% Belgian Chocolate', 'Vanilla Ice Cream', 'Fresh Berries'] },
                allergens: { ar: ['منتجات الألبان', 'بيض', 'جلوتين'], en: ['Dairy', 'Eggs', 'Gluten'] }
            },
            {
                id: 6,
                category: 'drinks',
                price: 9.50,
                isSpecial: false,
                img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
                title: { ar: 'موهيتو التوت الذهبي', en: 'Golden Berry Mojito' },
                desc: { ar: 'مزيج منعش من التوت الأسود الطازج، النعناع، الليمون وماء الصودا الفوار.', en: 'Refreshing blend of fresh blackberries, mint leaves, lime juice, and sparkling soda.' },
                ingredients: { ar: ['توت أسود', 'نعناع طازج', 'ليمون', 'صودا'], en: ['Blackberries', 'Fresh Mint', 'Lime', 'Soda'] },
                allergens: { ar: ['خالي من الحساسية'], en: ['None'] }
            }
        ];

        // Initialization
        window.addEventListener('DOMContentLoaded', () => {
            renderCategories();
            renderMenu();
            updateUI();
        });

        // Toggle Language Functionality
        function toggleLanguage() {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            
            // Set Page Direction & Language Attributes
            document.documentElement.lang = currentLang;
            document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

            // Switch Font Class
            document.body.className = document.body.className.replace(
                /font-(ar|en)/, 
                `font-${currentLang}`
            );

            // Update Label Text
            document.getElementById('langLabel').innerText = currentLang === 'ar' ? 'English' : 'عربي';

            // Refresh UI Texts & Renderings
            updateUI();
            renderCategories();
            renderMenu();
            if (activeModalItemId) openModal(activeModalItemId);
            renderCart();
            
            // If receipt is open, refresh it
            if (lastReceiptData && !document.getElementById('receiptModal').classList.contains('hidden')) {
                populateReceipt(lastReceiptData);
            }
        }

        // Dynamic Text Translation Update
        function updateUI() {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (i18n[currentLang][key]) {
                    // Handle multi-line
                    if (key === 'receiptThankYou') {
                        el.innerHTML = i18n[currentLang][key].replace('\n', '<br>');
                    } else {
                        el.innerText = i18n[currentLang][key];
                    }
                }
            });

            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (i18n[currentLang][key]) el.placeholder = i18n[currentLang][key];
            });
        }

        // Render Category Filter Buttons
        function renderCategories() {
            const container = document.getElementById('categoryContainer');
            container.innerHTML = categories.map(cat => `
                <button onclick="setCategory('${cat.id}')" 
                        class="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                            currentCategory === cat.id 
                            ? 'bg-gradient-to-r from-gold-500 to-amber-600 text-slate-950 shadow-md shadow-gold-500/10' 
                            : 'bg-slate-900/80 text-slate-400 hover:text-slate-100 border border-slate-800'
                        }">
                    ${cat[currentLang]}
                </button>
            `).join('');
        }

        function setCategory(id) {
            currentCategory = id;
            renderCategories();
            filterMenu();
        }

        // Render Menu Items
        function renderMenu(itemsToRender = menuItems) {
            const grid = document.getElementById('menuGrid');
            const emptyState = document.getElementById('emptyState');

            if (itemsToRender.length === 0) {
                grid.innerHTML = '';
                emptyState.classList.remove('hidden');
                return;
            }

            emptyState.classList.add('hidden');
            grid.innerHTML = itemsToRender.map(item => `
                <div onclick="openModal(${item.id})" class="glass-card rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1">
                    <div class="relative h-48 overflow-hidden">
                        <img src="${item.img}" alt="${item.title[currentLang]}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        ${item.isSpecial ? `<span class="absolute top-3 right-3 ltr:right-auto ltr:left-3 bg-gradient-to-r from-gold-500 to-amber-600 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">Special</span>` : ''}
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                        <span class="absolute bottom-3 left-3 ltr:left-auto ltr:right-3 text-gold-400 font-extrabold text-lg bg-slate-950/80 px-2.5 py-1 rounded-lg border border-gold-500/20">
                            $${item.price.toFixed(2)}
                        </span>
                    </div>
                    <div class="p-5">
                        <h3 class="font-bold text-lg text-slate-100 mb-1.5 group-hover:text-gold-400 transition-colors">${item.title[currentLang]}</h3>
                        <p class="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">${item.desc[currentLang]}</p>
                        
                        <div class="flex items-center justify-between pt-3 border-t border-slate-800/60">
                            <span class="text-[11px] text-slate-500 font-semibold flex items-center gap-1">
                                <i class="fa-solid fa-circle-info text-gold-500/70"></i>
                                ${categories.find(c => c.id === item.category)[currentLang]}
                            </span>
                            <button onclick="event.stopPropagation(); addToCart(${item.id})" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-gold-500 hover:text-slate-950 text-slate-200 transition-all flex items-center justify-center">
                                <i class="fa-solid fa-plus text-xs"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Search & Filtering Logic
        function filterMenu() {
            const query = document.getElementById('searchInput').value.toLowerCase().trim();
            document.getElementById('clearSearchBtn').classList.toggle('hidden', query === '');

            const filtered = menuItems.filter(item => {
                const matchesCategory = currentCategory === 'all' || item.category === currentCategory || (currentCategory === 'specials' && item.isSpecial);
                const matchesQuery = item.title[currentLang].toLowerCase().includes(query) || 
                                     item.desc[currentLang].toLowerCase().includes(query) ||
                                     item.ingredients[currentLang].some(ing => ing.toLowerCase().includes(query));
                return matchesCategory && matchesQuery;
            });

            renderMenu(filtered);
        }

        function clearSearch() {
            document.getElementById('searchInput').value = '';
            filterMenu();
        }

        // Modal Logic
        function openModal(id) {
            activeModalItemId = id;
            modalQuantity = 1;
            const item = menuItems.find(i => i.id === id);
            
            document.getElementById('modalImg').src = item.img;
            document.getElementById('modalTitle').innerText = item.title[currentLang];
            document.getElementById('modalDesc').innerText = item.desc[currentLang];
            document.getElementById('modalPrice').innerText = `$${item.price.toFixed(2)}`;
            document.getElementById('modalCategory').innerText = categories.find(c => c.id === item.category)[currentLang];
            document.getElementById('modalQty').innerText = modalQuantity;

            // Ingredients Tags
            document.getElementById('modalIngredients').innerHTML = item.ingredients[currentLang].map(ing => 
                `<span class="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/50 text-slate-300 text-xs">${ing}</span>`
            ).join('');

            // Allergens Tags
            document.getElementById('modalAllergens').innerHTML = item.allergens[currentLang].map(alg => 
                `<span class="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs">${alg}</span>`
            ).join('');

            const modal = document.getElementById('itemModal');
            const card = document.getElementById('itemModalCard');
            modal.classList.remove('hidden');
            setTimeout(() => {
                card.classList.remove('scale-95', 'opacity-0');
                card.classList.add('scale-100', 'opacity-100');
            }, 10);
        }

        function closeModal() {
            const modal = document.getElementById('itemModal');
            const card = document.getElementById('itemModalCard');
            card.classList.remove('scale-100', 'opacity-100');
            card.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
                activeModalItemId = null;
            }, 200);
        }

        function updateModalQty(delta) {
            modalQuantity = Math.max(1, modalQuantity + delta);
            document.getElementById('modalQty').innerText = modalQuantity;
        }

        function addModalItemToCart() {
            if (activeModalItemId) {
                addToCart(activeModalItemId, modalQuantity);
                closeModal();
            }
        }

        // Cart Management
        function addToCart(itemId, qty = 1) {
            const existing = cart.find(i => i.id === itemId);
            if (existing) {
                existing.qty += qty;
            } else {
                cart.push({ id: itemId, qty });
            }
            renderCart();
            showToast(i18n[currentLang].addedToast);
        }

        function updateCartQty(itemId, delta) {
            const item = cart.find(i => i.id === itemId);
            if (item) {
                item.qty += delta;
                if (item.qty <= 0) {
                    cart = cart.filter(i => i.id !== itemId);
                }
            }
            renderCart();
        }

        function renderCart() {
            const list = document.getElementById('cartItemsList');
            const badge = document.getElementById('cartBadge');
            
            const totalItemsCount = cart.reduce((acc, curr) => acc + curr.qty, 0);
            badge.innerText = totalItemsCount;

            if (cart.length === 0) {
                list.innerHTML = `
                    <div class="text-center py-12 text-slate-500">
                        <i class="fa-solid fa-basket-shopping text-4xl mb-3"></i>
                        <p class="text-sm font-medium">${i18n[currentLang].emptyCart}</p>
                    </div>
                `;
            } else {
                list.innerHTML = cart.map(cartItem => {
                    const item = menuItems.find(m => m.id === cartItem.id);
                    return `
                        <div class="flex items-center gap-3 pt-3">
                            <img src="${item.img}" class="w-14 h-14 rounded-xl object-cover border border-slate-800">
                            <div class="flex-1 min-w-0">
                                <h4 class="text-xs font-bold text-slate-200 truncate">${item.title[currentLang]}</h4>
                                <span class="text-xs text-gold-400 font-extrabold">$${(item.price * cartItem.qty).toFixed(2)}</span>
                            </div>
                            <div class="flex items-center bg-slate-900 rounded-lg border border-slate-800 p-1 gap-1">
                                <button onclick="updateCartQty(${item.id}, -1)" class="w-6 h-6 rounded bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center text-xs">-</button>
                                <span class="w-6 text-center text-xs font-bold">${cartItem.qty}</span>
                                <button onclick="updateCartQty(${item.id}, 1)" class="w-6 h-6 rounded bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center text-xs">+</button>
                            </div>
                        </div>
                    `;
                }).join('');
            }

            // Calculations
            const subtotal = cart.reduce((acc, curr) => {
                const item = menuItems.find(m => m.id === curr.id);
                return acc + (item.price * curr.qty);
            }, 0);
            
            const tax = subtotal * 0.14;
            const total = subtotal + tax;

            document.getElementById('cartSubtotal').innerText = `$${subtotal.toFixed(2)}`;
            document.getElementById('cartTax').innerText = `$${tax.toFixed(2)}`;
            document.getElementById('cartTotal').innerText = `$${total.toFixed(2)}`;
        }

        function toggleCartDrawer(open) {
            const drawer = document.getElementById('cartDrawer');
            if (open) {
                drawer.classList.remove('hidden');
            } else {
                drawer.classList.add('hidden');
            }
        }

        // ==================== NEW CHECKOUT + RECEIPT FLOW ====================

        function startCheckout() {
            if (cart.length === 0) return;
            toggleCartDrawer(false);
            
            // Reset form
            selectedOrderType = null;
            document.getElementById('customerName').value = '';
            document.getElementById('customerPhone').value = '';
            document.querySelectorAll('.order-type-btn').forEach(btn => {
                btn.classList.remove('border-gold-500', 'bg-gold-500/10', 'text-gold-400');
                btn.classList.add('border-slate-700', 'bg-slate-900/60', 'text-slate-300');
            });

            document.getElementById('checkoutModal').classList.remove('hidden');
        }

        function closeCheckoutModal() {
            document.getElementById('checkoutModal').classList.add('hidden');
        }

        function selectOrderType(type) {
            selectedOrderType = type;
            document.querySelectorAll('.order-type-btn').forEach(btn => {
                btn.classList.remove('border-gold-500', 'bg-gold-500/10', 'text-gold-400');
                btn.classList.add('border-slate-700', 'bg-slate-900/60', 'text-slate-300');
            });
            
            const activeBtn = type === 'dinein' ? document.getElementById('btnDineIn') : document.getElementById('btnTakeaway');
            activeBtn.classList.remove('border-slate-700', 'bg-slate-900/60', 'text-slate-300');
            activeBtn.classList.add('border-gold-500', 'bg-gold-500/10', 'text-gold-400');
        }

        function generateOrderCode() {
            // Generate a code like: ELITE-XXX (random 001-999)
            // Simple daily-ish uniqueness using timestamp + random
            const randomNum = Math.floor(Math.random() * 900) + 100; // 100-999
            const timePart = new Date().getTime().toString().slice(-4);
            return `FIKRA-${randomNum}${timePart.slice(0,2)}`;
        }

        function generateReceipt() {
            const name = document.getElementById('customerName').value.trim();
            const phone = document.getElementById('customerPhone').value.trim();

            if (!selectedOrderType || !name || !phone) {
                showToast(i18n[currentLang].fillAllFields);
                return;
            }

            // Generate unique order code (non-editable)
            currentOrderCode = generateOrderCode();

            // Calculate totals
            const subtotal = cart.reduce((acc, curr) => {
                const item = menuItems.find(m => m.id === curr.id);
                return acc + (item.price * curr.qty);
            }, 0);
            const tax = subtotal * 0.14;
            const total = subtotal + tax;

            // Prepare receipt data
            lastReceiptData = {
                code: currentOrderCode,
                name: name,
                phone: phone,
                type: selectedOrderType,
                items: cart.map(c => {
                    const item = menuItems.find(m => m.id === c.id);
                    return {
                        title: item.title,
                        price: item.price,
                        qty: c.qty
                    };
                }),
                subtotal: subtotal,
                tax: tax,
                total: total,
                datetime: new Date()
            };

            // Close checkout modal and show receipt
            closeCheckoutModal();
            populateReceipt(lastReceiptData);
            document.getElementById('receiptModal').classList.remove('hidden');
        }

        function populateReceipt(data) {
            // Order Code
            document.getElementById('receiptOrderCode').innerText = data.code;

            // Customer info
            document.getElementById('receiptCustomerName').innerText = data.name;
            document.getElementById('receiptCustomerPhone').innerText = data.phone;
            
            // Order Type
            const typeText = data.type === 'dinein' 
                ? i18n[currentLang].dineIn 
                : i18n[currentLang].takeaway;
            document.getElementById('receiptOrderType').innerText = typeText;

            // Date Time
            const dt = data.datetime;
            const dateStr = dt.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            document.getElementById('receiptDateTime').innerText = dateStr;

            // Items
            const itemsHtml = data.items.map(item => `
                <div class="flex justify-between items-start gap-2">
                    <div class="flex-1">
                        <span class="text-slate-200 font-medium">${item.title[currentLang]}</span>
                        <span class="text-slate-500 text-xs block">× ${item.qty}</span>
                    </div>
                    <span class="text-slate-300 font-bold whitespace-nowrap">$${(item.price * item.qty).toFixed(2)}</span>
                </div>
            `).join('');
            document.getElementById('receiptItemsList').innerHTML = itemsHtml;

            // Totals
            document.getElementById('receiptSubtotal').innerText = `$${data.subtotal.toFixed(2)}`;
            document.getElementById('receiptTax').innerText = `$${data.tax.toFixed(2)}`;
            document.getElementById('receiptTotal').innerText = `$${data.total.toFixed(2)}`;

            // Update thank you text
            const thankYouEl = document.querySelector('[data-i18n="receiptThankYou"]');
            if (thankYouEl) {
                thankYouEl.innerHTML = i18n[currentLang].receiptThankYou.replace('\n', '<br>');
            }
        }

        function copyReceipt() {
            if (!lastReceiptData) return;

            const data = lastReceiptData;
            const typeText = data.type === 'dinein' 
                ? i18n[currentLang].dineIn 
                : i18n[currentLang].takeaway;

            const dateStr = data.datetime.toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US', {
                year: 'numeric', month: 'short', day: 'numeric',
                hour: '2-digit', minute: '2-digit'
            });

            let text = '';
            text += `================================\n`;
            text += `          L'ÉLITE\n`;
            text += `   ${i18n[currentLang].receiptTagline}\n`;
            text += `================================\n\n`;
            text += `${i18n[currentLang].orderCodeLabel}: ${data.code}\n\n`;
            text += `${i18n[currentLang].receiptName} ${data.name}\n`;
            text += `${i18n[currentLang].receiptPhone} ${data.phone}\n`;
            text += `${i18n[currentLang].receiptType} ${typeText}\n`;
            text += `${i18n[currentLang].receiptDate} ${dateStr}\n\n`;
            text += `--------------------------------\n`;
            text += `${i18n[currentLang].receiptItems}:\n`;
            
            data.items.forEach(item => {
                text += `  ${item.title[currentLang]} × ${item.qty}  —  $${(item.price * item.qty).toFixed(2)}\n`;
            });

            text += `--------------------------------\n`;
            text += `${i18n[currentLang].subtotal}: $${data.subtotal.toFixed(2)}\n`;
            text += `${i18n[currentLang].tax}: $${data.tax.toFixed(2)}\n`;
            text += `${i18n[currentLang].total}: $${data.total.toFixed(2)}\n`;
            text += `================================\n`;
            text += `${i18n[currentLang].receiptThankYou.replace('\n', ' ')}\n`;
            text += `================================`;

            navigator.clipboard.writeText(text).then(() => {
                showToast(i18n[currentLang].copySuccess);
            }).catch(() => {
                // Fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                showToast(i18n[currentLang].copySuccess);
            });
        }

        function finishOrder() {
            // Clear cart
            cart = [];
            renderCart();
            lastReceiptData = null;
            currentOrderCode = '';
            
            // Close receipt
            document.getElementById('receiptModal').classList.add('hidden');
            
            // Show success toast
            showToast(i18n[currentLang].checkoutToast);
        }

        // Notification Toast
        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toastMsg').innerText = msg;
            toast.classList.remove('hidden');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 3000);
        }