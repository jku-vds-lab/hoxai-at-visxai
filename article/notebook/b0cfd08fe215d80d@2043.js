import define1 from "./26670360aa6f343b@209.js";

function _1(md){return(
md`# Interactive Content for HOXAI @ VISxAI

-----
## Forestly Interface`
)}

async function _forestlyInterface(FileAttachment,DOMParser,d3,showOrHideGroup)
{
  const text = await FileAttachment("forestly-study-1@1.svg").text();
  const document = (new DOMParser).parseFromString(text, "image/svg+xml");
  const svg = d3.select(document.documentElement).remove();
  const layer = svg.select("#layer1")
  layer.selectAll("rect")
    .each(function () {
      const rect = d3.select(this)
      if (rect.style("fill") == "none") {
        rect.style("fill", "white")
          .style("fill-opacity", 0)
      } else {
        rect.style("fill", "white")
      }
    })
  layer.selectAll("g")
    .each(function () {
      const group = d3.select(this)
      showOrHideGroup(group, false);
    })
  layer.selectAll("rect, text")
    .on("mouseover", function () {
      const group = d3.select(this.parentNode)
      showOrHideGroup(group, true);
    })
    .on("mouseout", function () {
      const group = d3.select(this.parentNode)
      showOrHideGroup(group, false);
    })
  return svg.node()
}


function _showOrHideGroup(d3){return(
function showOrHideGroup(group, show) {
    const selection = d3.select(group)
    group.selectAll("rect")
      .style("stroke-opacity", show ? 1 : 0)
    group.selectAll("path")
      .style("stroke-opacity", show ? 1 : 0)
  }
)}

function _4(md){return(
md`----
## Doppelganger Example`
)}

async function _mushroomDoppelganger(FileAttachment,DOMParser,d3,width)
{
  const text = await FileAttachment("mushroom-doppelganger@2.svg").text();
  const document = new DOMParser().parseFromString(text, "image/svg+xml");
  const svg = d3.select(document.documentElement).remove();
  svg.attr("id", "mush-dop-svg");
  svg.attr("width", width);
  svg.attr("height", 0.3 * width);
  svg.selectAll("circle").style("opacity", 0);
  svg.selectAll("text").style("opacity", 0);
  const path = svg.selectAll("path");
  path.datum(function () {
    return this.getTotalLength();
  });
  path
    .style("stroke-dasharray", null)
    .style("stroke-dashoffset", null)
    .attr("stroke-dasharray", (d) => d + " " + d)
    .attr("stroke-dashoffset", (d) => d);
  return svg.node();
}


function _toggleHideShow(Inputs){return(
Inputs.toggle({label: "Show differences", value: false})
)}

function _explHidden(){return(
true
)}

function _8(toggleHideShow,showExplanations,hideExplanations)
{
  if (toggleHideShow) {
    showExplanations();
  } else {
    hideExplanations();
  }
}


function _showExplanations(explHidden,d3,$0){return(
function showExplanations() {
  if (!explHidden) {
    return;
  }
  const svg = d3.select("#mush-dop-svg");
  svg
    .selectAll("circle")
    .style("opacity", 0)
    .transition()
    .duration(500)
    .delay(1000)
    .ease(d3.easeLinear)
    .style("opacity", 1);
  svg
    .selectAll("text")
    .style("opacity", 0)
    .transition()
    .duration(500)
    .delay(1000)
    .ease(d3.easeLinear)
    .style("opacity", 1);
  const path = svg.selectAll("path");
  path.datum(function () {
    return this.getTotalLength();
  });
  path
    .style("stroke-dasharray", null)
    .style("stroke-dashoffset", null)
    .attr("stroke-dasharray", (d) => d + " " + d)
    .attr("stroke-dashoffset", (d) => d)
    .transition()
    .duration(1000)
    .ease(d3.easeLinear)
    .attr("stroke-dashoffset", 0);
  $0.value = false;
}
)}

function _hideExplanations(explHidden,d3,$0){return(
function hideExplanations() {
  if (explHidden) {
    return;
  }
  const svg = d3.select("#mush-dop-svg");
  svg
    .selectAll("circle")
    .style("opacity", 1)
    .transition()
    .duration(500)
    .ease(d3.easeLinear)
    .style("opacity", 0);
  svg
    .selectAll("text")
    .style("opacity", 1)
    .transition()
    .duration(500)
    .ease(d3.easeLinear)
    .style("opacity", 0);
  const path = svg.selectAll("path");
  path.datum(function () {
    return this.getTotalLength();
  });
  path
    .style("stroke-dasharray", null)
    .style("stroke-dashoffset", null)
    .attr("stroke-dasharray", (d) => d + " " + d)
    .attr("stroke-dashoffset", (d) => 0)
    .transition()
    .duration(1000)
    .delay(500)
    .ease(d3.easeLinear)
    .attr("stroke-dashoffset", (d) => d);
  $0.value = true;
}
)}

function _11(md){return(
md`----
## Configurable Results Vis – Study 1`
)}

async function _dataStudyOne(FileAttachment){return(
await FileAttachment("study-1-data-cleaned@4.csv").csv( {typed: "auto"})
)}

function _plotAnyTwo(variables,selectedXAxis,plotCategoricalNumerical,selectedYAxis,d3,htl,width,plotNumericalNumerical)
{
  if (variables[selectedXAxis]["categorical"]) {
    const chart = plotCategoricalNumerical(selectedXAxis, selectedYAxis);
    d3.select(chart).style("background", "rgba(0., 0., 0., 0.)");
    const el = htl.html`<div style="padding-top: ${0.05 * width}px"></div>`;
    el.appendChild(chart);
    return el;
  } else {
    const chart = plotNumericalNumerical(selectedXAxis, selectedYAxis);
    d3.select(chart).style("background", "rgba(0., 0., 0., 0.)");

    const legend = chart.legend("color", {
      width: 0.25 * width,
      height: 0.05 * width,
      marginLeft: 67,
      className: "legend"
    });
    const el = htl.html`<div></div>`;

    d3.select(legend).attr("font-size", 12);

    el.appendChild(legend);
    el.appendChild(chart);
    return el;
  }
}


function _selectedXAxis(Inputs,variables){return(
Inputs.select(Object.keys(variables), {
  label: "X Axis",
  format: (x) => variables[x]["label"],
  value: "group"
})
)}

function _selectedYAxis(Inputs,variables){return(
Inputs.select(
  Object.keys(variables).filter((x) => !variables[x]["categorical"]),
  {
    label: "Y Axis",
    format: (x) => variables[x]["label"],
    value: "mush.eat"
  }
)
)}

function _variables()
{
  const oneToFive = [0.5, 1.5, 2.5, 3.5, 4.5, 5.5]
  const zeroToOne = []
  function makeThresholds(n) {
    return Array.from(new Array(n + 2), (x, i) => i / n - 1 / (2 * n))
  }
  return {
    "duration": {
      label: "Duration of completion",
      extraLabel: " (minutes)",
      categorical: false,
      thresholds: [0, 5, 10, 15, 20, 25, 30, 40, 45],
      domain: [0,60],
    },
    "group": {
      label: "Experimental group",
      categorical: true,
      domain: ["None", "Edu.", "XAI", "Both"],
    },
    "mushroom.hunting.yn": {
      label: "Has been mushroom hunting",
      categorical: true,
      domain: ["Yes", "No"],
    },
    "mushapp.use.before": {
      label: "Intention to use an app (before)",
      categorical: false,
      thresholds: oneToFive,
      domain: [0,5],
    },
    "eval.good": {
      label: "App evaluation",
      extraLabel: "(1: bad, 5: good)",
      categorical: false,
      thresholds: oneToFive,
      domain: [0,5],
    },
    "eval.comp": {
      label: "App comprehension overall",
      extraLabel: "(1: incomprehensible, 5: comprehensible)",
      categorical: false,
      thresholds: oneToFive,
      domain: [0,5],
    },
    "intention.use": {
      label: "Intention to use the Forestly app (after)",
      categorical: false,
      thresholds: oneToFive,
      domain: [0,5],
    },
    "education": {
      label: "Level of education",
      categorical: true,
      domain: ["None", "Lower secondary", "Apprenticeship", "High school", "Bachelor's", "Master's", "PhD"]
    },
    "age.numb": {
      label: "Age",
      extraLabel: " (years)",
      categorical: false,
      thresholds: [0, 10, 20, 30, 40, 50, 60, 70, 80],
      domain: [0,80],
    },
    "test.mush": {
      label: "Mushroom knowledge",
      categorical: false,
      thresholds: makeThresholds(6),
      domain: [0,1],
    },
    "test.ai": {
      label: "AI knowledge",
      categorical: false,
      thresholds: makeThresholds(5),
      domain: [0,1],
    },
    "test.combined": {
      label: "Task-specific knowledge",
      categorical: false,
      thresholds: makeThresholds(4),
      domain: [0,1],
    },
    "mush.eat": {
      label: "Edibility correctness",
      categorical: false,
      thresholds: makeThresholds(10),
      domain: [0,1],
    },
    "mush.col": {
      label: "Pick-up correctness",
      categorical: false,
      thresholds: makeThresholds(10),
      domain: [0,1],
    },
    "mush.comp": {
      label: "Comprehension of classification",
      extraLabel: "(1: incomprehensible, 5: comprehensible)",
      thresholds: oneToFive,
      domain: [0,5],
    },
    "mush.trust": {
      label: "Self-reported trust in classification",
      extraLabel: "(1: incomprehensible, 5: comprehensible)",
      thresholds: oneToFive,
      domain: [0,5],
    }
}}


