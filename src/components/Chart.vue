<template>
    <div>
        <svg id='canvas'></svg>
        <div id="example-1">
        <b-dropdown id="dropdown-1" text="Kies grootheid" class="m-md-2">
            <b-dropdown-item @click="showDischarge">Afvoer</b-dropdown-item>
            <b-dropdown-item @click="showWaterLevel">Peil</b-dropdown-item>
            <!--
            <b-dropdown-item @click="showFriction">Ruwheid</b-dropdown-item>
            <b-dropdown-item @click="showModelWl">Model</b-dropdown-item>
            <b-dropdown-item @click="showModelFriction">Friction (model)</b-dropdown-item>
        -->
      </b-dropdown>  
        </div>
    </div>
</template>

<script>
import {protoTimeSeriesChart} from  '../charts/protoTimeSeriesChart'
import * as d3 from '../lib/d3';


var LocalChart = {};
protoTimeSeriesChart.apply(LocalChart)

export default {
  name: "PackChart",
  props: ["streamData", "radios"],
  methods: {
    start_app() {
        console.log('Koen')
    },
    showDischarge(){
        LocalChart.drawDischarge()
    },
    showWaterLevel(){
        LocalChart.drawWaterLevelUp()
    },
    showFriction(){
        LocalChart.drawFriction()
    },
    showModelWl(){
        LocalChart.drawModelWaterLevel()
    },
    showModelFriction(){
        LocalChart.drawModelFriction()
    }
  },
  data: () => ( {
    picker: new Date().toISOString().substr(0, 10),
    items: ['Foo', 'Bar','Fizz'],
    sheet: false,
    min: 0,
    max:100,
    disabled: false,
    readonly: false,
    range: false
  }),
  created(){
    console.log('chart created')
    LocalChart.setCanvas('#canvas')
    //LocalChart.setData(loadData)
   /*d3.json('./json_nan_test.json', function(d){
    let r = 0
    if(!d.B[1]){r=undefined}else{r=d.B[1]}
    console.log(r)
    })*/
    d3.json("./2015.json", function(d){
        LocalChart.setData(d)
        LocalChart.init()
        LocalChart.drawPrimaryLine()
    })
    

  }
}

</script>

<style>
#canvas{
  width: 400px;
  height:200px;
}

#canvas .PrimaryLine {
    stroke: rgb(255, 216, 20);
}

.FigureAxes line, path{
    stroke: white;
}


.FigureAxes text{
    fill: white;
}

.Figurelabels {
    fill: white;
}
</style>