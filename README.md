### Plot.ly15-Belly-Button-Biodiversity
How well do you wash your belly button and does it make any difference?  The data is in and you can find out whether washing makes a difference and what kind of bacteria might be affected most just by working through our Belly Button Biodiversity Dashboard.  

By selecting a specific sample Test Subject Id in the dropdown selector, the Demographic area shows the demographic details about each sample submitted. Additionally the top 10 Bacteria cultures are displayed in the bar chart.  How much the subject washed is displayed in the guage display.  Finally, the amount & extent of each sample is shown in a bubble chart.  

Then again, you might not be into navel-gazing and if that's the case, please enjoy the code featuring our friends plotly and d3.

Some starter code setting up data acquisition and initial bar chart set-up was taken from instructor Dom LaBella's lecture.


![Bacteria by filterforge.com](Images/bacteria.jpg)

In this challenge, you will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


## Step 1: Plotly

1. Use the D3 library to read in `samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
* Use `sample_values` as the values for the bar chart.
* Use `otu_ids` as the labels for the bar chart.
* Use `otu_labels` as the hovertext for the chart.
  ![bar Chart](Images/hw01.png)

3. Create a bubble chart that displays each sample.
* Use `otu_ids` for the x values.
* Use `sample_values` for the y values.
* Use `sample_values` for the marker size.
* Use `otu_ids` for the marker colors.
* Use `otu_labels` for the text values.
     ![Bubble Chart](Images/bubble_chart.png)

4. Display the sample metadata, i.e., an individual's demographic information.
5. 
6. Display each key-value pair from the metadata JSON object somewhere on the page.
![hw](Images/hw03.png)

6. Update all of the plots any time that a new sample is selected.
dditionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown below:

![hw](Images/hw02.png)

## Advanced Challenge Assignment (Optional)

The following task is advanced and therefore optional.
* Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.
* You will need to modify the example gauge code to account for values ranging from 0 through 9.
* Update the chart whenever a new sample is selected.

![Weekly Washing Frequency Gauge](Images/gauge.png)

## Deployment
* Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo.
* Ensure your repository has regular commits and a thorough README.md file

## Hints
* Use `console.log` inside of your JavaScript code to see what your data looks like at each step.
* Refer to the [Plotly.js documentation](https://plot.ly/javascript/) when building the plots.
