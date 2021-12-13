// This code taken from Dom's office hours session 12/11

console.log("This is plots.js")



function InitDashboard()
{
        console.log("Initializing Dashboard")

        d3.select("#selDataset");

        // read data from dataset
        d3.jason("samples.json").then(data=> {
           
            coulsole.log(data);

            let sampleNames = data

        });
}

InitDashboard();