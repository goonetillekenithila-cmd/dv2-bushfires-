var opening_hook = "charts/01_opening_hook.vg.json";
var seasonality_heatmap = "charts/02_seasonality_heatmap.vg.json";

vegaEmbed("#opening_hook", opening_hook, { "actions": false }).catch(console.error);
vegaEmbed("#seasonality_heatmap", seasonality_heatmap, { "actions": false }).catch(console.error);