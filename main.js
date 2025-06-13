/*   Variables    */

/*    Functions    */

window.addEventListener("DOMContentLoaded", () => {
    var x, y;
    const customMenu = document.getElementById("custom-context-menu");
    window.addEventListener("contextmenu", (e) => {
        e.preventDefault();

        x = e.clientX;
        y = e.clientY;

        customMenu.style.display = "block";

        if (x >= 600) {
            customMenu.style.left = `${x - 100}px`;
        } else {
            customMenu.style.left = `${x}px`;
        }

        if (y >= 450) {
            customMenu.style.top = `${y - 100}px`;
        } else {
            customMenu.style.top = `${y}px`;
        }
    });


    window.addEventListener("click", function () {
        if (customMenu.style.display === "block") {
            customMenu.style.display = "none";
        }
    });


    window.addEventListener('keydown', e => {
        if (window.localStorage.getItem("player") !== "Vidit Keshari") {
            if (((e.ctrlKey && e.shiftKey) && (e.key == "I")) || ((e.ctrlKey && e.shiftKey) && (e.key == "J")) || (e.key == "F12")) {
                e.preventDefault();
            }
        }
        if (e.altKey && key == "c") {
            document.getElementById("custom-context-menu").style.display = "absolute";
            document.getElementById("custom-context-menu").style.left = `${50}%`;
            document.getElementById("custom-context-menu").style.top = `${50}%`;
        }
    });

    document.addEventListener("copy", () => {
        window.navigator.clipboard.writeText("I won't let you copy anything that easily!");
    });

    randomQuote();
    findClass();
});

function webOpen(CODE) {
    var link;
    var CODE_type;
    if (!CODE.includes("profile")) { // Not profile check
        if (CODE.includes("_")) { // Webpage/Blog check
            let link_obj;
            link_obj = CODE.split("_").join("-")
            if (CODE.includes("blog")) { // Blog check
                let temp_blog_link;
                CODE_type = "webpage-blog"
                CODELog(CODE, CODE_type);
                temp_blog_link = link_obj;
                link_obj = temp_blog_link.split("-blog").join("/");
                link = "https://github.com/Vidit-Keshari/" + link_obj;
                console.log(link);
                window.open(link);
            } else { // Webpage check
                CODE_type = "webpage"
                CODELog(CODE, CODE_type);
                link = "https://vidit-keshari.github.io/" + link_obj + "/";
                console.log(link);
                window.open(link);
            }
        } else if (CODE[0] == "~") { // One word named prefixed webpage check
            let link_obj = CODE.replace("~", "");
            CODE_type = "webpage"
            CODELog(CODE, CODE_type);
            link = "https://vidit-keshari.github.io/" + link_obj + "/";
            console.log(link);
            window.open(link);
        } else { // Scratch check
            CODE_type = "scratch"
            CODELog(CODE, CODE_type);
            window.open("https://scratch.mit.edu/projects/" + CODE + "/");
        }
    } else { // Profile check
        if (CODE.includes("~scratch")) {
            window.open("https://scratch.mit.edu/users/viditvihaan/");
        } else {
            window.open("https://github.com/Vidit-Keshari");
        }
    }
}

function CODELog(CODE, CODE_type) {
    console.log("Called webOpen. CODE_type = " + CODE_type + ", CODE: " + CODE); // Log for the constructed link
}

function savePage() {
    try {
        const link = document.createElement('a');
        link.href = window.location.href;
        link.download = document.title + ".html";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    } catch (error) {
        console.error({ "An error occurred while trying to save the page": error });
    }
}

function randomQuote() {
    const quotes = [
        "Keep Gaming!", //0
        "Play. Complete. Conquer!", //1
        "Gaming Improved!", //2
        "Unleash the Gamer Within!", //3
        "Where Fun Never Ends!", //4
        "Victory on the Door!", //5
        "Play beyond limits!" //6
    ];
    const element = document.getElementById("quote");
    var idx = Math.floor(Math.random() * quotes.length);
    element.innerText = quotes[idx];
}

function findClass() {
    const ele = document.getElementById("class");
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    if (!ele) {
        console.error("Element with id 'class' not found!");
        return;
    }
    if (year > 2029 || (month >= 4 && year > 2028)) {
        ele.innerText = "College";
        return;
    }
    if (month >= 4) {
        ele.innerText = toRoman(year - 2016);
    } else {
        ele.innerText = toRoman(year - 2017);
    }
}

function toRoman(num) {
    const romanMap = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    let result = "";

    for (const { value, numeral } of romanMap) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }

    return result;
}
