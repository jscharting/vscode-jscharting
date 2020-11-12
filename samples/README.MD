# Markdown Example 

With the extension enabled, previewing this markdown file will visualize the charts below.

## Column Sample

```jscharting
{
	// comment
	type: "column",
	"legend_visible": false,
	"yAxis": {
		"label_text": "Cost",
		"formatString": "c"
	},
	"chartArea_outline_width": 0,
	"annotations": [
		{
			"position": "inside top",
			"label": {
				"text": "Operations Cost",
				"style_fontSize": 15
			}
		}
	],
	"defaultSeries": {
		"defaultPoint": {
			"label_text": "%name <b>%yValue</b> (%percentOfSeries%)"
		}
	},
	"series": [
		{
			"name": "2015 Costs",
			"points": [
				{
					"name": "R&D",
					"y": 183
				},
				{
					"name": "Shipping",
					"y": 140
				},
				{
					"name": "Marketing",
					"y": 136
				},
				{
					"name": "Manufacturing",
					"y": 80
				},
				{
					"name": "Retail",
					"y": 50
				}
			]
		}
	]
}
```

## Funnel Sample

```jscharting
{
	"type": "funnel",
	"title_label_text": "Interview Process",
	"yAxis_label_text": "Applicants",
    "legend_position": "bottom",
	"defaultSeries": {
		"shape_innerPadding": 6,
		"defaultPoint": {
			"label": {
				"text": "%name %yValue (%percentOfSeriesMax%)"
			}
		}
	},
	"series": [
		{
			"name": "All Applicants",
			"points": [
				{
					"name": "Candidates Applied",
					"y": 183
				},
				{
					"name": "Aptitude Test",
					"y": 140
				},
				{
					"name": "Technical Interview",
					"y": 136
				},
				{
					"name": "HR Interview",
					"y": 80
				},
				{
					"name": "Candidates Recruited",
					"y": 51
				}
			]
		}
	]
}
```