function _plotNumericalNumerical(Plot,width,variables,dataStudyOne){return(
function plotNumericalNumerical(x, y) {
  return Plot.plot({
    color: {scheme: "BuPu"},
    width: 0.4 * width,
    height: 0.4 * width,
    marginLeft: 60,
    marginBottom: 60,
    marks: [
      Plot.axisX({
        label: variables[x]["label"] + ("extraLabel" in variables[x] ? "\n" + variables[x]["extraLabel"] : ""),
        fontSize: 12,
        labelAnchor: "center",
        labelOffset: 50.,
        labelArrow: "none",
      }),
      Plot.axisY({
        label: variables[y]["label"] + ("extraLabel" in variables[y] ? "\n" + variables[y]["extraLabel"] : ""),
        fontSize: 12,
        labelAnchor: "center",
        labelOffset: 50.,
        labelArrow: "none",
      }),
      Plot.rect(
        dataStudyOne,
        Plot.bin(
          {
            fill: "count",
            filter: null,
            title: (d, coords) => `Frequency: ${d.length}`
          },
          {
            x: {value: x, thresholds: variables[x]["thresholds"]},
            y: {value: y, thresholds: variables[y]["thresholds"]},
            tip: true,
          }        
        )
      ),
    ]
  })
}
)}

function _plotCategoricalNumerical(width,Plot,variables,dataStudyOne,d3){return(
function plotCategoricalNumerical(x, y) {
  const height = 0.4 * width
  const marginBottom = x == "education" ? 100 : 50
  return Plot.plot({
    width: 0.4 * width,
    height: height,
    marginLeft: 60,
    marginBottom: marginBottom,
    x: {
      domain: variables[x]["domain"],
    },
    y: {
      domain: variables[y]["domain"],
      grid: true,
    },
    marks: [
      Plot.axisX({
        label: variables[x]["label"] + ("extraLabel" in variables[x] ? "\n" + variables[x]["extraLabel"] : ""),
        fontSize: 12,
        labelOffset: x == "education" ? 80 : 40,
        tickRotate: x == "education" ? -30 : 0,
      }),
      Plot.axisY({
        label: variables[y]["label"] + ("extraLabel" in variables[y] ? "\n" + variables[y]["extraLabel"] : ""),
        fontSize: 12,
        labelOffset: 50.,
        labelAnchor: "center",
        labelArrow: "none",
      }),
      Plot.barY(
        dataStudyOne,
        Plot.groupX(
          { y: "mean" , title: (d) => d3.mean(d.map( (i) => i[y]))},
          { x: x, y: y, fill: x, tip: true}),
      ),
      Plot.ruleY([0])
    ]
  })
}
)}

function _19(md){return(
md`----
## Sortable Results Table – Study 3`
)}

function _mushroomItemData(){return(
[
    {
        mushId: 3,
        speciesGT: "Bitter Bolete",
        edible: false,
        speciesAIfirst: "Porcino",
        percentageAIfirst: 92,
        speciesAIsecond: "Bitter Bolete",
        percentageAIsecond: 6,
        speciesAIthird: "Sheathed Woodtuft",
        percentageAIthird: 1,
        aiCorrect: false,
        percentageAIedible: 94,
        averagePickup: .13,
        averageEdible: .19,
        gradCamAligned: false,
        nnAligned: true,
        dissectAligned: false
    },
    {
        mushId: 4,
        speciesGT: "Porcino",
        edible: true,
        speciesAIfirst: "Bitter Bolete",
        percentageAIfirst: 46,
        speciesAIsecond: "Porcino",
        percentageAIsecond: 25,
        speciesAIthird: "Autumn Skullcap",
        percentageAIthird: 17,
        aiCorrect: false,
        percentageAIedible: 31,
        averagePickup: .22,
        averageEdible: .13,
        gradCamAligned: false,
        nnAligned: false,
        dissectAligned: false
    },
    {
        mushId: 5,
        speciesGT: "Blusher",
        edible: true,
        speciesAIfirst: "Panther Cap",
        percentageAIfirst: 85,
        speciesAIsecond: "Blusher",
        percentageAIsecond: 10,
        speciesAIthird: "Death Cap",
        percentageAIthird: 2,
        aiCorrect: false,
        percentageAIedible: 12,
        averagePickup: .21,
        averageEdible: .16,
        gradCamAligned: true,
        nnAligned: false,
        dissectAligned: false
    },
    {
        mushId: 7,
        speciesGT: "Panther Cap",
        edible: false,
        speciesAIfirst: "Panther Cap",
        percentageAIfirst: 79,
        speciesAIsecond: "Porcino",
        percentageAIsecond: 12,
        speciesAIthird: "Morel",
        percentageAIthird: 7,
        aiCorrect: true,
        percentageAIedible: 21,
        averagePickup: .89,
        averageEdible: .95,
        gradCamAligned: true,
        nnAligned: true,
        dissectAligned: true
    },
    {
        mushId: 8,
        speciesGT: "Porcino",
        edible: true,
        speciesAIfirst: "Porcino",
        percentageAIfirst: 85,
        speciesAIsecond: "Panther Cap",
        percentageAIsecond: 15,
        speciesAIthird: null,
        percentageAIthird: null,
        aiCorrect: true,
        percentageAIedible: 85,
        averagePickup: .90,
        averageEdible: .82,
        gradCamAligned: true,
        nnAligned: true,
        dissectAligned: true
    },
    {
        mushId: 9,
        speciesGT: "Sheathed Woodtuft",
        edible: true,
        speciesAIfirst: "Sheathed Woodtuft",
        percentageAIfirst: 60,
        speciesAIsecond: "Chanterelle",
        percentageAIsecond: 40,
        speciesAIthird: null,
        percentageAIthird: null,
        aiCorrect: true,
        percentageAIedible: 100,
        averagePickup: .84,
        averageEdible: .78,
        gradCamAligned: true,
        nnAligned: true,
        dissectAligned: true
    },
    {
        mushId: 12, 
        speciesGT: "Bitter Bolete",
        edible: false,
        speciesAIfirst: "Bitter Bolete",
        percentageAIfirst: 40,
        speciesAIsecond: "Death Cap",
        percentageAIsecond: 31,
        speciesAIthird: "Porcino",
        percentageAIthird: 29,
        aiCorrect: true,
        percentageAIedible: 29,
        averagePickup: .80,
        averageEdible: .90,
        gradCamAligned: true,
        nnAligned: false,
        dissectAligned: true
    },
    {
        mushId: 13,
        speciesGT: "Amethyst Deceiver",
        edible: true,
        speciesAIfirst: "Amethyst Deceiver",
        percentageAIfirst: 66,
        speciesAIsecond: "Sheathed Woodtuft",
        percentageAIsecond: 27,
        speciesAIthird: "Lilac Bonnet",
        percentageAIthird: 3,
        aiCorrect: true,
        percentageAIedible: 94,
        averagePickup: .50,
        averageEdible: .44,
        gradCamAligned: true,
        nnAligned: true,
        dissectAligned: true
    },
    {
        mushId: 14,
        speciesGT: "Blusher",
        edible: true,
        speciesAIfirst: "Blusher",
        percentageAIfirst: 70,
        speciesAIsecond: "Death Cap",
        percentageAIsecond: 27,
        speciesAIthird: "Porcino",
        percentageAIthird: 3,
        aiCorrect: true,
        percentageAIedible: 73,
        averagePickup: .55,
        averageEdible: .42,
        gradCamAligned: true,
        nnAligned: false,
        dissectAligned: false
    },
    {
        mushId: 15,
        speciesGT: "False Chanterelle",
        edible: false,
        speciesAIfirst: "Chanterelle",
        percentageAIfirst: 100,
        speciesAIsecond: null,
        percentageAIsecond: null,
        speciesAIthird: null,
        percentageAIthird: null,
        aiCorrect: false,
        percentageAIedible: 100,
        averagePickup: .14,
        averageEdible: .16,
        gradCamAligned: true,
        nnAligned: true,
        dissectAligned: true
    }
]
)}

