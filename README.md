# Gallery Gift Card  

Thank you for contributing to this project!  
All of our lives have been impacted by the TIY staff and this is your chance to say thank you in a uniquely Iron Yard way. Please read this doc fully for instructions on how to get started. Once you have read this doc, if you still have problems you can get help in the ["tpa_students" channel of the TIY Students Slack](https://tiystudents.slack.com/messages/G6BHGSMPE).  

## Getting Started  

The styles and functionality of the site are already done for you so you only need 3 pieces of content to contribute.
1) a profile pic that will be cropped to a circle and display at a max of 125px.
2) a personal note to the staff.
3) a background image. _This is optional. if you would rather use one of the pre-populated images from `./public/images/background-pics` you are more than welcome to._

This project was built with the delta stack of the [`create-app-app` boilerplate](https://yarnpkg.com/en/package/create-app-app) which is plain HTML, CSS (Sass), and vanilla Javascript (ES2015). If you've come through Jason's course this should be familiar to you. In case you haven't, make sure that you have `yarn` installed before starting the project. If you are unsure, run `which yarn` in your terminal and you should return something like `/usr/local/bin/yarn`. You can also run `yarn --version` which should give you a version number such as `0.27.5`. If you don't get a result from these then you will need to run [`brew install yarn`](https://yarnpkg.com/en/docs/install) to get the yarn package manager.  

To get started run these commands in your terminal...
- `git clone git@github.com:cfsanderson/gallery-gift-card.git`
- `cd gallery-gift-card`
- `git checkout -b <your-name-here>`
- `yarn`
- `atom .` or open in your text editor of choice.
- `yarn start` to start the dev server so you can see changes immediately.  

Open up index.html and copy one of the divs in the "panels" section. It will look something like this...

```
<div class="panel panel-001">
  <h2>Firstand Lastname</h2>
  <div>
    <div class="profile-pic" alt="profile picture"></div>
  </div>
  <section>
    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </section>
</div>
```  

## Adding Content:
- Change the 3 digit portion of the second class name to the first 2 letters of your first and last name (e.g. "profile-002" would become "profile-JaPe" for Jason Perry).
- Update the `h2` with your first and last name
- Copy your personal message to the staff into the `p` tags in the section below that.
- Next, head on over to `screen.scss` and add your profile pic and background pic to the appropriate section (e.g. `.panel-003`) (or copy/pasta a new one.)
  - There are a few background pics already in the `/public/images/background-pics` folder but feel free to add your own too. Try to keep it relatively small so that page loads don't suffer too much.

## Submitting Changes
When you are ready to ship off your code for a pull request, make sure you are still on your branch and do a
- `git add .`
- `git commit -m "<your message here>"`
- `git push --set-upstream origin <name of your branch>`
- then head on over to your commit on Github and click that big green "Compare & pull request" button.  


### Thanks for contributing!!!

## TODOs...
- [ ] Refine the "how to" section below with clear instructions for cloning the repo, adding personal content, and making a PR.
- [ ] Fix the overlay animation so that it doesn't come in on each individual element. It should be one solid overlay (kinda lika modal).
- [ ] Before being clicked, each section should be the height of the profile pic and THEN expand to full height and include the text. C'mon flexbox.
- [ ] Better name than "Gallery"
- [ ] More info in the header?
  - [ ] sticky header?
- [ ] Add a footer?
- [ ] Responsive layout for nice mobile experience.
- [ ] Add global styles?
  - [ ] Fonts
  - [ ] Colors  
