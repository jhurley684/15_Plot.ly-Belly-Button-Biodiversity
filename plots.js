// This code taken from Dom's office hours session 12/11

console.log("This is plots.js");

function DrawBarchart(sampleId) {
        console.log(`DrawBarchart(${sampleId})`);

        d3.json("samples.json").then(data => {
                
                let samples = data.samples;
                let resultArray = samples.filter(s => s.id === sampleId);
                let result = resultArray[0];

                console.log(result);

                let otu_ids = result.otu_ids;
                let otu_labels = result.otu_labels;
                let sample_values = result.sample_values;
                let yticks = otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse();


                let barData = {
                        x: sample_values.slice(0, 10).reverse(),
                        y: yticks, 
                        type: "bar",
                        text: otu_labels.slice(0, 10).reverse(),
                        orientation: "h"
                };

                let barArray = [barData];

                Plotly.newPlot("bar", barArray);


        });


}


function DrawBubblechart(sampleId) {
        console.log(`DrawBubblechart(${sampleId})`);
}


function ShowMetadata(sampleId) {
        console.log(`ShowMetadata(${sampleId})`);
}



function optionChanged(id)
{
        console.log(`optionChanged(${id})`);

        DrawBarchart(id);
        DrawBubblechart(id);
        ShowMetadata(id);

}


function InitDashboard()
{
        console.log("Initializing Dashboard");
        let selector = d3.select("#selDataset");
        
        // read data from dataset
        d3.json("samples.json").then(data=> {
           
            console.log(data);

            let sampleNames = data.names;
            sampleNames.forEach(sampleId => {
                selector.append("option")
                        .text(sampleId)
                        .property("value", sampleId);
            });

            let sampleId = sampleNames[0];

            DrawBarchart(sampleId);
            DrawBubblechart(sampleId);
            ShowMetadata(sampleId);

        });

}

InitDashboard();