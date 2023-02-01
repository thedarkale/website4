// Project generator for thedarkale

const template = {
  index: (title, date, author, description, categories, image, song) => `
---
title: ${title}
date: "${date}"
author: "${author}"
description: "${description}"
categories: ${categories}
comments: true
image:
  feature: ${image}
  credit: 
  creditlink: 
---

![Banner](${image})

---

Your Awesome Blog!!

---
### Additional sources

- Suggested song: ${song}`,
}
