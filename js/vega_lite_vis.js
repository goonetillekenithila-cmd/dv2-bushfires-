var opening_hook = "charts/01_opening_hook.vg.json";
var seasonality_heatmap = "charts/02_seasonality_heatmap.vg.json";
var yearly_bars = "charts/03_yearly_bars.vg.json";
var state_small_multiples = "charts/04_state_small_multiples.vg.json";
var top_lgas_lollipop = "charts/05_top_lgas_lollipop.vg.json";
var drfa_categories = "charts/06_drfa_categories.vg.json";
var severity_state = "charts/07_severity_state.vg.json";

vegaEmbed("#opening_hook", opening_hook, { "actions": false }).catch(console.error);
vegaEmbed("#seasonality_heatmap", seasonality_heatmap, { "actions": false }).catch(console.error);
vegaEmbed("#yearly_bars", yearly_bars, { "actions": false }).catch(console.error);
vegaEmbed("#state_small_multiples", state_small_multiples, { "actions": false }).catch(console.error);
vegaEmbed("#top_lgas_lollipop", top_lgas_lollipop, { "actions": false }).catch(console.error);
vegaEmbed("#drfa_categories", drfa_categories, { "actions": false }).catch(console.error);
vegaEmbed("#severity_state", severity_state, { "actions": false }).catch(console.error);
