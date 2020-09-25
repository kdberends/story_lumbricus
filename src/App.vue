<template>

  <div  id="Main">
    <b-navbar toggleable="lg" sticky type="light" variant="light">
      <b-navbar-brand href="#"><img src="./assets/logo_deltares.png" alt="DeltaresLogo"></b-navbar-brand>
<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
<b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!--<b-nav-item to="/" :active="path == '/'">Home</b-nav-item>
          <b-nav-item to="/search" :active="path == '/search'">Search</b-nav-item>
      -->
        <b-nav-item disabled>Meer waterverhalen</b-nav-item>
        <b-nav-item href="https://deltares.nl" target="_blank">Bezoek Deltares.nl</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  
    <StoryLumbricus/>
    
  </div>

</template>

<script>
import StoryLumbricus from './components/StoryLumbricus';


export default {
    name: 'App',
    components: {
       StoryLumbricus,
    }
    
}

</script>

<style>
img {
  max-width: 150px;
}

@font-face{
    font-family: "Sansa Pro";
    src: url(/fonts/Sansa/SansaPro-Normal.otf)
}

#Main {
  font-family: Helvetica, Arial, sans-serif;
}

b-navbar{
    background-color: red;

}

</style>