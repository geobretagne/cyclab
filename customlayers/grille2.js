const grille = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: "https://geobretagne.fr/apps/cyclab/data/grille.geojson",
        format: new ol.format.GeoJSON({
            extractStyles: false
        })
    })



});
new CustomLayer('grille', grille);
