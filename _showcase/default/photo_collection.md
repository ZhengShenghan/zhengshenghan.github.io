---
show: true
width: 4
date: 2021-09-12 00:01:00 +0800
height: 295px
images:
- src: assets/images/photos/shasta.jpg
  # title: Mt. Shasta
  desc: Mt. Shasta
  link: https://picsum.photos/
- src: assets/images/photos/laguna.jpg
  # title: Laguna Beach
  desc: Laguna Beach
- src: assets/images/photos/santamonica.jpg
  desc: Santa Monica
---

{% include widgets/carousel.html id=page.id images=page.images height=page.height %}
