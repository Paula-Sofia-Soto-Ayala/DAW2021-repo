<template>
  <div>
    <b-card
      overlay
      img-src="https://www.setaswall.com/wp-content/uploads/2017/03/Artistic-4K-Wallpaper-3840x2160.jpg"
      img-alt="Card Image"
      text-variant="white"
      title="Click for different message"
      sub-title=":)"
    >
      <b-card-text>
        <div class="mt-3">
          <b-button-group>
            <b-button variant="dark" v-on:click="clickboton1()">1</b-button>
            <b-button variant="dark" v-on:click="clickboton2()">2</b-button>
            <b-button variant="dark" v-on:click="clickboton3()">3</b-button>
          </b-button-group>
        </div>
        <div class="lista" v-if="boton1">
          <ul>
            <li>
              <strong><a href="https://github.com/pugjs/pug">Pug</a></strong
              >: Haml-inspired template engine (formerly Jade).
            </li>
            <li>
              <strong
                ><a href="https://github.com/tj/haml.js">Haml.js</a></strong
              >: Haml implementation.
            </li>
            <li>
              <strong><a href="https://github.com/mde/ejs">EJS</a></strong
              >: Embedded JavaScript template engine.
            </li>
            <li>
              <strong><a href="https://github.com/pillarjs/hbs">hbs</a></strong
              >: Adapter for Handlebars.js, an extension of Mustache.js template
              engine.
            </li>
            <li>
              <strong
                ><a href="https://github.com/squirrellyjs/squirrelly"
                  >Squirrelly</a
                ></strong
              >: Blazing-fast template engine that supports partials, helpers,
              custom tags, filters, and caching. Not white-space sensitive,
              works with any language.
            </li>
            <li>
              <strong><a href="https://github.com/eta-dev/eta">Eta</a></strong
              >: Super-fast lightweight embedded JS template engine. Supports
              custom delimiters, async, whitespace control, partials, caching,
              plugins.
            </li>
            <li>
              <strong
                ><a href="https://github.com/reactjs/express-react-views"
                  >React</a
                ></strong
              >: Renders React components on the server. It renders static
              markup and does not support mounting those views on the client.
            </li>
            <li>
              <strong
                ><a href="https://github.com/tbranyen/combyne"
                  >combyne.js</a
                ></strong
              >: A template engine that hopefully works the way you’d expect.
            </li>
            <li>
              <strong
                ><a href="https://github.com/mozilla/nunjucks"
                  >Nunjucks</a
                ></strong
              >: Inspired by jinja/twig.
            </li>
            <li>
              <strong
                ><a href="https://github.com/marko-js/marko">marko</a></strong
              >: A fast and lightweight HTML-based templating engine that
              compiles templates to CommonJS modules and supports streaming,
              async rendering and custom tags. (Renders directly to the HTTP
              response stream).
            </li>
            <li>
              <strong
                ><a href="https://github.com/gsf/whiskers.js"
                  >whiskers</a
                ></strong
              >: Small, fast, mustachioed.
            </li>
            <li>
              <strong
                ><a href="https://github.com/bminer/node-blade"
                  >Blade</a
                ></strong
              >: HTML Template Compiler, inspired by Jade &amp; Haml.
            </li>
            <li>
              <strong
                ><a href="https://github.com/netzpirat/haml-coffee"
                  >Haml-Coffee</a
                ></strong
              >: Haml templates where you can write inline CoffeeScript.
            </li>
            <li>
              <strong
                ><a href="https://github.com/barc/express-hbs"
                  >express-hbs</a
                ></strong
              >: Handlebars with layouts, partials and blocks for express 3 from
              Barc.
            </li>
            <li>
              <strong
                ><a
                  href="https://github.com/express-handlebars/express-handlebars"
                  >express-handlebars</a
                ></strong
              >: A Handlebars view engine for Express which doesn’t suck.
            </li>
            <li>
              <strong
                ><a href="https://github.com/AndersDJohnson/express-views-dom"
                  >express-views-dom</a
                ></strong
              >: A DOM view engine for Express.
            </li>
            <li>
              <strong
                ><a href="https://github.com/AndersDJohnson/rivets-server"
                  >rivets-server</a
                ></strong
              >: Render Rivets.js templates on the server.
            </li>
            <li>
              <strong
                ><a href="https://github.com/harttle/liquidjs"
                  >LiquidJS</a
                ></strong
              >: A simple, expressive and safe template engine.
            </li>
            <li>
              <strong
                ><a href="https://github.com/Drulac/express-tl"
                  >express-tl</a
                ></strong
              >: A template-literal engine implementation for Express.
            </li>
            <li>
              <strong
                ><a href="https://www.npmjs.com/package/twing">Twing</a></strong
              >: First-class Twig engine for Node.js.
            </li>
            <li>
              <strong
                ><a href="https://www.npmjs.com/package/sprightly"
                  >Sprightly</a
                ></strong
              >: A very light-weight JS template engine (45 lines of code), that
              consists of all the bare-bones features that you want to see in a
              template engine.
            </li>
          </ul>
        </div>
        <div class="lista" v-show="boton2">
          <p>Aqui no hay nada que ver</p>
        </div>
        <div class="lista" v-show="boton3">
          <p>Aqui tampoco</p>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Templates",
  data() {
    return {
      boton1: false,
      boton2: false,
      boton3: false,
    };
  },
  methods: {
    clickboton1() {
      this.boton1 = true;
      this.boton2 = false;
      this.boton3 = false;
    },
    clickboton2() {
      this.boton2 = true;
      this.boton1 = false;
      this.boton3 = false;
    },
    clickboton3() {
      this.boton3 = true;
      this.boton1 = false;
      this.boton2 = false;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

.lista {
  padding-top: 2%;
}
</style>
