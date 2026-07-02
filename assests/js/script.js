document.querySelectorAll(".popup-form-close , .popup-form-overlay").forEach((e) => {
        e.addEventListener("click", () => {
            document.querySelector(".section-popup-form").style.display = "none";
            changeProjectId(6056);
        });
    }),
    // window.addEventListener("load", () => {
    //     setTimeout(() => {
    //         console.log("hello from 2");
    //         (document.querySelector(".popupform-subheading").innerHTML = "Limited Time Offer!"),
    //             (document.querySelector(".section-popup-form").style.display = "block");
    //     }, 4e3);
    // }),
    document.querySelectorAll(".popup-trigger").forEach((e) => {
        e.addEventListener("click", (t) => {
            t.preventDefault(),
                (document.querySelector(".popupform-subheading").innerHTML = e.getAttribute("data-subheading")),
                (document.querySelector(".section-popup-form").style.display = "block");
        });
    });
const form = document.getElementById("stickyForm"),
    sideformVisible = 0.3 * window.innerHeight;
function toggleMoreCards() {
    let e = document.getElementById("additionalCards"),
        t = document.querySelector(".continue-exploring-card"),
        r = document.getElementsByClassName("continue-text")[0];
    window.innerWidth > 768 && !t.classList.contains("moved-to-bottom") && t.classList.add("moved-to-bottom"),
        e.classList.toggle("show"),
        (r.innerHTML = "View More Properties" === r.innerHTML ? "View Less Properties" : "View More Properties"),
        e.classList.contains("show") &&
            setTimeout(() => {
                t.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 100);
}
window.addEventListener("scroll", () => {
    window.innerWidth <= 768 && form.classList.add("sticky");
});



    let currentProjectId = "6056";
function showModal(e = "Enquire Now") {
    const t = document.getElementById("modalFormOverlay"),
        o = document.getElementById("modalFormContainer"),
        n = document.getElementById("popup-form-heading");
        n.innerHTML = e;
    t &&
        o &&
        n &&
        (n.innerHTML = e,
        t.classList.add("active"),
        setTimeout(() => {
            o.classList.add("active");
        }, 100));
}
function closeModal() {
    const e = document.getElementById("modalFormOverlay"),
        t = document.getElementById("modalFormContainer");
    e &&
        t &&
        (t.classList.remove("active"),
        setTimeout(() => {
            e.classList.remove("active");
        }, 300));
}
function changeProjectId(e) {
    currentProjectId = e;
}
document.addEventListener("DOMContentLoaded", function () {
    const e = document.getElementById("modalFormOverlay"),
        t = document.getElementById("modalFormCloseBtn"),
        o = document.getElementById("ModalFormSlug2");
    t && t.addEventListener("click", closeModal), e && e.addEventListener("click", closeModal);
    const n = document.getElementById("modalFormContainer");
    n &&
        n.addEventListener("click", function (e) {
            e.stopPropagation();
        }),
        o &&
            o.addEventListener("submit", function (e) {
                e.preventDefault();
                // alert("Hello");
                const t = {
                    name: this.querySelector(".form-name").value,
                    country: this.querySelector(".form-country").value,
                    number: this.querySelector(".form-number").value,
                };
            });
    [
        { selector: ".card1", title: "Godrej Elaris", projectId: 5780 },
        { selector: ".card2", title: "Godrej Kharadi", projectId: 6023 },
        { selector: ".card3", title: "The Aqua Retreat", projectId: 6052 },
        { selector: ".olaRide", title: "Confirm OLA ride book", projectId: 6056  },
        { selector: ".V360", title: "Show all V360 listings", projectId: 6056  },
        { selector: ".ivr-siteVisitBtn", title: "Visit Site", projectId: 6056  },
        
    ].forEach(({ selector: e, title: t, projectId: o }) => {
        document.querySelectorAll(e).forEach((e) => {
            e.addEventListener("click", function (e) {
                e.preventDefault(), changeProjectId(o);
                if (
                    e.currentTarget.classList.contains("olaRide") ||
                    e.currentTarget.classList.contains("V360") ||
                    e.currentTarget.classList.contains("ivr-siteVisitBtn")
                ) {
                    n.querySelector(".form-project").style.display = "block";
                }
                else {
                    n.querySelector(".form-project").style.display = "none";
                }
                showModal(t);
            });
        });
    }),
        document.querySelectorAll(".enquire-now-btn").forEach((e) => {
            e.addEventListener("click", function (e) {
                e.preventDefault();
                const t = e.target.closest(".property-card").dataset.projectId;
                t && changeProjectId(t), showModal("Enquire Now");
            });
        }),
        document.querySelectorAll(".view-button:not(.enquire-now-btn)").forEach((e) => {
            e.addEventListener("click", function (e) {
                e.preventDefault(), showModal("Enquire Now");
            });
        }),
        setTimeout(() => {
            console.log("hello from 1");
            console.log(document.querySelector(".section-popup-form").style.display === "block");
            if (document.querySelector(".section-popup-form").style.display === "block") return;
            console.log("hello from 2");
            document.querySelector(".popupform-subheading").innerHTML = "Limited Time Offer!";
            document.querySelector(".section-popup-form").style.display = "block";
            n.querySelector(".form-project").style.display = "block";
            showModal("Enquire Now");
        }, 4e3);
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".form-project").forEach((e) => {
        e.addEventListener("change", function () {
            const t = this.value;
            changeProjectId(t);
        });
    })
});

