const provincesData = {
    "IR-32": ["کاخک", "دماوند", "چشمه‌علی"], // Alborz
    "IR-15": ["قلعه کنگلو", "شهر سوخته", "بی‌بی دوست"], // Kerman
    "IR-13": ["کوه خواجه", "دریاچه هامون", "قلعه رستم"], // Sistan and Baluchestan
    "IR-31": ["عمارت مفخم", "روستای درکش", "پارک ملی ساریگل"], // North Khorasan
    "IR-30": ["حرم امام رضا", "آرامگاه فردوسی", "کوهسنگی"], // Razavi Khorasan
    "IR-29": ["روستای خیرآباد", "غار قوری قلعه", "دریاچه زریوار"], // South Khorasan
    "IR-16": ["قلعه بابک", "روستای پالنگان", "کوه اورامان"], // Kordestan
    "IR-19": ["ماسوله", "دریاچه سوها", "قلعه رودخان"], // Gilan
    "IR-17": ["طاق بستان", "بیستون", "معبد آناهیتا"], // Kermanshah
    "IR-01": ["دریاچه ارومیه", "تخت سلیمان", "قلعه ضحاک"], // East Azarbaijan
    "IR-02": ["آبشار شلماش", "دریاچه مارمیشو", "کاخ موزه باغچه جوق"], // West Azarbaijan
    "IR-28": ["الموت", "دریاچه اوان", "کاروانسرای سعدالسلطنه"], // Qazvin
    "IR-11": ["سلطانیه", "غار کتله خور", "رختشوی‌خانه"], // Zanjan
    "IR-24": ["آرامگاه گنبد علویان", "غار علی‌صدر", "هگمتانه"], // Hamadan
    "IR-26": ["حرم حضرت معصومه", "کاروانسرای دیر گچین", "باغ فین"], // Qom
    "IR-22": ["تفرجگاه عینالی", "چشمه آبگرم سرخه", "روستای ویند"], // Markazi
    "IR-03": ["دریاچه نئور", "جنگل فندقلو", "گردنه حیران"], // Ardebil
    "IR-23": ["جزیره قشم", "دره ستارگان", "جزیره هرمز"], // Hormozgan
    "IR-05": ["آبشار آب سفید", "دشت لاله‌های واژگون", "قلعه شوش"], // Ilam
    "IR-20": ["دریاچه گهر", "فلک‌الافلاک", "دره نی‌گاه"], // Lorestan
    "IR-10": ["تالاب شادگان", "چغازنبیل", "پل سفید"], // Khuzestan
    "IR-08": ["دشت لاله‌های واژگون", "غار یخی چما", "آبشار شیخ علیخان"], // Chahar Mahall and Bakhtiari
    "IR-25": ["برج بادگیرها", "مسجد جامع یزد", "باغ دولت‌آباد"], // Yazd
    "IR-07": ["برج آزادی", "کاخ گلستان", "پل طبیعت"], // Tehran
    "IR-12": ["جنگل سی‌سنگان", "بیابان لوت", "دریاچه چورت"], // Semnan
    "IR-21": ["دریاچه سقالکسار", "جنگل گیسوم", "آبشار لونک"], // Mazandaran
    "IR-27": ["برج میلاد", "دریاچه خلیج فارس", "پارک جنگلی چیتگر"], // Golestan (اینجا فرض کردم "Golestan" رو جا انداختی و کدش "IR-27" باشه)
    "IR-14": ["تخت جمشید", "پاسارگاد", "باغ ارم"], // Fars
    "IR-04": ["میدان نقش جهان", "پل خواجو", "منارجنبان"], // Esfahan
    "IR-06": ["ساحل بوشهر", "گورستان شغاب", "قلعه نصوری"], // Bushehr
    "IR-18": ["آبشار یاسوج", "چشمه بلقیس", "دریاچه کوه گل"] // Kohgiluyeh and Buyer Ahmad
};

const provincePaths = document.querySelectorAll("#iran-map path");
const modal = document.getElementById("info");
const provinceName = document.getElementById("province-name");
const attractionsGrid = document.getElementById("attractions");
const closeModal = document.getElementById("close-modal");

provincePaths.forEach(path => {
    path.addEventListener("click", () => {
        const provinceId = path.id;
        const provinceTitle = path.getAttribute("title");
        provinceName.textContent = getProvinceName(provinceTitle);
        attractionsGrid.innerHTML = "";
        
        if (provincesData[provinceId]) {
            provincesData[provinceId].forEach(attraction => {
                const card = document.createElement("div");
                card.className = "attraction-card";
                card.textContent = attraction;
                attractionsGrid.appendChild(card);
                card.setAttribute('onclick','ale(this.innerText)')
            });
        } else {
            const card = document.createElement("div");
            card.className = "attraction-card";
            card.textContent = "جاذبه‌ای برای این استان ثبت نشده است.";
            attractionsGrid.appendChild(card);
        }
        
        modal.style.display = "flex"; // نمایش مودال
    });
});

// بستن مودال با کلیک روی دکمه بستن
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// بستن مودال با کلیک بیرون از اون
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

function getProvinceName(title) {
    const names = {
        "Alborz": "البرز",
        "Kerman": "کرمان",
        "Sistan and Baluchestan": "سیستان و بلوچستان",
        "North Khorasan": "خراسان شمالی",
        "Razavi Khorasan": "خراسان رضوی",
        "South Khorasan": "خراسان جنوبی",
        "Kordestan": "کردستان",
        "Gilan": "گیلان",
        "Kermanshah": "کرمانشاه",
        "East Azarbaijan": "آذربایجان شرقی",
        "West Azarbaijan": "آذربایجان غربی",
        "Qazvin": "قزوین",
        "Zanjan": "زنجان",
        "Hamadan": "همدان",
        "Qom": "قم",
        "Markazi": "مرکزی",
        "Ardebil": "اردبیل",
        "Hormozgan": "هرمزگان",
        "Ilam": "ایلام",
        "Lorestan": "لرستان",
        "Khuzestan": "خوزستان",
        "Chahar Mahall and Bakhtiari": "چهارمحال و بختیاری",
        "Yazd": "یزد",
        "Tehran": "تهران",
        "Semnan": "سمنان",
        "Mazandaran": "مازندران",
        "Golestan": "گلستان", // فرض کردم اینجا جا افتاده
        "Fars": "فارس",
        "Esfahan": "اصفهان",
        "Bushehr": "بوشهر",
        "Kohgiluyeh and Buyer Ahmad": "کهگیلویه و بویراحمد"
    };
    return names[title] || title;
}

function ale(x) {
    window.open(`https://www.google.com/search?q=${x}`);
    console.log(`${x}`);
}


// اختصاص رنگ به هر استان
provincePaths.forEach((path, index) => {
    const colorClass = `province-color-${(index % 10) + 1}`; // استفاده از 10 رنگ به صورت چرخشی
    path.classList.add(colorClass);
});