function _splitBy(mushroomItemData){return(
mushroomItemData
)}

function _userData(FileAttachment){return(
FileAttachment("data-cleansed@1.csv").csv()
)}

function _getSelectionAverages(mushIdToItemCols){return(
function getSelectionAverages(filteredData, idArray, pickup) {
  const itemCols = mushIdToItemCols(idArray, pickup)
  const selected = itemCols[0]
  const unselected = itemCols[1]

  var sumSelected = 0
  var sumUnselected = 0
  for (let row in filteredData) {
    for (let col in filteredData[row]) {
      if (selected.includes(col)) {
        sumSelected += parseInt(filteredData[row][col]);
      } else if (unselected.includes(col)) {
        sumUnselected += parseInt(filteredData[row][col]);
      }
    }
  }
  return [
    sumSelected / (filteredData.length * selected.length),
    sumUnselected / (filteredData.length * unselected.length)
  ]
}
)}

function _24(getSelectionAverages,userData){return(
getSelectionAverages(userData.filter( (x) => x.group === "1") , [], true)
)}

function _mushIdToItemCols(){return(
function mushIdToItemCols(idArray, pickup = true) {
  const validMushIds = [3, 4, 5, 7, 8, 9, 12, 13, 14, 15]
  const selected = validMushIds.filter( (x) => idArray.includes(x) )
  const unselected = validMushIds.filter( (x) => ! idArray.includes(x) )
  const idMap = {
     3: pickup ? "item_pick_01_c" : "item_edible_01_c",
     4: pickup ? "item_pick_02_c" : "item_edible_02_c",
     5: pickup ? "item_pick_03_c" : "item_edible_03_c",
     7: pickup ? "item_pick_04_c" : "item_edible_04_c",
     8: pickup ? "item_pick_05_c" : "item_edible_05_c",
     9: pickup ? "item_pick_06_c" : "item_edible_06_c",
    12: pickup ? "item_pick_07_c" : "item_edible_07_c",
    13: pickup ? "item_pick_08_c" : "item_edible_08_c",
    14: pickup ? "item_pick_09_c" : "item_edible_09_c",
    15: pickup ? "item_pick_10_c" : "item_edible_10_c",
  }
  return [
    selected.map( (x) => idMap[x] ),
    unselected.map( (x) => idMap[x] )
  ]
}
)}

function _26(mushroomItems){return(
mushroomItems
)}

function _transformData(mushIdToItemCols,userData,getSelectionAverages){return(
function transformData(indexArray, pickup) {
  const itemCols = mushIdToItemCols(indexArray, pickup)
  const transformedData = []
  const groups = ["1", "2", "3", "4"]
  const groupMap = {
    "1": "Control",
    "2": "GradCAM",
    "3": "NN",
    "4": "Semantic"
  }
  for (let i in groups) {
    const filteredData = userData.filter( (x) => x.group === groups[i])
    const averages = getSelectionAverages(filteredData, indexArray, pickup)
    transformedData.push(
      {
        group: groupMap[groups[i]],
        selection: true,
        average: averages[0]
      }
    )
    transformedData.push(
      {
        group: groupMap[groups[i]],
        selection: false,
        average: averages[1]
      }
    )
  }
  return transformedData
}
)}

function _transformedSubsetData(transformData,mushroomItems){return(
transformData(mushroomItems.map( (x) => x.mushId), true)
)}

function _plotAndImage(Plot,width,transformedSubsetData,htl)
{
  const barChart =Plot.plot({
    width: 0.5 * width,
    height: 0.5 * width,
    margin: 50,
    y: {domain: [0, 1], grid: true},
    color: {
      range: ["#9CA095", "#674477", "#F9A700", "#66852A"]
    },
    marks: [
      Plot.barY(transformedSubsetData,
        {
          x: "selection",
          fx: "group",
          y: "average",
          fill: "group",
        }
      ),
      Plot.axisX({label: "Selected", fontSize: 12, labelOffset: 40}),
      Plot.axisY({fontSize: 12, label: "Avg. Correctness", labelOffset: 50., labelAnchor: "top"}),
      Plot.axisFx({label: "Group", fontSize: 12}),
    ]
  });
  return htl.html`<div style="display: flex">
      <div style="margin-right:10px">${barChart}</div>
      <div width=${0.5 * width} height=${0.5 * width}" id="hoverImage" style="margin: 0 auto">
      </div>
    </div>
  `
}


function _mushroomItems(Inputs,mushroomItemData,splitByButton,$0,htl,iconSize,mushroomImages,d3,showImageTooltip,forestlyScreens,hideImageTooltip,edibleIcon,poisonousIcon,aiCorrectIcon,aiWrongIcon,alignedIcon,notAlignedIcon,sparkBar,splitBy){return(
Inputs.table(mushroomItemData, {
  columns: [
    "mushId",
    "speciesGT",
    "aiCorrect",
    "edible",
    "gradCamAligned",
    "nnAligned",
    "dissectAligned",
    "averageEdible",
    "averagePickup"
  ],
  header: {
    mushId: "Image",
    speciesGT: "Ground Truth",
    aiCorrect: splitByButton("AI correctness", () => {
      $0.value = mushroomItemData.filter( (x, i) => x.aiCorrect ) }),
    edible: splitByButton("Edibility", () => {
      $0.value = mushroomItemData.filter( (x, i) => x.edible) }),
    gradCamAligned: splitByButton("GradCAM", () => {
      $0.value = mushroomItemData.filter( (x, i) => x.gradCamAligned) }),
    nnAligned: splitByButton("NN", () => {
      $0.value = mushroomItemData.filter( (x, i) => x.nnAligned) }),
    dissectAligned: splitByButton("Semantic ", () => {
      $0.value = mushroomItemData.filter( (x, i) => x.dissectAligned) }),
    averagePickup: "Avg. Pickup Decision",
    averageEdible: "Avg. Edibility Decision"
  },
  align: {
    mushId: "center",
    speciesGT: "left",
    aiCorrect: "center",
    edible: "center",
    gradCamAligned: "center",
    nnAligned: "center",
    dissectAligned: "center",
    averageEdible: "right",
    averagePickup: "left"
  },
  format: {
    mushId: (x, i, d) => {
      const img = htl.html`
        <img width=${iconSize} height=${iconSize} src=${mushroomImages["thumbnail"][x].src}></img>
      `
      d3.select(img)
        .on("mouseover", () => {
          showImageTooltip(forestlyScreens["noexpl"][d[i].mushId].src)
        })
        .on("mouseout", () => {
          hideImageTooltip()
        })
      return img
    },
    speciesGT: (x) => x,
    edible: (x) => x ? edibleIcon.cloneNode() : poisonousIcon.cloneNode(),
    aiCorrect: (x) => x ? aiCorrectIcon.cloneNode() : aiWrongIcon.cloneNode(),
    gradCamAligned: (x, i, d) => {
      const icon = x ? alignedIcon.cloneNode() : notAlignedIcon.cloneNode()
      d3.select(icon)
        .on("mouseover", () => {
          showImageTooltip(forestlyScreens["gradCam"][d[i].mushId].src)
        })
        .on("mouseout", () => {
          hideImageTooltip()
        })
      return icon
    },
    nnAligned: (x, i, d) => {
      const icon = x ? alignedIcon.cloneNode() : notAlignedIcon.cloneNode()
      d3.select(icon)
        .on("mouseover", () => {
          showImageTooltip(forestlyScreens["nn"][d[i].mushId].src)
        })
        .on("mouseout", () => {
          hideImageTooltip()
        })
      return icon
    },
    dissectAligned: (x, i, d) => {
      const icon = x ? alignedIcon.cloneNode() : notAlignedIcon.cloneNode()
      d3.select(icon)
        .on("mouseover", () => {
          showImageTooltip(forestlyScreens["dissect"][d[i].mushId].src)
        })
        .on("mouseout", () => {
          hideImageTooltip()
        })
      return icon
    },
    // averagePickup: x => Math.round(100 * x) + " %",
    // averageEdible: sparkLeft(1, "left"),
    averageEdible: (x) => sparkBar(x, iconSize, false),
    averagePickup: (x) => sparkBar(x, iconSize, true)
  },
  width: {
    mushId: 30,
    speciesGT: 80,
    aiCorrect: 50,
    edible: 50,
    gradCamAligned: 50,
    nnAligned: 50,
    dissectAligned: 50,
    averageEdible: 90,
    averagePickup: 90
  },
  value: splitBy,
  maxHeight: 600,
})
)}

