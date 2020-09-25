<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center header align-items-center">
      <h1>Waar ligt de ruimte in watergangen?</h1>
    </div>
    <div class="row d-flex align-content-right author align-items-center">
      Contact: Koen Berends (koen.berends@deltares.nl) <b-avatar src="https://placekitten.com/300/300"></b-avatar>
    </div>
    <div  class="row d-flex justify-content-center">
      <p class="textRow">
        Watergangen kunnen snel dichtgroeien. Dat kan leiden tot wateroverlast. Daarom worden watergangen itensief onderhouden.  Maar intensief onderhoud is duur en schaadt de natuur. Kan het ook minder? En zo ja, waar ligt de ruimte?
      </p>
    </div>
    <div class="row figureRow">
      <div class="col-sm sidenote">
        Bron: BSc thesis Ralf Linneman (link)
      </div>
      <div class="col-sm">
        <b-img :src="require('../assets/vegetation_growth.png')" fluid alt="Respondsive image"> </b-img>
      </div>
      <div class="col-sm caption">
        In deze set foto's is te zien dat een watergang helemaal vol kan groeien. En dat kan snel gaan. Bij flinke regenval kunnen te veel waterplanten leiden tot wateroverlast.
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <p class="textRow">
        Vegetatie heeft een meetbaar effect op peilen. In de <b-link href="https://www.openstreetmap.org/#map=16/51.6563/5.5830" target="_blank">Leigraaf</b-link> hebben Deltares en Waterschap Aa en Maas dit onder de loep genomen. 
      </p>
    </div>
    <div class="row figureRow">
      <div class="col-sm sidenote">
        Bron: Eindrapport Lumbricus proeftuin zuid (2018). De eenheid van weerstand is Manning (sm<sup>-1/3</sup>)
      </div>
      <div class="col-sm">
        <Chart :streamData=loadData />
      </div>
      <div class="col-sm caption">
        Het peil in de waterloop is afhankelijk van afvoer, stuwbeheer en vegetatiegroei. Maar hoewel de afvoer vaak laag is in de zomer, zien we het peil oplopen. Dit is een teken van vegetatiegroei. 
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <p class="textRow">
        Om het effect van vegetatiegroei te kunnen onderscheiden van andere invloeden, heeft Deltares met het stromingsmodel <b-link href="https://www.deltares.nl/nl/software/d-hydro-suite/" target="_blank">
D-Hydro</b-link> berekend wat de stromingsweerstand van de beek is. 

      </p>
    </div>
    <div class="row figureRow">
      <div class="col-sm sidenote">
        Bron: Eindrapport Lumbricus Proeftuin Zuid (2018)
      </div>
      <div class="col-sm">
        <Chart2 :streamData=loadData />
      </div>
      <div class="col-sm caption">
        De afvoer neemt inderdaad toe door de tijd. Plotselinge verschillen in de ruwheid kunnen te maken hebben met afvoer, maar ook met menselijk ingrijpen: maaien!

      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <p class="textRow">
        We ontdekten dat de stromingsweerstand afhangt van afvoer en tijd. Beide hangen samen met waterplanten. Met toenemende afvoer en stroomsnelheid gaan waterplanten zich stroomlijnen, waardoor de weerstand af neemt. De weerstand neemt toe doordat het aantal waterplanten vergroot als het groeiseizoen begint. 
      </p>
    </div>
    <div class="row figureRow">
      <div class="col-sm sidenote">
        Bron: <b-link href="https://www.h2owaternetwerk.nl/vakartikelen/de-effecten-van-stroombaanmaaien-proefondervindelijk-onderzocht-in-de-eefse-beek" target="_blank">H2O Online</b-link> 


      </div>
      <div class="col-sm">
       <b-img :src="require('../assets/eefse_beek.png')" fluid alt="Respondsive image"> </b-img>
      </div>
      <div class="col-sm caption">
        Veldwerk in de Eefse Beek. De waterplanten hangen voorover door stroomlijning met de stroming. 
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <p class="textRow">
        Op basis van deze vindingen heeft Deltares een datamodel ontwikkeld dat de weerstand door waterplanten beschrijft. Afwijking van dit model valt samen met jaarlijks onderhoud en laat zien hoeveel effect maaien heeft. Maar wat als er niet was gemaaid? Hoeveel zou de ruwheid blijven toenemen, en wat betekent dat voor de peilen?
      </p>
    </div>
    <div class="row figureRow">
      <div class="col-sm sidenote">
        Bron: Eindrapport Lumbricus Proeftuin Zuid (2018)
        <div class="legendPrimary "></div> Meting
        <div class="legendSecondary "></div> Model
      </div>
      <div class="col-sm">
        <Chart3 :streamData=loadData />
      </div>
      <div class="col-sm caption">
        Het model laat zien dat er in begin juli een maaibeurt heeft plaatsgevonden leidde tot een directe peilverlaging van ongeveer 20 cm. Als die, en latere maaibeuren niet zouden hebben plaatsgevonden, zou het peil naar verwachting in oktober ongeveer 30 cm hoger hebben gestaan. 
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <p class="textRow">
        Is 30 cm een probleem, of kan in deze watergang mogelijk wat minder worden gemaaid? De beheerder kan hiermee aan de slag. Door meer inzicht in de relatie tussen peilen en vegetatie krijgen we inzicht waar er ruimte ligt in watergangen voor een slimmer maaibeleid. 
      </p>
    </div>
    <div class="row d-flex justify-content-center footer align-items-center">
      Dit verhaal is onstaan uit samenwerking tussen:
      <b-img :src="require('../assets/logo_aa_maas.jpg')" fluid alt="Respondsive image"> </b-img>
      <b-img :src="require('../assets/logo_deltares.jpg')" fluid alt="Respondsive image"> </b-img>
    </div>
  </div>

</template>

<script>
  import Chart from '../components/Chart';
  import Chart2 from '../components/Chart2';
  import Chart3 from '../components/Chart3';
  import * as d3 from '../lib/d3';
  

  export default {
    name: 'StoryLumbricus',
    components: {
      Chart,
      Chart2,
      Chart3,
    },
    data() {
      return {
        loadData: {}
      };
    },
    mounted() {
      console.log("App loaded");
      this.fetchData();
    },
    methods: {
      async fetchData() {
        let data = await d3.json("./streamdata.json");
        this.loadData = data;
      }
    }
    
  }

  
</script>

<style>


.header {
  background-color: red;
  background-image: url(../assets/header.png);
  height: 200px;
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.75);
}

.textRow {
  max-width: 400px;
}
.figureRow {background-color: rgb(10, 40, 163);
     color: white;
     margin-bottom: 40px;
     padding: 10px;
     box-shadow:0px 2px 8px 0px rgba(0,0,0,0.75);}

.author {
  background-color: white;
  box-shadow:0px 10px 10px 0px rgba(0,0,0,0.25);
  margin-bottom: 30px;
  font-size: 10px;
  padding-left: 20px;
}

.footer {
  background-color: white;
  box-shadow:0px 0px 10px 0px rgba(0,0,0,0.25);
}

.caption {
  font-size: 12px; 
}

.legendPrimary{
width: 40px;
height: 10px;
border-bottom: 2px solid rgb(255, 216, 20);
}
.legendSecondary{
width: 40px;
height: 10px;
border-bottom: 2px solid rgb(25, 240, 240);
border-top: 0px;
border-left: 0px;
border-right: 0px;
border-style: dashed;
}


.sidenote {font-size: 10px;}
</style>
