const mobileMenuLink = document.querySelector("#mobileMenuLink")
const mobileNav = document.querySelector("#mobileNav")
console.log(mobileMenuLink);
mobileMenuLink.addEventListener("click", function(){
    mobileNav.classList.toggle("active")
})

// tittle, thumbnail link, description, img1, img2, vid3, img4
const data = [
    ['Title', '01.jpg', 'Description', '01.jpg', '01.jpg', '01.jpg', "https://youtu.be/-RWZcDUVg2I?si=nkMvZg_PT_Xq2oTE"]
]
const projectThumbs = document.querySelector("#projectThumbs")
let projects = ''
for(let i in data){
    let project = `
    <div class="project" onclick="openProject(${i})">
        <div>
            <div class="project-image">
                <div class="intrinsic">
                    <div class="content-fill" style="overflow: hidden;">
                        <img style="font-size: 0px; left: -11.9386px; top: 0px; width: 372.877px; height: 349px; position: relative;" src="${data[i][1]}">
                    </div>
                </div>
            </div>
            <div class="project-title">${data[i][0]}</div>
        </div>
    </div>`
    projects += project
}
projectThumbs.querySelector(".wrapper").innerHTML = projects

const popupBg = document.querySelector('.popupBg')
const openProject = (idx) => {
    popupBg.classList.add('active')
    document.body.classList.add('no-scroll')
    popupBg.querySelector('h1').innerHTML = data[idx][0]
    popupBg.querySelector('p').innerHTML = data[idx][2]
    let popupContent = ``
    for(let i in data[idx]){
        if(i <= 2){
            continue
        }
        if(data[idx][i].includes('youtu.be')){
            let code = 'https://www.youtube.com/embed/' + data[idx][i].split("https://youtu.be/")[1].split("?")[0]
            popupContent += `
                <div class="imgBg">
                <iframe src="${code}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            `
        } else {
            popupContent += `
                <div class="imgBg">
                <img src="${data[idx][i]}" />
                </div>
            `
        }
    }
    popupBg.querySelector(".popupContent").innerHTML = popupContent
}
popupBg.querySelector('.fa-circle-xmark').addEventListener('click', ()=>{
    popupBg.classList.remove('active')
    document.body.classList.remove('no-scroll')
})