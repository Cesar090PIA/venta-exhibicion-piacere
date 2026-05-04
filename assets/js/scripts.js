function abrirPdf() {
    const v = new Date().getTime();
    window.open(`./assets/pdf/VentaExibicion.pdf?v=${v}`, '_blank');
}