function sprawdzKomende() {
    const wartosc = document.getElementById("komenda").value;

    if (wartosc === "reset1") {
        alert("13");
    } 
          if (wartosc === "zawisza.relod") {
        window.open("https://zawiszagarbow.github.io/");
    } 
             if (wartosc === "google.open.sites") {
        window.open("https://google.com/");
    } 
    if (wartosc === "open.sites.wolf") {
      document.getElementById("folx1").innerText = "Strona Internetowa🌍";
    }
    else {
        alert("To jest konsola ułatwiająca rozwój aplikacji w wersji BETA dla programisty nie używaj jeśli nie jesteś nim");
    }
}