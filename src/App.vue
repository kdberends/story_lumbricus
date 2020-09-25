<template>

  <div  id="Main">
    <b-navbar toggleable="lg" sticky=true type="dark" variant="dark">
      <b-navbar-brand href="#">Deltares</b-navbar-brand>
<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
<b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!--<b-nav-item to="/" :active="path == '/'">Home</b-nav-item>
          <b-nav-item to="/search" :active="path == '/search'">Search</b-nav-item>
      -->
        <b-nav-item>Waterverhalen</b-nav-item>
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
@font-face{
    font-family: "Sansa Pro";
    src: url(/fonts/Sansa/SansaPro-Normal.otf)
}

#Main {
  font-family: "Sansa Pro"
}

b-navbar{
    background-color: red;

}

</style>