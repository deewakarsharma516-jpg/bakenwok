# Bake 'N' Wok — Play Store par app daalne ki poori guide

## Kya ban chuka hai (files ready hain)

| File | Kis kaam ki |
|---|---|
| `index.html` | App (pehle se hai — bas GitHub par update rakho) |
| `manifest.json` | **Naya** — Play-Store-ready (icons, screenshots, shortcuts) |
| `privacy.html` | **Naya** — Privacy Policy ka alag page (Play Store me zaroori) |
| `playstore/icon-512.png` | App icon (Play Console me upload) |
| `playstore/icon-maskable-512.png` | Android ka round/adaptive icon |
| `playstore/feature-graphic-1024x500.png` | Listing ka banner |
| `assetlinks.json` | Website ↔ app ko jodne wali file |

---

## STEP 1 — Files GitHub par daalo

Apne `bakenwok` repo me yeh sab upload/replace karo:
- `index.html` (naya wala)
- `manifest.json` (naya wala)
- `privacy.html` (naya)
- `playstore/` folder poora (teeno PNG ke saath)
- `sw.js`, `icon.svg` (pehle se hain)

**Check:** `https://bakenwok1-bot.github.io/bakenwok/privacy.html` khulna chahiye.

---

## STEP 2 — Screenshots lo (2-8 chahiye)

1. Phone me apni live site kholo: `https://bakenwok1-bot.github.io/bakenwok/`
2. In screens ke screenshot lo (phone ka normal screenshot button):
   - Homepage (menu ke saath)
   - Kisi dish ka card / Half-Full chooser
   - Cart
   - Order tracking screen
   - Zara chat
3. **Sabse zaroori:** photos pehle achhi kar lena, warna screenshot me placeholder dikhega!
4. Screenshots ko `playstore/screenshot-1.png`, `screenshot-2.png` naam de ke GitHub par bhi daal do.

---

## STEP 3 — Play Console account

1. Kholo: **play.google.com/console** → Sign up
2. **$25 (~₹2,100)** ek baar ki fees (card se)
3. Identity verification (Aadhaar/PAN + address) — 1-2 din lagte hain
4. Account approve hone ka intezaar karo

---

## STEP 4 — PWABuilder se .aab file banao

1. Kholo: **pwabuilder.com**
2. Apni site ka link daalo: `https://bakenwok1-bot.github.io/bakenwok/`
3. **Start** → wo aapki PWA check karega (score dega)
4. **Package for Stores** → **Android** → **Generate Package**
5. Settings me:
   - **Package ID:** `in.bakenwok.app`  *(assetlinks.json me yahi likha hai)*
   - **App name:** Bake 'N' Wok
   - **Launcher name:** Bake 'N' Wok
   - Baaki default rehne do
6. Download hoga ek **ZIP** — usme:
   - `app-release-bundle.aab` ← **yahi Play Store par upload hoga**
   - `signing.keystore` + `signing-key-info.txt` ← **ISKO SAMBHAL KE RAKHO!**
     ⚠️ Yeh kho gaya to future me app update **kabhi nahi** kar paoge. Google Drive par backup rakh do.
   - `assetlinks.json` ← isme aapka asli fingerprint hoga

---

## STEP 5 — assetlinks.json GitHub par daalo (zaroori)

PWABuilder ke ZIP me jo `assetlinks.json` mila, usko GitHub repo me is jagah rakho:

```
bakenwok/
  └── .well-known/
        └── assetlinks.json
```

**GitHub par folder aise banao:** Add file → Create new file → naam me likho:
`.well-known/assetlinks.json` (slash likhte hi folder khud ban jaata hai) → content paste → Commit.

**Check karo:** `https://bakenwok1-bot.github.io/bakenwok/.well-known/assetlinks.json` khulna chahiye.

⚠️ **Yeh file na hui to app khulne par upar browser ka address bar dikhega** (app jaisa feel nahi aayega).

---

## STEP 6 — Play Console par app banao

1. **Create app** → App name: `Bake 'N' Wok` → Language: English (India) → **App** → **Free** → checkboxes tick → Create
2. Left menu se yeh sab bharo:

### App content (sab zaroori)
- **Privacy Policy URL:** `https://bakenwok1-bot.github.io/bakenwok/privacy.html`
- **Ads:** No ads
- **Data safety:** neeche dekho ⬇️
- **Content rating:** questionnaire bharo (food app = **Everyone**)
- **Target audience:** 18+ (ya 13+)
- **News app:** No

