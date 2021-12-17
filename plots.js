// This code taken from Dom's office hours session 12/11

// console.log("This is plots.js");

function DrawBarchart(sampleId) {
        // console.log(`DrawBarchart(${sampleId})`);

        d3.json("samples.json").then(data => {
                
                let samples = data.samples;
                let resultArray = samples.filter(s => s.id === sampleId);
                let result = resultArray[0];

                // console.log(result);

                let otu_ids = result.otu_ids;
                let otu_labels = result.otu_labels;
                let sample_values = result.sample_values;
                let yticks = otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse();

                let barData = {
                        x: sample_values.slice(0, 10).reverse(),
                        y: yticks, 
                        type: "bar",
                        text: otu_labels.slice(0, 10).reverse(),  //hover text
                        orientation: "h"
                };

                let barArray = [barData];


                Plotly.newPlot("bar", barArray);

        });

}


function DrawBubblechart(sampleId) {
        // console.log(`DrawBarchart(${sampleId})`);

        d3.json("samples.json").then(data => {
                
                let samples = data.samples;
                let resultArray = samples.filter(s => s.id === sampleId);
                let result = resultArray[0];

                // console.log(result);

                let otu_ids = result.otu_ids;
                let otu_labels = result.otu_labels;
                let sample_values = result.sample_values;
                let yticks = otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`);


                let bubbleData = {
                        x: otu_ids,
                        y: sample_values,
                        mode: 'markers', 
                        marker: {
                                color: otu_ids,
                                colorscale: "Jet",
                                size: sample_values
                        },
                        text: otu_labels,  //hover text
                };


                var layout = {
                        title: "Bacteria Cultures Per Sample",
                        showlegend: false,
                        height: 600,
                        width: 1200
                };

                let bubbleArray = [bubbleData];

                Plotly.newPlot("bubble", bubbleArray, layout);


        });


}
               
function ShowMetadata(sampleId)
{
        d3.json("samples.json").then(data => {
                
                
                // This thing gets the id value from the selector
                let metaData = data.metadata;  //  There is no metadata in data.samples.  It's in data.metadata
                let resultArray = metaData.filter(obj => obj.id == sampleId);
                let result = resultArray[0];
                // console.log(result);

                
                //******************************************************************** */ 

                //  Erin's hinted solution - would be more flexibl
                // Object.entries(result).forEach(([key, value]) => 
                //                var list = d3.select("panel-body");
                //                append(".panel-body").text(`Key: ${key} and Value ${value}`));

                // *******************************************************************

                
                var id = result.id;
                var age = result.age;
                var bbtype = result.bbtype;
                var ethnicity = result.ethnicity;
                var gender = result.gender;
                var location = result.location;
                var wfreq = result.wfreq;

           
                var list = d3.select(".panel-body");

                list.append("li").text(`id: ${id}`);
                list.append("li").text(`age: ${age}`);
                list.append("li").text(`bbtype: ${bbtype}`);
                list.append("li").text(`ethnicity: ${ethnicity}`);
                list.append("li").text(`gender: ${gender}`);
                list.append("li").text(`location: ${location}`);
                list.append("li").text(`wfreq: ${wfreq}`);
      
        });
        
}


function DrawGague(sampleId)
{
  
                
        d3.json("samples.json").then(data => {
                
                
                // This thing gets the id value from the selector
                let metaData = data.metadata;  //  There is no metadata in data.samples.  It's in data.metadata
                let resultArray = metaData.filter(obj => obj.id == sampleId);
                let result = resultArray[0];

                var wfreq = result.wfreq;
                // console.log(wfreq);


                var data = [
                        {
                          type: "indicator",
                          value: wfreq,
                          delta: { reference: 160 },
                          gauge: { axis: { visible: false, range: [0, 250] } },
                          domain: { row: 0, column: 0 }
                        },
                ]
        });

}



function optionChanged(id)
{
        // console.log(`optionChanged(${id})`);

        DrawBarchart(id);
        DrawBubblechart(id);
        ShowMetadata(id);
        DrawGague(id);

}


function InitDashboard()
{
        // console.log("Initializing Dashboard");
        let selector = d3.select("#selDataset");
        
        // read data from dataset
        d3.json("samples.json").then(data=> {
           
        //     console.log(data);

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