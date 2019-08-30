<template>
  <div>
    <Home />
    <Project />
    <Stuff />
    <Recruit />
    <OpenSource />
    <Footer />
  </div>
</template>

<script>
import Home from "./components/home";
import Stuff from "./components/stuff";
import Project from "./components/project";
import Recruit from "./components/recruit-new";
import OpenSource from "./components/open-source";
import Footer from "./components/footer";
export default {
  name: "App",
  components: {
    Home,
    Stuff,
    Project,
    Recruit,
    OpenSource,
    Footer
  }
};
</script>
