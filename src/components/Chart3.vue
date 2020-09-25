<template>
    <div>
        <svg id='canvas3'></svg>
        <div class='buttongroup'>
            <b-form-group>
              <b-form-radio-group
                id="btn-radios-1"
                v-model="selectedVariable"
                :options="options"
                buttons
                name="radios-btn-default"
                @change.native="switchVariable"
              ></b-form-radio-group>
            </b-form-group>

        </div>
        <!--
        <div id="example-1">
        <b-dropdown id="dropdown-1" text="Kies grootheid" class="m-md-2">
            <b-dropdown-item @click="showDischarge">Afvoer</b-dropdown-item>
            <b-dropdown-item @click="showWaterLevel">Peil</b-dropdown-item>
            <b-dropdown-item @click="showFriction">Ruwheid</b-dropdown-item>
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


var LocalChart3 = {};
protoTimeSeriesChart.apply(LocalChart3)

export default {
  name: "PackChart3",
  props: ["streamData", "sw_showModel"],
  data: () => ( {
    options: [
          { text: 'Weerstand', value: 'friction' },
          { text: 'Peil', value: 'waterlevel'}],
    picker: new Date().toISOString().substr(0, 10),
    items: ['Foo', 'Bar','Fizz'],
    selectedVariable: 'friction',
    sheet: false,
    min: 0,
    max:100,
    disabled: false,
    readonly: false,
    range: false
  }),
  methods: {
    switchVariable() {
        if (this.selectedVariable=='friction') {
            LocalChart3.drawFriction()
            LocalChart3.drawModelFriction()
        } else {
            LocalChart3.drawWaterLevelUp()
            LocalChart3.drawModelWaterLevel()
        }
    }
  },
  created(){
    console.log('chart created')
    LocalChart3.setCanvas('#canvas3')

    d3.json("./2015.json", function(d){
        LocalChart3.setData(d)
        LocalChart3.init()
        LocalChart3.drawPrimaryLine()
        LocalChart3.drawSecondaryLine()
        LocalChart3.drawFriction()
        LocalChart3.drawModelFriction()
        //LocalChart3.drawWaterLevelUp()
        //LocalChart3.drawModelWaterLevel()
    })
  }
}

</script>

<style >
#canvas3{
  width: 400px;
  height:200px;
}

#canvas3 .PrimaryLine {
    stroke: rgb(255, 216, 20);
}

#canvas3 .SecondaryLine {
    stroke: rgb(25, 240, 240);
    stroke-dasharray: 5;
}

.FigureAxes line, path{
    stroke: white;
}


.FigureAxes text{
    fill: white;
}

.buttongroup {
    width: 400px;
    text-align: center;
}

</style>