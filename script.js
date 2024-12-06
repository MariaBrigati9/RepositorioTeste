let linguaAtual = "pt";

const texto ={
    pt:{ SobreMim: "Sobre Mim",
        Introd: "Esse portfólio é um testezinho pra aula de HTML que to tendo no If.",
    },
    en:{SobreMim: "About Me",
        Introd: "This porfolio is a little test for the HTML class that I'm having at IF.",

    },
};

function mudarLingua() {
    linguaAtual = linguaAtual === "pt"? "en" : "pt";

    document.querySelector("#inicio").innerText = texto[linguaAtual].SobreMim;
    document.querySelector("#introd").innerText = texto[linguaAtual].Introd;
}

document.getElementById("linguagem").addEventListener("click",mudarLingua);