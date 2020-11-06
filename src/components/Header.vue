import blogs from '@/static/blogs';
<template>
  <header class="head">
    <div class="preheader">
      <nav class="preheader__nav">
        <ul class="preheader-menu">
          <li class="menu-item">
            <a class="t-menu-preheader" href="#!">sitemap</a>
          </li>
          <li class="menu-item">
            <a class="t-menu-preheader" href="#!">contact</a>
          </li>
        </ul>
        <ul class="preheader-menu">
          <li class="menu-item dropdown">
            <button type="button" class="t-menu-preheader flag flag--es dropdown__title" aria-expanded="false" aria-controls="lang-dropdown">
              spanish
            </button>
            <ul class="dropdown__menu" id="lang-dropdown">
              <li><a class="t-menu-preheader flag flag--es" href="#!">spanish</a></li>
              <li><a class="t-menu-preheader flag flag--de" href="#!">german</a></li>
              <li><a class="t-menu-preheader flag flag--fr" href="#!">french</a></li>
              <li><a class="t-menu-preheader flag flag--ie" href="#!">irish</a></li>
              <li><a class="t-menu-preheader flag flag--it" href="#!">italian</a></li>
            </ul>
          </li>
          <li class="menu-item">
            <a class="t-menu-preheader heart" href="#!">wishlist (0)</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header" data-hm-section>
      <nav class="header__nav">
        <a href="#!" class="logo-link">
          <svg width="134" height="60">
            <title>Company Name</title>
            <use xlink:href="#logo" fill="#1e1e1e" style="fill: var(--color-svg);transition: fill .3s ease;" />
          </svg>
        </a>
        <ul class="header-menu-primary" id="id-nav" role="navigation" data-hm-expanded="false">
          <li class="dropdown dropdown--main-menu">
            <button type="button" class="t-menu-header dropdown__title" aria-expanded="false" aria-controls="main-menu-dropdown">
              New Releases
            </button>
            <ul class="dropdown__menu" id="main-menu-dropdown">
              <li><a class="t-menu-header t-menu-header--submenu" href="#!">Primer item</a></li>
              <li><a class="t-menu-header t-menu-header--submenu" href="#!">Segundo item</a></li>
              <li><a class="t-menu-header t-menu-header--submenu" href="#!">Tercero item</a></li>
              <li><a class="t-menu-header t-menu-header--submenu" href="#!">Cuarto item</a></li>
              <li><a class="t-menu-header t-menu-header--submenu" href="#!">Quinto item</a></li>
              <li><a class="t-menu-header t-menu-header--submenu" href="#!">Sexto item</a></li>
            </ul>
          </li>
          <li><a class="t-menu-header" href="#!">Men</a></li>
          <li><a class="t-menu-header" href="#!">Women</a></li>
          <li><a class="t-menu-header" href="#!">Kids</a></li>
          <li><a class="t-menu-header" href="#!">Customise</a></li>
          <li><a class="t-menu-header" href="#!">Collections</a></li>
          <li><a class="t-menu-header" href="#!">Sale</a></li>
        </ul>
        <ul class="header-menu-secondary">
          <li><button class="t-menu-header t-menu-header--sec icon icon--search" type="button"><span>search</span></button></li>
          <li><button class="t-menu-header t-menu-header--sec icon icon--user" type="button"><span>user</span></button></li>
          <li><button class="t-menu-header t-menu-header--sec icon icon--cart" type="button"><span>products</span></button></li>
        </ul>
        <button class="header-ham" id="ham" role="button" aria-expanded="false" aria-controls="id-nav" aria-label="Open navigation and skip to navigation" data-hm-label-0="Close and hide navigation" data-hm-label-1="Open navigation and skip to navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#242424" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  mounted () {
    this.hamMenu()
  },

  methods: {
    hamMenu () {
      (function (_o) {
        var button = _o.querySelector('#ham')
        var nav = _o.querySelector('[data-hm-expanded]')
        button.addEventListener('click', function (_e) {
          var expandedValue = button.getAttribute('aria-expanded')
          expandedValue = expandedValue === 'true' ? 'false' : 'true'
          button.setAttribute('aria-expanded', expandedValue)
          nav.setAttribute('data-hm-expanded', expandedValue)
          if (expandedValue === 'true') {
            button.setAttribute('aria-label', button.getAttribute('data-hm-label-0'))
          } else {
            button.setAttribute('aria-label', button.getAttribute('data-hm-label-1'))
          }

          if (expandedValue === 'true') nav.querySelectorAll('a')[0].focus()
        }, false)
      })(document.querySelector('[data-hm-section]'))
    }
  }
}
</script>

<style scoped lang="scss">
.preheader {
  background-color: #000;
  &__nav {
    display: flex;
    justify-content: space-between;
    width: 1936px;
    padding: 2px 8px;
    max-width: 100%;
    margin: auto;
  }
  .preheader-menu {
    display: flex;
    align-items: center;
    .menu-item {
      display: flex;
      align-items: center;
    }
  }
}
.header {
  background-color: $color-light;
  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 1936px;
    padding: 6px 8px;
    max-width: 100%;
    margin: auto;
  }
  .header-menu-primary {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }
  .header-menu-secondary {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}
.flag {
  display: flex;
  align-items: center;
  &::before {
    content: "";
    width: 16px;
    height: 12px;
    margin-right: 6px;
    background-repeat: no-repeat;
    background-position: center;
  }
  &--es {
    &::before {
      background-image: url(~@/assets/icons/flag-es.svg);
    }
  }
  &--de {
    &::before {
      background-image: url(~@/assets/icons/flag-de.svg);
    }
  }
  &--fr {
    &::before {
      background-image: url(~@/assets/icons/flag-fr.svg);
    }
  }
  &--ie {
    &::before {
      background-image: url(~@/assets/icons/flag-ie.svg);
    }
  }
  &--it {
    &::before {
      background-image: url(~@/assets/icons/flag-it.svg);
    }
  }
}
.heart {
  display: flex;
  align-items: center;
  &::before {
    content: "";
    width: 16px;
    height: 15px;
    margin-right: 6px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(~@/assets/icons/icon-heart.svg);
  }
}

[data-hm-section] {
  position: relative;
  .header-ham  {
    display: none;
    width: 40px;
    height: 40px;
    @media screen and (max-width: 1020px) {
      display: inline;
    }
  }
}
@media screen and (max-width: 1020px) {
  .header {
    .header__nav {
      display: grid;
      grid-template-columns: auto 1fr 60px;
      grid-gap: 10px 0;
    }
    .logo-link {
      grid-area: 1 / 1 / 2 / 2;
    }
    .header-menu-primary {
      grid-area: 2 / 1 / 3 / 4;
      overflow: auto hidden;
      justify-content: flex-start;
    }
    .header-menu-secondary {
      grid-area: 1 / 2 / 2 / 3;
      justify-self: end;
    }
    .header-ham {
      grid-area: 1 / 3 / 2 / 4;
      justify-self: end;
    }
    [data-hm-expanded="true"] {
      display: flex;
    }
    [data-hm-expanded="false"] {
      display: none !important;
    }
  }
}
@media screen and (max-width: 575px) {
  .t-menu-header--sec {
    padding-left: 7px;
    padding-right: 7px;
    span {
      display: none;
    }
  }
}
</style>
