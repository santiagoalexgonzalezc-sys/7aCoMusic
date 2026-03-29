const sectionHome = document.getElementById("Home")
const sectionMusic = document.getElementById("Music")
const sectionHistory = document.getElementById("History")
const sectionIndigenous = document.getElementById("Indigenous")
const sectionMapOfColombia = document.getElementById("MapOfColombia")
const sectionResources = document.getElementById("Resources")
const miniMenuSection = document.getElementById("miniMenuSection")
const sections = document.querySelectorAll('.section');
const sectionsList = []
sectionsList.push(sectionHome, sectionMusic, sectionHistory, sectionIndigenous, sectionMapOfColombia, sectionResources, miniMenuSection )
let currentSectionState 
let previousSectionState

var bgImages = [
    './Fotos/Montañas/esta.png',
    './Fotos/Montañas/esta2.png',
    './Fotos/Montañas/esta3.png',
    './Fotos/Montañas/esta4.png',
    './Fotos/Montañas/esta5.png',
    './Fotos/Montañas/esta6.png'
]

var ImageIndex = 1
var backgroundImageContainer = document.getElementById('fixed-bg-image')

var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');

function changeImage() {
    var currentEl = (ImageIndex % 2 === 0) ? slide1 : slide2;
    var nextEl = (ImageIndex % 2 === 0) ? slide2 : slide1;

    ImageIndex = (ImageIndex + 1) % bgImages.length;

    nextEl.src = bgImages[ImageIndex];
    nextEl.style.transition = 'none';
    nextEl.style.transform = 'translateX(-100%)';

    setTimeout(() => {
        nextEl.style.transition = 'transform 1.5s ease-in-out';
        
        currentEl.classList.remove('active');
        currentEl.classList.add('exit');
        
        nextEl.classList.add('active');
        nextEl.style.transform = 'translateX(0)'; // Explicitly move it to center

        setTimeout(() => {
            currentEl.classList.remove('exit');
        }, 1500);
    }, 50);
}


setInterval(changeImage, 5000);


