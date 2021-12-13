// This code taken from Dom's office hours session 12/11

console.log("This is plots.js")


// Event handler for change
function optionChanged(id) 
    console.log(`optionChanged(${id})`);

    // Display the barchart
    // Display the bubblechart
    // Populate demographic info




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

        });
}

InitDashboard();