### Data safety form ke jawab
| Sawaal | Jawab |
|---|---|
| Data collect karte ho? | **Yes** |
| Personal info → Name | Yes — App functionality, **not shared** |
| Personal info → Phone | Yes — App functionality, **not shared** |
| Personal info → Address | Yes — App functionality, **not shared** |
| App activity → App interactions | Yes — Analytics |
| Data encrypted in transit? | **Yes** |
| User data delete kar sakte hain? | **Yes** (email par request) |
| Financial info (card/bank)? | **No** (UPI app handle karti hai) |

### Store listing
- **App name:** Bake 'N' Wok
- **Short description (80 char):**
  ```
  100% pure-veg cloud kitchen in Faridabad — momos, pizza, burgers, fresh & hot!
  ```
- **Full description:** neeche wala poora text copy karo ⬇️
- **App icon:** `playstore/icon-512.png`
- **Feature graphic:** `playstore/feature-graphic-1024x500.png`
- **Phone screenshots:** apne liye hue 2-8 screenshots
- **Category:** Food & Drink
- **Contact:** email `bakenwok@gmail.com`, phone `9076769441`

---

## Full description (copy-paste karo)

```
🥟 Bake 'N' Wok — Faridabad ki 100% Pure Veg Cloud Kitchen

Momos, sizzling wok food, cheesy pizza, burgers, chowmein, manchurian aur bahut kuch — sab kuch shudh shakahari, taaza banaya hua, seedha aapke ghar tak.

WHY BAKE 'N' WOK?
🌿 100% Pure Vegetarian — koi non-veg nahi, bilkul nahi
🔥 Order milte hi fresh banta hai — pehle se bana hua nahi
🛵 Dayal Nagar, Faridabad aur aas-paas fast delivery
⭐ 5.0 rating on Google

APP ME KYA HAI?
• Poora menu — photos aur daam ke saath
• Half aur Full — momos, chowmein, chilli, manchurian me apni bhookh ke hisaab se chuno
• 🤖 Zara AI Assistant — Hindi/Hinglish me baat karo, bolo "2 momos add karo" aur wo cart me daal degi. Voice se bhi bol sakte ho!
• 📍 Live Order Tracking — Confirmed → Preparing → Out for Delivery → Delivered, har step live
• 🎫 Daily Token Number — pickup ke liye
• 💎 Loyalty Points — har order par points, ₹50 tak ki bachat
• 🎟️ Coupon codes aur Happy Hours offers
• 🔁 Pichla order dobara — ek tap me
• 💳 UPI se aasan payment (PhonePe / Paytm / GPay)
• 📦 Mere Orders — purane saare orders ek jagah
• ⭐ Rating aur feedback

ORDER KARNA AASAN HAI
1. Menu se dish chuno
2. Cart me daalo, address bharo
3. UPI se pay karo
4. Live tracking dekho — khana aa raha hai! 😋

DELIVERY & PICKUP
Delivery ke liye order ke baad aap khud rider book kar sakte ho (Porter / Rapido / Uber) — rate compare karke. Ya "Pickup" chunke store se khud le jao.

HUMSE SAMPARK
📍 Shop No. 6, Near Gupta General Store, Masjid Road, Dayal Nagar, Faridabad – 121003 (HR)
📞 9076769441
✉️ bakenwok@gmail.com

Party ya bulk order? App me Zara se "party order" likho — hum special rate denge!

Bake 'N' Wok — Where Sweetness Meets Spice 🔥
```

---

## STEP 7 — Release karo

1. **Testing → Internal testing** se shuru karo (apne aap ko tester banao, khud install karke dekho)
2. Sab theek lage to **Production → Create new release**
3. `.aab` file upload karo
4. **Review** → **Start rollout to Production**
5. Google ka review: **3-7 din**

---

## Review pass hone ke liye dhyaan rakho

✅ **Asli photos daalo** — placeholder wali screenshots se app "adhoori" lagti hai (reject ho sakti hai)
✅ **Privacy Policy link chalu ho** — check kar lena
✅ **assetlinks.json sahi jagah ho** — warna address bar dikhega
✅ App khul ke chale — Google khud test karta hai
✅ Data safety form imaandaari se bharo — jhooth pakda gaya to app hat jaati hai

## Sabse badi galti jo log karte hain
🔑 **signing.keystore file kho dena.** Iske bina aap kabhi app update nahi kar paoge — naya app banana padega. Isko **Google Drive + pen drive** dono me rakho.

---

## Domain aane ke baad (baad me)
Jab aapka domain (jaise bakenwok.in) chalu ho jaaye:
1. GitHub Pages me custom domain set karo
2. `assetlinks.json` naye domain par bhi rakho (`.well-known/` me)
3. PWABuilder se naya package banao (**wahi keystore** use karke!) aur update daal do