function _showImageTooltip(d3,width){return(
function showImageTooltip (src) {
  const imgDiv = d3.select("#hoverImage")
  imgDiv
    .selectAll("img")
    .remove()
  imgDiv
    .append("img")
    .attr("height", 0.45 * width)
    .attr("src", src)
}
)}

function _hideImageTooltip(d3){return(
function hideImageTooltip () {
  const imgDiv = d3.select("#hoverImage")
  imgDiv
    .selectAll("img")
    .remove()
}
)}

function _splitByButton(htl){return(
function splitByButton (label, func) {
  const button = htl.html`<button type="button" style="font-weight: normal;" onclick=${func}>${label}</button>`
  const div = htl.html`
      <div style="align:center;display:flex;justify-content: center;">
          ${button}
      </div>`;
  return div;
}
)}

function _iconSize(){return(
30
)}

async function _edibleIcon(FileAttachment,iconSize){return(
await FileAttachment("edible.png").image({width: iconSize})
)}

async function _poisonousIcon(FileAttachment,iconSize){return(
await FileAttachment("poisonous.png").image({width: iconSize})
)}

async function _aiCorrectIcon(FileAttachment,iconSize){return(
await FileAttachment("ai-correct@1.png").image({width: iconSize})
)}

async function _aiWrongIcon(FileAttachment,iconSize){return(
await FileAttachment("ai-wrong@1.png").image({width: iconSize})
)}

async function _alignedIcon(FileAttachment,iconSize){return(
await FileAttachment("aligned.png").image({width: iconSize})
)}

async function _notAlignedIcon(FileAttachment,iconSize){return(
await FileAttachment("not-aligned.png").image({width: iconSize})
)}

function _sparkBar(d3){return(
function sparkBar(x, h, left = true) {
  const svg = d3.create("svg")
    .attr("width", "100%")
    .attr("height", h)
    //.attr("viewBox", [0, 0, 100, 10])
  
  svg.append("rect")
    .attr("x", left ? 0 : (100 - 100 * x) + "%" )
    .attr("fill", "lightgray")
    .attr("width", (100 * x) + "%")
    .attr("height", "100%")

  svg.append("text")
    .attr("x", left ? Math.max(97 * x, 20) + "%" : Math.min((100 - 97 * x), 80) + "%")
    .attr("y", "55%")
    .attr("text-anchor", left ? "end" : "start")
    .attr("dominant-baseline", "middle")
    //.style("font", "5px sans-serif")
    .text(Math.round(100 * x) + " %")
  
  return svg.node() // return this to see the result
}
)}

async function _forestlyScreens(FileAttachment)
{ return {
  "noexpl": {
     3: await FileAttachment("nopad_noexpl_03_EN@1.png").image({height: 500}),
     4: await FileAttachment("nopad_noexpl_04_EN@1.png").image({height: 500}),
     5: await FileAttachment("nopad_noexpl_05_EN@1.png").image({height: 500}),
     7: await FileAttachment("nopad_noexpl_07_EN@1.png").image({height: 500}),
     8: await FileAttachment("nopad_noexpl_08_EN@1.png").image({height: 500}),
     9: await FileAttachment("nopad_noexpl_09_EN@1.png").image({height: 500}),
    12: await FileAttachment("nopad_noexpl_12_EN@1.png").image({height: 500}),
    13: await FileAttachment("nopad_noexpl_13_EN@1.png").image({height: 500}),
    14: await FileAttachment("nopad_noexpl_14_EN@1.png").image({height: 500}),
    15: await FileAttachment("nopad_noexpl_15_EN@1.png").image({height: 500}),
  },
  "gradCam": {
     3: await FileAttachment("nopad_expl-gradcam_03_EN.png").image({height: 500}),
     4: await FileAttachment("nopad_expl-gradcam_04_EN.png").image({height: 500}),
     5: await FileAttachment("nopad_expl-gradcam_05_EN.png").image({height: 500}),
     7: await FileAttachment("nopad_expl-gradcam_07_EN.png").image({height: 500}),
     8: await FileAttachment("nopad_expl-gradcam_08_EN.png").image({height: 500}),
     9: await FileAttachment("nopad_expl-gradcam_09_EN.png").image({height: 500}),
    12: await FileAttachment("nopad_expl-gradcam_12_EN.png").image({height: 500}),
    13: await FileAttachment("nopad_expl-gradcam_13_EN.png").image({height: 500}),
    14: await FileAttachment("nopad_expl-gradcam_14_EN.png").image({height: 500}),
    15: await FileAttachment("nopad_expl-gradcam_15_EN.png").image({height: 500}),
  },
  "nn": {
     3: await FileAttachment("nopad_expl-nn_03_EN.png").image({height: 500}),
     4: await FileAttachment("nopad_expl-nn_04_EN.png").image({height: 500}),
     5: await FileAttachment("nopad_expl-nn_05_EN.png").image({height: 500}),
     7: await FileAttachment("nopad_expl-nn_07_EN.png").image({height: 500}),
     8: await FileAttachment("nopad_expl-nn_08_EN.png").image({height: 500}),
     9: await FileAttachment("nopad_expl-nn_09_EN.png").image({height: 500}),
    12: await FileAttachment("nopad_expl-nn_12_EN.png").image({height: 500}),
    13: await FileAttachment("nopad_expl-nn_13_EN.png").image({height: 500}),
    14: await FileAttachment("nopad_expl-nn_14_EN.png").image({height: 500}),
    15: await FileAttachment("nopad_expl-nn_15_EN.png").image({height: 500}),
  },
  "dissect": {
     3: await FileAttachment("nopad_expl_dissect_03_EN.png").image({height: 500}),
     4: await FileAttachment("nopad_expl_dissect_04_EN.png").image({height: 500}),
     5: await FileAttachment("nopad_expl_dissect_05_EN.png").image({height: 500}),
     7: await FileAttachment("nopad_expl_dissect_07_EN.png").image({height: 500}),
     8: await FileAttachment("nopad_expl_dissect_08_EN.png").image({height: 500}),
     9: await FileAttachment("nopad_expl_dissect_09_EN.png").image({height: 500}),
    12: await FileAttachment("nopad_expl_dissect_012_EN.png").image({height: 500}),
    13: await FileAttachment("nopad_expl_dissect_013_EN.png").image({height: 500}),
    14: await FileAttachment("nopad_expl_dissect_014_EN.png").image({height: 500}),
    15: await FileAttachment("nopad_expl_dissect_015_EN.png").image({height: 500}),
  },
}}


async function _mushroomImages(FileAttachment)
{ return {
  "full": {
     3: await FileAttachment("image_mushId_03.JPG").image({height: 500}),
     4: await FileAttachment("image_mushId_04.JPG").image({height: 500}),
     5: await FileAttachment("image_mushId_05.JPG").image({height: 500}),
     7: await FileAttachment("image_mushId_07.JPG").image({height: 500}),
     8: await FileAttachment("image_mushId_08.JPG").image({height: 500}),
     9: await FileAttachment("image_mushId_09.JPG").image({height: 500}),
    12: await FileAttachment("image_mushId_12.JPG").image({height: 500}),
    13: await FileAttachment("image_mushId_13.JPG").image({height: 500}),
    14: await FileAttachment("image_mushId_14.JPG").image({height: 500}),
    15: await FileAttachment("image_mushId_15.JPG").image({height: 500}),
  },
  "thumbnail": {
     3: await FileAttachment("image_mushId_03_square.jpg").image({height: 500}),
     4: await FileAttachment("image_mushId_04_square.jpg").image({height: 500}),
     5: await FileAttachment("image_mushId_05_square.jpg").image({height: 500}),
     7: await FileAttachment("image_mushId_07_square.jpg").image({height: 500}),
     8: await FileAttachment("image_mushId_08_square.jpg").image({height: 500}),
     9: await FileAttachment("image_mushId_09_square.jpg").image({height: 500}),
    12: await FileAttachment("image_mushId_12_square.jpg").image({height: 500}),
    13: await FileAttachment("image_mushId_13_square.jpg").image({height: 500}),
    14: await FileAttachment("image_mushId_14_square.jpg").image({height: 500}),
    15: await FileAttachment("image_mushId_15_square.jpg").image({height: 500}),
  }
}}


