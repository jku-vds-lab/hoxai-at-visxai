import vdsLogo from '../assets/vds-lab-logo-opt.svg';
import roboLogo from '../assets/robopsychology-lab-logo.svg';

export const headerTemplate = `
<style>
distill-header {
  position: relative;
  height: 80px;
  background-color: hsl(200, 60%, 15%);
  width: 100%;
  box-sizing: border-box;
  z-index: 2;
  color: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
}
distill-header .content {
  height: 80px;
  grid-column: page;
}
distill-header a {
  font-size: 16px;
  height: 60px;
  line-height: 60px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  padding: 22px 0;
}
distill-header a:hover {
  color: rgba(255, 255, 255, 1);
}
distill-header svg {
  height: 60px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 2px;
}
distill-header .logo svg path {
  fill: rgba(255, 255, 255, 0.9)
}
distill-header .vdslogo svg {
  height: 45px;
  position: absolute;
  top: 50%;
  transform: translate(-100%, -50%);
  margin-right: 2px;
}
distill-header .vdslogo svg path {
  fill: rgba(255, 255, 255, 0.9)
}
@media(min-width: 1080px) {
  distill-header {
    height: 80px;
  }
  distill-header a {
    height: 80px;
    line-height: 80px;
    padding: 28px 0;
  }
  distill-header .logo {
  }
}
distill-header .logo {
  font-size: 17px;
  font-weight: 200;
}
distill-header .nav {
  float: right;
  font-weight: 300;
}
distill-header .nav a {
  font-size: 12px;
  margin-left: 24px;
  text-transform: uppercase;
}
</style>
<div class="content">
  <a href="https://www.jku.at/en/lit-robopsychology-lab/" class="logo">
    ${roboLogo}
  </a>
  <a href="https://jku-vds-lab.at" class="vdslogo" style="float: right;">
    ${vdsLogo}
  </a>

</div>
`;

// distill-header svg path {
//   fill: none;
//   stroke: rgba(255, 255, 255, 0.8);
//   stroke-width: 3px;
// }

{/* <nav class="nav">
<a href="/about/">About</a>
<a href="/prize/">Prize</a>
<a href="/journal/">Submit</a>
</nav> */}