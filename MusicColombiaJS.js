const sectionHome = document.getElementById("Home");
const sectionMusic = document.getElementById("Music");
const sectionHistory = document.getElementById("History");
const sectionIndigenous = document.getElementById("Indigenous");
const sectionMapOfColombia = document.getElementById("MapOfColombia");
const sectionResources = document.getElementById("Resources");
const miniMenuSection = document.getElementById("miniMenuSection");
const sections = Array.from(document.querySelectorAll('.section'));
const allSections = [...sections, miniMenuSection];
const sectionMap = {
    Home: sectionHome,
    Music: sectionMusic,
    History: sectionHistory,
    Indigenous: sectionIndigenous,
    MapOfColombia: sectionMapOfColombia,
    Resources: sectionResources,
    miniMenuSection: miniMenuSection
};
let currentSectionState = 'Home';

const bgImages = [
    './Fotos/Montañas/esta.png',
    './Fotos/Montañas/esta2.png',
    './Fotos/Montañas/esta3.png',
    './Fotos/Montañas/esta4.png',
    './Fotos/Montañas/esta5.png',
    './Fotos/Montañas/esta6.png'
];

let imageIndex = 1;
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');

function changeImage() {
    const currentEl = (imageIndex % 2 === 0) ? slide1 : slide2;
    const nextEl = (imageIndex % 2 === 0) ? slide2 : slide1;

    imageIndex = (imageIndex + 1) % bgImages.length;

    nextEl.src = bgImages[imageIndex];
    nextEl.style.transition = 'none';
    nextEl.style.transform = 'translateX(-100%)';

    setTimeout(() => {
        nextEl.style.transition = 'transform 1.5s ease-in-out';
        currentEl.classList.remove('active');
        currentEl.classList.add('exit');
        nextEl.classList.add('active');
        nextEl.style.transform = 'translateX(0)';

        setTimeout(() => {
            currentEl.classList.remove('exit');
        }, 1500);
    }, 50);
}

setInterval(changeImage, 5000);

function setElementContent(element, value) {
    if (!element || value === undefined || value === null) return;

    const tag = element.tagName.toUpperCase();
    if (tag === 'IMG' || tag === 'SOURCE' || tag === 'AUDIO') {
        element.src = value;
        return;
    }

    if (tag === 'A') {
        element.href = value;
        element.textContent = value;
        return;
    }

    element.textContent = value;
}

function populateSection(data, sectionName, entries) {
    const sectionData = Array.isArray(data?.[sectionName]) ? data[sectionName] : [];
    entries.forEach(([elementId, propertyName, index]) => {
        const element = document.getElementById(elementId);
        const entry = sectionData[index] || {};
        setElementContent(element, entry[propertyName]);
    });
}

