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

function setupPropertyCardFlips() {
    document.querySelectorAll(".property-card").forEach((card) => {
        const toggleFlip = () => card.classList.toggle("is-flipped");
        card.querySelectorAll(".flip-toggle").forEach((el) => {
            el.addEventListener("click", (event) => {
                console.log("Flip toggle clicked", el);
                event.preventDefault();
                event.stopPropagation();
                toggleFlip();
            });
        });
    });
}

function syncPropertyCardHeights() {
    console.log("Syncing property card heights");
    if (window.matchMedia("(max-width: 768px)").matches) {
        console.log("Mobile view detected, syncing heights for front and back of cards");
        document.querySelectorAll(".property-card").forEach((card) => {
            const inner = card.querySelector(".property-card-inner");
            const front = card.querySelector(".property-card-front");
            console.log(`front height : ${front.scrollHeight}px, front.style.display: ${front.style.display}`);
            const back = card.querySelector(".property-card-back");
            console.log(`front height : ${front.scrollHeight}px`);
            if (!front || !back) return;
            back.style.height = front.scrollHeight + "px";
        });
        return;
    }

    document.querySelectorAll(".property-card").forEach((card) => {
        const inner = card.querySelector(".property-card-inner");
        if (!inner) return;

        const front = card.querySelector(".property-card-front");
        const back = card.querySelector(".property-card-back");
        if (!front || !back) return;

        const frontHeight = front.scrollHeight;
        inner.style.height = front.height + "px";
        back.style.height = front.height + "px";

        console.log(`Front height: ${frontHeight}px, Back height: ${back.offsetHeight}px, inner height: ${card.offsetHeight}px`);
    });
}

document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", () => {
          setupPropertyCardFlips();
          syncPropertyCardHeights();
          window.addEventListener("resize", syncPropertyCardHeights);
          window.addEventListener("load", syncPropertyCardHeights);
      })
    : (setupPropertyCardFlips(), syncPropertyCardHeights(), window.addEventListener("resize", syncPropertyCardHeights), window.addEventListener("load", syncPropertyCardHeights));