async function loadData() {
    try {
        const response = await fetch('./jsonImformacion.json');
        const data = await response.json();
        //Home
        const imageHome1 = document.getElementById('imageHome1');
        imageHome1.src = data.Home[0].image1;
        const textHome1 = document.getElementById('textHome1');
        textHome1.textContent = data.Home[1].text1;
        //Music
        const imageMusic1 = document.getElementById('imageMusic1');
        const textMusic1 = document.getElementById('textMusic1');
        const textMusic2 = document.getElementById('textMusic2');
        textMusic1.textContent = data.Music[0].text1;
        imageMusic1.src = data.Music[1].image1
        textMusic2.textContent = data.Music[2].text2; 
        const textMusic3 = document.getElementById('textMusic3');
        const textMusic4 = document.getElementById('textMusic4')
        const imageMusic2 = document.getElementById('imageMusic2')
        const audioMusic1 = document.getElementById('audioMusic1')
        textMusic3.textContent = data.Music[3].text3;
        textMusic4.textContent = data.Music[4].text4;
        imageMusic2.src = data.Music[5].image2;
        audioMusic1.src= data.Music[6].sound1;
        const textMusic5 = document.getElementById('textMusic5');
        const textMusic6 = document.getElementById('textMusic6');
        const imageMusic3 = document.getElementById('imageMusic3');
        const audioMusic2 = document.getElementById('audioMusic2');
        textMusic5.textContent = data.Music[7].text5;
        textMusic6.textContent = data.Music[8].text6;
        imageMusic3.src = data.Music[9].image3;
        audioMusic2.src= data.Music[10].sound2;
        const textMusic7 = document.getElementById('textMusic7');
        const textMusic8 = document.getElementById('textMusic8');
        const imageMusic4 = document.getElementById('imageMusic4');
        const audioMusic3 = document.getElementById('audioMusic3');
        textMusic7.textContent = data.Music[11].text7;
        textMusic8.textContent = data.Music[12].text8;
        imageMusic4.src = data.Music[13].image4;
        audioMusic3.src= data.Music[14].sound3;
        const textMusic9 = document.getElementById('textMusic9');
        const textMusic10 = document.getElementById('textMusic10');
        const imageMusic5 = document.getElementById('imageMusic5');
        const audioMusic4 = document.getElementById('audioMusic4');
        textMusic9.textContent = data.Music[15].text9;
        textMusic10.textContent = data.Music[16].text10;
        imageMusic5.src = data.Music[17].image5;
        audioMusic4.src= data.Music[18].sound4;
        const textMusic11 = document.getElementById('textMusic11');
        const textMusic12 = document.getElementById('textMusic12');
        const imageMusic6 = document.getElementById('imageMusic6');
        const audioMusic5 = document.getElementById('audioMusic5');
        textMusic11.textContent = data.Music[19].text11;
        textMusic12.textContent = data.Music[20].text12;
        imageMusic6.src = data.Music[21].image6;
        audioMusic5.src= data.Music[22].sound5;
        const textMusic13 = document.getElementById('textMusic13');
        const textMusic14 = document.getElementById('textMusic14');
        const imageMusic7 = document.getElementById('imageMusic7');
        const audioMusic6 = document.getElementById('audioMusic6');
        textMusic13.textContent = data.Music[23].text13;
        textMusic14.textContent = data.Music[24].text14;
        imageMusic7.src = data.Music[25].image7;
        audioMusic6.src= data.Music[26].sound6;
        const textMusic15 = document.getElementById('textMusic15');
        const textMusic16 = document.getElementById('textMusic16');
        const imageMusic8 = document.getElementById('imageMusic8');
        const audioMusic7 = document.getElementById('audioMusic7');
        textMusic15.textContent = data.Music[27].text15;
        textMusic16.textContent = data.Music[28].text16;
        imageMusic8.src = data.Music[29].image8;
        audioMusic7.src= data.Music[30].sound7;
        const textMusic17 = document.getElementById('textMusic17');
        const textMusic18 = document.getElementById('textMusic18');
        const imageMusic9 = document.getElementById('imageMusic9');
        const audioMusic8 = document.getElementById('audioMusic8');
        textMusic17.textContent = data.Music[31].text17;
        textMusic18.textContent = data.Music[32].text18;
        imageMusic9.src = data.Music[33].image9;
        audioMusic8.src= data.Music[34].sound8;
        const textMusic19 = document.getElementById('textMusic19');
        const textMusic20 = document.getElementById('textMusic20');
        const imageMusic10 = document.getElementById('imageMusic10');
        const audioMusic9 = document.getElementById('audioMusic9');
        textMusic19.textContent = data.Music[35].text19;
        textMusic20.textContent = data.Music[36].text20;
        imageMusic10.src = data.Music[37].image10;
        audioMusic9.src= data.Music[38].sound9;
        const textMusic21 = document.getElementById('textMusic21');
        const textMusic22 = document.getElementById('textMusic22');
        const imageMusic11 = document.getElementById('imageMusic11');
        const audioMusic10 = document.getElementById('audioMusic10');
        textMusic21.textContent = data.Music[39].text21;
        textMusic22.textContent = data.Music[40].text22;
        imageMusic11.src = data.Music[41].image11;
        audioMusic10.src= data.Music[42].sound10;
        const textMusic23 = document.getElementById('textMusic23');
        const textMusic24 = document.getElementById('textMusic24');
        const imageMusic12 = document.getElementById('imageMusic12');
        const audioMusic11 = document.getElementById('audioMusic11');
        textMusic23.textContent = data.Music[43].text23;
        textMusic24.textContent = data.Music[44].text24;
        imageMusic12.src = data.Music[45].image12;
        audioMusic11.src= data.Music[46].sound11;
        const textMusic25 = document.getElementById('textMusic25');
        const textMusic26 = document.getElementById('textMusic26');
        const imageMusic13 = document.getElementById('imageMusic13');
        const audioMusic12 = document.getElementById('audioMusic12');
        textMusic25.textContent = data.Music[47].text25;
        textMusic26.textContent = data.Music[48].text26;
        imageMusic13.src = data.Music[49].image13;
        audioMusic12.src= data.Music[50].sound12;
        const textMusic27 = document.getElementById('textMusic27');
        const textMusic28 = document.getElementById('textMusic28');
        const imageMusic14 = document.getElementById('imageMusic14');
        const audioMusic13 = document.getElementById('audioMusic13');
        textMusic27.textContent = data.Music[51].text27;
        textMusic28.textContent = data.Music[52].text28;
        imageMusic14.src = data.Music[53].image14;
        audioMusic13.src= data.Music[54].sound13;
        const textMusic29 = document.getElementById('textMusic29');
        const textMusic30 = document.getElementById('textMusic30');
        const imageMusic15 = document.getElementById('imageMusic15');
        const audioMusic14 = document.getElementById('audioMusic14');
        textMusic29.textContent = data.Music[55].text29;
        textMusic30.textContent = data.Music[56].text30;
        imageMusic15.src = data.Music[57].image15;
        audioMusic14.src= data.Music[58].sound14;
        const textMusic31 = document.getElementById('textMusic31');
        const textMusic32 = document.getElementById('textMusic32');
        const imageMusic16 = document.getElementById('imageMusic16');
        const audioMusic15 = document.getElementById('audioMusic15');
        textMusic31.textContent = data.Music[59].text31;
        textMusic32.textContent = data.Music[60].text32;
        imageMusic16.src = data.Music[61].image16;
        audioMusic15.src= data.Music[62].sound15;
        
        //History
        const imageHistory1 = document.getElementById('imageHistory1')
        const textHistory1 = document.getElementById('textHistory1')
        imageHistory1.src = data.History[0].image1;
        textHistory1.textContent = data.History[1].text1;
        const textHistory2 = document.getElementById('textHistory2')
        textHistory2.textContent = data.History[2].text2;
        const textHistory3 = document.getElementById('textHistory3')
        const textHistory4 = document.getElementById('textHistory4')
        textHistory3.textContent = data.History[3].text3;
        textHistory4.textContent = data.History[4].text4;
        const textHistory5 = document.getElementById('textHistory5')
        const textHistory6 = document.getElementById('textHistory6')
        textHistory5.textContent = data.History[5].text5;
        textHistory6.textContent = data.History[6].text6;
        const textHistory7 = document.getElementById('textHistory7')
        const textHistory8 = document.getElementById('textHistory8')
        textHistory7.textContent = data.History[7].text7;
        textHistory8.textContent = data.History[8].text8;
        const textHistory9 = document.getElementById('textHistory9')
        const textHistory10 = document.getElementById('textHistory10')
        textHistory9.textContent = data.History[9].text9;
        textHistory10.textContent = data.History[10].text10;
        const textHistory11 = document.getElementById('textHistory11')
        const textHistory12 = document.getElementById('textHistory12')
        textHistory11.textContent = data.History[11].text11;
        textHistory12.textContent = data.History[12].text12;
        const textHistory13 = document.getElementById('textHistory13')
        const textHistory14 = document.getElementById('textHistory14')
        textHistory13.textContent = data.History[13].text13;
        textHistory14.textContent = data.History[14].text14;
        const textHistory15 = document.getElementById('textHistory15')
        const textHistory16 = document.getElementById('textHistory16')
        textHistory15.textContent = data.History[15].text15;
        textHistory16.textContent = data.History[16].text16;
        const textHistory17 = document.getElementById('textHistory17')
        const textHistory18 = document.getElementById('textHistory18')
        textHistory17.textContent = data.History[17].text17;
        textHistory18.textContent = data.History[18].text18;
        const textHistory19 = document.getElementById('textHistory19')
        const textHistory20 = document.getElementById('textHistory20')
        textHistory19.textContent = data.History[19].text19;
        textHistory20.textContent = data.History[20].text20;
        const textHistory21 = document.getElementById('textHistory21')
        const textHistory22 = document.getElementById('textHistory22')
        textHistory21.textContent = data.History[21].text21;
        textHistory22.textContent = data.History[22].text22;
        const textHistory23 = document.getElementById('textHistory23')
        const textHistory24 = document.getElementById('textHistory24')
        textHistory23.textContent = data.History[23].text23;
        textHistory24.textContent = data.History[24].text24;
        const textHistory25 = document.getElementById('textHistory25')
        const textHistory26 = document.getElementById('textHistory26')
        textHistory25.textContent = data.History[25].text25;
        textHistory26.textContent = data.History[26].text26;
        const textHistory27 = document.getElementById('textHistory27')
        const textHistory28 = document.getElementById('textHistory28')
        textHistory27.textContent = data.History[27].text27;
        textHistory28.textContent = data.History[28].text28;






        //Indigenous

        const imageIndigenous1 = document.getElementById('imageIndigenous1');
        const textIndigenous1 = document.getElementById('textIndigenous1');
        const textIndigenous2 = document.getElementById('textIndigenous2');
        textIndigenous1.textContent = data.Indigenous[0].text1;
        imageIndigenous1.src = data.Indigenous[1].image1
        textIndigenous2.textContent = data.Indigenous[2].text2;

        const textIndigenous3 = document.getElementById('textIndigenous3');
        const textIndigenous4 = document.getElementById('textIndigenous4')
        const imageIndigenous2 = document.getElementById('imageIndigenous2')
        textIndigenous3.textContent = data.Indigenous[3].text3;
        textIndigenous4.textContent = data.Indigenous[4].text4;
        imageIndigenous2.src = data.Indigenous[5].image2;

        const textIndigenous5 = document.getElementById('textIndigenous5');
        const textIndigenous6 = document.getElementById('textIndigenous6')
        const imageIndigenous3 = document.getElementById('imageIndigenous3')
        textIndigenous5.textContent = data.Indigenous[6].text5;
        textIndigenous6.textContent = data.Indigenous[7].text6;
        imageIndigenous3.src = data.Indigenous[8].image3;

        const textIndigenous7 = document.getElementById('textIndigenous7');
        const textIndigenous8 = document.getElementById('textIndigenous8');
        const imageIndigenous4 = document.getElementById('imageIndigenous4');
        textIndigenous7.textContent = data.Indigenous[9].text7;
        textIndigenous8.textContent = data.Indigenous[10].text8;
        imageIndigenous4.src = data.Indigenous[11].image4;

        const textIndigenous9 = document.getElementById('textIndigenous9');
        const textIndigenous10 = document.getElementById('textIndigenous10');
        const imageIndigenous5 = document.getElementById('imageIndigenous5');
        textIndigenous9.textContent = data.Indigenous[12].text9;
        textIndigenous10.textContent = data.Indigenous[13].text10;
        imageIndigenous5.src = data.Indigenous[14].image5;

        const textIndigenous11 = document.getElementById('textIndigenous11');
        const textIndigenous12 = document.getElementById('textIndigenous12');
        const imageIndigenous6 = document.getElementById('imageIndigenous6');
        textIndigenous11.textContent = data.Indigenous[15].text11;
        textIndigenous12.textContent = data.Indigenous[16].text12;
        imageIndigenous6.src = data.Indigenous[17].image6;

        const textIndigenous13 = document.getElementById('textIndigenous13');
        const textIndigenous14 = document.getElementById('textIndigenous14');
        const imageIndigenous7 = document.getElementById('imageIndigenous7');
        textIndigenous13.textContent = data.Indigenous[18].text13;
        textIndigenous14.textContent = data.Indigenous[19].text14;
        imageIndigenous7.src = data.Indigenous[20].image7;


        const textIndigenous15 = document.getElementById('textIndigenous15');
        const textIndigenous16 = document.getElementById('textIndigenous16');
        const imageIndigenous8 = document.getElementById('imageIndigenous8');
        textIndigenous15.textContent = data.Indigenous[21].text15;
        textIndigenous16.textContent = data.Indigenous[22].text16;
        imageIndigenous8.src = data.Indigenous[23].image8;

        const textIndigenous17 = document.getElementById('textIndigenous17');
        const textIndigenous18 = document.getElementById('textIndigenous18');
        const imageIndigenous9 = document.getElementById('imageIndigenous9');
        textIndigenous17.textContent = data.Indigenous[24].text17;
        textIndigenous18.textContent = data.Indigenous[25].text18;
        imageIndigenous9.src = data.Indigenous[26].image9;

        const textIndigenous19 = document.getElementById('textIndigenous19');
        const textIndigenous20 = document.getElementById('textIndigenous20');
        const imageIndigenous10 = document.getElementById('imageIndigenous10');
        textIndigenous19.textContent = data.Indigenous[27].text19;
        textIndigenous20.textContent = data.Indigenous[28].text20;
        imageIndigenous10.src = data.Indigenous[29].image10;

        const textIndigenous21 = document.getElementById('textIndigenous21');
        const textIndigenous22 = document.getElementById('textIndigenous22');
        const imageIndigenous11 = document.getElementById('imageIndigenous11');
        textIndigenous21.textContent = data.Indigenous[30].text21;
        textIndigenous22.textContent = data.Indigenous[31].text22;
        imageIndigenous11.src = data.Indigenous[32].image11;

        const textIndigenous23 = document.getElementById('textIndigenous23');
        const textIndigenous24 = document.getElementById('textIndigenous24');
        const imageIndigenous12 = document.getElementById('imageIndigenous12');
        textIndigenous23.textContent = data.Indigenous[33].text23;
        textIndigenous24.textContent = data.Indigenous[34].text24;
        imageIndigenous12.src = data.Indigenous[35].image12;

        const textIndigenous25 = document.getElementById('textIndigenous25');
        const textIndigenous26 = document.getElementById('textIndigenous26');
        const imageIndigenous13 = document.getElementById('imageIndigenous13');
        textIndigenous25.textContent = data.Indigenous[36].text25;
        textIndigenous26.textContent = data.Indigenous[37].text26;
        imageIndigenous13.src = data.Indigenous[38].image13;

        const textIndigenous27 = document.getElementById('textIndigenous27');
        const textIndigenous28 = document.getElementById('textIndigenous28');
        const imageIndigenous14 = document.getElementById('imageIndigenous14');
        textIndigenous27.textContent = data.Indigenous[39].text27;
        textIndigenous28.textContent = data.Indigenous[40].text28;
        imageIndigenous14.src = data.Indigenous[41].image14;
        
        const textIndigenous29 = document.getElementById('textIndigenous29');
        const textIndigenous30 = document.getElementById('textIndigenous30');
        const imageIndigenous15 = document.getElementById('imageIndigenous15');
        textIndigenous29.textContent = data.Indigenous[42].text29;
        textIndigenous30.textContent = data.Indigenous[43].text30;
        imageIndigenous15.src = data.Indigenous[44].image15;

        const textIndigenous31 = document.getElementById('textIndigenous31');
        const textIndigenous32 = document.getElementById('textIndigenous32');
        const imageIndigenous16 = document.getElementById('imageIndigenous16');
        textIndigenous31.textContent = data.Indigenous[45].text31;
        textIndigenous32.textContent = data.Indigenous[46].text32;
        imageIndigenous16.src = data.Indigenous[47].image16;
         
        //MapOfColombia
        const imageMapOfColombia1 = document.getElementById('imageMapOfColombia1')
        const textMapOfColombia1 = document.getElementById('textMapOfColombia1')
        imageMapOfColombia1.src = data.MapOfColombia[0].image1;   
        textMapOfColombia1.textContent = data.MapOfColombia[1].text1;
        const textMapOfColombia2 = document.getElementById('textMapOfColombia2')
        textMapOfColombia2.textContent = data.MapOfColombia[2].text2;
        const imageMapOfColombia2 =  document.getElementById('imageMapOfColombia2')
        imageMapOfColombia2.src = data.MapOfColombia[3].image2;

        //Resources
        const imageResources1 = document.getElementById('imageResources1')
        const textResources1 = document.getElementById('textResources1')
        imageResources1.src = data.Resources[0].image1;
        textResources1.textContent = data.Resources[1].text1;
        const textResources2 = document.getElementById('textResources2')
        textResources2.textContent = data.Resources[2].text2;

        const textResources3 = document.getElementById('textResources3')
        const textResources4 = document.getElementById('textResources4')
        const textResources5 = document.getElementById('textResources5')
        const textResources6 = document.getElementById('textResources6')
        const textResources7 = document.getElementById('textResources7')
        const textResources8 = document.getElementById('textResources8')    
        const textResources9 = document.getElementById('textResources9')
        const textResources10 = document.getElementById('textResources10')

        const textResources11 = document.getElementById('textResources11')
        const textResources12 = document.getElementById('textResources12')
        const textResources13 = document.getElementById('textResources13')
        const textResources14 = document.getElementById('textResources14')
        const textResources15 = document.getElementById('textResources15')
        const textResources16 = document.getElementById('textResources16')    
        const textResources17 = document.getElementById('textResources17')
        const textResources18 = document.getElementById('textResources18')
        const textResources19 = document.getElementById('textResources19')
        const textResources20 = document.getElementById('textResources20')



        textResources3.href = data.Resources[3].text3;
        textResources3.textContent = data.Resources[3].text3;
        textResources4.href = data.Resources[4].text4;
        textResources4.textContent = data.Resources[4].text4;
        textResources5.href = data.Resources[5].text5;
        textResources5.textContent = data.Resources[5].text5;
        textResources6.href = data.Resources[6].text6;
        textResources6.textContent = data.Resources[6].text6;
        textResources7.href = data.Resources[7].text7;
        textResources7.textContent = data.Resources[7].text7;
        textResources8.href = data.Resources[8].text8;
        textResources8.textContent = data.Resources[8].text8;
        textResources9.href = data.Resources[9].text9;
        textResources9.textContent = data.Resources[9].text9;
        textResources10.href = data.Resources[10].text10;
        textResources10.textContent = data.Resources[10].text10;
        textResources11.href = data.Resources[11].text11;
        textResources11.textContent = data.Resources[11].text11;
        textResources12.href = data.Resources[12].text12;
        textResources12.textContent = data.Resources[12].text12;
        textResources13.href = data.Resources[13].text13;
        textResources13.textContent = data.Resources[13].text13;
        textResources14.href = data.Resources[14].text14;
        textResources14.textContent = data.Resources[14].text14;
        textResources15.href = data.Resources[15].text15;
        textResources15.textContent = data.Resources[15].text15;
        textResources16.href = data.Resources[16].text16;
        textResources16.textContent = data.Resources[16].text16;
        textResources17.href = data.Resources[17].text17;
        textResources17.textContent = data.Resources[17].text17;
        textResources18.href = data.Resources[18].text18;
        textResources18.textContent = data.Resources[18].text18;

        textResources19.href = data.Resources[19].text19;
        textResources19.textContent = data.Resources[19].text19;

        textResources20.href = data.Resources[20].text20;
        textResources20.textContent = data.Resources[20].text20;
        
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
}
loadData();

function iniciarPagina() {
    console.log("Se inicia la pagina")
    sections.forEach(section => {
        section.style.display = 'none';
        if (section.id === "Home") {
            sectionHome.style.display = "flex"
            currentSectionState = section.id
        }
    })
}

function showSection(sectionId) {
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';       
        currentSectionState = targetSection.id   
        console.log(currentSectionState)       
    }
    document.getElementById("idMiniMenuImage").classList.toggle("new-image");
}




