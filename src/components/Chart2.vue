<template>
    <div>
        <svg id='canvas2'></svg>
        <!--
        <div id="example-1">
        <b-dropdown id="dropdown-1" text="Kies grootheid" class="m-md-2">
            <b-dropdown-item @click="showDischarge">Afvoer</b-dropdown-item>
            <b-dropdown-item @click="showWaterLevel">Peil</b-dropdown-item>
            <b-dropdown-item @click="showModelWl">Model</b-dropdown-item>
            <b-dropdown-item @click="showModelFriction">Friction (model)</b-dropdown-item>
      </b-dropdown>  
        </div>
    -->
    </div>
</template>

<script>
import {protoTimeSeriesChart} from  '../charts/protoTimeSeriesChart'
import * as d3 from '../lib/d3';


var LocalChart2 = {};
protoTimeSeriesChart.apply(LocalChart2)

export default {
  name: "PackChart2",
  props: ["streamData", "radios"],
  methods: {
    start_app() {
        console.log('Koen')
    },
    showDischarge(){
        LocalChart2.drawDischarge()
    },
    showWaterLevel(){
        LocalChart2.drawWaterLevelUp()
    },
    showFriction(){
        LocalChart2.drawFriction()
    },
    showModelWl(){
        LocalChart2.drawModelWaterLevel()
    },
    showModelFriction(){
        LocalChart2.drawModelFriction()
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
    LocalChart2.setCanvas('#canvas2')

    d3.json("./2015.json", function(d){
        LocalChart2.setData(d)
        LocalChart2.init()
        LocalChart2.drawPrimaryLine()
        LocalChart2.drawFriction()
    })
    

  }
}

</script>

<style >
#canvas2{
  width: 400px;
  height:200px;
}

#canvas2 .PrimaryLine {
    stroke: rgb(255, 216, 20);
}


.FigureAxes line, path{
    stroke: white;
}


.FigureAxes text{
    fill: white;
}

</style>