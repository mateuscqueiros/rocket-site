class Controller {
    constructor () {
        this.initEvents();
        this.indicator = document.querySelector(".header .menu span");

        this.data = [
            {
                name: "octane",
                chassis: "octane",
                release: "7 de Julho de 2015",
                rarity: "Comum, Importado",
                cars: "Octane ZSR",
                image: "./assets/images/octane.png",
                color: "#d1caff"
            },
            {
                name: "dominus",
                chassis: "dominus",
                release: "13 de Agosto de 2015",
                rarity: "Comum, Legado, Exótico, Importado",
                cars: "Dominus GT",
                image: "./assets/images/dominus.png",
                color: "#d3ffd7"
            },
            {
                name: "fennec",
                chassis: "octane",
                release: "7 de Julho de 2015",
                rarity: "Importado",
                cars: "Nenhum",
                image: "./assets/images/fennec.png",
                color: "#fffbd7"
            }
        
        ];

        this.initImages();
        this.changeData("octane");

    }

    initImages () {

        this.data.forEach(item => {

            let img = document.createElement("img");

            img.dataset.id = item.name;

            img.src = item.image;

            img.dataset.active = "false";

            document.querySelector(".right .img").appendChild(img);

            if (item.name === "octane") {

                img.style.opacity = 1;

                img.dataset.active = "true";

            }

        });

    }

    initEvents () {
        let lis = document.querySelectorAll(".header .menu li");

        lis.forEach(li => {
            li.addEventListener("click", () => {
                
                const id = li.getAttribute("data-id")

                if (id === "octane") {
                    this.indicator.style.left = "25px";

                    document.querySelector
                }

                if (id === "dominus") {
                    this.indicator.style.left = "154px";
                }

                if (id === "fennec") {
                    this.indicator.style.left = "287px";
                }

                this.changeData(id)

            })
        })
    }

    changeData (id) {

        const data = this.data.filter(value => {

            return value.name === id;

        })[0];

        document.querySelector("body").style.backgroundColor = data.color;

        document.querySelector(".content .left h1").innerHTML = data.name;
        document.querySelector(".content .left .content-items #name").innerHTML = this.capitalizeFirstLetter(data.chassis);
        document.querySelector(".content .left .content-items #release").innerHTML = data.release;
        document.querySelector(".content .left .content-items #rarity").innerHTML = data.rarity;
        document.querySelector(".content .left .content-items #cars").innerHTML = data.cars;

        document.querySelector(`.content .right .img img[data-active=true]`).dataset.active = "false";
        document.querySelector(`.content .right .img img[data-id=${data.name}]`).dataset.active = "true";

        document.querySelector(`.content .right .img img[data-active=true]`).style.opacity = 1;
        document.querySelectorAll(`.content .right .img img[data-active=false]`).forEach(el => { el.style.opacity = 0; });
        
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

const appController = new Controller();