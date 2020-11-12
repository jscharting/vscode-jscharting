# vscode-jscharting

This extension provides [JSCharting](https://jscharting.com/) chart preview integration for Visual Studio Code.

**JSCharting** is a JavaScript data visualization library offering seamless usage with Vue across all devices and platforms. Every JSCharting license includes a full suite of 150+ chart types including standards such as pie charts, line charts, donut and bar charts. In addition, advanced chart types including Gantt charts, JavaScript Org Charts, interactive charts for stock and finance, seamless grid and calendar charts, JavaScript maps, sparklines, and micro charts all for no additional charge. JSCharting has all the features you need and many you don't yet know you want.


Example Charts: 
[Chart Types](https://jscharting.com/examples/chart-types/)
| [Feature Examples](https://jscharting.com/examples/chart-features/)

[<img src="https://jscharting.com/images/thumbs/Javascript_StackedSalesBars_Chart.png" width="210">](https://jscharting.com/examples/chart-types/bar/ "Bar Charts")
[<img src="https://jscharting.com/images/thumbs/Javascript_UncertaintyFanChart_Chart.png" width="210">](https://jscharting.com/examples/chart-types/area/ "Area Charts")
[<img src="https://jscharting.com/images/thumbs/Javascript_MapWithPies_Chart.png" width="210">](https://jscharting.com/examples/chart-types/geographic-map/ "Mapping")
[<img src="https://jscharting.com/images/thumbs/Javascript_GanttMilestones_Chart.png" width="210">](https://jscharting.com/examples/chart-types/gantt/ "Gantt Charts")

## Features

A preview is available for `*.jsc.json` and `*.jsc.json5` extensions that contain chart configurations. 

![JSON5 Preivew](https://raw.githubusercontent.com/jscharting/vscode-jscharting/master/images/json5preview.png
"Chart Preview")

JSCharting configuration can also be used in md files with `jscharting` codeblock to render charts in preview mode.

# Usage

Run the `JSCharting: Preview Chart` command from `View > Command Palette...` or click the preview icon ![JSON5 Preivew](https://raw.githubusercontent.com/jscharting/vscode-jscharting/master/images/preview_icon.png) in the editor to preview the chart.

## Samples and Source 

Visit the [vscode-jscharting GitHub page](https://github.com/jscharting/vscode-jscharting) for example JSON files and the source code of this extension.  

To preview charts embedded in MD documents, wrap your JSON chart options using the following syntax and preview the MD document.

~~~
```jscharting
{ 
    type:'column',
    series:[{
        points: [ ['A',5], ['B', 6] ]   
    }]
}
```

~~~

Visit the JSCharting [getting started](https://jscharting.com/tutorials/creating-js-charts/) page for more information on chart options.