function _44(md){return(
md`----

## Blaming Network`
)}

function _blamingData()
{
  return {
    nodes: [
      {
        id: "blame.AI",
        group: "blame",
        shortLabel: "🤖",
        labelLarge: true,
        label: "Degree to which the participant blames AI"
      },
      {
        id: "blame.me",
        group: "blame",
        shortLabel: "🧒",
        labelLarge: true,
        label: "Degree to which the participant blames themself"
      },
      {
        id: "poison.severity",
        group: "poison",
        shortLabel: "☠️",
        labelLarge: true,
        label: "Perceived severity of the harm"
      },
      {
        id: "AI.responsibility",
        group: "ai",
        shortLabel: "🤖R",
        labelLarge: false,
        label: "Perceives responsibility of the AI"
      },
      {
        id: "AI.intention",
        group: "ai",
        shortLabel: "🤖I",
        labelLarge: false,
        label:
          "Degree to which the participant perceives the AI as having intentions"
      },
      {
        id: "AI.decision",
        group: "ai",
        shortLabel: "🤖D",
        labelLarge: false,
        label:
          "Degree to which the participant perceives the AI as having the ability to make its own decisions"
      },
      {
        id: "AI.mind",
        group: "ai",
        shortLabel: "🤖M",
        labelLarge: false,
        label:
          "Degree to which the participant perceives the AI as having a mind on its own"
      },
      {
        id: "AI.freewill",
        group: "ai",
        shortLabel: "🤖F",
        labelLarge: false,
        label:
          "Degree to which the participant perceives the AI as having a free will"
      },
      {
        id: "I.could.prevent",
        group: "prevent",
        shortLabel: "🛡️",
        labelLarge: true,
        label:
          "Degree to which the participant has the impression they could have recognized the wrong classification"
      }
    ],
    links: [
      {
        source: "blame.AI",
        target: "poison.severity",
        value: 0.06
      },
      {
        source: "blame.AI",
        target: "AI.responsibility",
        value: 0.19
      },
      {
        source: "blame.me",
        target: "poison.severity",
        value: 0.16
      },
      {
        source: "blame.me",
        target: "AI.responsibility",
        value: -0.02
      },
      {
        source: "blame.me",
        target: "I.could.prevent",
        value: 0.08
      },
      {
        source: "AI.freewill",
        target: "I.could.prevent",
        value: 0.07
      },
      {
        source: "AI.freewill",
        target: "AI.mind",
        value: 0.42
      },
      {
        source: "AI.freewill",
        target: "AI.decision",
        value: 0.06
      },
      {
        source: "AI.freewill",
        target: "AI.responsibility",
        value: 0.11
      },
      {
        source: "AI.freewill",
        target: "AI.intention",
        value: 0.19
      },
      {
        source: "AI.mind",
        target: "AI.decision",
        value: 0.22
      },
      {
        source: "AI.mind",
        target: "AI.intention",
        value: 0.19
      },
      {
        source: "AI.responsibility",
        target: "AI.decision",
        value: 0.13
      },
      {
        source: "AI.responsibility",
        target: "AI.mind",
        value: 0.06
      },
      {
        source: "AI.responsibility",
        target: "AI.intention",
        value: 0.21
      },
      {
        source: "AI.decision",
        target: "AI.intention",
        value: 0.06
      }
    ]
  };
}


function _blamingLegend(blamingData,Plot,width)
{
  const values = blamingData.links.map((x) => x.value);
  const min = -0.2;
  const max = +0.7;
  return Plot.legend({
    color: {
      type: "linear",
      scheme: "RdGy",
      range: [(min + 1) / 2, (max + 1) / 2],
      domain: [min, max]
    },
    width: 0.25 * width,
    height: 0.05 * width,
    marginLeft: 67,
    label: "Link strength"
  });
}


function _blamingNetwork(width,d3,blamingData,invalidation)
{
  // Specify the dimensions of the chart.
  const svgWidth = 0.4 * width;
  const height = svgWidth;

  // Specify the color scale.
  // const nodeColor = d3.scaleOrdinal(d3.schemeTableau10);
  const nodeColor = d3.scaleOrdinal([
    d3.schemeTableau10[0],
    d3.schemeTableau10[1],
    d3.schemeTableau10[6],
    d3.schemeTableau10[3]
  ]);
  const linkColor = d3
    .scaleDiverging(d3.interpolateRdGy)
    .domain([-0.2, 0, 0.7]);
  // const linkColor = d3
  //   .scaleDiverging(d3.interpolatePuOr)
  //   .domain([-0.5, 0, 0.5]);

  // The force simulation mutates links and nodes, so create a copy
  // so that re-evaluating this cell produces the same result.
  const links = blamingData.links.map((d) => ({ ...d }));
  const nodes = blamingData.nodes.map((d) => ({ ...d }));

  // Create a simulation with several forces.
  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3.forceLink(links).id((d) => d.id)
    )
    .force(
      "charge",
      d3.forceManyBody().strength(-1000).distanceMin(70).distanceMax(300)
    )
    .force("center", d3.forceCenter(svgWidth / 2, height / 2))
    .on("tick", ticked);

  // Create the SVG container.
  const svg = d3
    .create("svg")
    .attr("width", svgWidth)
    .attr("height", height)
    .attr("viewBox", [0, 0, svgWidth, height])
    .attr("style", "max-width: 100%; height: auto;");

  // Add a line for each link, and a circle for each node.
  const link = svg
    .append("g")
    //.attr("stroke-opacity", 0.6)
    .selectAll()
    .data(links)
    .join("line")
    .attr("stroke", (d) => linkColor(d.value))
    .attr("stroke-width", (d) => 10 * Math.sqrt(d.value));

  link.append("title").text((d) => d.value);

  const node = svg
    .append("g")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5)
    .selectAll()
    .data(nodes)
    .join("circle")
    .attr("r", 20)
    .attr("fill", (d) => nodeColor(d.group));

  node.append("title").text((d) => d.label);

  const nodeLabels = svg
    .append("g")
    .selectAll()
    .data(nodes)
    .join("text")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .attr("font-family", '"Segoe UI", Arial, sans')
    .attr("font-weight", "bold")
    .attr("fill", "white")
    .attr("font-size", (d) => (d.labelLarge ? "18" : "12"))
    .attr("pointer-events", "none")
    .text((d) => d.shortLabel);

  // Add a drag behavior.
  node.call(
    d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended)
  );

  // Set the position attributes of links and nodes each time the simulation ticks.
  function ticked() {
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

    nodeLabels.attr("x", (d) => d.x).attr("y", (d) => d.y + 1);
  }

  // Reheat the simulation when drag starts, and fix the subject position.
  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  // Update the subject (dragged node) position during drag.
  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  // Restore the target alpha so the simulation cools after dragging ends.
  // Unfix the subject position now that it’s no longer being dragged.
  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  // When this cell is re-run, stop the previous simulation. (This doesn’t
  // really matter since the target alpha is zero and the simulation will
  // stop naturally, but it’s a good practice.)
  invalidation.then(() => simulation.stop());

  return svg.node();
}


function _48(md){return(
md`----
## Appendix`
)}