// document.addEventListener("DOMContentLoaded",()=>{
//     document.querySelector(".readMoreLink").addEventListener("click",(e)=>{
//         e.preventDefault();
//         const clampText = document.querySelector(".clampText");
//         if (clampText.style.display!="block") {
//             clampText.style.display = "block";
//             e.target.innerHTML = "Show Less";
//         }
//         else {
//             clampText.style.display = "-webkit-box";
//             e.target.innerHTML = "Show More";
//         }
//     })
// })

function repositionWidget(){let t=document.querySelector("#launcher"),e=window.matchMedia("(max-width:768px)").matches?"60px":"0px";if(t){t.style.setProperty("bottom",e,"important"),t.style.setProperty("left","5px","important"),t.style.setProperty("right","auto","important"),t.style.setProperty("transform","none","important");let n=document.querySelector("iframe[title*='Chat']");n&&n.parentElement&&(n.parentElement.style.setProperty("bottom",e,"important"),n.parentElement.style.setProperty("left","5px","important"),n.parentElement.style.setProperty("right","auto","important"))}}function forceRepositioning(){let t=window.matchMedia("(max-width:768px)").matches?"0px":"60px";["#launcher","[data-testid='launcher']",".zEWidget-launcher","iframe[title*='Chat']"].forEach((e=>{let n=document.querySelector(e);if(n){let e=n.parentElement||n;e.style.setProperty("bottom",t,"important"),e.style.setProperty("left","5px","important"),e.style.setProperty("right","auto","important"),e.style.setProperty("transform","none","important")}}))}function loadZeSnippet(){setTimeout((function(){var t=document.createElement("script");t.id="ze-snippet",t.src="https://static.zdassets.com/ekr/snippet.js?key=94b386d0-0e8f-40fe-b5ff-a939cb332fbc",document.head.appendChild(t),t.onload=function(){var t=setInterval((function(){if("undefined"!=typeof zE&&document.querySelector("#launcher")&&(clearInterval(t),repositionWidget(),zE("webWidget:on","open",(function(){setTimeout(repositionWidget,100)})),zE("webWidget:on","close",(function(){setTimeout(repositionWidget,100),setTimeout(forceRepositioning,500)})),zE("webWidget:on","minimize",(function(){setTimeout(repositionWidget,100),setTimeout(forceRepositioning,500)})),zE("webWidget:on","maximize",(function(){setTimeout(repositionWidget,100)})),zE("webWidget:on","launcherClick",(function(){setTimeout(repositionWidget,100)})),setInterval(forceRepositioning,2e3),window.MutationObserver)){const t=new MutationObserver((function(t){t.forEach((function(t){"attributes"!==t.type||"style"!==t.attributeName&&"class"!==t.attributeName||setTimeout(repositionWidget,50)}))}));setTimeout((function(){let e=document.querySelector("#launcher");e&&(t.observe(e,{attributes:!0,subtree:!0}),e.parentElement&&t.observe(e.parentElement,{attributes:!0,subtree:!0}))}),1e3)}}),100)}}),4e3)}function toggleTab(t){document.querySelectorAll('.tab input[type="checkbox"]').forEach((function(e){e.id!==t&&(e.checked=!1)}))}function addPersistentCSS(){const t=document.createElement("style");t.textContent="\n        #launcher,\n        [data-testid='launcher'],\n        .zEWidget-launcher {\n            bottom: 0px !important;\n            left: 5px !important;\n            right: auto !important;\n            transform: none !important;\n        }\n        \n        /* Target the iframe container as well */\n        iframe[title*=\"Chat\"] {\n            position: fixed !important;\n            bottom: 0px !important;\n            left: 5px !important;\n            right: auto !important;\n        }\n\n        @media (max-width:768px) {\n            #launcher,\n        [data-testid='launcher'],\n        .zEWidget-launcher {\n            bottom: 60px !important;\n            left: 5px !important;\n            right: auto !important;\n            transform: none !important;\n        }\n        \n        /* Target the iframe container as well */\n        iframe[title*=\"Chat\"] {\n            position: fixed !important;\n            bottom: 60px !important;\n            left: 5px !important;\n            right: auto !important;\n        }\n        }\n    ",document.head.appendChild(t)}addPersistentCSS(),loadZeSnippet(),window.addEventListener("resize",repositionWidget)
