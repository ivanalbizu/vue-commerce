<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <section class="footer-section">
        <h3 class="t-footer">Group 1</h3>
        <ul>
          <li><a class="t-footer-link" href="#!">Find a store</a></li>
          <li><a class="t-footer-link" href="#!">Sign up for email</a></li>
          <li><a class="t-footer-link" href="#!">Become a member</a></li>
          <li><a class="t-footer-link" href="#!">Site feedback</a></li>
          <li><a class="t-footer-link" href="#!">Disccounts</a></li>
        </ul>
      </section>
      <section class="footer-section">
        <h3 class="t-footer">Group 2</h3>
        <ul>
          <li><a class="t-footer-link" href="#!">Order status</a></li>
          <li><a class="t-footer-link" href="#!">Shipping and delivery</a></li>
          <li><a class="t-footer-link" href="#!">Returns</a></li>
          <li><a class="t-footer-link" href="#!">Payment options</a></li>
          <li><a class="t-footer-link" href="#!">Contact us</a></li>
        </ul>
      </section>
      <section class="footer-section">
        <h3 class="t-footer">Group 3</h3>
        <ul>
          <li><a class="t-footer-link" href="#!">News</a></li>
          <li><a class="t-footer-link" href="#!">Carrers</a></li>
          <li><a class="t-footer-link" href="#!">Investors</a></li>
          <li><a class="t-footer-link" href="#!">Sustainability</a></li>
          <li><a class="t-footer-link" href="#!">UK Tax</a></li>
        </ul>
      </section>
      <section class="footer-section">
        <h3 class="t-footer">Group 4</h3>
        <ul>
          <li><a class="t-footer-link" href="#!">Login</a></li>
          <li><a class="t-footer-link" href="#!">Addresses</a></li>
          <li><a class="t-footer-link" href="#!">Legal notice</a></li>
          <li><a class="t-footer-link" href="#!">Term and Conditions</a></li>
          <li><a class="t-footer-link" href="#!">Privacy Policy</a></li>
        </ul>
      </section>
      <section class="social">
        <ul>
          <li>
            <a class="rrss rrss--facebook" href="#!">
              <span class="visually-hidden">Facebook</span>
            </a>
          </li>
          <li>
            <a class="rrss rrss--twitter" href="#!">
              <span class="visually-hidden">Twitter</span>
            </a>
          </li>
          <li>
            <a class="rrss rrss--flickr" href="#!">
              <span class="visually-hidden">Flickr</span>
            </a>
          </li>
          <li>
            <a class="rrss rrss--linkedin" href="#!">
              <span class="visually-hidden">Linkedin</span>
            </a>
          </li>
          <li>
            <a class="rrss rrss--pinterest" href="#!">
              <span class="visually-hidden">Pinterest</span>
            </a>
          </li>
          <li>
            <a class="rrss rrss--vimeo" href="#!">
              <span class="visually-hidden">Vimeo</span>
            </a>
          </li>
        </ul>
      </section>
      <section class="copy">
        <svg width="245" height="110">
          <use xlink:href="#logo" fill="#fff" />
        </svg>
        <p class="t-footer-copy">&copy;2020 Copyleft | Not all right are reserved</p>
      </section>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
.footer {
  background-color: $color-dark;
  text-align: center;
  &-wrapper {
    display: grid;
    grid-gap: 50px 10px;
    width: 1270px;
    padding: 0 15px;
    max-width: 100%;
    margin: auto;
    @include interpolate((padding-top, padding-bottom), 840px, 1480px, 60px, 100px);
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
    .footer-section:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
    .footer-section:nth-child(2) { grid-area: 1 / 2 / 2 / 3; }
    .footer-section:nth-child(3) { grid-area: 2 / 1 / 3 / 2; }
    .footer-section:nth-child(4) { grid-area: 2 / 2 / 3 / 3; }
    .social {
      grid-area: 3 / 1 / 4 / 3;
      ul {
        display: flex;
        justify-content: center;
      }
    }
    .copy {
      grid-area: 4 / 1 / 5 / 3;
      svg {
        margin-bottom: 2em;
      }
    }
    @media (min-width: 840px) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, auto);
      .footer-section:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
      .footer-section:nth-child(2) { grid-area: 1 / 2 / 2 / 3; }
      .footer-section:nth-child(3) { grid-area: 1 / 3 / 2 / 4; }
      .footer-section:nth-child(4) { grid-area: 1 / 4 / 2 / 5; }
      .social { grid-area: 2 / 1 / 3 / 5; }
      .copy { grid-area: 3 / 1 / 4 / 5; }
    }
  }
}
</style>
