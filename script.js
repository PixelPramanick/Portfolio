const mobileMenuLink = document.querySelector("#mobileMenuLink")
const mobileNav = document.querySelector("#mobileNav")
console.log(mobileMenuLink);
mobileMenuLink.addEventListener("click", function(){
    mobileNav.classList.toggle("active")
})

// tittle, thumbnail link, description, img1, img2, vid3, img4
const data = [
    ['Social Media', 'https://lh3.googleusercontent.com/pw/ADCreHcEtPpMraLQM95PvEObbU4wuzgTsrGCk6GUXgvetL_li-rhily45F03KqaJwM-cX9OdWk4BER0aiygdAxb3A4VdHDMmxy8BOF4WrE8LXG85ixKgKoo=w2400',
     'Social media design is the art of creating visually compelling and strategically crafted graphics for online platforms. It goes beyond aesthetics, serving as a powerful tool to convey brand identity, engage audiences, and drive meaningful interactions. From eye-catching visuals that stop the scroll to cohesive brand storytelling, social media design is the key to making a lasting impact in the fast-paced and visually driven landscape of digital communication.', 
     'https://lh3.googleusercontent.com/pw/ADCreHdw0eDDOySKA14yPHrA9wxF4Z2qFHM-lwao1WhUEA2sAQaavxNy3CZh2S3-WLJTDbCIx7Lsp4jgs8a9NbNHu05hZMTV3UhQYUSiafSU8OeKcDug6ZY=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHfdfExcoZWhqGjOSjJZ_K6uaerqi6DOwAlAuS-3WYC4VdLUNV1PWsTs_tA29Yc5haCXHrL7pwwGlr7EHJ0AXEJCDcBsFVF2KdSeEtOu79Yvj12x2nk=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHeoQFc4UaoLA89S1uvTLcMaRbpCesu7SuyVFUj1tg-4ag6NWV59cps6SZ4vd4BAOQYH-03SfRmUeKtof5vMZQGfciMNkCB-cCD1VkBtiSydc8qr7Xo=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHd6EjqfNMCWg2oN-FA9DwfMxuEi3ukgAWbYPOq2hjwZm9fO7IFm1_90NfwpjOCsnxT74F_lmueU2-t9fU0D2HnEG3YFuXPxmbh7pvTQ6cESS72psG8=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHfpGtog_d1pVgvCiOtPW5deKv9qaDEo6z3Cb9i4kyFHYIdOvds60hMvBjsInbCr1lYCzZ9rmDnlhWmmyh2efB894muwZlKca5B8rwd06-YY6s09xTI=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHc_E8Txj0FulTVeR3HuzvgwxKW1vTxDs1YgtMp5OKs8s-Lo7uqWpg5VjU_l8YqVqDBOt_KRPtr_c7nbgFuRd0wowwcpW5moQB6dv86O9aNBZYL4eCQ=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHdPy4nL_diFSKF7p4eGGOocDO3e7z6P4LcKDOfLPRVa7mo_07DFNSOJZsT3RBeJJFAI03X5aIvCiu6hXS8nTerC83kltq4drFXfsbB8hoHSPAwi0l4=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHePuW2JdDRB6rgqXAHGI7HgSFGSFTsDB95PpAwKixXyz-yCdt-Q8Bg9vU-IzPxqg2iKS9pIxOqy2ufUZyDe-jmkZGZMbiEgyD1hAFPUXkWxfpIyPiQ=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHcW7XhaNIVSXu-Z96xWM-qfUKm3WgXOLMb2oQCVsn9YTUqlVu3J-Aage3UzYqWga2djknVG29ied6NaJhWFal3OcmTni6-brK1Pt7S64OJ7itkmDy0=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHdqtPtpZr6hKGgTnXc9kDqZbYZ-WFO_0yhYsbTXbQq00WYLe95VPdhQRxhdUe1EktWXwdMm96svyUkYRKs20eem4PNOK4L2rcKp4cQDl-ywt8UBtMA=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHcDzDbF0TmVvfGIqQX6d2pUiq3YU65Ez8kweZx33hMGCiceJUE4AQdFvWzzh658WMC2uHQIDGn5tGuaR2oqfBMoEFuGQDnFMNqa4r1qSsTUrq76F_I=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHdAMmvOx5-bX2L0pwlT6m8VUDTKkQD5N9T_fMjP3Slv65Kb556ejOW4XFm_jk-K9zvoCfIHzbDwJOfFp952ASx3KyMb7gosI0B-BtmODhENK3ZMm3E=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHelGU9DoAEXwHJlGzDdnshkvEG3frP-k8UoDwee1-HD__s1nKk-N3w86kMbGesYA5acqMjtN__-1cwtAMVkiNQNhmTGoNbvyVVjoHbmUcuBqOvpmOs=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHcQsdwzGd8bpN9aa5m1Bxm8qeWDxHda1j2cJ0Brd3PeWhTHI2YxyxuDo03eSaAUcTg7MhGfOG1ZA84W2PUFpqiTal-Z89RTm9LMBZgZgyyoxWtBQ-E=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHc2lwMpxCwHvrwe2XMH_vZHHfm4RAHqYK2N20GtYUew3mYc9pwczy4WVRwoPkXiMBOowv0CPnC4-paUffFr_agn5kxlr3J_pp-7E1BQwPR86cF5NaU=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHcBLsypAV-xPz9eKWQ3iR5LLkRiwfeOKKHqTbXgOVzRraWXvsmWP1RLnBFNTIT5n68gLOFLUTcIvGx5r9SN6yJzZA5wLRWFTBOjVPaTDkTPhudra9k=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHcoZVLONEYgPWR9a0_CaOQPtJSA2hrJDmY1ubhvfeIrtbnr19-MVPHTVFjiASGMMNwnIJGz8CafQED0EStvOzeaiCX7SXZMwouFCBktEquyLC8pJaE=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHc6MJnR56n_EZp5UyRmk9rcIIBSGu4T8f9J2MJb8xl9xWvOTnjQzz5C8SUyKPWg2m9300MuPUPZx42bls_BrMBW_ZNGFtaXqRjCJm7MwoOearLo4_Q=w2400'
     ],
    ['Social Media', 'https://lh3.googleusercontent.com/pw/ADCreHcEtPpMraLQM95PvEObbU4wuzgTsrGCk6GUXgvetL_li-rhily45F03KqaJwM-cX9OdWk4BER0aiygdAxb3A4VdHDMmxy8BOF4WrE8LXG85ixKgKoo=w2400',
     'Social media design is the art of creating visually compelling and strategically crafted graphics for online platforms. It goes beyond aesthetics, serving as a powerful tool to convey brand identity, engage audiences, and drive meaningful interactions. From eye-catching visuals that stop the scroll to cohesive brand storytelling, social media design is the key to making a lasting impact in the fast-paced and visually driven landscape of digital communication.', 
     'https://lh3.googleusercontent.com/pw/ADCreHdw0eDDOySKA14yPHrA9wxF4Z2qFHM-lwao1WhUEA2sAQaavxNy3CZh2S3-WLJTDbCIx7Lsp4jgs8a9NbNHu05hZMTV3UhQYUSiafSU8OeKcDug6ZY=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHfdfExcoZWhqGjOSjJZ_K6uaerqi6DOwAlAuS-3WYC4VdLUNV1PWsTs_tA29Yc5haCXHrL7pwwGlr7EHJ0AXEJCDcBsFVF2KdSeEtOu79Yvj12x2nk=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHeoQFc4UaoLA89S1uvTLcMaRbpCesu7SuyVFUj1tg-4ag6NWV59cps6SZ4vd4BAOQYH-03SfRmUeKtof5vMZQGfciMNkCB-cCD1VkBtiSydc8qr7Xo=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHd6EjqfNMCWg2oN-FA9DwfMxuEi3ukgAWbYPOq2hjwZm9fO7IFm1_90NfwpjOCsnxT74F_lmueU2-t9fU0D2HnEG3YFuXPxmbh7pvTQ6cESS72psG8=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHfpGtog_d1pVgvCiOtPW5deKv9qaDEo6z3Cb9i4kyFHYIdOvds60hMvBjsInbCr1lYCzZ9rmDnlhWmmyh2efB894muwZlKca5B8rwd06-YY6s09xTI=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHc_E8Txj0FulTVeR3HuzvgwxKW1vTxDs1YgtMp5OKs8s-Lo7uqWpg5VjU_l8YqVqDBOt_KRPtr_c7nbgFuRd0wowwcpW5moQB6dv86O9aNBZYL4eCQ=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHdPy4nL_diFSKF7p4eGGOocDO3e7z6P4LcKDOfLPRVa7mo_07DFNSOJZsT3RBeJJFAI03X5aIvCiu6hXS8nTerC83kltq4drFXfsbB8hoHSPAwi0l4=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHePuW2JdDRB6rgqXAHGI7HgSFGSFTsDB95PpAwKixXyz-yCdt-Q8Bg9vU-IzPxqg2iKS9pIxOqy2ufUZyDe-jmkZGZMbiEgyD1hAFPUXkWxfpIyPiQ=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHcW7XhaNIVSXu-Z96xWM-qfUKm3WgXOLMb2oQCVsn9YTUqlVu3J-Aage3UzYqWga2djknVG29ied6NaJhWFal3OcmTni6-brK1Pt7S64OJ7itkmDy0=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHdqtPtpZr6hKGgTnXc9kDqZbYZ-WFO_0yhYsbTXbQq00WYLe95VPdhQRxhdUe1EktWXwdMm96svyUkYRKs20eem4PNOK4L2rcKp4cQDl-ywt8UBtMA=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHcDzDbF0TmVvfGIqQX6d2pUiq3YU65Ez8kweZx33hMGCiceJUE4AQdFvWzzh658WMC2uHQIDGn5tGuaR2oqfBMoEFuGQDnFMNqa4r1qSsTUrq76F_I=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHdAMmvOx5-bX2L0pwlT6m8VUDTKkQD5N9T_fMjP3Slv65Kb556ejOW4XFm_jk-K9zvoCfIHzbDwJOfFp952ASx3KyMb7gosI0B-BtmODhENK3ZMm3E=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHelGU9DoAEXwHJlGzDdnshkvEG3frP-k8UoDwee1-HD__s1nKk-N3w86kMbGesYA5acqMjtN__-1cwtAMVkiNQNhmTGoNbvyVVjoHbmUcuBqOvpmOs=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHcQsdwzGd8bpN9aa5m1Bxm8qeWDxHda1j2cJ0Brd3PeWhTHI2YxyxuDo03eSaAUcTg7MhGfOG1ZA84W2PUFpqiTal-Z89RTm9LMBZgZgyyoxWtBQ-E=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHc2lwMpxCwHvrwe2XMH_vZHHfm4RAHqYK2N20GtYUew3mYc9pwczy4WVRwoPkXiMBOowv0CPnC4-paUffFr_agn5kxlr3J_pp-7E1BQwPR86cF5NaU=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHcBLsypAV-xPz9eKWQ3iR5LLkRiwfeOKKHqTbXgOVzRraWXvsmWP1RLnBFNTIT5n68gLOFLUTcIvGx5r9SN6yJzZA5wLRWFTBOjVPaTDkTPhudra9k=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHcoZVLONEYgPWR9a0_CaOQPtJSA2hrJDmY1ubhvfeIrtbnr19-MVPHTVFjiASGMMNwnIJGz8CafQED0EStvOzeaiCX7SXZMwouFCBktEquyLC8pJaE=w2400',
     'https://lh3.googleusercontent.com/pw/ADCreHc6MJnR56n_EZp5UyRmk9rcIIBSGu4T8f9J2MJb8xl9xWvOTnjQzz5C8SUyKPWg2m9300MuPUPZx42bls_BrMBW_ZNGFtaXqRjCJm7MwoOearLo4_Q=w2400'
     ],
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
