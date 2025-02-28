# Oops!

Looks like you tried to access this page without the proper session data. 

To make the site work properly, we suggest going to the [work page](./work.html) and continuing from there. It should update properly from there.

### Why did this show up?

From the ```work.html``` page there are a number of custom made buttons with custom logic behind them. It is there that, ones you press the button, a JavaScript methode will be called which handles the transition effect you see everytime you open an internal link.

Besides this it will create two session variables using ```sessionStorage.setItem()```, this being the URL to the ```.md``` file, which holds all text you see (this file you're reading now is also a ```.md``` file) and the URL to the background image.

Ones you open the ```genericWork.html``` file (which is called like that because of [this](https://en.wikipedia.org/wiki/Generic_programming)) it'll request these two variables using ```sessionStorage.getItem()``` to replace the default ones (which are this ```.md``` file and the background currently active)

The advantage of this is that I'll only need to create a new ```.md``` file and the already setup code will handle the rest. This makes adding new pages extremely easy and leaves more time for fun stuff. If you which to see the code behind all this, then you can visit the [source code](https://github.com/jenshobo/jenshobo.github.io) for free.

p.s. Just note that I'm more confident in languages like C and C++, so the HTML, CSS and JavaScript is definitly not on-par with fulltime webdevelopers, which I'm not so ¯\\_(ツ)_/¯

***~Jens Hobo 2025***