# Shepherd Dog Blog

This blog is built on top of [Jekyll](https://jekyllrb.com) which is a static site generator written in Ruby. Making new posts and re-deploying the site to the production server should be simple when following these steps:

1. Make sure you have Jekyll installed. Follow the instructions on the site linked above.

1. Get the latest version of the site. If you haven't already cloned it from here, do that. If you have, pull any and all changes from here.

1. Copy one of the files in the `/_posts/CURRENT_YEAR` folder into a new file. Change the name of the file so that it starts with the current date (or the date that you will publish the post, if that is different) and has the title of the post without any special characters. Look at old posts if you need to see the format.

1. Write your post in your file. The syntax is Markdown and you can find a good reference on general syntax from the creator of Markdown, John Gruber, [here](https://daringfireball.net/projects/markdown/).

1. Run `jekyll serve` in this site's folder on your local machine. That will start a web server and you can see what your new post will look like. If you need to make any changes Jekyll will be watching for them and re-building the site so all you need to do to see them is refresh your browser.

1. Once you are happy with what you've written, commit your changes to git and push them to Github.

1. This site is setup to be automatically deployed by the Jenkins server. Wait a couple minutes and your changes will be live!


If something doesn't work, please update this README!

Thanks and happy posting!

## Alternative Way to Run Site (macOS)
You can also run the site in a docker container in case your ruby environment doesn't want to cooperate. To do so, follow these steps:

1) If Docker for Mac isn't installed (if it is installed, there will be a icon with a whale carrying boxes in your status bar), install it: (https://www.docker.com/docker-mac)
1) Using Terminal, change into the same folder that this README file is in. Then run the following command: `docker-compose up`. You'll have to wait a little bit until the machine is up and running. You'll see the status update in Terminal as it gets going. In the meantime, do the next step.
1) Edit your `/etc/hosts` file to setup a URL for this site. Run the following command in Terminal: `sudo nano /etc/hosts` and add this to the last line in the file: `127.0.0.1 	local.blog.shep.herd.dog`
1) When you see the `site_1  |   Server running... press ctrl-c to stop.` in the terminal in which you ran `docker-compose up`, you are ready to see the site at http://local.blog.shep.herd.dog.
