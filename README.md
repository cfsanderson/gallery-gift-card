# Gallery Gift Card

The basic functionality is here but it will still take some finessing to make it work smoothly. I searched Unsplash.com for "paths" and grabbed the first bunch of images that I saw. I like the theme of paths and thought it would tie into the theme well but I am open to whatever.

## TODOs...
- [ ] Write a brief "how to" with basic instructions for cloning the repo, adding personal content, and making a PR.
- [ ] Fix the overlay animation so that it doesn't come in on each individual element. It should be one solid overlay (kinda lika modal).
- [ ] Before being clicked each section should be the height of the profile pic and THEN expand to full height and include the text.
- [ ] Better name than "Gallery"
- [ ] More info in the header?
- [ ] Add a footer?
- [ ] Responsive layout for nice mobile experience.
- [ ] Add global styles?
  - [ ] Fonts
  - [ ] Colors


## Getting Started
This project was built with the delta stack of Jason's app-app boilerplate. To get started simply...
- `git clone git@github.com:cfsanderson/gallery-gift-card.git`
- `cd gallery-gift-card`
- `git checkout -b <name-of-your-branch>`
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
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </section>
</div>
```
## Adding Content:
- Change the 3 digit portion of the second class name to the next in sequence (e.g. profile-002 would be next).
- Update the `h2` with your first and last name and drop a nice message in the `p`s within the section below that.
- Next, head on over to `screen.scss` and add your profile pic and background pic to the appropriate section (e.g. `.panel-003`) (or copy/pasta a new one.)
  - There are a few background pics already in the `/public/images/background-pics` folder but feel free to add your own too. Try to keep it relatively small so that page loads don't suffer too much.

## Submitting Changes
When you are ready to ship off your code for a pull request, Make sure you are still on your branch and do a
- `git add .`
- `git commit -m "<your meassage here>"`
- `git push`
