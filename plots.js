// Some code taken from Dom's office hours session 12/11.


function DrawBarchart(sampleId) {

        // Grab data from the samples json
        d3.json("samples.json").then(data => {
                
                // filter the data to match the drop-down selector
                let samples = data.samples;
                let resultArray = samples.filter(s => s.id === sampleId);
                let result = resultArray[0];


                // take ids, lables data, get the top 10 and reverse so that biggest values 
                // show up on the top bar
                let otu_ids = result.otu_ids;
                let otu_labels = result.otu_labels;
                let sample_values = result.sample_values;
                let yticks = otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse();

                
                // Set up the bar plot & layout
                let barData = {
                        x: sample_values.slice(0, 10).reverse(),
                        y: yticks, 
                        type: "bar",
                        text: otu_labels.slice(0, 10).reverse(),  //hover text
                        orientation: "h"
                };

                var layout = {
                        title: {text: "Top 10 Bacteria Cultures Found"},
                        barmode: 'stack'
                      };
                
                console.log(layout);

                
                // get data in an array
                let barArray = [barData];
                
                // plot the data in the array
                Plotly.newPlot("bar", barArray, layout);

        });

}


function DrawBubblechart(sampleId) {
        // console.log(`DrawBarchart(${sampleId})`);


        // filter the data to match the drop-down selector
        d3.json("samples.json").then(data => {
                
                // filter the data to match the drop-down selector
                let samples = data.samples;
                let resultArray = samples.filter(s => s.id === sampleId);
                let result = resultArray[0];

                //  assign data elements to vars
                let otu_ids = result.otu_ids;
                let otu_labels = result.otu_labels;
                let sample_values = result.sample_values;
                let yticks = otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`);

                // Set up the bubble graph plot
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

                
                
                // Get data in an array
                let bubbleArray = [bubbleData];

                // Plot the graph
                Plotly.newPlot("bubble", bubbleArray, layout);

        });

}
               
function ShowMetadata(sampleId) {
        d3.json("samples.json").then(data => {
                
                // filter the data to match the drop-down selector
                let metaData = data.metadata;  
                let resultArray = metaData.filter(obj => obj.id == sampleId);
                let result = resultArray[0];



                // ************************************************************
                // **  This method gets all metadata from sample regardless of number of items.
                // **  and then prints them to screen.  (As opposed to other code below)
                // ************************************************************

                // create a var to hold what to put in #sample-metadata area
                var metadata_div = d3.select("#sample-metadata");

                
                //  Clears out the metadata area before repopulating with new data
                metadata_div.html("");


                // Grabs the key and values from filtered result and appends to div
                Object.entries(result).forEach(([key, value]) => {
                        console.log(`Key: ${key} and Value ${value}`);
                        metadata_div.append("p").text(`${key}: ${value}`)
                }
                
                );




                // ***********************************************************
                //  This is the less flexible way of putting metadata into Demo Info area
                // ***********************************************************
                

                // // assign each element of data to a var
                // var id = result.id;
                // var age = result.age;
                // var bbtype = result.bbtype;
                // var ethnicity = result.ethnicity;
                // var gender = result.gender;
                // var location = result.location;
                // var wfreq = result.wfreq;


                // //Select the div class area to use 
                // var list = d3.select(".panel-body");

                // // Clear out Demo Info area
                // list.html("");

                // // Make a bullet point list of each data element
                // list.append("li").text(`id: ${id}`);
                // list.append("li").text(`age: ${age}`);
                // list.append("li").text(`bbtype: ${bbtype}`);
                // list.append("li").text(`ethnicity: ${ethnicity}`);
                // list.append("li").text(`gender: ${gender}`);
                // list.append("li").text(`location: ${location}`);
                // list.append("li").text(`wfreq: ${wfreq}`);

                // ************************************************************
                // ************************************************************

      
        });
        
}


function DrawGague(sampleId) {
    
        // Grab data from the samples json
        d3.json("samples.json").then(data => {
                                
                // filter the data to match the drop-down selector
                let metaData = data.metadata;  
                let resultArray = metaData.filter(obj => obj.id == sampleId);
                let result = resultArray[0];

                var wfreq = result.wfreq;

                var data = [
                        {
                                domain: { x: [0, 1], y: [0, 1] },
                                value: result.wfreq,
                                title: { text: " Belly Button Wash Frequency <br\> Scrubs per Week"},
                                subtitle: {text: "Scrubs Per Week"},
                                type: "indicator",
                                mode: "gauge+number",
                                gauge: {
                                  axis: { range: [null, 9] },
                                  bar: { color: "blue"},
                                  bgcolor: "white",
                                  borderwidth: 2,
                                  bordercolor: "gray",
                                  steps: [
                                    { range: [0, 3], color: "lightgreen" },
                                    { range: [3, 6], color: "yellow" },
                                    { range: [6, 9], color: "red" },
                                  ]},
                        }
                ];

                var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
                Plotly.newPlot("gauge", data, layout);
        });

}



function optionChanged(id)
{
        DrawBarchart(id);
        DrawBubblechart(id);
        ShowMetadata(id);
        DrawGague(id);

}


function InitDashboard()
{
        let selector = d3.select("#selDataset");
        
        // read data from dataset
        d3.json("samples.json").then(data=> {
           
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
            DrawGague(sampleId);

        });

}

InitDashboard();