function showSection2(sectionId) {
    sections.forEach(section => {
        section.style.display = 'none';
    });
    sectionHome.style.display = "flex"
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';       
        currentSectionState = targetSection.id   
        console.log(currentSectionState)       
    }
    document.getElementById("idMiniMenuImage").classList.toggle("new-image");
}

function showSection3(sectionId) {
    sections.forEach(section => {
        section.style.display = 'none';
    });
    sectionMusic.style.display = "flex"
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';       
        currentSectionState = targetSection.id   
        console.log(currentSectionState)       
    }
    document.getElementById("idMiniMenuImage").classList.toggle("new-image");
}

function showSection4(sectionId) {
    sections.forEach(section => {
        section.style.display = 'none';
    });
    sectionHistory.style.display = "flex"
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';       
        currentSectionState = targetSection.id   
        console.log(currentSectionState)       
    }
    document.getElementById("idMiniMenuImage").classList.toggle("new-image");
}

function showSection5(sectionId) {
    sections.forEach(section => {
        section.style.display = 'none';
    });
    sectionIndigenous.style.display = "flex"
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';       
        currentSectionState = targetSection.id   
        console.log(currentSectionState)       
    }
    document.getElementById("idMiniMenuImage").classList.toggle("new-image");
}   

function showSection6(sectionId) {
    sections.forEach(section => {
        section.style.display = 'none';
    });
    sectionMapOfColombia.style.display = "flex"
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';       
        currentSectionState = targetSection.id   
        console.log(currentSectionState)       
    }
    document.getElementById("idMiniMenuImage").classList.toggle("new-image");
}

function showSection7(sectionId) {
    sections.forEach(section => {
        section.style.display = 'none';
    });
    sectionResources.style.display = "flex"
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';       
        currentSectionState = targetSection.id   
        console.log(currentSectionState)       
    }
    document.getElementById("idMiniMenuImage").classList.toggle("new-image");
}






function showSectionMiniMenu(sectionId) {
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';       
        miniMenuSection.style.display = "none"
        currentSectionState = targetSection.id   
        console.log(currentSectionState)       
    }
}

window.addEventListener("load", iniciarPagina)