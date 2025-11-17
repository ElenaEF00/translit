  function traslitteraPalermitano(text) {
    let t = text.toLowerCase();

    // Pattern complessi
    t = t.replace(/chi/g, "tchi");
    t = t.replace(/c(?=[ie])/g, "tch");
    t = t.replace(/g(?=[ie])/g, "dj");
    t = t.replace(/tr/g, "TZÜ");
    t = t.replace(/gn/g, "ñ");
    t = t.replace(/dd\b/g, "ddü");
    t = t.replace(/nn\b/g, "nnü");

    // Vocali e dittonghi
    t = t.replace(/ie|iè|ié/g, "yæ");
    t = t.replace(/ei/g, "æy");
    t = t.replace(/i\b/g, "ī");
    t = t.replace(/u/g, "ü");
    t = t.replace(/e/g, "ę");

    // A tonica
    t = t.replace(/\bma\b/g, "mæ");
    t = t.replace(/\ba/g, "æ");

    return t;
  }

  function traslittera() {
    const input = document.getElementById("input").value;
    const risultato = traslitteraPalermitano(input);
    document.getElementById("output").innerText = risultato;
  }