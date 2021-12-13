// This code taken from Dom's office hours session 12/11

console.log("This is plots.js")


// function DrawBarchart() { 
    console.log(`DrawBarchart(${sampleId})');

    d3.json("samples.json").then(data => {

        let samples = data.samples;
        let resultArray = sample.filter(s => s.id === sampleId);
        let resutl = reultArray[0];

        console.log(result);

        let otu_ids = reslut.otu_ids;
        let otu_lables = reslut.otu_lables;
        let sample_values = reslut.sample_values;
        let yticks = otu_ids.slice(0, 10).map(otuId => `OTU $(otuId)`).reverse();


        // console.log(out_ids)  // also labels & sample_values

        // just take the first 10 values
        let barData = {
            x: sample_values.slice(0,10).reverse(),
            y: yticks, 
            type: "bar",
            text: otu_labels.slice(0, 10).reverse(),
            orientation: "h"
            
        };

        let barArray = [barData];

        let barLayout = {
            title: "Top 10 Bacteria Culture Found",
            margin: { t: 30, l: 150 }
        }


        Plotly.newPlot("bar", barArray);




    });
}

// function DrawBubblechart() { 
    console.log(`DrawBubblechart(${sampleId})');
}


function ShowMetadata(sampleId) {
    console.log(`ShowMetadata(${sampleId})');
}


// Event handler for change
function optionChanged(id) 
    console.log(`optionChanged(${id})`);

    DrawBarchart(id);
    DrawBubblechart(id);
    ShowMetadata(id);




function InitDashboard()
{
        console.log("Initializing Dashboard")

        d3.select("#selDataset");

        // read data from dataset
        d3.jason("samples.json").then(data=> {
           
            coulsole.log(data);

            let sampleNames = data.names;

            sampleNames.forEach(sampleId => {
                selector.append("option")
                .text(sameleID)
                .property("value", sampleId);

                // detect change 


            })


            // get first name and show it in the box(so box has something in it)
            let sampleId = sampleNames[0];

            DrawBarchart(sampleId);
            DrawBubblechart(sampleId);
            ShowMetadata(sampleID);

        });
}

InitDashboard();