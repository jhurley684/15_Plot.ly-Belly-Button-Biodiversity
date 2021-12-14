// This code taken from Dom's office hours session 12/11

console.log("This is plots.js");

function DrawBarchart(sampleId) {
        console.log(`DrawBarchart(${sampleId})`);
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