async function loadData() {
    try {
        const response = await fetch('./jsonImformacion.json');
        const data = await response.json();

        populateSection(data, 'Home', [
            ['imageHome1', 'image1', 0],
            ['textHome1', 'text1', 1]
        ]);

        populateSection(data, 'Music', [
            ['textMusic1', 'text1', 0],
            ['imageMusic1', 'image1', 1],
            ['textMusic2', 'text2', 2]
        ]);

        for (let groupIndex = 0; groupIndex < 15; groupIndex += 1) {
            const titleProp = `text${groupIndex * 2 + 3}`;
            const descriptionProp = `text${groupIndex * 2 + 4}`;
            const imageProp = `image${groupIndex + 2}`;
            const soundProp = `sound${groupIndex + 1}`;
            const baseIndex = 3 + groupIndex * 4;

            populateSection(data, 'Music', [
                [`textMusic${groupIndex * 2 + 3}`, titleProp, baseIndex],
                [`textMusic${groupIndex * 2 + 4}`, descriptionProp, baseIndex + 1],
                [`imageMusic${groupIndex + 2}`, imageProp, baseIndex + 2],
                [`audioMusic${groupIndex + 1}`, soundProp, baseIndex + 3]
            ]);
        }

        populateSection(data, 'History', [
            ['imageHistory1', 'image1', 0],
            ['textHistory1', 'text1', 1],
            ['textHistory2', 'text2', 2],
            ['textHistory3', 'text3', 3],
            ['textHistory4', 'text4', 4],
            ['textHistory5', 'text5', 5],
            ['textHistory6', 'text6', 6],
            ['textHistory7', 'text7', 7],
            ['textHistory8', 'text8', 8],
            ['textHistory9', 'text9', 9],
            ['textHistory10', 'text10', 10],
            ['textHistory11', 'text11', 11],
            ['textHistory12', 'text12', 12],
            ['textHistory13', 'text13', 13],
            ['textHistory14', 'text14', 14],
            ['textHistory15', 'text15', 15],
            ['textHistory16', 'text16', 16],
            ['textHistory17', 'text17', 17],
            ['textHistory18', 'text18', 18],
            ['textHistory19', 'text19', 19],
            ['textHistory20', 'text20', 20],
            ['textHistory21', 'text21', 21],
            ['textHistory22', 'text22', 22],
            ['textHistory23', 'text23', 23],
            ['textHistory24', 'text24', 24],
            ['textHistory25', 'text25', 25],
            ['textHistory26', 'text26', 26],
            ['textHistory27', 'text27', 27],
            ['textHistory28', 'text28', 28]
        ]);

        populateSection(data, 'Indigenous', [
            ['textIndigenous1', 'text1', 0],
            ['imageIndigenous1', 'image1', 1],
            ['textIndigenous2', 'text2', 2]
        ]);

        for (let groupIndex = 0; groupIndex < 15; groupIndex += 1) {
            const titleProp = `text${groupIndex * 2 + 3}`;
            const descriptionProp = `text${groupIndex * 2 + 4}`;
            const imageProp = `image${groupIndex + 2}`;
            const baseIndex = 3 + groupIndex * 3;

            populateSection(data, 'Indigenous', [
                [`textIndigenous${groupIndex * 2 + 3}`, titleProp, baseIndex],
                [`textIndigenous${groupIndex * 2 + 4}`, descriptionProp, baseIndex + 1],
                [`imageIndigenous${groupIndex + 2}`, imageProp, baseIndex + 2]
            ]);
        }

        populateSection(data, 'MapOfColombia', [
            ['imageMapOfColombia1', 'image1', 0],
            ['textMapOfColombia1', 'text1', 1],
            ['textMapOfColombia2', 'text2', 2],
            ['imageMapOfColombia2', 'image2', 3]
        ]);

        populateSection(data, 'Resources', [
            ['imageResources1', 'image1', 0],
            ['textResources1', 'text1', 1],
            ['textResources2', 'text2', 2]
        ]);

        for (let index = 0; index < 13; index += 1) {
            const propertyName = `text${index + 3}`;
            populateSection(data, 'Resources', [
                [`textResources${index + 3}`, propertyName, index + 3]
            ]);
        }
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
}

loadData();

function hideSections() {
    allSections.forEach(section => {
        if (section) {
            section.style.display = 'none';
        }
    });
}

function toggleMenuIcon() {
    document.querySelectorAll('.imgMiniButtonMenu').forEach(icon => {
        if (icon) {
            icon.classList.toggle('new-image');
        }
    });
}

function showSection(sectionId) {
    hideSections();

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';
        currentSectionState = sectionId;
    }

    toggleMenuIcon();
}

function showSection2(sectionId) {
    showSection('Home');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';
    }
}

function showSection3(sectionId) {
    showSection('Music');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';
    }
}

function showSection4(sectionId) {
    showSection('History');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';
    }
}

function showSection5(sectionId) {
    showSection('Indigenous');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';
    }
}

function showSection6(sectionId) {
    showSection('MapOfColombia');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';
    }
}

function showSection7(sectionId) {
    showSection('Resources');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';
    }
}

function showSectionMiniMenu(sectionId) {
    hideSections();

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';
        currentSectionState = sectionId;
    }

    if (miniMenuSection) {
        miniMenuSection.style.display = 'none';
    }
}

function iniciarPagina() {
    hideSections();
    sectionHome.style.display = 'flex';
    currentSectionState = 'Home';
}

window.addEventListener('load', iniciarPagina);