function _d3(require){return(
require("d3@6")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["mushroom-doppelganger@2.svg", {url: new URL("./files/9cbfd26a578d9915fdf0859b2e8d7f561ed876e68057bf4e0f06c35aebfff78d5ce14bba099b287358f1c0ac1ee3789c75f386a9e6bf7c6fdf94e6b791d7dd83.svg", import.meta.url), mimeType: "image/svg+xml", toString}],
    ["poisonous.png", {url: new URL("./files/6522cae649687d897ff55198cd3a60e47842912d84d5fcf6aa2c36106257b0b01e4815e09d2a6e3611b3028db729918adb588cbb3aeb8b11b50457af4fb85435.png", import.meta.url), mimeType: "image/png", toString}],
    ["edible.png", {url: new URL("./files/7d8c7b03613dfa21a16c74cb645e87099afbffa872487e20a8db38a106df1d629eec0d008e2c248c5a5d5f118a00d5e4f31f7745231d497d6ebe093bf9467c89.png", import.meta.url), mimeType: "image/png", toString}],
    ["ai-correct@1.png", {url: new URL("./files/24bf4feba0d4a51f5908aadba8ca3bc39512c1ce3edaa68b551020687a443d60a44f9048fd386276c1b0a0f79b326584f2152f14c15513e28badb75c73855c0f.png", import.meta.url), mimeType: "image/png", toString}],
    ["ai-wrong@1.png", {url: new URL("./files/396fc15270e0dbcdd8b1e08ef7398129434bfbada4c97520931af61ff8755b7ca76b3601f2863d525ecb3396d9a80fc9b45f07fdd5307ae9f198b68980e81cab.png", import.meta.url), mimeType: "image/png", toString}],
    ["aligned.png", {url: new URL("./files/b672c9ad19ec13a0765733d67953f53d324aca85378da56913f55767a1d6f7da14756653db9e9d55f50ff9f0ee36efdc4db2d29f2586c1963216b31f49e811f2.png", import.meta.url), mimeType: "image/png", toString}],
    ["not-aligned.png", {url: new URL("./files/695ba653fe90270b46806fa08050b1395bf6ea49e2a3613352e5f9e0b9f8d6e1eebfac0e809f28da583ec4566cc3331b093b32a026a550e535df89063f4220ee.png", import.meta.url), mimeType: "image/png", toString}],
    ["data-cleansed@1.csv", {url: new URL("./files/02e7edc986a9fa3a2eb6c670c3cdc00c7b3711499f6e3fdd76c4fe1e4597491930dd74a7ebdcf6a622b7ce6bd544c5131eb8c68bd82531b774037599421dcdc6.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["nopad_expl_dissect_03_EN.png", {url: new URL("./files/fc6a2cfe1901cc724f7236cf0aac6a29c2ba7b630450e95ed92f3d977fd28a9416c34d776776fb23c860e26574048248bdb06d4370f86e12e859dbfe769440b0.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-gradcam_08_EN.png", {url: new URL("./files/cd1f606336c0dba38f5a3b3f72858508d00acd9f0aceab2c0552da2e430827bd752b3bc1c5059ee2f580a26b43dbdcb02d115ce72d5b51a9a8018340f91a42fb.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-gradcam_13_EN.png", {url: new URL("./files/b479e6e450443e093bdc286c9373effada5f526107fb37f90dee824f33fcb492f081dbf68658c865085c059e64e4abdf20163c4efb5fae8fd4eacf385b43eac9.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_noexpl_13_EN@1.png", {url: new URL("./files/0406c5f59ea2fa8ed98862ddec3036e1487905e7f9e2e69221e86d0f269e930003f9678b46c6264cbe87b0967c946d332f73612a0ed3195c79ee77ca15169b2e.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-gradcam_14_EN.png", {url: new URL("./files/332c36721d75e7cae8782eb1fa7cd1cc72cffab0c5ef1f4f0f96aab8b09de0b27b201cfa303010fcbc67213b43770cc21c590fe5ba32ec897de0d810bf7951c6.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_noexpl_03_EN@1.png", {url: new URL("./files/8c455838dbb2bc4d57117675e62c305be05387a3d6d7ff2ff6889f3c9357bf2fd2c8a1b514e5335f7561b8ca20709373a2d191215941b813cd0c3bf77e502e70.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-gradcam_05_EN.png", {url: new URL("./files/bca4d850fd175f9d184ea2ef8f440d828709d29aec88262fdca52fb9c09b56d0a13daa5ae4dfc9214650dc747af888e8d8a19a3d27f04c27e6e14de431e882bd.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_noexpl_08_EN@1.png", {url: new URL("./files/170b8e8790f17299860cf1bc1a0f7bcaf3e05e8bbf58b0b47be7bc9c55ba5e2ce792e873419c7855d5199f6108955ad26d704bf9a9fc43266572700b05056e77.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_noexpl_15_EN@1.png", {url: new URL("./files/27b1244c895c3a9c0e4f1b4890e1d4849a5cbfe4171f1cf1876cf3af7d33c99e430f28db020dd06ff7159d6d95adec9e13979eef4f88a6853f2b5aaea026ae26.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-gradcam_03_EN.png", {url: new URL("./files/4fc05529494ba2bbb6c75527e1f8b002eed05e0a40d55506baf792feb9da5327cbbc810c9ef8e1607747b15a45dc0188c60ee4a3627bd0a688a87a434685bd85.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl_dissect_013_EN.png", {url: new URL("./files/9893d131e8464a5ebd60203baefa74c37e0ef30b5a98277e1075ce1c668cb492085521613ae6e742b681c6f6c8ac5ec52cc7b3f0aea8ff021c9837fe124df148.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_noexpl_05_EN@1.png", {url: new URL("./files/607207759f297d83c52debb779e10dae43e84ad0766c75a38a72a6e82c22966e0dc22de83bb3aa08f6ba74febebe94210ab38f7e24cbb6223770bb74dc5baca0.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl_dissect_08_EN.png", {url: new URL("./files/63f38337d296ec3d5ea8c4be44e422d5d42f7af6fa796e08207d7c532c5075284f81e4f5c3418d0bafaee38f4b82eb9a6e27d0f052a03546247aa7690eb6ac86.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_noexpl_04_EN@1.png", {url: new URL("./files/cc650f4d9fb2cead9a38e1e7bb530bfa92b3a77bb5d40c13e0e6c5dff351e8e78b0396bc367af00fd70f2c5ebeab018eb203c8ebde8a7f5f555b8914179c5580.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-nn_15_EN.png", {url: new URL("./files/c20c06a7a1aae5d901d07ba5df3fafc11c831fa5d36af0a1cffda37f66e826a53b0cb02c9ae42678619151b3faea7437a84fb31dc53763c6e3061d3be8b7623c.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-gradcam_04_EN.png", {url: new URL("./files/cf08c622cb01e2ce15253098fca24693adf393be338e4991633b248bd5d875afc4a0bfebc6d858f9b898758138c9690020304844ccaf4bc92c964280d53b32d3.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl_dissect_09_EN.png", {url: new URL("./files/65635de2657defbb0fbfeeec62c3cfc147dbe5445b84bf4fcfcc7292859d117c7a84598b521d0701d522da897531188da56cccec6eed0e16e65861bdf9bbe911.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl_dissect_015_EN.png", {url: new URL("./files/67735c59944c1b7cabe67b22c6b6fbe3f4e3946a0ea69b594971a7e7113fb369fe0c892ba84514703ea2a976871d7e761cf75d45c72839b1b45f824d4ebd10f7.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-gradcam_09_EN.png", {url: new URL("./files/faaeb860ea0c960c512a65c398ded729ff04af758675e2f6c4726c9bc56c91c5709ad2ffcfb4470b1cf6e0ff8519c65af43aa6720b8d6eae51ea2aee76acfe47.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-gradcam_15_EN.png", {url: new URL("./files/1bb9b2ae1606b3b015167b1e456be5ec9aeff4744799e363e6961db1368e6243cf450ed01fde95c02ad6bde13f667483a45c09dfbb81f2cc9c57ee062fdd81ce.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl_dissect_014_EN.png", {url: new URL("./files/9b47455cfba003565e3acbfe125ab4c183f0414e1c430aa936f17c1bbf1b7d2aead881a445acb1fc4dce4e6fe0ead5b94c3e56b3896de248811b832e3d3ec56c.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-nn_03_EN.png", {url: new URL("./files/011aab37f9b834581312783736b909ed3f14496f39859e94fa0946a46e1fc94e62c97de5b855ee1a963df9513df1ecf145e50cccf7626978bd913260da7157d0.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl_dissect_07_EN.png", {url: new URL("./files/e7ae82f2609a99bcc74d6faf3b9fe872f6d1d747720d28a89d8c53f9d85b75bfd9e4f7ed9a7ff657b4b64dd60f9ee1e9527d6b056372191538c3e73b54ad8d5f.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl_dissect_04_EN.png", {url: new URL("./files/a2808d133dabf374f1326e4c6f6f3a109949b59a720e63346c94ea94388ba512802fbcc0adc523f4e20f6e043cc9371e55720480f92f21106759e017f9256859.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_noexpl_14_EN@1.png", {url: new URL("./files/25174bc9927d5033434df0d07546994aec1f015d206851953be5431032f714725fa4a7234df74124e8a928423ab642e08f1c8d8ff681b0b6f94acfc114787017.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl_dissect_05_EN.png", {url: new URL("./files/a1a38832cbe5be3319df7ec364781047b9f385dcb7c2c265b4225d5e09b5e470d93ee7fd6a469fe13bab041706bd751dab9f997310e01c7096d7612319b45212.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_noexpl_07_EN@1.png", {url: new URL("./files/2334fd1a3e68f1c4727915bbedacabe70f2ec174d3532b3c38b2b0187a927c95529d5fb773b071a698289b4585bd57fbd33ccf6f7189c819c9f01a83fec236f3.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_noexpl_12_EN@1.png", {url: new URL("./files/71f8bd5c97696c926671aa46dc2a14356ab6712a5f10b37baff2912ed668ac83abae5fae92668f0e116ff568296a9374aba61ca95dff55f08e513587f6286265.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl_dissect_012_EN.png", {url: new URL("./files/7c6f4e6ff94f62da62168b2c8e5485433510067111291ae581a5af9c9246b35eb387d5a87449997ea6fdc1bf53a8713cf72be9585dd1d22c18691786e5e7a10c.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-gradcam_07_EN.png", {url: new URL("./files/c9916900592674da04d39c2c03c689379cde288a9237f4d0f0b927c8b32c72ab846a80feabfe90c9a21a5567f58fe468eddfcd3a71b88c6b1eb7e915f8789d57.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_noexpl_09_EN@1.png", {url: new URL("./files/c29dd30aadbbc8c4ca64edbb002a1972a7e456324fc11f0ead4cad4eb62fcbd5500e0a3a75a24b42288012f14edeea6659fd64b7bba0739674d07b6132d1718f.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-nn_09_EN.png", {url: new URL("./files/33975528fee0ec04face12b909c4049c03671a581a9860574156d1db09ba49eb3ff43be77e27526e88bd95fb471071bb352a81956aff165aab078407abc74e66.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-nn_13_EN.png", {url: new URL("./files/d9450c4c294522597d9d03d9d8b8b86763475d013912a75190f9b25e10b5c4a3d3dac09ef4545fb79f11866a593667a458596b67cbd6b78530b399b9a6eb0b34.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-nn_12_EN.png", {url: new URL("./files/06706203b82451c5b56a51038a75bc7659c95fc35baa6acaeb8c163fb8018e1342b936bc20bccb4e71a2a072981eb4097944b31f549c62f703425614429cd2d6.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-nn_14_EN.png", {url: new URL("./files/b813a3cc3c9cd7296d63c3bd5863676c17a0782181a055d6130e28f0f5228b5a11080d39b35d89f08aecfbfcae00ffeba15ffe30252eeb4713ac7b4a72cb926a.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-nn_05_EN.png", {url: new URL("./files/2fed7ef19460cbc7c0934e7cc597352004ce6928b22e87cad18da107993b79d6eb976660e17537167273286893181924ed894c730e493aba048d344a65d0b958.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-nn_07_EN.png", {url: new URL("./files/5539da7e90c03d658020c895f7911cc06648d084beb286213d7d2e131e6bd6d156ff51c7c8dd11cc78a2a1ced17f40395f4184cc7ddb6e880b8654ef7a28e6fa.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-gradcam_12_EN.png", {url: new URL("./files/0ab7b2274b54cc87b07ae27db23f284ae3a4c1b4964515276bca435ae41006897710a19895e59b3137c8e7bf485eb715fdad7bc5499ee423dc65e31a3ff263d7.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-nn_04_EN.png", {url: new URL("./files/d8aba240f6cc17b5434f6b7fccd80d7fb09cb23c1fdd48a7b47bb26bd3274e4819262a61db12245e9f7140ccce5c21d703ba0bd616bedaad8c4f54050656ccc6.png", import.meta.url), mimeType: "image/png", toString}],
    ["nopad_expl-nn_08_EN.png", {url: new URL("./files/165778bffb5c2c72f8923a5a1746279f031edfcd551fa4375b9010ae76e6b1c31f091afd4dc4f6917c006d265b5a960606f1e5db4b0976b618897be4032f821b.png", import.meta.url), mimeType: "image/png", toString}],
    ["image_mushId_13.JPG", {url: new URL("./files/2f2279205863561e5b88c2acc54095bee4b19d726aaea1c67988a2a13e6338453f39ef3f13b290fe8d4d71537aaa676f1da5899327297601c355ecd6a89ad74e.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_03.JPG", {url: new URL("./files/e3a26ee5bc65c9ebdf8ec4d4120c32ad0b3f40f450de5656d1134b42ce343536acbe1ac4d9fe5f6b9eacc7475a47b27c18a2bf7484d80c7322b9d1102999d9d8.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_14.JPG", {url: new URL("./files/293ac194db233e3ac9b8e61fe93328802f7cbe9658a1f47d2e49b10cfb9ab21357a5f56675a784fad66e49d6d58dee3c52ab1a98a499c0666ef43d618e8e3437.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_04.JPG", {url: new URL("./files/f3d50de429db6b6c6fa4ce9697b4dd1e1a163879c70bf5a2c934ce682352cb85ff00b42161f5c95f68bab093b85cb92c641ea19353f4617319414bd40b749f16.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_09.JPG", {url: new URL("./files/74e15fc87dc555e942b9cbbe8e68e8dfea62b8e98978c37403a779d62f7e04c5e589e1f0f27ac121c020bfa1bc482f4c3f8338a394c6d128e4995471d9f5f772.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_12.JPG", {url: new URL("./files/ff243020763205b5118a3a3cff989758cb390424fa3798e1834c6d0dcf187064a1f6a38cf486e662cf47feb71fb8611a2c44982a3dacaabd977f124812cd1d39.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_07.JPG", {url: new URL("./files/bb47b58661d3671cee3c86c2ac175e27780acc4a82a733b0cbceb13117a0109a529d931c3b61bbbe956ff0e29da3465b7774060cf37c10c7d7a93d8c2358c75e.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_15.JPG", {url: new URL("./files/bec75cb78447b7178c4dd0ac929d405f5ca09ab962e4f4d155f8e0de68c05e55b3759d41f666dabb628175745ffc238e1193925c294a47600e44adda97fc62e4.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_05.JPG", {url: new URL("./files/4af296d6bb137a462d1312d7d5a55bc635cef8f1047ac84b54126572d311169153e8ad8e5d8d949274b25b455f852b8498ba27eacaff6cdb1c2436b86b756c13.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_08.JPG", {url: new URL("./files/61f46df13b2d216303269aca48778ef1ddf6d6441c45e07d15e18f0a975faa08edf6412b2e056c6ed3fbf902c614fbfc62ec4e2e350a656ab1cf9bbb6a42e042.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_04_square.jpg", {url: new URL("./files/f72914eda90a80b52e57330a2ba7a715ab075a8615ace4d621d0861d7250df06de6afbfb9c53ad1848af3b53c1dc6c6306a66ddf09c78bab0a71c7ace8f084ba.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_13_square.jpg", {url: new URL("./files/b432b543000edf29207e7e3483e1e99b608ae291d104cc522b414d20a4de5ceb767af8eb3bf9de79bb08de745b6a8ca0d1303fe2fd0328c28ce3aa4e30ae43a2.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_07_square.jpg", {url: new URL("./files/87c4b1b5c92fadeab29af648606a14ed3f602925fe26121e5c848a0f9ab516ad2c4542405dfe86f3a424e7eb018c4cedea3c60bc91f12b5d593c5b625ea00f55.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_09_square.jpg", {url: new URL("./files/02b22a357c1bc8b3089d1e80d1a48f831cd805a51af6f6c7177d67d0363151b24561d0cb60cb75b23b761c537da896409444b4edff1af28071457cb5361cc1d4.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_03_square.jpg", {url: new URL("./files/80ad59e68027b218d0387ac6e6e40b7fd9a55095e7cb97ac907bcd491fd2620ce164833d22bf15a81fa65424bb62212d06a60c9d1cb9d3d26de0d12f72a4e693.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_05_square.jpg", {url: new URL("./files/05603100f3d79c30673aa3a4f4103f00fe0e3bbd338f87960f65193738ad778d7d56871266cbfd07775424189864050787d79f98943072c435845bfb77b2f8d4.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_14_square.jpg", {url: new URL("./files/10512b6d5cb54d48aaf2663a4ce77bb08aed0253183b4b420987d58884bd0f6bbfeebc637c1da2d27a3f21e84a9367145475000a413beb9c050ef2528273a59a.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_15_square.jpg", {url: new URL("./files/1511842ff5ed36596a9430056f003878b36f933f2fb8b51efc2c5bc36ded73b063027c6f4fc8d0032497bbe131facd4b29595344195c8f471c8388b64489c258.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_12_square.jpg", {url: new URL("./files/714a62128b948add00967179a114242ed0e6ffa90a5f3b7720e6bf53a5dcb2d749ac0c4e7d56d5e361e598c9678f5dc89e39b13e6c2f865f5e195ba7c1162b8c.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["image_mushId_08_square.jpg", {url: new URL("./files/6ba22c15e6603ad44533d83d4b1f2bbed6334ede15b0647f8b78c75be90b8969f3949475abd9a79bb8478f75627c44ad2c312964bf342106d311bae0ceb83dc9.jpeg", import.meta.url), mimeType: "image/jpeg", toString}],
    ["forestly-study-1@1.svg", {url: new URL("./files/fb8a121e1d5300194227ebb8a455182c9c6f1ad05aa144253eb001d3647e0946620ab2b6a064c2d3df4f9a534840054e681cccec8494d3aa64e2f4f2807ad61f.svg", import.meta.url), mimeType: "image/svg+xml", toString}],
    ["study-1-data-cleaned@4.csv", {url: new URL("./files/15809f4543518543840f015ac97c90e64a288db23e74cd81396c4cbfa14aac73b61e5e41a5f3b0a54572f2fba5c10b8674d54a6767244c4deb4a0e9a4f9f66f0.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("forestlyInterface")).define("forestlyInterface", ["FileAttachment","DOMParser","d3","showOrHideGroup"], _forestlyInterface);
  main.variable(observer("showOrHideGroup")).define("showOrHideGroup", ["d3"], _showOrHideGroup);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer("mushroomDoppelganger")).define("mushroomDoppelganger", ["FileAttachment","DOMParser","d3","width"], _mushroomDoppelganger);
  main.variable(observer("viewof toggleHideShow")).define("viewof toggleHideShow", ["Inputs"], _toggleHideShow);
  main.variable(observer("toggleHideShow")).define("toggleHideShow", ["Generators", "viewof toggleHideShow"], (G, _) => G.input(_));
  main.define("initial explHidden", _explHidden);
  main.variable(observer("mutable explHidden")).define("mutable explHidden", ["Mutable", "initial explHidden"], (M, _) => new M(_));
  main.variable(observer("explHidden")).define("explHidden", ["mutable explHidden"], _ => _.generator);
  main.variable(observer()).define(["toggleHideShow","showExplanations","hideExplanations"], _8);
  main.variable(observer("showExplanations")).define("showExplanations", ["explHidden","d3","mutable explHidden"], _showExplanations);
  main.variable(observer("hideExplanations")).define("hideExplanations", ["explHidden","d3","mutable explHidden"], _hideExplanations);
  main.variable(observer()).define(["md"], _11);
  main.variable(observer("dataStudyOne")).define("dataStudyOne", ["FileAttachment"], _dataStudyOne);
  main.variable(observer("plotAnyTwo")).define("plotAnyTwo", ["variables","selectedXAxis","plotCategoricalNumerical","selectedYAxis","d3","htl","width","plotNumericalNumerical"], _plotAnyTwo);
  main.variable(observer("viewof selectedXAxis")).define("viewof selectedXAxis", ["Inputs","variables"], _selectedXAxis);
  main.variable(observer("selectedXAxis")).define("selectedXAxis", ["Generators", "viewof selectedXAxis"], (G, _) => G.input(_));
  main.variable(observer("viewof selectedYAxis")).define("viewof selectedYAxis", ["Inputs","variables"], _selectedYAxis);
  main.variable(observer("selectedYAxis")).define("selectedYAxis", ["Generators", "viewof selectedYAxis"], (G, _) => G.input(_));
  main.variable(observer("variables")).define("variables", _variables);
  main.variable(observer("plotNumericalNumerical")).define("plotNumericalNumerical", ["Plot","width","variables","dataStudyOne"], _plotNumericalNumerical);
  main.variable(observer("plotCategoricalNumerical")).define("plotCategoricalNumerical", ["width","Plot","variables","dataStudyOne","d3"], _plotCategoricalNumerical);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer("mushroomItemData")).define("mushroomItemData", _mushroomItemData);
  main.define("initial splitBy", ["mushroomItemData"], _splitBy);
  main.variable(observer("mutable splitBy")).define("mutable splitBy", ["Mutable", "initial splitBy"], (M, _) => new M(_));
  main.variable(observer("splitBy")).define("splitBy", ["mutable splitBy"], _ => _.generator);
  main.variable(observer("userData")).define("userData", ["FileAttachment"], _userData);
  main.variable(observer("getSelectionAverages")).define("getSelectionAverages", ["mushIdToItemCols"], _getSelectionAverages);
  main.variable(observer()).define(["getSelectionAverages","userData"], _24);
  main.variable(observer("mushIdToItemCols")).define("mushIdToItemCols", _mushIdToItemCols);
  main.variable(observer()).define(["mushroomItems"], _26);
  main.variable(observer("transformData")).define("transformData", ["mushIdToItemCols","userData","getSelectionAverages"], _transformData);
  main.variable(observer("transformedSubsetData")).define("transformedSubsetData", ["transformData","mushroomItems"], _transformedSubsetData);
  main.variable(observer("plotAndImage")).define("plotAndImage", ["Plot","width","transformedSubsetData","htl"], _plotAndImage);
  main.variable(observer("viewof mushroomItems")).define("viewof mushroomItems", ["Inputs","mushroomItemData","splitByButton","mutable splitBy","htl","iconSize","mushroomImages","d3","showImageTooltip","forestlyScreens","hideImageTooltip","edibleIcon","poisonousIcon","aiCorrectIcon","aiWrongIcon","alignedIcon","notAlignedIcon","sparkBar","splitBy"], _mushroomItems);
  main.variable(observer("mushroomItems")).define("mushroomItems", ["Generators", "viewof mushroomItems"], (G, _) => G.input(_));
  main.variable(observer("showImageTooltip")).define("showImageTooltip", ["d3","width"], _showImageTooltip);
  main.variable(observer("hideImageTooltip")).define("hideImageTooltip", ["d3"], _hideImageTooltip);
  main.variable(observer("splitByButton")).define("splitByButton", ["htl"], _splitByButton);
  main.variable(observer("iconSize")).define("iconSize", _iconSize);
  main.variable(observer("edibleIcon")).define("edibleIcon", ["FileAttachment","iconSize"], _edibleIcon);
  main.variable(observer("poisonousIcon")).define("poisonousIcon", ["FileAttachment","iconSize"], _poisonousIcon);
  main.variable(observer("aiCorrectIcon")).define("aiCorrectIcon", ["FileAttachment","iconSize"], _aiCorrectIcon);
  main.variable(observer("aiWrongIcon")).define("aiWrongIcon", ["FileAttachment","iconSize"], _aiWrongIcon);
  main.variable(observer("alignedIcon")).define("alignedIcon", ["FileAttachment","iconSize"], _alignedIcon);
  main.variable(observer("notAlignedIcon")).define("notAlignedIcon", ["FileAttachment","iconSize"], _notAlignedIcon);
  main.variable(observer("sparkBar")).define("sparkBar", ["d3"], _sparkBar);
  main.variable(observer("forestlyScreens")).define("forestlyScreens", ["FileAttachment"], _forestlyScreens);
  main.variable(observer("mushroomImages")).define("mushroomImages", ["FileAttachment"], _mushroomImages);
  main.variable(observer()).define(["md"], _44);
  main.variable(observer("blamingData")).define("blamingData", _blamingData);
  main.variable(observer("blamingLegend")).define("blamingLegend", ["blamingData","Plot","width"], _blamingLegend);
  main.variable(observer("blamingNetwork")).define("blamingNetwork", ["width","d3","blamingData","invalidation"], _blamingNetwork);
  main.variable(observer()).define(["md"], _48);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  const child1 = runtime.module(define1);
  main.import("vl", child1);
  return main;
}
