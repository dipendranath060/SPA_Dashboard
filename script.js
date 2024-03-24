let sidebar = document.getElementById("sidebar")
let items = document.getElementsByClassName("menu-item")
let titles = document.getElementsByClassName("menu-title")
let user = document.getElementById("user")
let menu = document.getElementById("menu")
let dropdown = document.getElementsByClassName("dropdown")
let main = document.getElementById("main")
let dropdownitem = document.querySelectorAll(".dropdownlist-item")
let theme = document.querySelector("#theme")
let logo = document.querySelector("#logo")
let body = document.getElementById("body")
let lbl = document.getElementsByTagName("label")
let bimg = document.getElementById("blogimg")
let headings = document.querySelectorAll(".section-title")
let subheading = document.querySelectorAll(".subtitle")
let topmenu = document.getElementById("menu-top")
let forms = document.querySelectorAll(".add-form")
let listtable = document.querySelector("#table-list")
let recent = document.querySelectorAll(".recent")
let text = document.querySelectorAll(".text-black")
let userdrop = document.querySelectorAll(".user-dropdown")
let breadcrumb = document.querySelectorAll(".breadcrumb-main")
let active = document.querySelectorAll(".active")
let passicon = document.querySelectorAll(".pass-icon")
let pass = document.querySelectorAll(".pass")
let before= document.querySelectorAll(".breadcrumb-item")

let isMenuactive = false

if (menu) {
    menu.addEventListener("click", menu_toggler)
}
if (!localStorage.getItem("sidebarState")) {
    localStorage.setItem("sidebarState", "collapsed");
}

document.addEventListener("DOMContentLoaded", function () {
    const sidebarState = localStorage.getItem("sidebarState");
    if (sidebarState == "expanded") {
        menu_toggler();
        
    }
});




// website theme
if (theme) {
    theme.addEventListener("click", theme_change)
}

if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
}

document.addEventListener("DOMContentLoaded", function () {
    const theme = localStorage.getItem("theme");
    if (theme == "dark") {
        theme_change();
        localStorage.setItem("theme","dark")
    }
});


function theme_change() {
    // theme icon
    let themeicon = theme.getAttribute("src")
    if (themeicon == "./icons/half-moon.png") {
        theme.setAttribute("src", "./icons/bulb.png")
    }
    else {
        theme.setAttribute("src", "./icons/half-moon.png")
    }

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }


    // body background
    body.classList.toggle("bg-dark")

    for (let a of userdrop) {
        a.classList.toggle("bg-dark")
    }
    // User textcolor
    if (user) {
        user.classList.toggle("text-white")
    }

    if (text) {
        for (let a of text) {
            ['text-white', 'text-black'].map((v) => a.classList.toggle(v))
        }
    }

    // Breadcrumb
    for (let a of breadcrumb) {
        ['bg-white', 'bg-dark', 'border', 'border-white'].map((v) => a.classList.toggle(v))
    }
    for(let a of before){
        a.classList.toggle("color")
    }
    for (let a of active) {
        a.classList.toggle("text-white")
    }




    // form label color
    for (let a of lbl) {
        a.classList.toggle("text-white")
    }
    if (bimg) {
        bimg.classList.toggle("text-white")
    }

    // table dark
    if (listtable) {
        ['table-dark', 'bg-white'].map((v) => listtable.classList.toggle(v))
        let row = listtable.getElementsByTagName("tr")
        for (let i = 1; i < row.length; i++) {
            if (i % 2 == 1) {
                row[i].classList.toggle("tablerow-dark")
            }
        }
    }

    // recent dark
    if (recent) {
        for (let a of recent) {
            ['bg-white', 'border', 'border-white'].map((v) => a.classList.toggle(v))
        }
    }

    // headings color
    if (headings) {
        for (let a of headings) {
            ['text-white', 'border-white'].map((v) => a.classList.toggle(v))
        }
    }
    if (subheading) {
        for (let a of subheading) {
            ['text-white', 'border-white'].map((v) => a.classList.toggle(v))
        }
    }

    // form background
    if (forms) {
        for (let a of forms) {
            ['bg-white', 'border', 'border-white'].map((v) => a.classList.toggle(v))
        }
    }

}

// dropdown 

for (let item of items) {
    item.addEventListener("click", function drop(e) {
        let list = e.currentTarget.querySelector(".dropdown");
        if (list) {
            list.classList.toggle("d-none")
        }
    })
}
// password hide and show
if(passicon){
    passicon.forEach((p, index) => {
        p.addEventListener("click", function () {
          const currentPassField = pass[index];
          if (currentPassField.value.length !== 0) {
            if (currentPassField.getAttribute("type") === "password") {
              currentPassField.setAttribute("type", "text");
            } else {
              currentPassField.setAttribute("type", "password");
            }
          }
        });
      });
}


function menu_toggler() {
    isMenuactive = !isMenuactive
    if (isMenuactive) {
        localStorage.setItem("sidebarState", "expanded");
    } else {
        localStorage.setItem("sidebarState", "collapsed");
    }

    // if (localStorage.getItem('sidebarState') == 'collapsed') {
    //     localStorage.setItem('sidebarState', 'expanded')
    // }
    // else {
    //     localStorage.setItem('sidebarState', 'collapsed')
    // }



    // Dropdown position
    for (let a of dropdown) {
        ['mt-2', 'ms-5'].map((v) => a.classList.toggle(v))
    }

    for (let item of dropdownitem) {
        ['w-100', 'text-white', 'text-start'].map((a) => item.classList.toggle(a))
    }

    // Logo alignment 
    topmenu.classList.toggle("justify-content-between")
    logo.classList.toggle("d-none")

    // menu items alignment
    for (let item of items) {
        item.classList.toggle('text-start')
    }

    // titles styling
    for (let title of titles) {
        ['fs-6', 'fw-medium', 'd-block', 'ms-2'].map(v => title.classList.toggle(v))
    }

    // Sidebar collapse and expand
    if (sidebar.style.width === '140px') {
        sidebar.style.width = '260px'
        main.style.marginLeft = '280px'
    }
    else {
        sidebar.style.width = '140px'
        main.style.marginLeft = '150px'
    }
}
